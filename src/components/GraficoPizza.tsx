import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import data from "../data/vendas.json";
import CustomTooltip from "./CustomTooltip";

// Interfaces para tipagem dos dados
interface Venda {
  mes: string;
  quantidade: number;
}

interface ProdutoComVendas {
  produto: string;
  vendas: Venda[];
}

interface DadoPie {
  nome: string;
  valor: number;
}

// Soma as vendas de cada produto e retorna um array formatado para o gráfico de pizza
function agruparTotalPorProduto(data: ProdutoComVendas[]): DadoPie[] {
  return data.map((produto) => ({
    nome: produto.produto,
    valor: produto.vendas.reduce((soma, venda) => soma + venda.quantidade, 0),
  }));
}

// Constante usada para calcular ângulos dos rótulos no gráfico de pizza
const RADIAN = Math.PI / 180;

// Componente de rótulo personalizado que exibe a porcentagem de cada fatia
const CustomLabel: React.FC<any> = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  // Cálculo da posição do rótulo
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`} {/* Exibe porcentagem sem casas decimais */}
    </text>
  );
};

// Cores usadas para cada fatia do gráfico
const COLORS = ["#2563eb", "#10b981", "#f97316"];

const GraficoPizza: React.FC = () => {
  // Converte os dados brutos em totais por produto
  const produtoData = agruparTotalPorProduto(data);

  return (
    <div className="md:w-[100%]">
      <h2 className="text-[24px]">Porcentagem de Vendas</h2>
      {/* Container responsivo para o gráfico */}
      <ResponsiveContainer minHeight={100} maxHeight={400} height={400}>
        <PieChart>
          <Pie
            data={produtoData}
            cx="50%"
            cy="50%"
            outerRadius={150}
            labelLine={false}
            label={<CustomLabel />}      // Rótulo de porcentagem centralizado
            dataKey="valor"              // Campo com os valores numéricos
            nameKey="nome"               // Campo com os nomes (ex: "Suco", "Salgadinho")
          >
            {/* Define as cores de cada fatia da pizza */}
            {produtoData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} /> {/* Tooltip chamando o CustomTooltip para exibir os valores ao passar o mouse */}
          <Legend
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ color: "#fff" }} // Ajuste da cor da legenda
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoPizza;