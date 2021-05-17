import React from 'react';
import { Card } from 'react-bootstrap';
import { Game } from '../../fakeapi-api';
import { formatRating } from '@qm-base/util-formatters';

import styles from './game-card.module.scss';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface GameCardProps {
  game: Game;
}

export function GameCard(props: GameCardProps) {
  const { game } = props;
  return (
    <Card>
      <Card.Header>{game.name}</Card.Header>
      <Card.Img variant="top" src={game.image} />
      <Card.Body>
        <Card.Text>{game.description}</Card.Text>
      </Card.Body>

      <Card.Footer>
        <span style={{ fontWeight: 'bold' }}>Rating:</span>{' '}
        {formatRating(game.rating)}
      </Card.Footer>
      <Link className="stretched-link" to={`/game/${game.id}`}/>
    </Card>
  );
}

export default GameCard;
