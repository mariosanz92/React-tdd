import React from 'react';
import { mount } from 'enzyme';
import NewRestaurantForm from '../../src/NewRetaurantForm';

describe('NewRestaurantForm', () => {
  describe('Clicking save button', () => {
    it('calls the onSave handler', () => {
      const saveHandler = jest.fn();

      const wrapper = mount(<NewRestaurantForm onSave={saveHandler} />);
      wrapper
        .find('[data-set="newRestaurantName"]')
        .simulate('change', { target: { value: 'sushi Place' } });

      wrapper
        .find('[data-set="saveNewRestaurantButton"]')
        .simulate('click');

      expect(saveHandler).toHaveBeenCalledWith('sushi Place');
    });
  });
});
