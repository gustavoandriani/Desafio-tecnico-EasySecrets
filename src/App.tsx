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
    <div className="flex flex-col text-center bg-gray-800 md:h-screen md:p-5 overflow-x-hidden">
      <h1 className="text-[32px] font-bold">Vendas Mensais</h1>
      <div className="w-full flex flex-col md:w-[60%] md:ml-auto md:mr-auto md:mt-5 md:flex-row md:p-5 bg-gray-800 md:rounded-[30px] align-center md:justify-evenly bg-gray-900 text-white border border-gray-700 transition duration-200">
        { grafico === 0 ? <GraficoVendas produto={produto} /> : grafico === 1 ? <GraficoBars /> : <GraficoPizza /> }
        <div className="w-fit flex flex-col self-center p-5 md:p-0">
          <button className="flex items-center self-center mt-5 ml-5 px-6 py-3 rounded-full font-semibold text-black transition duration-500 ease-in-out cursor-pointer bg-gray-700 hover:bg-gray-100 shadow-lg" onClick={() => { grafico === 0 ? setGrafico(1) : grafico === 1 ? setGrafico(2) : setGrafico(0) }}>Alterar visualização</button>
          <div className="flex flex-col justify-center md:flex-col mt-auto mb-auto">
            <BotaoProduto icone={<LuCupSoda className="mt-[2px] mr-1"/>} nome="Refrigerante" selecionado={grafico === 0 ? produto : "Refrigerante"} aoSelecionar={setProduto} />
            <BotaoProduto icone={<GiManualJuicer className="mt-[2px] mr-1"/>} nome="Suco" selecionado={grafico === 0 ? produto : "Suco"} aoSelecionar={setProduto} />
            <BotaoProduto icone={<GiNachos className="mt-[2px] mr-1"/>} nome="Salgadinho" selecionado={grafico === 0 ? produto : "Salgadinho"} aoSelecionar={setProduto} />
          </div> 
        </div>
      </div>
      <div className="w-screen h-fit p-2 flex-row justify-center absolute sticky md:fixed left-0 bottom-0 bg-gray-900">
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