'use client';
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-12">
      <div className="max-w-6xl mx-auto grid gap-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">WATTz</h1>
          <p className="text-xl text-gray-300">
            Tokenize sua energia. Monetize seu futuro.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              A nova infraestrutura energética digital
            </h2>
            <p className="text-gray-400 mb-6">
              Transformamos energia gerada em ativos digitais usando tecnologia
              blockchain, Web3 e tokenização — com total transparência, liquidez
              e rastreabilidade.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                Modelo TaaS (Tokenization as a Service)
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                MVP com geradoras e comercializadoras
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                Time com experiência em energia e Web3
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold mb-2">Faça parte da revolução</h3>
            <p className="text-gray-400 mb-4">
              Cadastre-se para receber o whitepaper, oportunidades de investimento
              e notícias exclusivas da WATTz.
            </p>
            <form className="grid gap-4">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="bg-black border border-gray-700 p-2 rounded-md text-white"
              />
              <Button className="w-full">Quero participar</Button>
            </form>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 pt-12">
          &copy; {new Date().getFullYear()} WATTz. Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}
