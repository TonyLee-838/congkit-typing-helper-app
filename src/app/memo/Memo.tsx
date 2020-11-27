import React, { FC, ReactElement, useState } from "react";
import { createUseStyles } from "react-jss";

import ExpandableDiv, { ExpandableProps } from "../common/ExpandableDiv";
import Separator from "../common/Separator";
import colors from "../config/color";
import fontFamilies from "../config/fontFamily";
import MemoSection from "./MemoSection";

const fakeMemo: Memo.SectionType[] = [
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

  const [memo, setMemo] = useState<Memo.SectionType[]>(fakeMemo);

  const handleSectionEntityChange = (
    value: string,
    entityIndex: number,
    sectionIndex: number
  ) => {
    const [char, input] = value.split("＝");
    const copy = memo;

    // Creating new entity
    if (entityIndex === -1) {
      copy[sectionIndex].entities.push({ input, char });
    } else {
      //update existing entity
      copy[sectionIndex].entities[entityIndex] = { input, char };
    }
    setMemo(copy);
  };

  const handleSectionSubjectChange = (value: string, index: number) => {
    const copy = memo;
    copy[index] = {
      subject: value,
      entities: copy[index].entities,
    };

    setMemo(copy);
  };

  return (
    <ExpandableDiv expanded={expanded}>
      <div className={classes.container}>
        {memo.map((section, index) => (
          <>
            <MemoSection
              section={section}
              onSectionEntityChange={(value: string, entityIndex: number) =>
                handleSectionEntityChange(value, entityIndex, index)
              }
              onSectionSubjectChange={(value: string) =>
                handleSectionSubjectChange(value, index)
              }
            />
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
