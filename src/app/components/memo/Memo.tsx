import React, { FC, ReactElement, useContext } from "react";
import { createUseStyles } from "react-jss";
import { action } from "mobx";
import { observer } from "mobx-react-lite";

import ExpandableDiv from "../common/ExpandableDiv";
import Separator from "../common/Separator";
import MemoAddButton from "./MemoAddButton";
import MemoSection from "./MemoSection";
import colors from "../../config/color";
import fontFamilies from "../../config/fontFamily";
import { GlobalStateContext, MemoContext } from "../../stores/context";

const Memo: FC = observer(
  (): ReactElement => {
    const classes = useStyle();

    const globalStateStore = useContext(GlobalStateContext);
    const memoStore = useContext(MemoContext);

    return (
      <ExpandableDiv expanded={globalStateStore.selectedButton === "memo"}>
        <div className={classes.container}>
          {memoStore.memo &&
            memoStore.memo.map((section, index) => (
              <>
                <MemoSection section={section} sectionIndex={index} />
                <Separator />
              </>
            ))}
          <MemoAddButton
            editable={memoStore.editSectionIndex === "new"}
            onAddButtonClick={action(() =>
              memoStore.setEditSectionIndex("new")
            )}
            onSubmit={action((value: any) => {
              memoStore.addSection(value);
              memoStore.clearEditSectionIndex();
            })}
            onCancel={action(() => memoStore.clearEditSectionIndex())}
            placeholder=""
          />
        </div>
      </ExpandableDiv>
    );
  }
);

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
