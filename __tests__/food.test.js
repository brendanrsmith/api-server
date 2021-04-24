'use strict';

require('@code-fellows/supergoose');

const Food = require('../src/models/food-schema');
const GenericCollection = require('../src/models/collection');
const foods = new GenericCollection(Food);

describe('Food Actions', () => {
  it('can create a new food item', () => {
    let obj = { name: 'testFood', color: 'testcolor' };
    let expected = { name: 'testFood', color: 'testcolor' };

    return foods.create(obj).then((record) => {
      Object.keys(obj).forEach((item) => {
        expect(record[item]).toEqual(expected[item]);
      });
    });
  });

  it('can read a single food item', () => {
    let obj = { name: 'testFood2', color: 'testcolor2' };
    let expected = { name: 'testFood2', color: 'testcolor2' };

    return foods.create(obj).then((record) => {
      return foods.read(record._id).then((item) => {
        console.log('this should be testFood2', item);
      });
    });
  });

});
