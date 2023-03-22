/* eslint-disable no-undef */
import favoriteRestaurantModel from './contract/favoriteRestaurantContract';
import FavoriteRestaurant from '../src/scripts/data/restopedia-idb';

describe('Favorite Restaurant Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurant.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurant.deleteRestaurant(restaurant.id);
    });
  });

  favoriteRestaurantModel(FavoriteRestaurant);
});
