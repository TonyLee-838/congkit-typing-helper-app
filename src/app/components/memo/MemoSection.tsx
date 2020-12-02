import React, { FC, ReactElement, useContext } from "react";
import { createUseStyles } from "react-jss";
import { action } from "mobx";
import { observer } from "mobx-react-lite";

import MemoAddButton from "./MemoAddButton";
import MemoControlButtons from "./MemoControlButtons";
import MemoEntity from "./MemoEntity";
import MemoSubject from "./MemoSubject";
import { MemoContext } from "../../stores/context";

interface MemoSectionProps {
  editable: boolean;
  section: Memo.SectionType;
  sectionIndex: number;
}

const MemoSection: FC<MemoSectionProps> = observer(
  ({ section, sectionIndex, editable }): ReactElement => {
    const classes = useStyle();

    const memoStore = useContext(MemoContext);
    const { editEntityIndex: editIndex } = memoStore;

    return (
      <div className={classes.container}>
        <MemoSubject
          subject={section.subject}
          editable={editable && editIndex === "subject"}
          onCancel={action(() => memoStore.clearEditEntityIndex())}
          onClick={action(() => memoStore.setEditEntityIndex("subject"))}
          onDelete={action(() => {
            memoStore.removeSection(sectionIndex);
            memoStore.clearEditEntityIndex();
          })}
          onSubmit={action((value: any) => {
            memoStore.changeSectionSubject(value, sectionIndex);
            memoStore.clearEditEntityIndex();
          })}
        />

        <div className={classes.section}>
          {section.entities &&
            section.entities.map((entity, index) => (
              <MemoEntity
                editable={editable && editIndex === index.toString()}
                entity={entity}
                onClick={action(() =>
                  memoStore.setEditEntityIndex(index.toString())
                )}
                onCancel={action(() => memoStore.clearEditEntityIndex())}
                onDelete={action(() => {
                  memoStore.removeEntity(sectionIndex, index);
                  memoStore.clearEditEntityIndex();
                })}
                onSubmit={action((value: any) => {
                  memoStore.changeEntity(value, sectionIndex, index);
                  memoStore.clearEditEntityIndex();
                })}
              />
            ))}

          {editable && (
            <MemoAddButton
              editable={editIndex === "new"}
              onAddButtonClick={action(() =>
                memoStore.setEditEntityIndex("new")
              )}
              onCancel={action(() => memoStore.clearEditEntityIndex())}
              onSubmit={action((value: any) => {
                memoStore.addEntity(value, sectionIndex);
                memoStore.clearEditEntityIndex();
              })}
              placeholder="例＝人弓"
            />
          )}
        </div>

        <MemoControlButtons
          editable={editable}
          onEdit={action(() => memoStore.setEditSectionIndex(sectionIndex))}
          onFinish={action(() => memoStore.clearEditSectionIndex())}
        />
      </div>
    );
  }
);

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
