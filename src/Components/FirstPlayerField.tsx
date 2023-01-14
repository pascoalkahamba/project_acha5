import { PlayerField } from "../MyStyles";

interface PlayerFields {
  currentPlayer: string;
  playerWord: {
    firstPlayer: string;
    secondPlayer: string;
  };
  setPlayerWord: React.Dispatch<
    React.SetStateAction<{
      firstPlayer: string;
      secondPlayer: string;
    }>
  >;
}
type FirstProps = React.ChangeEventHandler<HTMLInputElement> | undefined;

const FirstPlayerField = ({
  currentPlayer,
  setPlayerWord,
  playerWord,
}: PlayerFields) => {
  const handleChange: FirstProps = ({ target }) => {
    setPlayerWord({ ...playerWord, [target.id]: target.value });
  };

  return (
    <PlayerField>
      <label
        htmlFor={currentPlayer === "Jogador1" ? "firstPlayer" : "secondPlayer"}
      >
        Letras Descobertas(Possiveis):{" "}
      </label>
      {currentPlayer === "Jogador1" ? (
        <input
          type="text"
          id="firstPlayer"
          maxLength={5}
          value={playerWord.firstPlayer}
          placeholder="Anotações"
          onChange={handleChange}
        />
      ) : (
        <input
          type="text"
          id="secondPlayer"
          maxLength={5}
          value={playerWord.secondPlayer}
          placeholder="Anotações"
          onChange={handleChange}
        />
      )}
    </PlayerField>
  );
};

export default FirstPlayerField;
