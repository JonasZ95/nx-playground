import React from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useSWR from 'swr';
import { Game, IApi } from '../../fakeapi-api';

import './game-detail.module.scss';

/* eslint-disable-next-line */
export interface GameDetailProps {
  game: Game;
}

export function GameDetail(props: GameDetailProps) {
  const { game } = props;
  return (
    <Card>
      <Card.Body>
        {game.id}
      </Card.Body>
    </Card>
  );
}

export interface GameDetailRouteProps {
  api: IApi;
}

export function GameDetailRoute(props: GameDetailRouteProps) {
  const { api } = props;
  const {id} = useParams<{id: string}>();
  const { data: game, isValidating } = useSWR(['game', id], async () => {
    const game = await api.getGame(id);
    return game;
  });
  if (isValidating) return <Spinner animation="border" />;
  if(game === undefined) return <h1>Invalid game</h1>;

  return <GameDetail game={game}/>;
}

export default GameDetail;
