import React from "react";
import { SonDiv } from "../MyStyles";
import { Section } from "../StylesHome";
import { ContentDiv } from "../MyStyles";
import Field from "./Field";

const TestPage = () => {
  return (
    <Section>
      <ContentDiv>
        <h1 className="center">Acha-5</h1>
        <div className="second">
          <SonDiv>
            <Field title="Jogador1" label="Palavra de Teste(Jog1):  " />
          </SonDiv>
          <SonDiv>
            <Field title="Jogador2" label="Palavra de Teste(Jog2):  " />
          </SonDiv>
        </div>
      </ContentDiv>
    </Section>
  );
};

export default TestPage;
