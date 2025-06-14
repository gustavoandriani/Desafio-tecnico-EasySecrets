import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import data from "../data/vendas.json"
import CustomTooltip from "./CustomTooltip";

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

function agruparTotalPorProduto(data: ProdutoComVendas[]): DadoPie[] {
  return data.map((produto) => ({
    nome: produto.produto,
    valor: produto.vendas.reduce((soma, venda) => soma + venda.quantidade, 0),
  }));
}

const RADIAN = Math.PI / 180;
const CustomLabel: React.FC<any> = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
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
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const COLORS = ["#2563eb", "#10b981", "#f97316"];

const GraficoPizza: React.FC = () => {
  const produtoData = agruparTotalPorProduto(data);

  return (
    <div className="md:w-[100%]">
      <h2 className="text-[24px]">Porcentagem de Vendas</h2>
      <ResponsiveContainer minHeight={100} maxHeight={400} height={400}>
        <PieChart>
          <Pie
            data={produtoData}
            cx="50%"
            cy="50%"
            outerRadius={150}
            labelLine={false}
            label={<CustomLabel />}
            dataKey="valor"
            nameKey="nome"
          >
            {produtoData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend verticalAlign="bottom" align="center" wrapperStyle={{ color: "#fff" }}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoPizza;
