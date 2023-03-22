/* eslint-disable no-undef */
import createLikeButtonPresenterWithResto from './helper/testFactories';
import FavoriteRestaurant from '../src/scripts/data/restopedia-idb';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurant.putRestaurant({ id: 's1knt6za9kkfw1e867' });
  });

  afterEach(async () => {
    await FavoriteRestaurant.deleteRestaurant('s1knt6za9kkfw1e867');
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithResto({ id: 's1knt6za9kkfw1e867' });

    expect(document.querySelector('[aria-label="Remove restaurant from favorite"]'))
      .toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithResto({ id: 's1knt6za9kkfw1e867' });

    expect(document.querySelector('[aria-label="Add restaurant to favorite"]'))
      .toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await createLikeButtonPresenterWithResto({ id: 's1knt6za9kkfw1e867' });

    document.querySelector('[aria-label="Remove restaurant from favorite"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await createLikeButtonPresenterWithResto({ id: 's1knt6za9kkfw1e867' });

    await FavoriteRestaurant.deleteRestaurant('s1knt6za9kkfw1e867');
    document.querySelector('[aria-label="Remove restaurant from favorite"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([]);
  });
});
