import React, { Fragment, useState } from "react";
import { Route, Switch } from "react-router-dom";

import EditDeck from "./EditDeck";
import Deck from "./Deck";
import Study from "./Study";
import EditCard from "./EditCard";

export default function View() {
  const [update, setUpdate] = useState(false);
  return (
    <Fragment>
      <Switch>
        <Route exact path="/decks/:deckId/cards/:cardId/edit">
          <EditCard mode={"Edit"} setUpdate={setUpdate} update={update} />
        </Route>
        <Route exact path="/decks/:deckId/cards/new">
          <EditCard mode={"Create"} setUpdate={setUpdate} update={update} />
        </Route>
        <Route exact path="/decks/:deckId/study">
          <Study />
        </Route>
        <Route exact path="/decks/:deckId/edit">
          <EditDeck setUpdate={setUpdate} update={update} />
        </Route>
        <Route exact path="/decks/:deckId">
          <Deck setUpdate={setUpdate} update={update} />
        </Route>
      </Switch>
    </Fragment>
  );
}