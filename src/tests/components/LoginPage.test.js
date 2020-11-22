import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';
import { startLogIn } from '../../actions/auth';

test('Should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogIn on button click', () => {
    const startLogIn = jest.fn();
    const wrapper = shallow(<LoginPage startLogIn={startLogIn} />);
    wrapper.find('button').simulate('click');
    expect(startLogIn).toHaveBeenCalled();
});