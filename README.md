<div align="center">

# 🎲 JOGO DE DADOS

**Jogo de dados para dois jogadores, construído com Next.js e React**

Dois jogadores · Cinco rodadas · Dois dados por jogador · Vencedor por maior soma · Interface reativa com controle de turno

<br />

[![Vercel Deploy](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://jogo-dados-react.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-jogo--dados-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/VANESSENCEWEB/jogo-dados)
[![Watch Demo](https://img.shields.io/badge/▶_Assistir_Demo-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/bN4IB1Xkg8E)

<br />

![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)


<br />

**[🌐 Ver ao vivo](https://jogo-dados-react.vercel.app/)** ·
**[🎥 Demo em vídeo](#-demo-em-vídeo)** ·
**[🎮 Como jogar](#-como-jogar)** ·
**[🛠️ Stack](#️-stack-técnica)** ·
**[💡 Decisões](#-decisões-técnicas)**

</div>

---

## 📖 Sobre o projeto

O **Jogo de Dados** é um projeto acadêmico da disciplina de Programação Front-End (UNICAP · Sistemas para Internet), construído com **Next.js** e **React**.

O objetivo foi aplicar os conceitos fundamentais de React — **componentes**, **props** e **estado** (`useState`) — em um jogo funcional, com a lógica separada da interface e o código todo comentado para explicação.

Em uma partida, dois jogadores disputam **5 rodadas**. A cada rodada, cada jogador lança **2 dados**, e quem tiver a **maior soma** vence a rodada. Ao final, quem venceu mais rodadas vence a partida.

## 🎥 Demo em vídeo

Neste vídeo, apresento o jogo em funcionamento: uma partida completa pelas 5 rodadas, a mensagem final de vencedor e o botão **Jogar Novamente**.

<div align="center">

<a href="https://youtu.be/bN4IB1Xkg8E" target="_blank">
  <img src="https://img.youtube.com/vi/bN4IB1Xkg8E/maxresdefault.jpg" alt="Clique para assistir a demonstracao do Jogo de Dados no YouTube" width="720" />
  <br />
  <sub><b>▶️ Assistir no YouTube</b></sub>
</a>

</div>

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

<table>
<tr>
<td width="50%">

**Frontend**
- Next.js (App Router)
- React (useState, props, componentes)
- JavaScript
- CSS

</td>
<td width="50%">

**Ferramentas**
- Git + GitHub (versionamento)
- Vercel (deploy)
- VS Code

</td>
</tr>
</table>

## 💡 Decisões técnicas

<details>
<summary><b>1. Dois componentes separados: Dado e JogoDados</b></summary>

O `Dado` cuida de uma única face (recebe a prop `valor` e mostra a imagem correspondente), e o `JogoDados` cuida da partida inteira (jogadores, rodadas, turno e placar). A página apenas renderiza o `JogoDados`, mantendo as responsabilidades separadas e o código organizado.

</details>

<details>
<summary><b>2. Lógica do jogo no estado com useState</b></summary>

Tudo que muda durante o jogo — rodada, turno, dados de cada jogador, placar e fim de jogo — vive no estado com `useState`. Assim a tela se atualiza sozinha a cada jogada, sem manipular o DOM na mão.

</details>

<details>
<summary><b>3. Imagens dos dados dentro do projeto</b></summary>

Conforme pedido no enunciado, as imagens (`1.svg` a `6.svg`) ficam na pasta `public/dados` do próprio projeto. O caminho da imagem é montado a partir do valor sorteado, então a face certa aparece sozinha na tela.

</details>

<details>
<summary><b>4. Controle de turno com disabled</b></summary>

Um estado `turno` guarda de quem é a vez. Cada botão usa o atributo `disabled` para travar quando não é a vez daquele jogador, garantindo a regra de "apenas um botão habilitado por vez".

</details>

## 🎓 O que este projeto demonstra

- ✅ **Componentes React** — dois componentes com responsabilidades separadas
- ✅ **Props** — o componente `Dado` recebe e usa a prop `valor`
- ✅ **Estado com useState** — rodada, turno, dados, placar e fim de jogo
- ✅ **Renderização condicional** — mensagem final e botão que só aparecem no fim
- ✅ **Assets no projeto** — imagens dos dados servidas da pasta `public`
- ✅ **Deploy em produção** — publicado na Vercel
- ✅ **Versionamento** — histórico de commits no GitHub

## 🚀 Rodando localmente

```bash
# 1. Clone o repositório
git clone https://github.com/VANESSENCEWEB/jogo-dados.git
cd jogo-dados

# 2. Instale as dependências
npm install

# 3. Rode o servidor de desenvolvimento
npm run dev

# 4. Abra no navegador
# http://localhost:3000
```

## 📂 Estrutura

```
jogo-dados/
├── app/
│   ├── components/
│   │   ├── Dado.js         # Componente do dado: recebe a prop "valor" e mostra a imagem
│   │   └── JogoDados.js    # Componente do jogo: 2 jogadores, rodadas, turno e placar
│   ├── globals.css         # Estilos do projeto (fundo, card, dados, botões)
│   ├── layout.js           # Layout base do Next.js
│   └── page.js             # Página principal (renderiza o componente JogoDados)
├── public/
│   ├── dados/              # Imagens das faces dos dados
│   │   ├── 1.svg
│   │   ├── 2.svg
│   │   ├── 3.svg
│   │   ├── 4.svg
│   │   ├── 5.svg
│   │   └── 6.svg
│   └── fundo.jpg           # Imagem de fundo da tela
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
└── README.md
```

## 👩‍💻 Sobre a autora

<table>
<tr>
<td width="150" align="center">
<a href="https://github.com/VANESSENCEWEB">
<img src="https://github.com/VANESSENCEWEB.png" width="120" style="border-radius: 50%" alt="Foto de perfil de Vanessa Lima no GitHub" />
</a>
</td>
<td>

**Vanessa Rafaella Carneiro de Lima**

Estudante de Sistemas para Internet na UNICAP (Pernambuco, Brasil).
Fundadora da VanessenceWeb Ltd (UK). Apaixonada por front-end, UX e qualidade de código.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/vanessa-lima-dev)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/VANESSENCEWEB)

</td>
</tr>
</table>

## 📄 Licença

Este projeto está sob a licença MIT.

---

<div align="center">

**Se este projeto te ajudou, considera dar uma ⭐ no repositório!**

Feito com 💙 em Recife · Pernambuco · Brasil

</div>
