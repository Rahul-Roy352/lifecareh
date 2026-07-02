import { createContext, useContext, useState, useEffect, useMemo, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import {
  X,
  Heart,
  Copy,
  ChevronDown,
  Landmark,
  Smartphone,
  ShieldCheck,
  BadgeCheck,
  CheckCircle2,
  Upload,
} from "lucide-react";

type Ctx = { open: () => void; close: () => void; isOpen: boolean };
const DonateCtx = createContext<Ctx | null>(null);

export function useDonate() {
  const ctx = useContext(DonateCtx);
  if (!ctx) throw new Error("useDonate must be used within DonateProvider");
  return ctx;
}

export function DonateProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const value = useMemo(
    () => ({ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }),
    [isOpen],
  );
  return (
    <DonateCtx.Provider value={value}>
      {children}
      <DonateModal />
    </DonateCtx.Provider>
  );
}

const PRESETS = [500, 1000, 2500, 5000] as const;
const UPI_ID = "chandanamanta1@ybl";
const PAYEE = "LIFE CARE (H)";

type Step = "form" | "thanks";

function DonateModal() {
  const { isOpen, close } = useDonate();
  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isCustom, setIsCustom] = useState(false);
  const [bankOpen, setBankOpen] = useState(false);
  const [step, setStep] = useState<Step>("form");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [form, setForm] = useState({ name: "", mobile: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; mobile?: string }>({});

  const effectiveAmount = isCustom ? Number(customAmount) || 0 : amount;

  const upiUri = useMemo(() => {
    const params = new URLSearchParams({
      pa: UPI_ID,
      pn: PAYEE,
      am: String(effectiveAmount || 0),
      cu: "INR",
    });
    return `upi://pay?${params.toString()}`;
  }, [effectiveAmount]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [isOpen, close]);

  useEffect(() => {
    if (!isOpen) {
      // reset after close animation
      const t = setTimeout(() => {
        setStep("form");
        setForm({ name: "", mobile: "", email: "", message: "" });
        setErrors({});
        setScreenshot(null);
        setBankOpen(false);
        setIsCustom(false);
        setCustomAmount("");
        setAmount(1000);
      }, 250);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => toast.success(`${label} copied successfully.`));
  };

  const submit = () => {
    const nextErrors: typeof errors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!/^\d{10}$/.test(form.mobile.trim()))
      nextErrors.mobile = "Enter a valid 10-digit mobile number.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    if (!effectiveAmount || effectiveAmount < 1) {
      toast.error("Please choose a donation amount.");
      return;
    }

    const record = {
      ...form,
      amount: effectiveAmount,
      submittedAt: new Date().toISOString(),
      screenshotName: screenshot?.name ?? null,
    };
    try {
      const prev = JSON.parse(localStorage.getItem("lch_donations") || "[]");
      prev.push(record);
      localStorage.setItem("lch_donations", JSON.stringify(prev));
    } catch {
      /* ignore */
    }
    setStep("thanks");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={close}
            aria-hidden
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Donate to Life Care H"
            className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto rounded-[20px] bg-white text-slate-900 shadow-2xl"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: "spring", damping: 24, stiffness: 260 }}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <X size={18} />
            </button>

            {step === "form" ? (
              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-rose-50 mb-3">
                    <Heart className="text-rose-500" size={26} fill="currentColor" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                    Support LIFE CARE (H)
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                    Your donation helps empower women, educate children, support farmers, improve
                    healthcare, and build stronger rural communities across Odisha.
                  </p>
                </div>

                {/* Amount */}
                <section className="mb-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">
                    Choose Donation Amount
                  </h3>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {PRESETS.map((p) => {
                      const active = !isCustom && amount === p;
                      return (
                        <button
                          key={p}
                          type="button"
                          onClick={() => {
                            setIsCustom(false);
                            setAmount(p);
                          }}
                          className={`rounded-xl border py-3 text-sm font-semibold transition-all ${
                            active
                              ? "border-rose-500 bg-rose-500 text-white shadow-md scale-[1.02]"
                              : "border-slate-200 bg-white text-slate-700 hover:border-rose-300"
                          }`}
                        >
                          ₹{p.toLocaleString("en-IN")}
                        </button>
                      );
                    })}
                    <button
                      type="button"
                      onClick={() => setIsCustom(true)}
                      className={`rounded-xl border py-3 text-sm font-semibold transition-all ${
                        isCustom
                          ? "border-rose-500 bg-rose-500 text-white shadow-md"
                          : "border-slate-200 bg-white text-slate-700 hover:border-rose-300"
                      }`}
                    >
                      Custom
                    </button>
                  </div>
                  {isCustom && (
                    <div className="mt-3 relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                        ₹
                      </span>
                      <input
                        type="number"
                        min={1}
                        inputMode="numeric"
                        value={customAmount}
                        onChange={(e) => setCustomAmount(e.target.value)}
                        placeholder="Enter amount"
                        className="w-full rounded-xl border border-slate-200 pl-8 pr-3 py-3 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                      />
                    </div>
                  )}
                </section>

                {/* UPI */}
                <section className="mb-6 rounded-2xl border border-slate-200 p-5 bg-slate-50/60">
                  <div className="flex items-center gap-2 mb-4">
                    <Smartphone className="text-emerald-600" size={18} />
                    <h3 className="text-sm font-semibold text-slate-800">
                      Pay Using UPI{" "}
                      <span className="text-emerald-600 font-medium">(Recommended)</span>
                    </h3>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-5">
                    <motion.div
                      key={effectiveAmount}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2 }}
                      className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm"
                    >
                      <QRCodeSVG
                        value={upiUri}
                        size={160}
                        level="M"
                        bgColor="#ffffff"
                        fgColor="#0f172a"
                      />
                    </motion.div>

                    <div className="flex-1 w-full space-y-3">
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide">
                          UPI ID
                        </div>
                        <div className="text-sm font-semibold text-slate-800 break-all">
                          {UPI_ID}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide">
                          Amount
                        </div>
                        <div className="text-lg font-bold text-rose-600">
                          ₹{effectiveAmount.toLocaleString("en-IN")}
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => copy(UPI_ID, "UPI ID")}
                        className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white text-xs font-medium px-3 py-2 hover:bg-slate-800 transition-colors"
                      >
                        <Copy size={14} /> Copy UPI ID
                      </button>
                    </div>
                  </div>
                </section>

                {/* Bank Transfer */}
                <section className="mb-6 rounded-2xl border border-slate-200 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setBankOpen((s) => !s)}
                    className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50"
                  >
                    <span className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                      <Landmark size={18} className="text-indigo-600" />
                      Prefer Bank Transfer?
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-slate-500 transition-transform ${bankOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {bankOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 grid sm:grid-cols-2 gap-3 text-sm">
                          <Field label="Account Name" value="LIFE CARE (H)" />
                          <Field label="Bank" value="UCO BANK" />
                          <Field label="Branch" value="South Balanda" />
                          <Field
                            label="Account Number"
                            value="06260100007485"
                            onCopy={() => copy("06260100007485", "Account number")}
                          />
                          <Field
                            label="IFSC Code"
                            value="UCBA0000626"
                            onCopy={() => copy("UCBA0000626", "IFSC code")}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </section>

                {/* Instructions */}
                <section className="mb-6 rounded-2xl bg-amber-50/60 border border-amber-100 p-5">
                  <h3 className="text-sm font-semibold text-amber-900 mb-2">
                    Payment Instructions
                  </h3>
                  <ol className="list-decimal pl-5 space-y-1 text-sm text-amber-900/90">
                    <li>Select the donation amount.</li>
                    <li>Scan the QR code using any UPI app or use the UPI ID.</li>
                    <li>Complete the payment.</li>
                    <li>Take a screenshot of the successful payment.</li>
                    <li>Upload the payment screenshot below.</li>
                  </ol>
                  <label className="mt-4 flex items-center gap-3 rounded-xl border border-dashed border-amber-300 bg-white/70 px-4 py-3 cursor-pointer hover:bg-white transition-colors">
                    <Upload size={18} className="text-amber-700" />
                    <span className="text-sm text-slate-700">
                      {screenshot ? screenshot.name : "Upload payment screenshot (optional)"}
                    </span>
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => setScreenshot(e.target.files?.[0] ?? null)}
                    />
                  </label>
                </section>

                {/* Donor Info */}
                <section className="mb-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">
                    Donor Information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Full Name *"
                        className="w-full rounded-xl border border-slate-200 px-3 py-3 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-rose-600">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <input
                        value={form.mobile}
                        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                        placeholder="Mobile Number *"
                        inputMode="numeric"
                        className="w-full rounded-xl border border-slate-200 px-3 py-3 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                      />
                      {errors.mobile && (
                        <p className="mt-1 text-xs text-rose-600">{errors.mobile}</p>
                      )}
                    </div>
                    <input
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="Email Address (Optional)"
                      type="email"
                      className="sm:col-span-2 w-full rounded-xl border border-slate-200 px-3 py-3 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                    />
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Message (Optional)"
                      rows={3}
                      className="sm:col-span-2 w-full rounded-xl border border-slate-200 px-3 py-3 text-sm focus:border-rose-400 focus:outline-none focus:ring-2 focus:ring-rose-100"
                    />
                  </div>
                </section>

                <button
                  type="button"
                  onClick={submit}
                  className="w-full rounded-xl bg-gradient-to-r from-rose-500 to-rose-600 text-white font-semibold py-4 shadow-lg shadow-rose-500/20 hover:from-rose-600 hover:to-rose-700 transition-all"
                >
                  I've Completed the Payment
                </button>

                <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-emerald-600" /> Secure Donation
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Heart size={14} className="text-rose-500" /> Supporting Rural Communities
                    Since 2002
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <BadgeCheck size={14} className="text-indigo-600" /> Trusted NGO
                  </span>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 sm:p-12 text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 mb-4">
                  <CheckCircle2 className="text-emerald-500" size={42} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
                  Thank You for Your Generous Support!
                </h2>
                <p className="mt-3 text-slate-600 max-w-md mx-auto">
                  Your donation details have been submitted successfully. Our team will verify your
                  payment shortly. Every contribution helps us create a better future for rural
                  communities in Odisha.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    to="/"
                    onClick={close}
                    className="w-full sm:w-auto rounded-xl bg-slate-900 text-white font-medium px-6 py-3 hover:bg-slate-800 transition-colors"
                  >
                    Back to Home
                  </Link>
                  <button
                    onClick={() => setStep("form")}
                    className="w-full sm:w-auto rounded-xl border border-rose-300 text-rose-600 font-medium px-6 py-3 hover:bg-rose-50 transition-colors"
                  >
                    Donate Again
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  value,
  onCopy,
}: {
  label: string;
  value: string;
  onCopy?: () => void;
}) {
  return (
    <div className="rounded-lg bg-slate-50 border border-slate-200 px-3 py-2">
      <div className="text-[10px] uppercase tracking-wider text-slate-500">{label}</div>
      <div className="flex items-center justify-between gap-2">
        <div className="text-sm font-semibold text-slate-800 break-all">{value}</div>
        {onCopy && (
          <button
            type="button"
            onClick={onCopy}
            className="shrink-0 rounded-md p-1.5 text-slate-500 hover:bg-white hover:text-slate-800"
            aria-label={`Copy ${label}`}
          >
            <Copy size={14} />
          </button>
        )}
      </div>
    </div>
  );
}
