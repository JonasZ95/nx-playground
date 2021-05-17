import { render } from '@testing-library/react';
import { Game } from '../../fakeapi-api';

import GameDetail from './game-detail';

describe('GameDetail', () => {
  const game: Game = {
    id: 'a',
    description: 'game',
    name: 'game#a',
    rating: 1.99,
    image: '',
    price: 2.99,
  };

  it('should render successfully', () => {
    const { baseElement } = render(<GameDetail game={game}/>);
    expect(baseElement).toBeTruthy();
  });
});
