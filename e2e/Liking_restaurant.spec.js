/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking restaurant');
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.seeElement('.favorite-title');
  I.see('Belum ada restaurant yang disukai', '.restaurant-item_not_found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Belum ada restaurant yang disukai', '.restaurant-item_not_found');
  I.amOnPage('/');

  I.waitForElement('article a');
  const firstRestaurant = locate('.card h3').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(locate('article a').first());

  I.waitForElement('#likeButton');
  I.click('#likeButton');
  I.amOnPage('/#/favorite');

  const likedRestaurant = await I.grabTextFrom('.card h3');

  I.seeElement('article');
  I.click('article a');

  I.amOnPage('/#/detail');
  I.waitForElement('#likeButton');

  const unlikedRestaurant = await I.grabTextFrom('#restaurantDetail h2');
  I.see('Remove From Favorite', 'button');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item_not_found');
  assert.strictEqual(firstRestaurantName, likedRestaurant, unlikedRestaurant);
});
