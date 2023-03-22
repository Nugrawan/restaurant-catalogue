/* eslint-disable no-new */
/* eslint-disable no-undef */
import FavoriteRestaurantView from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/liked-restaurant/favorite-restaurant-show-presenter';
import FavoriteRestaurant from '../src/scripts/data/restopedia-idb';

describe('Showing all favorite restaurant', () => {
  let view;
  const renderTemplate = () => {
    view = new FavoriteRestaurantView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('When no restaurant have been liked', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurant);
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurant have been liked', (done) => {
      document.getElementById('restaurantFavoritedList').addEventListener('restaurant:updated', () => {
        expect(document.querySelectorAll('.restaurant-item_not_found').length).toEqual(1);
        done();
      });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurant);
      favoriteRestaurants.getAllRestaurants.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });

  describe('When favorite restaurants exist', () => {
    it('should show the restaurants', (done) => {
      document.getElementById('restaurantFavoritedList').addEventListener('restaurant:updated', () => {
        expect(document.querySelectorAll('article').length).toEqual(2);
        done();
      });
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurant, false);
      favoriteRestaurants.getAllRestaurants.and.returnValues([
        {
          id: 'firstId',
          name: 'Name1',
          rating: 3,
          description: 'Ini adalah restaurant 1',
        },
        {
          id: 'secondId',
          name: 'name2',
          rating: 4,
          description: 'Ini adalah restaurant 2',
        },
      ]);
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
