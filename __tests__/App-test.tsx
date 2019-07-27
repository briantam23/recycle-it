import * as React from 'react';
import * as renderer from 'react-test-renderer';

import App from '../App';

import NavigationTestUtils from 'react-navigation/NavigationTestUtils';

describe('App', () => {
  jest.useFakeTimers();
  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it('snapshot test', () => {
    const tree = renderer.create(
      <App/>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});