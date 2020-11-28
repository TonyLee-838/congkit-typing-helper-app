// const lowdb = require("lowdb");
// const path = require("path");
// const FileSync = require("lowdb/adapters/FileSync");
// const { app, remote } = window.electron;

const DbService = require("./dbService");

// const STORE_PATH = remote.app.getPath("userData");
// // if (process.type !== "renderer") {
// //   if (!fs.pathExistsSync(STORE_PATH)) {
// //     fs.mkdirpSync(STORE_PATH);
// //   }
// // }
// const adapter = new FileSync(path.join(STORE_PATH, "/key-info.json"));
// const db = lowdb(adapter);

const db = DbService("/key-info.json");

const resetKeyInfo = () => {
  const defaultDB = DbService("key-default-info.json");
  const defaultKeyInfo = defaultDB.get("keyInfo").value();

  db.has("keyInfo").unset("keyInfo").write();
  db.set("keyInfo", defaultKeyInfo).write();
};

const getKeyInfo = () => {
  return db.get("keyInfo").value().default;
};

const setKeyHints = (letter, hints) => {
  db.get("keyInfo").flatten().find({ letter }).assign({ hints }).write();
};

const setDefault = () => {
  const db = DbService("key-default-info.json");
  db.set("keyInfo", keys).write();
};

const keys = [
  [
    { letter: "Q", character: "手", hints: "扌㐄夫" },
    { letter: "W", character: "田", hints: "罒母黑" },
    { letter: "E", character: "水", hints: "氵又氺" },
    { letter: "R", character: "口", hints: "口" },
    { letter: "T", character: "廿", hints: "艹䒑卝廾皿丱" },
    { letter: "Y", character: "卜", hints: "亠辶⺊" },
    { letter: "U", character: "山", hints: "凵乚屮" },
    { letter: "I", character: "戈", hints: "丶厶广冫" },
    { letter: "O", character: "人", hints: "亻入㇏𠂉𡿨丘" },
    { letter: "P", character: "心", hints: "忄⺗匕勹弋七" },
  ],
  [
    { letter: "A", character: "日", hints: "曰巴" },
    { letter: "S", character: "尸", hints: "匚𠃌耳乍" },
    { letter: "D", character: "木", hints: "朩寸皮也五" },
    { letter: "F", character: "火", hints: "灬光不" },
    { letter: "G", character: "土", hints: "士" },
    { letter: "H", character: "竹", hints: "㇀丿⺮𠂆礻彳" },
    { letter: "J", character: "十", hints: "十宀" },
    { letter: "K", character: "大", hints: "乂𠂇疒㐅犭" },
    { letter: "L", character: "中", hints: "丨丿丅肀衤" },
  ],
  [
    { letter: "Z", character: "重", hints: "" },
    { letter: "X", character: "難", hints: "" },
    { letter: "C", character: "金", hints: "釒丷四" },
    { letter: "V", character: "女", hints: "巛𠄌㇄㇂𧘇糸" },
    { letter: "B", character: "月", hints: "冂冖骨爫豸夕" },
    { letter: "N", character: "弓", hints: "亅乛阝乙⺄𠂊廴癶" },
    { letter: "M", character: "一", hints: "厂丆工刁" },
  ],
];

module.exports = {
  resetKeyInfo,
  getKeyInfo,
  setKeyHints,
  setDefault,
};
