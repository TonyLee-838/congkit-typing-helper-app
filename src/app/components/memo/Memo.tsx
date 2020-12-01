import React, { FC, ReactElement, useEffect, useState } from "react";
import { createUseStyles } from "react-jss";

import ExpandableDiv, { ExpandableProps } from "../common/ExpandableDiv";
import Separator from "../common/Separator";
import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";
import {
  addMemoEntity,
  addMemoSection,
  getMemo,
  removeMemoEntity,
  removeMemoSection,
  // resetTestMemo,
  updateMemoEntity,
  updateMemoSubject,
} from "../../../db/api/memo";
import MemoAddButton from "./MemoAddButton";
import MemoSection from "./MemoSection";

interface MemoProps extends ExpandableProps {}

const Memo: FC<MemoProps> = ({ expanded }): ReactElement => {
  const classes = useStyle();

  const [memo, setMemo] = useState<Memo.SectionType[]>([]);
  const [additionMode, setAdditionMode] = useState(false);

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

  const handleSectionSubjectAdd = (subject: any) => {
    addMemoSection(subject);
    setAdditionMode(false);
  };

  const handleSectionDelete = (sectionIndex: number) => {
    removeMemoSection(sectionIndex);
    setMemo(memo.filter((_, i) => i !== sectionIndex));
  };

  return (
    <ExpandableDiv expanded={expanded}>
      <div className={classes.container}>
        {memo &&
          memo.map((section, index) => (
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
                onSectionDelete={() => handleSectionDelete(index)}
              />
              <Separator />
            </>
          ))}
        <MemoAddButton
          editable={additionMode}
          onAddButtonClick={() => setAdditionMode(true)}
          onSubmit={handleSectionSubjectAdd}
          onCancel={() => setAdditionMode(false)}
          placeholder=""
        />
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
  heading: {
    margin: "5px 5px 5px 10px",
    fontFamily: fontFamilies.text,
    color: colors.dark,
    fontStyle: "italic",
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
