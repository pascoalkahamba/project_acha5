import React from "react";
import Button from "./Button";
import styles from "./Home.module.css";
import NormaInputl from "./NormaInputl";

const Home = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Exercicío Acha-5</h1>
        <div className={styles.message}>
          <span>6.5.3 </span> Dois jogadores, cada um pensa uma palavra de 5
          letras diferentes, sem acentos. Um tenta adivinhar primeiro a palavra
          que o outro escolheu. Alternadamente, cada um submete ao outro uma
          palavra também de 5 letras, sem regras. O outro vai informar quantas
          letras daquela palavra estão presentes na sua palavra secreta. Com
          base nessa informação e, através de lógica, as letras vão sendo
          eliminadas ou descobertas. Por exemplo, suponha que a palavra secreta
          do jogador 1é"zinco". Se o jogador 2 disser "arara", o jogador 1
          informa "zero", jáque nem o "a" nem o "r" ocorrem em "zinco". O
          jogador 2 então elimina as duas letras. Se a palavra dita for "ossos",
          o jogador 1 informa "uma", que pode ser "o" ou "s". Neste ponto (e na
          sua próxima jogada), o jogador 2 pode dizer "esses" e, ao ser
          informado que házero ocorrências, elimina o "e" e o "s" e descobre em
          "ossos" que a letra "o" pertenceàpalavra secreta do jogador 1.
          Implemente esse jogo, com um banco de palavras de 5 letras para que o
          computador sorteie a sua palavra secreta
        </div>
      </div>
      <div className={styles.form}>
        <h1 className={styles.center}>Acha-5</h1>
        <div className={styles.inputs}>
          <NormaInputl
            title="Palavra do Jogador 1"
            label="Palavra do Jogador 1: "
          />
          <NormaInputl
            title="Palavra do Jogador 2"
            label="Palavra do Jogador 2: "
          />
          <Button buttonName="Começar o jogo" />
        </div>
      </div>
    </section>
  );
};

export default Home;
