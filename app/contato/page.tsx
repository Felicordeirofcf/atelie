import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="w-full min-h-screen bg-white pb-20">
      {/* Banner Superior */}
      <div className="w-full bg-[#FADADD]/20 py-16 text-center border-b border-[#FADADD]/40">
        <h1 className="text-3xl md:text-4xl font-serif uppercase tracking-widest text-[#333333]">Contato</h1>
        <div className="w-12 h-0.5 bg-[#FADADD] mx-auto mt-4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-16">
        
        {/* Lado Esquerdo: Info de Contato */}
        <div className="w-full md:w-1/3 space-y-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#333333] mb-4">Atendimento</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Segunda a Sexta: 09h às 18h<br />
              Sábado: 09h às 13h
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#333333] mb-4">WhatsApp</h3>
            <a href="https://wa.me/5521999999999" className="text-[#333333] font-bold text-lg hover:text-[#FADADD] transition-colors">
              (21) 99999-9999
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-[#333333] mb-4">E-mail</h3>
            <p className="text-gray-500 text-sm">contato@atelieluzdemaria.com.br</p>
          </div>
          
          <div className="pt-6 border-t border-gray-100">
             <h3 className="text-sm font-semibold uppercase tracking-widest text-[#333333] mb-4">Siga-nos</h3>
             <div className="flex gap-4">
                <span className="text-xs uppercase tracking-widest text-gray-400 cursor-pointer hover:text-[#FADADD]">Instagram</span>
                <span className="text-xs uppercase tracking-widest text-gray-400 cursor-pointer hover:text-[#FADADD]">Facebook</span>
             </div>
          </div>
        </div>

        {/* Lado Direito: Formulário */}
        <div className="w-full md:w-2/3 bg-gray-50 p-8 md:p-12 rounded-sm">
          <h2 className="text-xl font-serif uppercase tracking-widest mb-8">Envie uma mensagem</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-semibold text-gray-500">Nome</label>
              <input type="text" className="border border-gray-300 p-3 text-sm focus:outline-none focus:border-[#FADADD] bg-white" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase font-semibold text-gray-500">E-mail</label>
              <input type="email" className="border border-gray-300 p-3 text-sm focus:outline-none focus:border-[#FADADD] bg-white" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs uppercase font-semibold text-gray-500">Assunto</label>
              <input type="text" className="border border-gray-300 p-3 text-sm focus:outline-none focus:border-[#FADADD] bg-white" />
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs uppercase font-semibold text-gray-500">Mensagem</label>
              <textarea rows={5} className="border border-gray-300 p-3 text-sm focus:outline-none focus:border-[#FADADD] bg-white"></textarea>
            </div>
            <button className="md:w-max px-12 py-4 bg-[#333333] text-white uppercase tracking-widest text-xs font-bold hover:bg-[#FADADD] hover:text-[#333333] transition-colors">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}