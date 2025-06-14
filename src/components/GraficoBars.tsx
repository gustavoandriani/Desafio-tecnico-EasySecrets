import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import dadosJson from "../data/vendas.json";
import CustomTooltip from "./CustomTooltip";

const transformarDados = () => {
  const meses = dadosJson[0].vendas.map((v) => v.mes);

  return meses.map((mes, index) => {
    const linha: any = { mes };

    dadosJson.forEach((produto) => {
      linha[produto.produto] = produto.vendas[index].quantidade;
    });

    return linha;
  });
};

export default function GraficoBars() {
  const dados = transformarDados();

  return (
    <div className="sm:w-[100%] sm:h-[100%] md:w-full md:h-full">
        <h2 className="text-[24px]">Comparação de vendas mensal</h2>
        <ResponsiveContainer height={400}>
        <BarChart data={dados}>
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip content={<CustomTooltip />}/>
            <Legend />
            <Bar dataKey="Refrigerante" fill="#38bdf8" />
            <Bar dataKey="Suco" fill="#22c55e" />
            <Bar dataKey="Salgadinho" fill="#facc15" />
        </BarChart>
        </ResponsiveContainer>
    </div>
  );
}
