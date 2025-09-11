import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const TO_EMAIL = "ashandilakshana2002@gmail.com"; // <- your recipient

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const mailtoRef = useRef(null);

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  // --- helpers ---------------------------------------------------------------
  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const validate = () => {
    if (!form.email || !isValidEmail(form.email)) return "Please enter a valid email.";
    if (!form.subject.trim()) return "Please add a subject.";
    if (!form.message.trim()) return "Please write a message.";
    return null;
  };

  const buildBodyText = () => {
    const lines = [
      `From: ${form.name || "N/A"} <${form.email || "N/A"}>`,
      "",
      "Message:",
      form.message,
      "",
      "— Sent from Ashan Dilakshana portfolio",
    ].join("\n");
    return lines.replace(/(.{1,990})(\s+|$)/g, "$1\n");
  };

  const makeMailtoHref = () => {
    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(buildBodyText());
    return `mailto:${encodeURIComponent(TO_EMAIL)}?subject=${subject}&body=${body}`;
  };

  const makeGmailHref = () => {
    const subject = encodeURIComponent(form.subject);
    const body = encodeURIComponent(buildBodyText());
    const to = encodeURIComponent(TO_EMAIL);
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${subject}&body=${body}`;
  };

  // Show success, clear form, and refresh after a short delay
  const showSuccessAndRefresh = () => {
    setSuccess(true);
    setSubmitting(false);
    setForm({ name: "", email: "", subject: "", message: "" });

    // Give users a moment to see the message before refresh
    setTimeout(() => {
      window.location.reload();
    }, 6000); // 6s
  };

  // --- submit handlers -------------------------------------------------------
  const onSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setError(null);
    setSubmitting(true);

    const href = makeMailtoHref();

    try {
      if (mailtoRef.current) {
        mailtoRef.current.setAttribute("href", href);
        mailtoRef.current.click();
      } else {
        window.location.href = href;
      }
    } finally {
      // We cannot detect actual "sent", so we show success after triggering compose
      showSuccessAndRefresh();
    }
  };

  const onGmailClick = (e) => {
    e.preventDefault();
    const v = validate();
    if (v) {
      setError(v);
      return;
    }
    setError(null);
    setSubmitting(true);

    const href = makeGmailHref();
    try {
      window.open(href, "_blank", "noopener,noreferrer");
    } finally {
      // Same UX as mailto
      showSuccessAndRefresh();
    }
  };

  // --- render ---------------------------------------------------------------
  return (
    <section id="contact" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="section-title"
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="card p-6"
      >
        <form className="grid gap-3" onSubmit={onSubmit} noValidate>
          <label className="grid gap-1">
            <span className="text-sm opacity-80">Name</span>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              className="rounded-xl px-3 py-2 bg-transparent border border-white/10 outline-none"
              placeholder="Your name"
              maxLength={80}
              autoComplete="name"
              disabled={submitting || success}
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm opacity-80">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              className="rounded-xl px-3 py-2 bg-transparent border border-white/10 outline-none"
              placeholder="you@example.com"
              required
              autoComplete="email"
              inputMode="email"
              disabled={submitting || success}
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm opacity-80">Subject</span>
            <input
              name="subject"
              value={form.subject}
              onChange={onChange}
              className="rounded-xl px-3 py-2 bg-transparent border border-white/10 outline-none"
              placeholder="Project inquiry, collaboration, etc."
              required
              maxLength={120}
              disabled={submitting || success}
            />
          </label>

          <label className="grid gap-1">
            <span className="text-sm opacity-80">Message</span>
            <textarea
              name="message"
              rows={6}
              value={form.message}
              onChange={onChange}
              className="rounded-xl px-3 py-2 bg-transparent border border-white/10 outline-none"
              placeholder="Hi! I’d like to collaborate…"
              required
              maxLength={8000}
              disabled={submitting || success}
            />
          </label>

          {error && <p className="text-sm text-red-500 -mt-1">{error}</p>}

          {success && (
            <div
              className="mt-1 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm"
              role="status"
              aria-live="polite"
            >
              ✅ Your message was prepared. Please press <em>Send</em> in your email app.
              This page will refresh shortly…
            </div>
          )}

          <div className="mt-2 flex flex-wrap gap-3">
            <button
              type="submit"
              className="primary-btn w-fit disabled:opacity-60"
              disabled={submitting || success}
              aria-label="Open your email app with a prefilled message"
            >
              {submitting && !success ? "Opening…" : "Open Email App"}
            </button>

            <a
              href="#"
              className="soft-btn w-fit pointer-events-auto aria-[disabled=true]:pointer-events-none aria-[disabled=true]:opacity-60"
              onClick={onGmailClick}
              rel="noopener noreferrer"
              aria-label="Open Gmail compose with a prefilled message"
              aria-disabled={submitting || success}
            >
              Send via Gmail
            </a>

            {/* Invisible anchor used for programmatic mailto click */}
            <a ref={mailtoRef} href="mailto:" className="sr-only" aria-hidden="true">
              mailto
            </a>
          </div>

          <p className="text-xs opacity-70 mt-2">
            Choose <strong>Open Email App</strong> (default mail client) or <strong>Send via Gmail</strong>.
            Review the prefilled message and press Send.
          </p>
        </form>
      </motion.div>
    </section>
  );
}
