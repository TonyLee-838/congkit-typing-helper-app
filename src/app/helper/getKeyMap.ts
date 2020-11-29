import _ from "lodash";

const getKeyMap = (keys: KeyInfo[][]) => {
  const flatten = _.flatten(keys);
  const map: KeyMapType = {};
  flatten.forEach((key) => (map[key.letter] = key.character));
  return map;
};

export default getKeyMap;
