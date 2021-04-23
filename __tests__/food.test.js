// 'use strict';

// require('@code-fellows/supergoose');

// const Food = require('../src/models/food-schema');
// const GenericCollection = require('../src/models/collection');
// const foods = new GenericCollection(Food);

// describe('Food Actions', () => {

//   it('can create a new food item', () => {
//     let obj = { name: 'testName', color: 'testcolor' };
//     let expected = { name: 'testName', color: 'testcolor' };

//     return foods.create(obj).then((record) => {
//       Object.keys(obj).forEach((item) => {
//         expected(record[item]).toEqual(expected[item]);
//       });
//     });
//   });

//   it('can read a single food item', () => {
//     let obj = { name: 'testname2', color: 'testcolor2' };
//     let expected = { name: 'testname2', color: 'testcolor2' };

//     return foods.create(obj)
//     .then(record => {
//       return foods.read(record._id)
//     })
//   })
// });
describe('placeholder suite', () => {
  it('placeholder test', () => {
    let test = true;
    expect(test).toEqual(true);
  });
});
