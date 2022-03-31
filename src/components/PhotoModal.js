import React from "react";
//Font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const PhotoModal = (props) => {
  const { clickedPhoto, setClickedPhoto, isFullScreen, setFullScreen } = props;
  const exitPhotoModal = (e) => {
    const element = e.target;
    if (
      element.classList.contains("shadow") ||
      element.classList.contains("close_modal_wrapper")
    ) {
      setFullScreen(false);
      setClickedPhoto("");
    }
  };

  return (
    <>
      {isFullScreen && (
        <div className="shadow" onClick={exitPhotoModal}>
          <div className="close_modal_wrapper">
            <FontAwesomeIcon icon={faXmark} size="2x" className="close_modal" />
            <span>Закрыть</span>
          </div>
          <div className="photo_container">
            <img src={clickedPhoto} alt="Фото спектакля" />
          </div>
        </div>
      )}
    </>
  );
};
