const { DbService } = require("./dbService");

const db = DbService("memo.json");
const test = [
  {
    subject: "左右結構",
    entities: [
      { input: "尸中", char: "聊" },
      { input: "卜心", char: "託" },
      { input: "竹月", char: "師" },
      { input: "尸中", char: "聊" },
      { input: "卜心", char: "託" },
      { input: "竹月", char: "師" },
    ],
  },
  {
    subject: "左右結構",
    entities: [
      { input: "尸中", char: "聊" },
      { input: "卜心", char: "託" },
      { input: "竹月", char: "師" },
      { input: "尸中", char: "聊" },
      { input: "卜心", char: "託" },
      { input: "竹月", char: "師" },
    ],
  },
  {
    subject: "左右結構",
    entities: [
      { input: "尸中", char: "聊" },
      { input: "卜心", char: "託" },
      { input: "竹月", char: "師" },
      { input: "尸中", char: "聊" },
      { input: "卜心", char: "託" },
      { input: "竹月", char: "師" },
    ],
  },
  {
    subject: "左右結構",
    entities: [
      { input: "尸中", char: "聊" },
      { input: "卜心", char: "託" },
      { input: "竹月", char: "師" },
      { input: "尸中", char: "聊" },
      { input: "卜心", char: "託" },
      { input: "竹月", char: "師" },
    ],
  },
];

const resetTestMemo = () => {
  db.has("memo").unset("keyInfo").write();
  db.set("memo", test).write();
};

const getMemo = () => {
  return db.get("memo").value();
};

const addMemoEntity = (entity, sectionIndex) => {
  db.get("memo")
    .find((_, index) => index === sectionIndex)
    .get("entities")
    .push(entity)
    .write();
};

const addMemoSection = (subject, entities = []) => {
  db.get("memo").push({ subject, entities }).write();
};

const updateMemoEntity = (entity, entityIndex, sectionIndex) => {
  db.get("memo")
    .find((_, index) => index === sectionIndex)
    .get("entities")
    .find((_, index) => index === entityIndex)
    .assign({ input: entity.input, char: entity.char })
    .write();
};

const updateMemoSubject = (subject, sectionIndex) => {
  db.get("memo")
    .find((_, index) => index === sectionIndex)
    .assign({ subject })
    .write();
};

const removeMemoEntity = (entityIndex, sectionIndex) => {
  db.get("memo")
    .find((_, index) => index === sectionIndex)
    .get("entities")
    .remove((_, index) => index === entityIndex)
    .write();
};
const removeMemoSection = (sectionIndex) => {
  db.get("memo")
    .remove((_, index) => index === sectionIndex)
    .write();
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
