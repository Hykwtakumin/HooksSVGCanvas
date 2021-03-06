import * as React from "react";
import { useState, useRef, FC, useEffect } from "react";
import * as ReactDOM from "react-dom";
import { getPagesWithImage } from "./UseScrapbox";
import { titleImageMap } from "./utils";

interface ImportPotalProps {
  modalSubmit: (imageURL: string) => void;
}

/*画像をインポートする*/
export const ImportPotal = (props: ImportPotalProps) => {
  const { modalSubmit } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const [imagePagesList, setImagePagesList] = useState([]);

  useEffect(() => {
    /*モーダルを開いたら一度だけ取得する*/
    /*そこまで頻繁にやらなくても大丈夫かな?*/
    const pages = getPagesWithImage().then(pagesList => {
      const titleImageMap = pagesList.map(page => {
        return [page.title, page.image];
      });
      console.dir(titleImageMap);
      setImagePagesList(titleImageMap);
    });
  }, []);

  const modal = useRef(null);
  const showModal = () => {
    modal.current.showModal();
  };
  const closeModal = () => {
    modal.current.close();
  };

  const onInputChange = (event: React.SyntheticEvent) => {};

  return (
    <React.Fragment>
      <input
        type={"button"}
        value={"Import"}
        className={"button toolButton"}
        onClick={showModal}
      />
      <dialog ref={modal}>
        <h3>画像をインポートする</h3>
        <p>インポートしたい画像のURLまたはページ名を入力してください</p>
        <input
          type={"text"}
          onChange={onInputChange}
          className={"modalTextArea"}
        />
        <div className={"modalImageList"} />
        <div className={"modalButtons"}>
          <input type={"button"} value={"キャンセル"} onClick={closeModal} />
          <input type={"button"} value={"インポート"} onClick={closeModal} />
        </div>
      </dialog>
    </React.Fragment>
  );
};
