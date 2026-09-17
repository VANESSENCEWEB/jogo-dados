"use client"; // Componente interativo (responde a cliques)

import { useState } from "react";
import Dado from "./Dado"; // usa o componente Dado para mostrar as imagens

// Componente JogoDados: contém os dois jogadores, seus dados e toda a lógica da partida
export default function JogoDados() {
  const [rodada, setRodada] = useState(1);        // rodada atual (começa em 1)
  const [turno, setTurno] = useState(1);          // de quem é a vez (1 ou 2)
  const [dados1, setDados1] = useState([1, 1]);   // os 2 dados do jogador 1
  const [dados2, setDados2] = useState([1, 1]);   // os 2 dados do jogador 2
  const [resultado, setResultado] = useState(""); // mensagem da rodada (embaixo)
  const [vitorias1, setVitorias1] = useState(0);  // rodadas vencidas pelo J1
  const [vitorias2, setVitorias2] = useState(0);  // rodadas vencidas pelo J2
  const [fim, setFim] = useState(false);          // o jogo acabou? (true/false)

  // Sorteia um número de 1 a 6 (um lado do dado)
  function sortear() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // Quando o Jogador 1 clica em Jogar
  function jogar1() {
    setDados1([sortear(), sortear()]); // sorteia os 2 dados dele
    setTurno(2);                       // passa a vez para o jogador 2
  }

  // Quando o Jogador 2 clica em Jogar (aqui a rodada é decidida)
  function jogar2() {
    const novos2 = [sortear(), sortear()];
    setDados2(novos2);

    const soma1 = dados1[0] + dados1[1];
    const soma2 = novos2[0] + novos2[1];

    // Decide quem venceu a rodada e monta a mensagem de baixo
    if (soma1 > soma2) {
      setResultado("Jogador 1 venceu.");
      setVitorias1(vitorias1 + 1);
    } else if (soma2 > soma1) {
      setResultado("Jogador 2 venceu.");
      setVitorias2(vitorias2 + 1);
    } else {
      setResultado("Empate!");
    }

    // Se ainda não chegou na 5ª rodada, avança; senão, encerra o jogo
    if (rodada < 5) {
      setRodada(rodada + 1);
      setTurno(1);
    } else {
      setFim(true);
    }
  }

  // Zera tudo para começar de novo
  function jogarNovamente() {
    setRodada(1);
    setTurno(1);
    setDados1([1, 1]);
    setDados2([1, 1]);
    setResultado("");
    setVitorias1(0);
    setVitorias2(0);
    setFim(false);
  }

  // Mensagem FINAL do jogo (aparece em cima, no lugar da rodada)
  function mensagemFinal() {
    if (vitorias1 > vitorias2) return "Jogador 1 venceu o jogo!";
    if (vitorias2 > vitorias1) return "Jogador 2 venceu o jogo!";
    return "Empate Geral!";
  }

  return (
    <main style={{ textAlign: "center" }}>
      <h1>Jogo de Dados</h1>

      {/* EM CIMA: enquanto o jogo rola mostra a rodada; no fim mostra o vencedor do jogo */}
      {fim ? (
        <h2>{mensagemFinal()}</h2>
      ) : (
        <h3>Rodada {rodada} de 5</h3>
      )}

      <div style={{ display: "flex", justifyContent: "center", gap: "60px", marginTop: "20px" }}>

        {/* Jogador 1 */}
        <div>
          <h2>Jogador 1</h2>
          <div style={caixaDados}>
            <Dado valor={dados1[0]} />
            <Dado valor={dados1[1]} />
          </div>
          <p>Soma: {dados1[0] + dados1[1]}</p>
          <button onClick={jogar1} disabled={turno !== 1 || fim}>Jogar</button>
        </div>

        {/* Jogador 2 */}
        <div>
          <h2>Jogador 2</h2>
          <div style={caixaDados}>
            <Dado valor={dados2[0]} />
            <Dado valor={dados2[1]} />
          </div>
          <p>Soma: {dados2[0] + dados2[1]}</p>
          <button onClick={jogar2} disabled={turno !== 2 || fim}>Jogar</button>
        </div>

      </div>

      {/* EMBAIXO: resultado de cada rodada */}
      <h2 style={{ marginTop: "25px" }}>{resultado}</h2>

      {/* Placar de rodadas vencidas */}
      <p>Vitórias — Jogador 1: {vitorias1} | Jogador 2: {vitorias2}</p>

      {/* Botão só aparece quando o jogo acabou */}
      {fim && (
        <button onClick={jogarNovamente} style={{ marginTop: "10px" }}>Jogar Novamente</button>
      )}
    </main>
  );
}

const caixaDados = {
  display: "flex", gap: "10px", justifyContent: "center", margin: "15px 0"
};