// const { DbService } = require("./dbService");

// const db = DbService("memo.json");
let test = [
  {
    subject: "subject",
    entities: [{ input: "竹月", char: "師" }],
  },
];

const resetTestMemo = () => {
  //   db.has("memo").unset("keyInfo").write();
  //   db.set("memo", test).write();
};

const getMemo = () => {
  return test;
};

const addMemoEntity = (entity, sectionIndex) => {
  test[sectionIndex].entities.push(entity);
  //   db.get("memo")
  //     .find((_, index) => index === sectionIndex)
  //     .get("entities")
  //     .push(entity)
  //     .write();
};

const addMemoSection = (subject, entities = []) => {
  test.push({ subject, entities: [] });
  //   db.get("memo").push({ subject, entities }).write();
};

const updateMemoEntity = (entity, entityIndex, sectionIndex) => {
  test[sectionIndex].entities[entityIndex] = entity;
  //   db.get("memo")
  //     .find((_, index) => index === sectionIndex)
  //     .get("entities")
  //     .find((_, index) => index === entityIndex)
  //     .assign({ input: entity.input, char: entity.char })
  //     .write();
};

const updateMemoSubject = (subject, sectionIndex) => {
  test[sectionIndex].subject = subject;
  //   db.get("memo")
  //     .find((_, index) => index === sectionIndex)
  //     .assign({ subject })
  //     .write();
};

const removeMemoEntity = (entityIndex, sectionIndex) => {
  test = test[sectionIndex].entities.filter((_, i) => entityIndex !== i);
  //   db.get("memo")
  //     .find((_, index) => index === sectionIndex)
  //     .get("entities")
  //     .remove((_, index) => index === entityIndex)
  //     .write();
};
const removeMemoSection = (sectionIndex) => {
  test = test.filter((_, i) => i !== sectionIndex);
  //   db.get("memo")
  //     .remove((_, index) => index === sectionIndex)
  //     .write();
};

module.exports = {
  getMemo,
  addMemoEntity,
  addMemoSection,
  updateMemoEntity,
  updateMemoSubject,
  removeMemoEntity,
  removeMemoSection,
  resetTestMemo,
};
