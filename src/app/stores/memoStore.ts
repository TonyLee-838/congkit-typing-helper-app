import { makeAutoObservable } from "mobx";
import {
  addMemoEntity,
  addMemoSection,
  getMemo,
  removeMemoEntity,
  removeMemoSection,
  updateMemoEntity,
  updateMemoSubject,
} from "../../db/api/memo";

class MemoStore {
  memo: Memo.SectionType[] = [];
  editSectionIndex: string = "";
  editEntityIndex: string = "";

  constructor() {
    makeAutoObservable(this);
    this.memo = getMemo();
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

    addMemoSection(subject);
    this.memo = getMemo();
  }

  removeSection(sectionIndex: number) {
    removeMemoSection(sectionIndex);
    this.memo = getMemo();
  }

  changeSectionSubject(subject: string, sectionIndx: number) {
    if (!this.isValidSubject(subject)) return;

    updateMemoSubject(subject, sectionIndx);
    this.memo = getMemo();
  }

  addEntity(input: string, sectionIndex: number) {
    if (!this.isValidEntity(input)) return;

    const entity = this.trimInput(input);
    addMemoEntity(entity, sectionIndex);
    this.memo = getMemo();
  }

  removeEntity(sectionIndex: number, entityIndex: number) {
    removeMemoEntity(entityIndex, sectionIndex);
    this.memo = getMemo();
  }

  changeEntity(input: string, sectionIndex: number, entityIndex: number) {
    if (!this.isValidEntity(input)) return;

    const entity = this.trimInput(input);
    updateMemoEntity(entity, entityIndex, sectionIndex);
    this.memo = getMemo();
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
