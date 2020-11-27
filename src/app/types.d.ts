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
