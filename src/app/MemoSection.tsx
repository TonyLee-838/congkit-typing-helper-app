import React, { FC, ReactElement, useState } from "react";
import { createUseStyles } from "react-jss";
import MemoAddButton from "./MemoAddButton";
import MemoControlButtons from "./MemoControlButtons";
import MemoEntity from "./MemoEntity";

interface MemoSectionProps {
  section: Memo.SectionType;
}

const MemoSection: FC<MemoSectionProps> = ({ section }): ReactElement => {
  const classes = useStyle();
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState("");

  return (
    <div className={classes.container}>
      <h3 className={classes.subject}>{section.subject}</h3>

      <div className={classes.section}>
        {section.entities.map((entity, index) => (
          <MemoEntity
            editMode={editMode && editIndex === index.toString()}
            entity={entity}
            onClick={() => setEditIndex(index.toString())}
          />
        ))}

        {editMode && (
          <MemoAddButton
            editable={editIndex === "new"}
            onAddButtonClick={() => setEditIndex("new")}
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
    margin: "5px 0px 5px 0px",
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
