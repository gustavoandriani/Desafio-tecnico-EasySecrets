import { useState } from "react";
import { GraficoVendas } from "./components/GraficoVendas";
import { BotaoProduto } from "./components/BotaoProduto";
import { FaGithub } from "react-icons/fa";
import { LuCupSoda } from "react-icons/lu";
import { GiManualJuicer, GiNachos } from "react-icons/gi";
import GraficoPizza from "./components/GraficoPizza";
import GraficoBars from "./components/GraficoBars";

function App() {
  const [produto, setProduto] = useState("Refrigerante")
  const [grafico, setGrafico] = useState(0)

  return (
    <div className="h-screen flex flex-col text-center p-5 bg-gray-800">
      <h1 className="text-[32px] font-bold">Vendas Mensais</h1>
      <div className="w-[60%] ml-auto mr-auto mt-5 flex sm:flex-col sm:flex-col md:flex-row bg-gray-800 rounded-[30px] p-5 align-center justify-evenly bg-gray-900 text-white border border-gray-700 transition duration-200">
        { grafico === 0 ? <GraficoVendas produto={produto} /> : grafico === 1 ? <GraficoBars /> : <GraficoPizza /> }
        <div className="md:w-fit sm:w-[100%] flex flex-col">
          <button className="flex items-center gap-2 mt-5 sm:ml-5 px-6 py-3 rounded-full font-semibold text-black transition duration-500 ease-in-out cursor-pointer bg-gray-700 hover:bg-gray-100 shadow-lg" onClick={() => { grafico === 0 ? setGrafico(1) : grafico === 1 ? setGrafico(2) : setGrafico(0) }}>Alterar visualização</button>
          <div className="flex md:flex-col sm:flex-row sm:justify-center mt-auto mb-auto">
            <BotaoProduto icone={<LuCupSoda className="mt-[2px] mr-1"/>} nome="Refrigerante" selecionado={grafico === 0 ? produto : "Refrigerante"} aoSelecionar={setProduto} />
            <BotaoProduto icone={<GiManualJuicer className="mt-[2px] mr-1"/>} nome="Suco" selecionado={grafico === 0 ? produto : "Suco"} aoSelecionar={setProduto} />
            <BotaoProduto icone={<GiNachos className="mt-[2px] mr-1"/>} nome="Salgadinho" selecionado={grafico === 0 ? produto : "Salgadinho"} aoSelecionar={setProduto} />
          </div> 
        </div>
      </div>
      <div className="w-screen h-fit p-2 flex-row justify-center absolute left-0 bottom-0 bg-gray-900">
        <small>
          Desafio EasySecrets realizado por: <i>Gustavo José Andriani</i> — Saiba mais em{" "} 
          <a className="inline-flex items-center gap-1 text-blue-400 hover:underline relative top-[4px]" href="https://github.com/gustavoandriani/Desafio-tecnico---EasySecrets" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-lg" />
            GitHub
          </a>
        </small>
      </div>
    </div>
  )
}

export default App