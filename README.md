# 🎲 Jogo de Dados

**Jogo de dados para dois jogadores, construído com Next.js e React**

Dois jogadores · Cinco rodadas · Dois dados por jogador · Vencedor por maior soma · Interface reativa com controle de turno

[![Vercel Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://jogo-dados-unicap.vercel.app/)

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

**[🌐 Ver ao vivo](https://jogo-dados-unicap.vercel.app/)** · **[🎥 Vídeo](#-demonstração)** · **[🎮 Como jogar](#-como-jogar)** · **[🛠️ Stack](#️-stack-técnica)** · **[💡 Decisões](#-decisões-técnicas)**

---

## 🎥 Demonstração

[![Assista ao vídeo](https://img.youtube.com/vi/bN4IB1Xkg8E/maxresdefault.jpg)](https://youtu.be/bN4IB1Xkg8E)

▶️ **[Assista à demonstração no YouTube](https://youtu.be/bN4IB1Xkg8E)**

---

## 📖 Sobre o projeto

O **Jogo de Dados** é um projeto acadêmico da disciplina de Programação Front-End (UNICAP · Sistemas para Internet), construído com **Next.js** e **React**.

O objetivo foi aplicar os conceitos fundamentais de React — componentes, props e estado (`useState`) — em um jogo funcional, com a lógica separada da interface e o código todo comentado para explicação.

Em uma partida, dois jogadores disputam **5 rodadas**. A cada rodada, cada jogador lança **2 dados**, e quem tiver a **maior soma** vence a rodada. Ao final, quem venceu mais rodadas vence a partida.

## 🎮 Como jogar

1. O **Jogador 1** clica em **Jogar** e lança seus dois dados
2. O botão do Jogador 1 é desabilitado e o do **Jogador 2** é liberado (apenas um botão ativo por vez)
3. O Jogador 2 lança seus dados e o resultado da rodada é exibido
4. Após **5 rodadas**, o jogo mostra o vencedor da partida (ou empate geral)
5. O botão **Jogar Novamente** aparece no fim e reinicia tudo

## ✨ Funcionalidades

- 🎲 **Dois dados por jogador**, sorteados a cada jogada (valores de 1 a 6)
- 🖼️ **Imagens dos dados** (SVG) salvas dentro do projeto, exibidas conforme o valor sorteado
- 🔢 **Soma automática** dos dois dados de cada jogador
- 🔄 **Controle de turno** — apenas o botão do jogador da vez fica habilitado
- 📊 **Placar de rodadas** vencidas por cada jogador
- 🏆 **Resultado da rodada** e **vencedor da partida** exibidos na tela
- ↩️ **Botão Jogar Novamente**, que aparece só no fim e reinicia o jogo
- 🎨 **Interface estilizada** com imagem de fundo, card central e botões com estados visuais

## 🛠️ Stack técnica

| **Frontend** | **Ferramentas** |
| --- | --- |
| Next.js (App Router) | Git + GitHub (versionamento) |
| React (useState, props, componentes) | Vercel (deploy) |
| JavaScript | VS Code |
| CSS | |

## 💡 Decisões técnicas

### 1. Lógica separada da interface

Os componentes cuidam da tela e o estado (`useState`) cuida do que muda: rodada, turno, dados, placar e fim de jogo. Isso deixa o fluxo do jogo claro e fácil de explicar.

### 2. Componente `Dado` reutilizável

Em vez de repetir o código do dado quatro vezes, criei um componente `Dado` que recebe uma **prop** `valor` e mostra a imagem correspondente. O mesmo componente é usado para os quatro dados em tela.

### 3. Imagens dos dados dentro do projeto

Conforme pedido, as imagens (`1.svg` a `6.svg`) ficam na pasta `public/dados` do próprio projeto. O caminho da imagem é montado a partir do valor sorteado, então a face certa aparece sozinha.

### 4. Controle de turno com estado

Um estado `turno` guarda de quem é a vez. Cada botão usa `disabled` para travar quando não é a vez daquele jogador, garantindo a regra de "apenas um botão habilitado por vez".

## 🚀 Rodando localmente

\`\`\`bash
# 1. Clone o repositório
git clone https://github.com/VANESSENCEWEB/jogo-dados.git
cd jogo-dados

# 2. Instale as dependências
npm install

# 3. Rode o servidor de desenvolvimento
npm run dev

# 4. Abra no navegador
# http://localhost:3000
\`\`\`

## 📂 Estrutura

\`\`\`
jogo-dados/
├── app/
│   ├── components/
│   │   └── Dado.js       # Componente do dado (recebe a prop valor e mostra a imagem)
│   ├── globals.css       # Estilos da página (fundo, card, dados, botões)
│   ├── layout.js         # Layout base do Next.js
│   └── page.js           # Tela do jogo e toda a lógica (rodadas, turno, placar)
├── public/
│   ├── dados/            # Imagens dos dados (1.svg a 6.svg)
│   └── fundo.jpg         # Imagem de fundo
└── README.md
\`\`\`

## 🤝 Sobre a autora

**Vanessa Rafaella Carneiro de Lima**
Estudante de Sistemas para Internet na UNICAP (Pernambuco, Brasil).
Fundadora da VanessenceWeb Ltd (UK). Apaixonada por front-end, UX e qualidade de código.

[LinkedIn](https://linkedin.com/in/vanessa-lima-web) · [GitHub](https://github.com/vanessa-lima-web)

---

Feito com 💙 em Recife · Pernambuco · Brasil
