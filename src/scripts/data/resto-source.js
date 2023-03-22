import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDb {
  static async homePage() {
    const response = await fetch(API_ENDPOINT.HOME_PAGE);
    return response.json();
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestaurantDb;
