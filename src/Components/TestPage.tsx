import { useState } from "react";
import { SonDiv } from "../MyStyles";
import { Section } from "../StylesHome";
import { ContentDiv } from "../MyStyles";
import Field from "./Field";
import { StateProps } from "./Home";
interface TestProps {
  active: boolean;
}
const TestPage = ({ value, setValue }: StateProps) => {
  const [active, setActive] = useState(false);
  return (
    <Section>
      <ContentDiv>
        <h1 className="center">Acha-5</h1>
        <div className="second">
          <SonDiv active={!active}>
            <Field
              value={value}
              title="Jogador1"
              id="jogador1"
              label="Palavra de Teste(Jog1):  "
              active={active}
              setActive={() => setActive(true)}
            />
          </SonDiv>
          <SonDiv active={active}>
            <Field
              value={value}
              title="Jogador2"
              id="jogador2"
              label="Palavra de Teste(Jog2):  "
              active={!active}
              setActive={() => setActive(false)}
            />
          </SonDiv>
        </div>
      </ContentDiv>
    </Section>
  );
};

export default TestPage;
