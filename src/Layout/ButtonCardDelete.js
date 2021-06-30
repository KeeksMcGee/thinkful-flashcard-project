import React, { Fragment } from "react";
import { deleteCard } from "../utils/api";

export default function ButtonCardDelete({ id, setUpdate, update }) {
  
  const btnDelete = () => {
      const windowText = 
            "Delete this Card?\n\nYou will not be able to undo this.";
    
    if(window.confirm(windowText)) {
      function reloadCards() {
        setUpdate(!update);
      }
      const abortController = new AbortController();
      deleteCard(id, abortController.signal)
      .then(reloadCards(abortController))
      .catch((err) => console.log(err));
      return () => abortController.abort();
    }
  };
  
  return (
  <Fragment>
      <button type="button" className="btn btn-danger m-1" onClick={btnDelete}>
        <span className="oi oi-trash m-1" />
      </button>
      </Fragment>
    );
}