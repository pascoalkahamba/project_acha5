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
  const [error, setError] = useState(false);
  const [wrongWord, setWrongWord] = useState(false);
  const [discoveries, setDiscoveries] = useState(0);
  const [inputClass, setInputClass] = useState("");
  const [rightWord, setRightWord] = useState("");

  const [playerWord, setPlayerWord] = useState({
    firstPlayer: "",
    secondPlayer: "",
  });

  const [playerInformation, setPlayerInformation] = useState([""]);

  const resultEnd = (error: boolean, ...args: string[]) => {
    setPlayerInformation(args);
    console.log(args[0]);
    setResult(error);
  };
  console.log(playerWord);
  return (
    <Section>
      <ContentDiv>
        <h1 className="center">Acha-5</h1>
        <div className="second">
          <SonDiv active={!active} background="#fff">
            <Field
              setWrongWord={setWrongWord}
              setError={setError}
              number={2}
              setDiscoveries={setDiscoveries}
              setInputClass={setInputClass}
              setRightWord={setRightWord}
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
              setWrongWord={setWrongWord}
              setError={setError}
              number={1}
              setDiscoveries={setDiscoveries}
              setInputClass={setInputClass}
              setRightWord={setRightWord}
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
          {result && (
            <ResultEnd
              setRightWord={setRightWord}
              rightWord={rightWord}
              setInputClass={setInputClass}
              inputClass={inputClass}
              setError={setError}
              setWrongWord={setWrongWord}
              error={error}
              wrongWord={wrongWord}
              playerWord={playerWord}
              setPlayerWord={setPlayerWord}
              playerInformation={playerInformation}
              discoveries={discoveries}
            />
          )}
        </div>
      </ContentDiv>
    </Section>
  );
};

export default TestPage;
