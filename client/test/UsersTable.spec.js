import React from 'react';
import { expect } from 'chai';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import users_fixture from './fixtures/users_fixture';
import UsersTable from '../src/components/UsersTable';

Enzyme.configure({ adapter: new Adapter() });

describe('UsersTable component', () => {
  const render = Enzyme.render;

  const filledWrapper = render(<UsersTable users={users_fixture} getData={() => { return null; } } />);

  it('Should render the correct number of user items', () => {
    expect(filledWrapper.children()).to.have.length(users_fixture.length);
  });
});