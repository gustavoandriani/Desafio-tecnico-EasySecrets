// Tipagem das props do componente BotaoProduto
type BotaoProdutoProps = {
  icone: React.ReactElement;              // Ícone exibido no botão
  nome: string;                           // Nome do produto representado pelo botão
  selecionado: string;                    // Nome do produto atualmente selecionado
  aoSelecionar: (nome: string) => void;   // Função chamada ao clicar no botão
};

// Componente de botão para seleção de produtos
export function BotaoProduto({ icone, nome, selecionado, aoSelecionar }: BotaoProdutoProps) {
  // Verifica se o botão atual representa o produto selecionado
  const isAtivo = nome === selecionado;

  return (
    <button
      onClick={() => aoSelecionar(nome)} // Atualiza o produto selecionado ao clicar
      className={`flex mt-5 ml-5 p-5 py-3 rounded-full font-semibold text-black transition duration-600 ease-in-out cursor-pointer 
        ${isAtivo
          ? "bg-gradient-to-r from-cyan-700 via-green-500 to-yellow-400 shadow-lg" // Estilo destacado para botão ativo
          : "bg-gray-500 hover:bg-gray-600"
        }`}
    >
      {icone}
      {nome}
    </button>
  );
}
