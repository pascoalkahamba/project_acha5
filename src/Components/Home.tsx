import Button from "./Button";
import Input from "./Input";
import { Section } from "../StylesHome";
import { useState } from "react";
import { DivError } from "../StylesHome";
import { useNavigate } from "react-router-dom";

export interface StateProps {
  value: {
    jogador1: string;
    jogador2: string;
  };
  setValue: Function;
}
const Home = ({ value, setValue }: StateProps) => {
  const [error, SetError] = useState(false);
  const navigate = useNavigate();
  const validate = () => {
    let message = "";
    if (value.jogador1.length < 5) {
      message = "Digite o valor do jogador 1\n";
    }

    if (value.jogador2.length < 5) {
      message += "Digite o valor do jogador 2";
    }
    if (message !== "") {
      SetError(true);
      return false;
    }
    navigate("/test");
    return true;
  };

  return (
    <Section>
      <div className="content">
        <h1>Exercicío Acha-5</h1>
        <div className="message">
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
      <div className="form">
        <h1 className="center">Acha-5</h1>
        <div className="inputs">
          <Input value={value} setValue={setValue} />
          {error && (
            <DivError>
              O texto digitado nos campos tem de ter no minimo e no maximo 5
              caracteres!
            </DivError>
          )}
          <Button onClick={() => validate()} buttonName="Começar o jogo" />
        </div>
      </div>
    </Section>
  );
};

export default Home;
