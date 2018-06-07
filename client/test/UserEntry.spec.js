import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import UserEntry from '../src/components/UserEntry';
import users_fixture from './fixtures/users_fixture';

Enzyme.configure({ adapter: new Adapter() });

describe('<UserEntry />', () => {
  const shallow = Enzyme.shallow;
  const user = users_fixture[0];
  const wrapper = shallow(<UserEntry user={user} />);

  it('Should show the user\'s id, name, and email', () => {
    expect(wrapper.html()).to.contain(`<td>${user.id}</td>`);
    expect(wrapper.html()).to.contain(`<td>${user.name}</td>`);
    expect(wrapper.html()).to.contain(`<td>${user.email}</td>`);
  });
});