import { render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import { Game } from '../../fakeapi-api';
import {createMemoryHistory} from 'history';

import GameCard from './game-card';

describe('GameCard', () => {
  const game: Game = {
    id: 'a',
    description: 'game',
    name: 'game#a',
    rating: 1.99,
    image: '',
    price: 2.99,
  };
  it('should render successfully', () => {
    const history = createMemoryHistory();

    const { baseElement } = render(
      <Router history={history}>
        <GameCard game={game} />
      </Router>
    );
    expect(baseElement).toBeTruthy();
  });
});
