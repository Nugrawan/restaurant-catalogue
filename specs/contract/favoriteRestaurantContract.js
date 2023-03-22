/* eslint-disable no-undef */
const favoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 's1knt6za9kkfw1e867' });
    favoriteRestaurant.putRestaurant({ id: 'rqdv5juczeskfw1e867' });

    expect(await favoriteRestaurant.getRestaurant('s1knt6za9kkfw1e867'))
      .toEqual({ id: 's1knt6za9kkfw1e867' });
    expect(await favoriteRestaurant.getRestaurant('rqdv5juczeskfw1e867'))
      .toEqual({ id: 'rqdv5juczeskfw1e867' });
    expect(await favoriteRestaurant.getRestaurant('ygewwl55ktckfw1e867'))
      .toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.putRestaurant({ aProperty: 'property' });

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([]);
  });

  it('can return all of the restaurant that have been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 's1knt6za9kkfw1e867' });
    favoriteRestaurant.putRestaurant({ id: 'rqdv5juczeskfw1e867' });

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 'rqdv5juczeskfw1e867' },
        { id: 's1knt6za9kkfw1e867' },
      ]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.putRestaurant({ id: 's1knt6za9kkfw1e867' });
    favoriteRestaurant.putRestaurant({ id: 'rqdv5juczeskfw1e867' });
    favoriteRestaurant.putRestaurant({ id: 'ygewwl55ktckfw1e867' });

    await favoriteRestaurant.deleteRestaurant('s1knt6za9kkfw1e867');

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 'rqdv5juczeskfw1e867' },
        { id: 'ygewwl55ktckfw1e867' },
      ]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurant.putRestaurant({ id: 's1knt6za9kkfw1e867' });
    favoriteRestaurant.putRestaurant({ id: 'rqdv5juczeskfw1e867' });
    favoriteRestaurant.putRestaurant({ id: 'ygewwl55ktckfw1e867' });

    await favoriteRestaurant.deleteRestaurant('dy62fuwe6w8kfw1e867');

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 'rqdv5juczeskfw1e867' },
        { id: 's1knt6za9kkfw1e867' },
        { id: 'ygewwl55ktckfw1e867' },
      ]);
  });
};

export default favoriteRestaurantModel;
