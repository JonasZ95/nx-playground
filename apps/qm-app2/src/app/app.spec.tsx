import { render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import { FakeApi } from '../fakeapi-api';
import {createMemoryHistory} from 'history';

import App, { AppView } from './app';

describe('App', () => {
  it('should render successfully', () => {
    const history = createMemoryHistory();
    const { baseElement } = render(
      <Router history={history}>
        <AppView games={[]} api={new FakeApi()} />
      </Router>
    );

    expect(baseElement).toBeTruthy();
  });
});