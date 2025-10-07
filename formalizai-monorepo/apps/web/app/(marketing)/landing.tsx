"use client";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="bg-white">
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Formaliza AI</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#features" className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium">Recursos</a>
            <a href="#pricing" className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium">Preços</a>
            <a href="#demo" className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium">Demo</a>
            <a href="/login" className="text-gray-800 hover:text-blue-600 px-3 py-2 text-sm font-medium">Entrar</a>
            <a href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium">Teste Grátis</a>
          </div>
        </div>
      </nav>
      
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Pare de Perder <span className="text-blue-700">Horas</span><br/>
            Fazendo Procurações
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Gere procurações e contratos de honorários em <strong>segundos</strong> com nossa IA. 
            Economize até <strong>95% do tempo</strong> que você gasta criando documentos jurídicos.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="h-12 w-12 text-red-600">⏰</div>
              </div>
              <h3 className="text-2xl font-bold text-red-800 mb-2">Método Tradicional</h3>
              <p className="text-red-700 text-lg mb-4">30-45 minutos por documento</p>
              <ul className="text-red-600 text-sm space-y-2">
                <li>• Buscar modelo no computador</li>
                <li>• Preencher dados manualmente</li>
                <li>• Revisar e formatar</li>
                <li>• Imprimir e organizar</li>
              </ul>
            </div>
            
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <div className="h-12 w-12 text-green-600">⚡</div>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Com Formaliza AI</h3>
              <p className="text-green-700 text-lg mb-4">2-3 minutos por documento</p>
              <ul className="text-green-600 text-sm space-y-2">
                <li>• Selecionar cliente cadastrado</li>
                <li>• IA gera automaticamente</li>
                <li>• Enviar para assinatura digital</li>
                <li>• Pronto! ✨</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold">
              🚀 Começar Gratuitamente
            </a>
            <a href="#demo" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg text-lg font-semibold">
              ▶️ Ver Demonstração
            </a>
          </div>
          
          <p className="text-sm text-gray-600 mt-4">Sem cartão • 7 dias grátis</p>
        </div>
      </section>
      
      <section id="features" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8">
          {[
            ["Geração Instantânea","IA gera documentos em segundos."],
            ["Identidade Visual","Logo, cores e papel timbrado."],
            ["Assinatura Digital","Fluxo simples com auditoria."],
          ].map(([title,desc])=>(
            <div key={title} className="text-center">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
              <p className="text-gray-700">{desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section id="pricing" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          {[
            {name:"Individual",price:"R$ 49,90/mês",cta:"Começar Teste Grátis"},
            {name:"Escritório",price:"R$ 119,90/mês",cta:"Começar Teste Grátis",popular:true},
          ].map((p)=>(
            <div key={p.name} className={`bg-white rounded-2xl p-8 border-2 ${p.popular? "border-blue-500 shadow-xl scale-105":"border-gray-200 shadow-lg"}`}>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{p.name}</h3>
                <p className="text-gray-600 mb-6">{p.price}</p>
                <a href="/signup" className={`w-full inline-block text-center ${p.popular?"bg-blue-600 hover:bg-blue-700 text-white":"bg-blue-600 hover:bg-blue-700 text-white"} py-3 rounded-lg font-semibold`}>{p.cta}</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section id="demo" className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Veja como é rápido</h2>
          <div className="rounded-xl bg-white border border-gray-200 p-8">Vídeo da demonstração (placeholder)</div>
        </div>
      </section>
      
      <footer className="bg-gray-900 text-white py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center text-gray-400">&copy; 2024 Formaliza AI</div>
      </footer>
    </main>
  );
}
