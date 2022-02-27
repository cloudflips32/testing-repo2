import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

import './store';

describe('Card tests', () => {
  it('runs without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the Card as expected', () => {
    const card = [{ title: 'funCard', content: 'Its a fun card!'}];
    const tree = renderer
    .create(
      <Card title={card[0].title} content={card[0].content}/>
      )
    .toJSON();
  expect(tree).toMatchSnapshot();
  })
})