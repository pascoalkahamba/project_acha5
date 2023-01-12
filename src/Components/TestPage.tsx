import { useState } from "react";
import { SonDiv } from "../MyStyles";
import { Section } from "../StylesHome";
import { ContentDiv } from "../MyStyles";
import Field from "./Field";
import { StateProps } from "./Home";
import ResultEnd from "./ResultEnd";

const TestPage = ({ value, setValue }: StateProps) => {
  const [active, setActive] = useState(false);
  const [result, setResult] = useState(false);
  const [playerWord, setPlayerWord] = useState("");

  const resultEnd = (error: boolean, ...args: [string]) => {
    setPlayerWord(args[0]);
    console.log(args[0]);
    setResult(error);
  };

  return (
    <Section>
      <ContentDiv>
        <h1 className="center">Acha-5</h1>
        <div className="second">
          <SonDiv active={!active} background="#fff">
            <Field
              button={true}
              value={value.jogador2}
              resultEnd={resultEnd}
              title="Jogador1"
              id="jogador1"
              label="Palavra de Teste(Jog1):  "
              active={active}
              setActive={() => setActive(true)}
            />
          </SonDiv>
          <SonDiv active={active} background="#fff">
            <Field
              button={true}
              value={value.jogador1}
              resultEnd={resultEnd}
              title="Jogador2"
              id="jogador2"
              label="Palavra de Teste(Jog2):  "
              active={!active}
              setActive={() => setActive(false)}
            />
          </SonDiv>
          {result && <ResultEnd playerWord={playerWord} />}
        </div>
      </ContentDiv>
    </Section>
  );
};

export default TestPage;
