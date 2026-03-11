"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialState = { nome: "", email: "", mensagem: "" };

export default function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.message || "Nao foi possivel enviar.");
      }

      setStatus({ type: "success", message: "Mensagem enviada com sucesso." });
      setFormData(initialState);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
      <div>
        <label htmlFor="nome" className="text-sm font-medium text-gray-dark">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          required
          value={formData.nome}
          onChange={handleChange}
          className="mt-2 w-full rounded-md border border-gray-med/35 bg-white/95 px-3 py-3 outline-none transition-all focus:border-pastel-rosa focus:ring-2 focus:ring-pastel-rosa/60"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-gray-dark">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-2 w-full rounded-md border border-gray-med/35 bg-white/95 px-3 py-3 outline-none transition-all focus:border-pastel-azul focus:ring-2 focus:ring-pastel-azul/70"
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="text-sm font-medium text-gray-dark">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          value={formData.mensagem}
          onChange={handleChange}
          className="mt-2 w-full resize-none rounded-md border border-gray-med/35 bg-white/95 px-3 py-3 outline-none transition-all focus:border-pastel-verde focus:ring-2 focus:ring-pastel-verde/70"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-black px-5 py-2 text-sm font-medium text-black transition duration-300 hover:scale-[1.02] hover:bg-pastel-bege focus-visible:ring-2 focus-visible:ring-gray-med/40 sm:w-auto disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>

      <AnimatePresence>
        {status.type !== "idle" && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className={`text-sm ${status.type === "success" ? "text-gray-dark" : "text-red-600"}`}
          >
            {status.message}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
