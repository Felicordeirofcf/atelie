import HeroCarousel from '../components/home/HeroCarousel';
import ProductGrid from '../components/product/ProductGrid';
import AboutAtelie from '../components/home/AboutAtelie'; // <-- Novo import

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <HeroCarousel />
      
      <section className="w-full bg-gray-50 py-8 border-y border-gray-100 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm uppercase tracking-wide text-gray-600">
          <div className="flex items-center gap-2">
            <span>💳 Parcele em até 12x</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📦 Frete Grátis a partir de R$500</span>
          </div>
          <div className="flex items-center gap-2">
            <span>📱 Compre pelo WhatsApp</span>
          </div>
        </div>
      </section>

      <ProductGrid />
      
      {/* Nova seção Conheça o Ateliê inserida aqui */}
      <AboutAtelie /> 
    </div>
  );
}