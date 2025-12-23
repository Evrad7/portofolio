"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

type ErrorFormType = {
  name?: string;
  email?: string;
  enterprise?: string;
  object?: string;
  message?: string;
  [key: string]: string | undefined;
};

type StatusType = { type: "success" | "error" | ""; message: string };

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    enterprise: "",
    object: "",
    message: "",
  });

  const [errors, setErrors] = useState<ErrorFormType>({});
  const [status, setStatus] = useState<StatusType>({ type: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateField = (field: string, value: string) => {
    let error = "";

    if (field === "name" && value.length === 0) {
      error = "Please enter your name.";
    } else if (field === "email") {
      if (value.length === 0) error = "Please enter your email.";
      else if (!emailRegex.test(value)) error = "Please enter a valid email address.";
    } else if (field === "object" && value.length === 0) {
      error = "Please enter a subject.";
    } else if (field === "message" && value.length === 0) {
      error = "Please enter your message.";
    }

    return [value, error] as const;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = event.target.name;
    const value = event.target.value;

    const [formattedValue, error] = validateField(field, value);

    setErrors((prev) => ({ ...prev, [field]: error }));
    setFormData((prev) => ({ ...prev, [field]: formattedValue }));

    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    const _errors: ErrorFormType = {};
    for (const [field, value] of Object.entries(formData)) {
      const [, error] = validateField(field, value);
      if (error) _errors[field] = error;
    }

    if (Object.keys(_errors).length > 0) {
      setErrors((prev) => ({ ...prev, ..._errors }));
      setStatus({ type: "error", message: "Please fix the highlighted fields and try again." });
      return;
    }

    try {
      setIsSending(true);
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, {
        publicKey: PUBLIC_KEY,
      });

      setFormData({ name: "", email: "", enterprise: "", object: "", message: "" });
      setErrors({});
      setStatus({
        type: "success",
        message: "Thanks! Your message has been sent successfully. I’ll get back to you soon.",
      });
    } catch (err) {
      setStatus({
        type: "error",
        message: "Sorry, something went wrong while sending your message. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form className="space-y-4 lg:space-y-8" onSubmit={handleSubmit} noValidate>
      {/* Message global */}
      {status.message && (
        <div
          className={`rounded-md px-4 py-3 text-sm ${
            status.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
          }`}
          role="status"
        >
          {status.message}
        </div>
      )}

      <div>
        <label htmlFor="name" className="text-sm lg:text-base flex mb-2 lg:mb-1">
          Name [<span className="text-gold">Obligatoire</span>]
          <span className="text-red-500 ml-auto">{errors.name}</span>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          className="border-b border-stone-400 w-full py-[0.5px] lg:py-2 px-2 focus:outline-gold focus:outline-2 focus:border-b-0 focus:bg-gray-200"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm lg:text-base flex mb-2 lg:mb-1">
          Email [<span className="text-gold">Obligatoire</span>]
          <span className="text-red-500 ml-auto">{errors.email}</span>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          className="border-b border-stone-400 w-full py-[0.5px] lg:py-2 px-2 focus:outline-gold focus:outline-2 focus:border-b-0 focus:bg-gray-200"
        />
      </div>

      <div>
        <label htmlFor="enterprise" className="text-sm lg:text-base flex mb-2 lg:mb-1">
          Nom de l&apos;entreprise
          <span className="text-red-500 ml-auto">{errors.enterprise}</span>
        </label>
        <input
          id="enterprise"
          type="text"
          name="enterprise"
          onChange={handleChange}
          value={formData.enterprise}
          className="border-b border-stone-400 w-full py-[0.5px] lg:py-2 px-2 focus:outline-gold focus:outline-2 focus:border-b-0 focus:bg-gray-200"
        />
      </div>

      <div>
        <label htmlFor="object" className="text-sm lg:text-base flex mb-2 lg:mb-1">
          Objet [<span className="text-gold">Obligatoire</span>]
          <span className="text-red-500 ml-auto">{errors.object}</span>
        </label>
        <input
          id="object"
          type="text"
          name="object"
          onChange={handleChange}
          value={formData.object}
          className="border-b border-stone-400 w-full py-[0.5px] lg:py-2 px-2 focus:outline-gold focus:outline-2 focus:border-b-0 focus:bg-gray-200"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm lg:text-base flex mb-2 lg:mb-1">
          Message [<span className="text-gold">Obligatoire</span>]
          <span className="text-red-500 ml-auto">{errors.message}</span>
        </label>
        <textarea
          id="message"
          name="message"
          onChange={handleChange}
          value={formData.message}
          className="border-b border-stone-400 w-full py-[0.5px] lg:py-2 px-2 focus:outline-gold focus:outline-2 focus:border-b-0 focus:bg-gray-200 h-30"
        ></textarea>
      </div>

      <div>
        <button
          className="py-2 xl:py-3 px-4 xl:px-8 text-black bg-gold shadow hover:shadow-2xl active:shadow-2xl transition-shadow cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          type="submit"
          disabled={isSending}
        >
          {isSending ? "Envoi..." : "Envoyer"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
