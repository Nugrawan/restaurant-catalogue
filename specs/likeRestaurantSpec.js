/* eslint-disable no-undef */
import FavoriteRestaurant from '../src/scripts/data/restopedia-idb';
import createLikeButtonPresenterWithResto from './helper/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenterWithResto({ id: 's1knt6za9kkfw1e867' });

    expect(document.querySelector('[aria-label="Add restaurant to favorite"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await createLikeButtonPresenterWithResto({ id: 's1knt6za9kkfw1e867' });

    expect(document.querySelector('[aria-label="Remove restaurant from favorite"]'))
      .toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await createLikeButtonPresenterWithResto({ id: 's1knt6za9kkfw1e867' });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurant.getRestaurant('s1knt6za9kkfw1e867');
    expect(restaurant).toEqual({ id: 's1knt6za9kkfw1e867' });

    FavoriteRestaurant.deleteRestaurant('s1knt6za9kkfw1e867');
  });

  it('should not add a restaurant again when its already liked', async () => {
    await createLikeButtonPresenterWithResto({ id: 's1knt6za9kkfw1e867' });

    await FavoriteRestaurant.putRestaurant({ id: 's1knt6za9kkfw1e867' });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([{ id: 's1knt6za9kkfw1e867' }]);
    FavoriteRestaurant.deleteRestaurant('s1knt6za9kkfw1e867');
  });

  it('should not add a restaurant when it has no id', async () => {
    await createLikeButtonPresenterWithResto({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([]);
  });
});
