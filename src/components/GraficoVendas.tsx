import { AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import data from '../data/vendas.json';
import CustomTooltip from "./CustomTooltip";

// Tipagem para os dados de vendas mensais
type VendaMensal = { 
    mes: string;
    quantidade: number;
}

// Props esperadas pelo componente de gráfico de vendas
type GraficoVendasProps = {
    produto: string;
}

export default function GraficoVendas({ produto }: GraficoVendasProps) {
    // Busca os dados do produto selecionado
    const produtoData = data.find((item) => item.produto === produto);

    // Caso o produto não seja encontrado, exibe uma mensagem de erro
    if (!produtoData) {
        return <p>Produto "{produto}" não encontrado.</p>;
    }

    const dadosGrafico: VendaMensal[] = produtoData.vendas;

    return (
        <div className="md:w-[100%]">
            <h2 className="text-[24px]">Vendas de {produto}</h2>
            {/* Container responsivo para o gráfico */}
            <ResponsiveContainer minHeight={100} maxHeight={400} height={400}>
                <AreaChart data={dadosGrafico}>
                    {/* Gradiente usado como preenchimento da área do gráfico */}
                    <defs>
                        <linearGradient id="colorQuantidade" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="rgba(42, 123, 155, 1)" />
                            <stop offset="50%" stopColor="rgba(87, 199, 133, 1)" />
                            <stop offset="100%" stopColor="rgba(237, 221, 83, 1)" />
                        </linearGradient>
                    </defs>

                    {/* Grid com linhas tracejadas */}
                    <CartesianGrid strokeDasharray="3 3" stroke="#555" />

                    {/* Eixo X com os meses */}
                    <XAxis dataKey="mes" />

                    {/* Eixo Y com valores numéricos de vendas */}
                    <YAxis />

                    {/* Tooltip chamando o CustomTooltip para exibir os valores ao passar o mouse */}
                    <Tooltip content={<CustomTooltip />} />

                    {/* Área que representa as vendas */}
                    <Area
                        type="monotone"
                        dataKey="quantidade"
                        stroke="rgba(42, 123, 155, 1)"                // Cor da linha
                        fill="url(#colorQuantidade)"                 // Preenchimento com gradiente
                        strokeWidth={2}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}