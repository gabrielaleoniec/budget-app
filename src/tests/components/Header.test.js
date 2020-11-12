import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('Should render Header correctly', () => {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h1').text()).toBe('Expensify App');
    expect(wrapper).toMatchSnapshot();
});
