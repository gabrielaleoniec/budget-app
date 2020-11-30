import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';
import { startLogInGoogle, startLogInGitHub } from '../../actions/auth';

test('Should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogInGoogle on button click', () => {
    const startLogInGoogle = jest.fn();
    const wrapper = shallow(<LoginPage startLogInGoogle={startLogInGoogle} startLogInGitHub={startLogInGitHub} />);
    wrapper.find('button').first().simulate('click');
    expect(startLogInGoogle).toHaveBeenCalled();
});

test('Should call startLogInGitHub on button click', () => {
    const startLogInGitHub = jest.fn();
    const wrapper = shallow(<LoginPage startLogInGoogle={startLogInGoogle} startLogInGitHub={startLogInGitHub} />);
    wrapper.find('button').last().simulate('click');
    expect(startLogInGitHub).toHaveBeenCalled();
});