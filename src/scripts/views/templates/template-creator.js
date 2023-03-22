import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetail = (restaurant) => {
  const foodList = restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('');
  const drinkList = restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('');
  return `
  <h2>${restaurant.name}</h2>
    <div class="card-detail">
      <div class="image">
        <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}">
        <p class="ranting">(⭐️  ${restaurant.rating})</p>
      </div>
      <div class="informations">
        <h4>Alamat : <span>${restaurant.address},${restaurant.city}</span><h4>
        <h4>Kategori : <span>${restaurant.categories.map((category) => category.name).join(', ')}</span></h4>
        <h4>Menu : </h4>
          <div class="menu">
            <div class="makanan">
            <h5>Makanan :</h5>
              <ul>
                <li>${foodList}</li>
              </ul>
          </div>
          <div class="minuman">
              <h5>Minuman :</h5>
              <ul>
                <li>${drinkList}</li>
              </ul>
          </div>
         </div>
      </div>
      <div class="bottom-text">
        <p><span>${restaurant.description}</span></p><hr>
        <div class="reviews">
         <h3>Reviews : </h3><br>
          ${restaurant.customerReviews.map((review) => `
          <div class="review">
            <h4>${review.name} • <span>${review.date}</span></h4>
            <p>"${review.review}"</p>`).join('<br>')}
          </div>
        </div>
      </div>
    </div>
  `;
};

const createRestaurantItem = (restaurant) => `
  <article>
  <a href ="/#/detail/${restaurant.id}">
    <div class="card">
      <img class="list-image lazyload" data-src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}">
        <p class="city">${restaurant.city}</p>
        <p class="rating">⭐️   ${restaurant.rating}</p>
        <h3>${restaurant.name}</h3>
        <p>${restaurant.description}</p>
    </div>
  </a>
  </article>
  `;

const createLikeRestaurantButton = () => `
  <button aria-label="Add restaurant to favorite" id="likeButton" class="fav">Add To Favorite</button>
`;

const createUnlikeRestaurantButton = () => `
  <button aria-label="Remove restaurant from favorite" id="likeButton" class="fav">Remove From Favorite</button>
`;

export {
  createRestaurantDetail,
  createRestaurantItem,
  createLikeRestaurantButton,
  createUnlikeRestaurantButton,
};
