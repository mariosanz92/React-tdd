import React, { Component } from 'react';
import NewRestaurantForm from './NewRetaurantForm';
import RestaurantList from './RestaurantList';

export default class RestaurantListPage extends Component {
    state = { restaurantNames: [] }

    handleAddRestaurant = (newRestaurantName) => {
      this.setState(state => ({
        restaurantNames: [
          newRestaurantName,
          ...state.restaurantNames,
        ],
      }));
    }

    render() {
      const { restaurantNames } = this.state;
      return (
        <div>
          <button data-set= 'addRestaurantButton'>
            Add Restaurant
          </button>
          <NewRestaurantForm
            onSave = {this.handleAddRestaurant}
          />
          <RestaurantList restaurantNames = {restaurantNames} />
        </div>
      );
    }
}
