import React from 'react';
import { shallow } from 'enzyme';
import ConfirmationModal from '../../components/ConfirmationModal';

let history, removeExpense, hideConfirmationModal, showConfirmationBox, wrapper;
beforeEach(() => {
    removeExpense = jest.fn();
    hideConfirmationModal = jest.fn();
    showConfirmationBox = false;
    history = { push: jest.fn() };
    wrapper = shallow(<ConfirmationModal
        removeExpense={removeExpense}
        hideConfirmationModal={hideConfirmationModal}
        showConfirmationBox={showConfirmationBox} />);
});

test('Should render ConfirmationModal correctly', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.confirmation-box--show').length).toBe(0);
});

test('Should have proper css class on showConfirmationBox true', () => {
    wrapper = shallow(<ConfirmationModal
        removeExpense={removeExpense}
        hideConfirmationModal={hideConfirmationModal}
        showConfirmationBox={true} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.confirmation-box--show')).toHaveLength(1);
});

test('Should call startRemoveExpense with right properties on button click ', () => {
    wrapper.find('button').last().simulate('click');
    expect(removeExpense).toHaveBeenCalled();
});

test('Should call startRemoveExpense with right properties on button click ', () => {
    wrapper.find('button').first().simulate('click');
    expect(hideConfirmationModal).toHaveBeenCalled();
});