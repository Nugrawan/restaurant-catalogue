import FavoriteRestaurant from '../../data/restopedia-idb';
import FavoriteRestaurantView from './liked-restaurant/favorite-restaurant-view';
import FavoriteRestaurantShowPresenter from './liked-restaurant/favorite-restaurant-show-presenter';

const view = new FavoriteRestaurantView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    // eslint-disable-next-line no-new
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurant });
    // const restaurants = await FavoriteRestaurant.getAllRestaurants();
    // const restaurantsContainer = document.querySelector('#restaurantFavoritedList');
    // restaurants.forEach((restaurant) => {
    //   restaurantsContainer.innerHTML += createRestaurantItem(restaurant);
    // });
  },
};

export default Favorite;
