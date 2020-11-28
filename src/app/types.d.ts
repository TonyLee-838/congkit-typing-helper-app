declare namespace Memo {
  type EntityType = {
    input: string;
    char: string;
  };

  type SectionType = {
    subject: string;
    entities: EntityType[];
  };
}

type KeyInfo = {
  letter: string;
  character: string;
  hints: string;
};

type ControlButtonType = "memo" | "setting" | "exit" | "";
