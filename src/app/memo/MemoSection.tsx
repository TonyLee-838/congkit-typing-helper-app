import React, { FC, ReactElement, useState } from "react";
import { createUseStyles } from "react-jss";

import MemoAddButton from "./MemoAddButton";
import MemoControlButtons from "./MemoControlButtons";
import MemoEntity from "./MemoEntity";
import MemoSubject from "./MemoSubject";

interface MemoSectionProps {
  section: Memo.SectionType;
  onSectionEntityChange: Function;
  onSectionEntityDelete: Function;
  onSectionSubjectChange: Function;
}

const MemoSection: FC<MemoSectionProps> = ({
  section,
  onSectionEntityChange,
  onSectionEntityDelete,
  onSectionSubjectChange,
}): ReactElement => {
  const classes = useStyle();
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  return (
    <div className={classes.container}>
      <MemoSubject
        subject={section.subject}
        editMode={editMode && editIndex === "subject"}
        onCancel={() => setEditIndex("")}
        onClick={() => setEditIndex("subject")}
        onSubmit={(value) => {
          onSectionSubjectChange(value);
          setEditIndex("");
        }}
      />

      <div className={classes.section}>
        {section.entities.map((entity, index) => (
          <MemoEntity
            editMode={editMode && editIndex === index.toString()}
            entity={entity}
            onClick={() => setEditIndex(index.toString())}
            onCancel={() => setEditIndex("")}
            onDelete={() => {
              onSectionEntityDelete(index);
              setEditIndex("");
            }}
            onSubmit={(value) => {
              onSectionEntityChange(value, index);
              setEditIndex("");
            }}
          />
        ))}

        {editMode && (
          <MemoAddButton
            editable={editIndex === "new"}
            onAddButtonClick={() => setEditIndex("new")}
            onCancel={() => setEditIndex("")}
            onSubmit={(value) => {
              onSectionEntityChange(value, -1);
              setEditIndex("");
            }}
            placeholder="例＝人弓"
          />
        )}
      </div>

      <MemoControlButtons
        editMode={editMode}
        onEdit={() => setEditMode(true)}
        onFinish={() => setEditMode(false)}
      />
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    position: "relative",
    margin: "7px 0px 7px 0px",
  },

  subject: {
    margin: 0,
    cursor: "pointer",
  },
  section: {
    display: "grid",
    gridTemplateColumns: `repeat(2,1fr)`,
  },
  icons: {
    display: "flex",
    width: "max-content",
    alignItems: "center",
    marginLeft: "20px",
  },

  editIcon: {
    position: "absolute",
    width: "max-content",
    top: "3px",
    right: "30px",
    opacity: 0.1,
    "&:hover": {
      opacity: 1,
    },
    fontSize: "15px",
    fontWeight: "bold",
  },
});

export default MemoSection;
