import { useState } from "react";
import { SonDiv } from "../MyStyles";
import { Section } from "../StylesHome";
import { ContentDiv } from "../MyStyles";
import Field from "./Field";
interface TestProps {
  active: boolean;
}
const TestPage = () => {
  const [active, setActive] = useState(false);
  return (
    <Section>
      <ContentDiv>
        <h1 className="center">Acha-5</h1>
        <div className="second">
          <SonDiv active={!active}>
            <Field
              title="Jogador1"
              id="jogador1"
              label="Palavra de Teste(Jog1):  "
              active={active}
              setActive={setActive}
            />
          </SonDiv>
          <SonDiv active={active}>
            <Field
              title="Jogador2"
              id="jogador2"
              label="Palavra de Teste(Jog2):  "
              active={!active}
              setActive={setActive}
            />
          </SonDiv>
        </div>
      </ContentDiv>
    </Section>
  );
};

export default TestPage;
