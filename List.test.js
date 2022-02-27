import React from 'react';
import renderer from 'react-test-renderer';
import List from './List';
import store from './store';



describe('List tests', () => {

  it('renders the UI as expected', () => {
    const lists = [{id: store.lists[0].id, header: store.lists[0].header}];
    const tree = renderer
    .create(
      <List cards={lists}/>
    )
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
})