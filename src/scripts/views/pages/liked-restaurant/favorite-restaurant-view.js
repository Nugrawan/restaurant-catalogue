/* eslint-disable class-methods-use-this */
import { createRestaurantItem } from '../../templates/template-creator';

class FavoriteRestaurantView {
  getTemplate() {
    return `
    <h2 class="favorite-title">Favorited Restaurat</h2>
      <section id="restaurantFavoritedList"></section>
    `;
  }

  showFavoriteRestaurant(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItem(restaurant)), '');
    } else {
      html = this._getEmptyRestaurant();
    }
    document.getElementById('restaurantFavoritedList').innerHTML = html;
    document.getElementById('restaurantFavoritedList').dispatchEvent(new Event('restaurant:updated'));
  }

  _getEmptyRestaurant() {
    return '<div class="restaurant-item_not_found">Belum ada restaurant yang disukai</div>';
  }
}

export default FavoriteRestaurantView;
