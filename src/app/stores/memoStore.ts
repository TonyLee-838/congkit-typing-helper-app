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

export class MemoStore {
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
    addMemoSection(subject);
    this.memo = getMemo();
  }

  removeSection(sectionIndex: number) {
    removeMemoSection(sectionIndex);
    this.memo = getMemo();
  }

  changeSectionSubject(subject: string, sectionIndx: number) {
    updateMemoSubject(subject, sectionIndx);
    this.memo = getMemo();
  }

  addEntity(entity: string, sectionIndex: number) {
    addMemoEntity(entity, sectionIndex);
    this.memo = getMemo();
  }

  removeEntity(sectionIndex: number, entityIndex: number) {
    removeMemoEntity(entityIndex, sectionIndex);
    this.memo = getMemo();
  }

  changeEntity(entity: string, sectionIndex: number, entityIndex: number) {
    updateMemoEntity(entity, entityIndex, sectionIndex);
    this.memo = getMemo();
  }
}
