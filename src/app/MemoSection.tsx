import React, { FC, ReactElement } from "react";
import { createUseStyles } from "react-jss";
import MemoEntity from "./MemoEntity";

interface MemoSectionProps {
  section: Memo.SectionType;
}

const MemoSection: FC<MemoSectionProps> = ({ section }): ReactElement => {
  const classes = useStyle();
  return (
    <div className={classes.container}>
      <h3 className={classes.subject}>{section.subject}</h3>
      <div className={classes.section}>
        {section.entities.map((entity) => (
          <MemoEntity entity={entity} />
        ))}
      </div>
    </div>
  );
};

const useStyle = createUseStyles({
  container: {
    margin: "5px 0px 5px 0px",
  },
  subject: {
    margin: 0,
  },
  section: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
  },
});

export default MemoSection;
