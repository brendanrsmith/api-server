'use strict';

require('@code-fellows/supergoose');

const Cloth = require('../src/models/clothes-schema');
const GenericCollection = require('../src/models/collection');
const clothes = new GenericCollection(Cloth);

xdescribe('Clothes Actions', () => {
  it('can create a new clothes item', () => {
    let obj = { name: 'testClothes', color: 'testcolor' };
    let expected = { name: 'testClothes', color: 'testcolor' };

    return clothes.create(obj).then((record) => {
      Object.keys(obj).forEach((item) => {
        expect(record[item]).toEqual(expected[item]);
      });
    });
  });

  it('can read a single clothes item', () => {
    let obj = { name: 'testclothes', color: 'testcolor2' };
    let expected = { name: 'testclothes', color: 'testcolor2' };

    return clothes.create(obj).then((record) => {
      return clothes.read(record._id).then((item) => {
        console.log('this should be testclothes', item);
      });
    });
  });

});
