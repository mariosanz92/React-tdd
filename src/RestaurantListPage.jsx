import React, { Component } from 'react';
import NewRestaurantForm from './NewRetaurantForm';
import RestaurantList from './RestaurantList';

export default class RestaurantListPage extends Component {
    state = {
      restaurantNames: [],
      showNewRestaurantForm: false,
    }
    handleShowNewRestaurant = () => {
      this.setState({ showNewRestaurantForm: true });
    }

    handleAddRestaurant = (newRestaurantName) => {
      this.setState(state => ({
        restaurantNames: [
          newRestaurantName,
          ...state.restaurantNames,
        ],
        showNewRestaurantForm: false,
      }));
    }

    render() {
      const { restaurantNames, showNewRestaurantForm } = this.state;
      return (
        <div>
          <button
            onClick = {this.handleShowNewRestaurant}
            data-set= 'addRestaurantButton'>
              Add Restaurant
          </button>
          {showNewRestaurantForm ? <NewRestaurantForm onSave = {this.handleAddRestaurant}/> : null}
          <RestaurantList restaurantNames = {restaurantNames} />
        </div>
      );
    }
}
