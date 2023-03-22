import RestaurantDb from '../../data/resto-source';
import { createRestaurantItem } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
    <h2>Restaurant List</h2>
    <section id="restaurantList"></section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantDb.homePage();
    const restaurantsContainer = document.querySelector('#restaurantList');
    restaurants.restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItem(restaurant);
    });
  },
};

export default HomePage;
