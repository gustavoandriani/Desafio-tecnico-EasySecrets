import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import dadosJson from "../data/vendas.json";
import CustomTooltip from "./CustomTooltip";

// Função que transforma os dados brutos em um formato compatível com o BarChart
const transformarDados = () => {
  // Extrai a lista de meses a partir do primeiro produto
  const meses = dadosJson[0].vendas.map((v) => v.mes);

  // Para cada mês, cria um objeto com as quantidades de todos os produtos
  return meses.map((mes, index) => {
    const linha: any = { mes };

    // Adiciona a quantidade vendida de cada produto no respectivo mês
    dadosJson.forEach((produto) => {
      linha[produto.produto] = produto.vendas[index].quantidade;
    });

    return linha;
  });
};

export default function GraficoBars() {
  // Dados transformados para o gráfico
  const dados = transformarDados();

  return (
    <div className="md:w-[100%]">
      <h2 className="text-[24px]">Comparação de vendas mensal</h2>

      {/* Container responsivo para o gráfico de barras */}
      <ResponsiveContainer minHeight={100} maxHeight={400} height={400}>
        <BarChart data={dados}>
          {/* Eixo X com os meses */}
          <XAxis dataKey="mes" />

          {/* Eixo Y com as quantidades */}
          <YAxis />

          {/* Tooltip chamando o CustomTooltip para exibir os valores ao passar o mouse */}
          <Tooltip content={<CustomTooltip />} />

          {/* Legenda com os nomes dos produtos */}
          <Legend />

          {/* Barras para cada produto, com cores distintas */}
          <Bar dataKey="Refrigerante" fill="#38bdf8" />
          <Bar dataKey="Suco" fill="#22c55e" />
          <Bar dataKey="Salgadinho" fill="#facc15" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}