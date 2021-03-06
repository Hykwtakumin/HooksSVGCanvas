import React, { useState } from "react";
import { EditorMode } from "../EditorMode";

interface ModeSelectorProps {
  modeChange: (e: React.SyntheticEvent<HTMLSelectElement>) => void;
}

/*そもそも編集モードとかはあまりよくないのではないか?*/
export const ModeSelector = (props: ModeSelectorProps) => {
  const { modeChange } = props;

  return (
    <React.Fragment>
      <select
        className={"toolSelectMenu"}
        defaultValue={"draw"}
        onChange={modeChange}
      >
        <option value={"draw"}>お絵かき</option>
        <option value={"edit"}>編集</option>
      </select>
    </React.Fragment>
  );
};
