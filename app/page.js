"use client"; // Diz ao Next que essa tela é interativa (responde a cliques)

import { useState } from "react"; // useState guarda informações que mudam na tela

export default function Home() {
  // Cada useState é uma "memória" do jogo. [valor, função que muda o valor]
  const [rodada, setRodada] = useState(1);        // rodada atual (começa em 1)
  const [turno, setTurno] = useState(1);          // de quem é a vez (1 ou 2)
  const [dados1, setDados1] = useState([1, 1]);   // os 2 dados do jogador 1
  const [dados2, setDados2] = useState([1, 1]);   // os 2 dados do jogador 2
  const [resultado, setResultado] = useState(""); // mensagem da rodada
  const [vitorias1, setVitorias1] = useState(0);  // quantas rodadas o J1 venceu
  const [vitorias2, setVitorias2] = useState(0);  // quantas rodadas o J2 venceu
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
    const novos2 = [sortear(), sortear()]; // sorteia os dados do J2
    setDados2(novos2);

    // Soma os 2 dados de cada jogador
    const soma1 = dados1[0] + dados1[1];
    const soma2 = novos2[0] + novos2[1];

    // Decide quem venceu a rodada comparando as somas
    if (soma1 > soma2) {
      setResultado("Jogador 1 venceu a rodada!");
      setVitorias1(vitorias1 + 1); // soma 1 vitória ao J1
    } else if (soma2 > soma1) {
      setResultado("Jogador 2 venceu a rodada!");
      setVitorias2(vitorias2 + 1); // soma 1 vitória ao J2
    } else {
      setResultado("Empate na rodada!"); // somas iguais = empate
    }

    // Se ainda não chegou na 5ª rodada, avança para a próxima
    if (rodada < 5) {
      setRodada(rodada + 1);
      setTurno(1); // volta a vez para o jogador 1
    } else {
      setFim(true); // era a 5ª rodada: o jogo acabou
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

  // Monta a mensagem final comparando o total de vitórias
  function mensagemFinal() {
    if (vitorias1 > vitorias2) return "Jogador 1 venceu o jogo!";
    if (vitorias2 > vitorias1) return "Jogador 2 venceu o jogo!";
    return "O jogo terminou empatado!";
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Jogo de Dados</h1>
      <h3>Rodada {rodada} de 5</h3>

      <div style={{ display: "flex", justifyContent: "center", gap: "60px", marginTop: "20px" }}>

        {/* Coluna do Jogador 1 */}
        <div>
          <h2>Jogador 1</h2>
          <div style={caixaDados}>
            <div style={dado}>{dados1[0]}</div>
            <div style={dado}>{dados1[1]}</div>
          </div>
          <p>Soma: {dados1[0] + dados1[1]}</p>
          {/* disabled: botão desativado quando NÃO é a vez dele, ou quando o jogo acabou */}
          <button onClick={jogar1} disabled={turno !== 1 || fim} style={botao}>Jogar</button>
        </div>

        {/* Coluna do Jogador 2 */}
        <div>
          <h2>Jogador 2</h2>
          <div style={caixaDados}>
            <div style={dado}>{dados2[0]}</div>
            <div style={dado}>{dados2[1]}</div>
          </div>
          <p>Soma: {dados2[0] + dados2[1]}</p>
          <button onClick={jogar2} disabled={turno !== 2 || fim} style={botao}>Jogar</button>
        </div>

      </div>

      {/* Mensagem do resultado da rodada */}
      <h2 style={{ marginTop: "25px" }}>{resultado}</h2>

      {/* Placar de vitórias */}
      <p>Vitórias — Jogador 1: {vitorias1} | Jogador 2: {vitorias2}</p>

      {/* Só mostra ISTO quando o jogo acabou (fim === true) */}
      {fim && (
        <div style={{ marginTop: "20px" }}>
          <h2>{mensagemFinal()}</h2>
          <button onClick={jogarNovamente} style={botao}>Jogar Novamente</button>
        </div>
      )}
    </div>
  );
}

// Estilo de cada dado (o quadradinho branco)
const dado = {
  width: "70px", height: "70px", border: "2px solid #333",
  borderRadius: "10px", backgroundColor: "white", display: "flex",
  alignItems: "center", justifyContent: "center", fontSize: "36px", fontWeight: "bold"
};

// Estilo da caixa que segura os 2 dados lado a lado
const caixaDados = {
  display: "flex", gap: "10px", justifyContent: "center", margin: "15px 0"
};

// Estilo dos botões
const botao = {
  padding: "10px 20px", fontSize: "16px", cursor: "pointer"
};