import React from 'react';
import { CardColumns, Col, Row, Spinner } from 'react-bootstrap';
import useSWR from 'swr';
import { FakeApi } from '../fakeapi-api';
import styles from './app.module.scss';
import GameCard from './game-card/game-card';
import { Header } from '@qm-base/ui';
import GameDetail, { GameDetailRoute } from './game-detail/game-detail';
import { Route, Switch } from 'react-router-dom';

export function App() {
  const map = styles.app3;
  const api = React.useMemo(() => new FakeApi(), []);
  const { data: games } = useSWR('games', api.getAllGames);

  if (games === undefined) return <Spinner animation="grow" />;

  return (
    <>
      <Header title="Board Games" />
      <div className="main m-2">
        <Row xs={2} md={3} className="g-4 mb-3">
          {games.map((game, ix) => (
            <Col>
              <GameCard game={game} key={ix} />
            </Col>
          ))}
        </Row>
        <Switch>
          <Route
            path="/game/:id"
          >
            <GameDetailRoute api={api}/>
          </Route>
          <Route exact path="/">
            <h1>No Game selected</h1>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
