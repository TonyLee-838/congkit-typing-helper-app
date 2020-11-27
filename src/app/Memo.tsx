import React, { FC, ReactElement, useState } from "react";
import { createUseStyles } from "react-jss";
import ExpandableDiv, { ExpandableProps } from "./common/ExpandableDiv";
import Separator from "./common/Separator";
import colors from "./config/color";
import fontFamilies from "./config/fontFamily";
import MemoSection from "./MemoSection";

export type MemoEntityType = {
  input: string;
  char: string;
};
export type MemoSectionType = {
  subject: string;
  entities: MemoEntityType[];
};

const fakeMemo: MemoSectionType[] = [
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

interface MemoProps extends ExpandableProps {}

const Memo: FC<MemoProps> = ({ expanded }): ReactElement => {
  const classes = useStyle();

  // eslint-disable-next-line
  const [memo, setMemo] = useState<MemoSectionType[]>(fakeMemo);
  return (
    <ExpandableDiv expanded={expanded}>
      <div className={classes.container}>
        {memo.map((section, index) => (
          <>
            <MemoSection section={section} />
            {index !== memo.length - 1 && <Separator />}
          </>
        ))}
      </div>
    </ExpandableDiv>
  );
};

const useStyle = createUseStyles({
  container: {
    margin: 0,
    padding: "10px",
    fontFamily: fontFamilies.text,
  },
  subject: {
    margin: 0,
  },
  content: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
  },
  entity: {
    // fontFamily: fontFamilies.text,
  },
  key: {
    color: colors.darkBlue,
    fontWeight: "bolder",
    marginRight: "4px",
  },
  value: {
    color: colors.red,
  },
});

export default Memo;
