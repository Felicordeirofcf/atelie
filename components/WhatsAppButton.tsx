'use client';

import { FaWhatsapp } from 'react-icons/fa'; // Instale com: npm install react-icons

export default function WhatsAppButton() {
  const phoneNumber = "5521986721761"; // Coloque o número da sua cliente aqui
  const message = encodeURIComponent("Olá! Estou no site e gostaria de tirar uma dúvida sobre um produto.");

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all hover:scale-110 flex items-center justify-center group"
      aria-label="Falar no WhatsApp"
    >
      {/* Texto que aparece ao passar o mouse */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:mr-2 transition-all duration-500 ease-in-out whitespace-nowrap font-medium text-sm">
        Dúvidas? Chame aqui!
      </span>
      <FaWhatsapp size={28} />
    </a>
  );
}