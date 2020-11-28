import React, { FC, ReactElement, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

import ExpandableDiv, { ExpandableProps } from "../common/ExpandableDiv";
import Separator from "../common/Separator";
import colors from "../config/color";
import fontFamilies from "../config/fontFamily";
import {
  addMemoEntity,
  getMemo,
  removeMemoEntity,
  // resetTestMemo,
  updateMemoEntity,
  updateMemoSubject,
} from "../db/api/memo";
import MemoSection from "./MemoSection";

interface MemoProps extends ExpandableProps {}

const Memo: FC<MemoProps> = ({ expanded }): ReactElement => {
  const classes = useStyle();

  const [memo, setMemo] = useState<Memo.SectionType[]>([]);

  useEffect(() => {
    const memo = getMemo();
    // resetTestMemo();
    setMemo(memo);
  }, [memo]);

  const handleSectionEntityChange = (
    value: string,
    entityIndex: number,
    sectionIndex: number
  ) => {
    const [char, input] = value.split(/=|＝/);
    // Creating new entity
    entityIndex === -1
      ? addMemoEntity({ input, char }, sectionIndex)
      : //update existing entity
        updateMemoEntity({ input, char }, entityIndex, sectionIndex);
  };

  const handleSectionSubjectChange = (
    subject: string,
    sectionIndex: number
  ) => {
    updateMemoSubject(subject, sectionIndex);
  };

  const handleSectionEntityDelete = (
    entityIndex: number,
    sectionIndex: number
  ) => {
    removeMemoEntity(entityIndex, sectionIndex);
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
              onSectionEntityDelete={(entityIndex: number) =>
                handleSectionEntityDelete(entityIndex, index)
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
