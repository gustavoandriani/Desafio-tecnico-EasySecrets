import { useState } from "react";
import { GraficoVendas } from "./components/GraficoVendas";
import { BotaoProduto } from "./components/BotaoProduto";

function App() {
  const [produto, setProduto] = useState("Refrigerante")

  return (
    <div className="h-screen text-center p-2 bg-gray-800">
      <h1 className="text-[32px] font-bold">Vendas Mensais</h1>
      <div className="flex sm:flex-col sm:flex-col md:flex-row bg-gray-800 rounded-[30px] p-5 align-center justify-evenly bg-gray-900 text-white border border-gray-700
hover:bg-gray-800 transition duration-200">
        <GraficoVendas produto={produto} />
        <div className="md:w-fit sm:w-[100%] h-fit flex flex-col">
          <p>Escolha o produto desejado</p>
          <div className="flex md:flex-col sm:flex-row sm:justify-center">
            <BotaoProduto nome="Refrigerante" selecionado={produto} aoSelecionar={setProduto} />
            <BotaoProduto nome="Suco" selecionado={produto} aoSelecionar={setProduto} />
            <BotaoProduto nome="Salgadinho" selecionado={produto} aoSelecionar={setProduto} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App