import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('Should render Header correctly', () => {
    const wrapper = shallow(<Header startLogOut={() => {}} />);
    expect(wrapper.find('h1').text()).toBe('Expensify App');
    expect(wrapper).toMatchSnapshot();
});

test('Should call startLogout on button click', () => {
    const startLogOut = jest.fn();
    const wrapper = shallow(<Header startLogOut={startLogOut} />);
    wrapper.find('button').simulate('click');
    expect(startLogOut).toHaveBeenCalled()
});
