import { makeAutoObservable } from "mobx";
//

const fakeMemo = [
  {
    subject: "1",
    entities: [
      {
        char: "1",
        input: "1",
      },
    ],
  },
];

class MemoStore {
  memo: Memo.SectionType[] = [];
  editSectionIndex: string = "";
  editEntityIndex: string = "";

  constructor() {
    makeAutoObservable(this);
    this.memo = fakeMemo;
  }

  setEditSectionIndex(sectionIndex: number | string) {
    if (typeof sectionIndex === "number")
      return (this.editSectionIndex = sectionIndex.toString());

    this.editSectionIndex = sectionIndex;
  }

  setEditEntityIndex(entityIndex: number | string) {
    if (typeof entityIndex === "number")
      return (this.editEntityIndex = entityIndex.toString());

    this.editEntityIndex = entityIndex;
  }

  clearEditEntityIndex() {
    this.editEntityIndex = "";
  }

  clearEditSectionIndex() {
    this.editSectionIndex = "";
  }

  addSection(subject: string) {
    if (!this.isValidSubject(subject)) return;

    // addMemoSection(subject);
    this.memo = [...fakeMemo, { subject, entities: [] }];
  }

  removeSection(sectionIndex: number) {
    // removeMemoSection(sectionIndex);
    this.memo = fakeMemo.filter((_, i) => i !== sectionIndex);
  }

  changeSectionSubject(subject: string, sectionIndx: number) {
    if (!this.isValidSubject(subject)) return;

    // updateMemoSubject(subject, sectionIndx);
    const copy = fakeMemo;
    copy[sectionIndx].subject = subject;
    this.memo = copy;
  }

  addEntity(input: string, sectionIndex: number) {
    if (!this.isValidEntity(input)) return;

    const entity = this.trimInput(input);
    // addMemoEntity(entity, sectionIndex);

    const copy = fakeMemo;
    copy[sectionIndex].entities.push(entity);
    this.memo = copy;
  }

  removeEntity(sectionIndex: number, entityIndex: number) {
    const copy = fakeMemo;
    delete copy[sectionIndex].entities[entityIndex];

    this.memo = copy;
  }

  changeEntity(input: string, sectionIndex: number, entityIndex: number) {
    if (!this.isValidEntity(input)) return;

    const entity = this.trimInput(input);
    // updateMemoEntity(entity, entityIndex, sectionIndex);
    const copy = fakeMemo;
    copy[sectionIndex].entities[entityIndex] = entity;
    this.memo = copy;
  }

  private isValidSubject(inputStr: string) {
    return inputStr.trim();
  }

  private isValidEntity(inputStr: string) {
    // eslint-disable-next-line
    return inputStr.match(/\X+[=|＝]\X+/);
  }

  //1=11 -> {char:1,input=11}
  private trimInput(inputStr: string) {
    const [char, input] = inputStr.split(/=|＝/);
    return { char, input };
  }
}

export default MemoStore;
