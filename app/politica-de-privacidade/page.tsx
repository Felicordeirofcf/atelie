export default function PrivacyPolicyPage() {
  return (
    <div className="w-full min-h-screen bg-white pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-serif uppercase tracking-widest text-[#333333] mb-10 text-center">Política de Privacidade</h1>
        
        <div className="prose prose-sm max-w-none text-gray-600 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#333333] uppercase tracking-wide mb-4">1. Coleta de Informações</h2>
            <p>No Ateliê Luz de Maria, a privacidade dos nossos clientes é prioridade. Coletamos informações como nome, e-mail, CPF e endereço apenas para o processamento de pedidos e melhoria da sua experiência de compra.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333333] uppercase tracking-wide mb-4">2. Uso de Dados</h2>
            <p>Seus dados são utilizados exclusivamente para emitir notas fiscais, realizar entregas e, caso você autorize, enviar novidades e promoções exclusivas do Ateliê. Nunca compartilhamos seus dados com terceiros para fins publicitários.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333333] uppercase tracking-wide mb-4">3. Segurança</h2>
            <p>Nosso site utiliza certificados de segurança (SSL) para garantir que toda transação financeira e troca de dados seja criptografada e protegida contra acessos não autorizados. Os pagamentos são processados por gateways seguros parceiros da Nuvemshop.</p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#333333] uppercase tracking-wide mb-4">4. Cookies</h2>
            <p>Utilizamos cookies para lembrar as peças que você adicionou ao carrinho e entender como você navega no site, permitindo que possamos oferecer uma experiência cada vez mais personalizada.</p>
          </section>

          <section className="pt-10 border-t border-gray-100 italic text-xs">
            Última atualização: Março de 2026. Ateliê Luz de Maria.
          </section>
        </div>
      </div>
    </div>
  );
}