type BotaoProdutoProps = {
  nome: string;
  selecionado: string;
  aoSelecionar: (nome: string) => void;
};

export function BotaoProduto({ nome, selecionado, aoSelecionar }: BotaoProdutoProps) {
  const isAtivo = nome === selecionado;

  return (
    <button
      onClick={() => aoSelecionar(nome)}
      className={`mt-5 sm:ml-5 px-5 py-3 rounded-full font-semibold text-black transition duration-600 ease-in-out cursor-pointer 
        ${isAtivo ? "bg-gradient-to-r from-cyan-700 via-green-500 to-yellow-400 shadow-lg" : "bg-gray-500 hover:bg-gray-600"}`}
    >
      {nome}
    </button>
  );
}
