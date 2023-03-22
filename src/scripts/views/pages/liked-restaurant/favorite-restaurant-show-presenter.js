class FavoriteRestaurantShowPresenter {
  constructor({ view, favoriteRestaurants }) {
    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;

    this._showFavoriteRestaurants();
  }

  async _showFavoriteRestaurants() {
    const restaurants = await this._favoriteRestaurants.getAllRestaurants();
    this._displayRestaurants(restaurants);
  }

  // eslint-disable-next-line class-methods-use-this
  _displayRestaurants(restaurants) {
    this._view.showFavoriteRestaurant(restaurants);
  }
}

export default FavoriteRestaurantShowPresenter;
