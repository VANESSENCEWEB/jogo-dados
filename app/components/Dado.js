// Componente Dado: recebe uma prop "valor" (1 a 6) e mostra a imagem correspondente
export default function Dado({ valor }) {
  return (
    <img
      src={`/dados/${valor}.svg`}  // monta o caminho da imagem: /dados/1.svg, /dados/2.svg...
      alt={`Dado com valor ${valor}`}
      width={70}
      height={70}
    />
  );
}