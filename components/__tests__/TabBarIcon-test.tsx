import 'react-native';
import * as React from 'react';
import TabBarIcon from '../TabBarIcon';
import * as renderer from 'react-test-renderer';


it('TabBarIcon renders correctly', async () => {
  const tree = renderer.create(<TabBarIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});
