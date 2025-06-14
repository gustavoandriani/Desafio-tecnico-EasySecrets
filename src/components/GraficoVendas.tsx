import {  AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import data from '../data/vendas.json'
import CustomTooltip from "./CustomTooltip";

type VendaMensal = { 
    mes: string;
    quantidade: number;
}

type GraficoVendasProps = {
    produto: string;
}

export function GraficoVendas({ produto }: GraficoVendasProps) {
    const produtoData = data.find((item) => item.produto === produto);

    if(!produtoData) {
        return <p>Produto "{produto}" não encontrado.</p>;
    }

    const dadosGrafico: VendaMensal[] = produtoData.vendas;
    return(
        <div className="md:w-[100%]">
            <h2 className="text-[24px]">Vendas de {produto}</h2>
            <ResponsiveContainer minHeight={100} maxHeight={400} height={400}>
                <AreaChart data={dadosGrafico}>
                    <defs>
                        <linearGradient id="colorQuantidade" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="rgba(42, 123, 155, 1)" />
                            <stop offset="50%" stopColor="rgba(87, 199, 133, 1)" />
                            <stop offset="100%" stopColor="rgba(237, 221, 83, 1)" />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                    <XAxis dataKey="mes" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Area type="monotone" dataKey="quantidade" stroke="rgba(42, 123, 155, 1)" fill="url(#colorQuantidade)" strokeWidth={2} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    )
}