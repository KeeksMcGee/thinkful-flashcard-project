import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../utils/api";

export default function ButtonDeckDelete({ deckId, setUpdate, update }) {
  const history = useHistory();
 
  const BtnDelete = () => {
    const windowText = 
          "Are you sure you want to delete this deck?\n\nYou will not be able to undo this."
    if(window.confirm(windowText)) {
      function reloadDeck() {
        setUpdate(!update);
        history.push("/");
      }
      const abortController = new AbortController();
      deleteDeck(deckId, abortController.signal)
      .then(reloadDeck())
      .catch((err)=> console.log(err));
      return () => abortController.abort();
    }
  };
  
     return (
        <Fragment>
          <button type="button" className="btn btn-danger m-1" onClick={BtnDelete}>
            <span className="oi oi-trash m-1"/>
             </button>
         </Fragment>
     );
}