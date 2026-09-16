"use client";

import { useState } from "react";

export default function Home() {
  const [valor, setValor] = useState(1);

  function jogar() {
    const numero = Math.floor(Math.random() * 6) + 1;
    setValor(numero);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Jogo de Dados</h1>

      <div style={{
        width: "80px",
        height: "80px",
        border: "2px solid #333",
        borderRadius: "10px",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "40px",
        fontWeight: "bold",
        margin: "20px auto"
      }}>
        {valor}
      </div>

      <button onClick={jogar} style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer"
      }}>
        Jogar
      </button>
    </div>
  );
}