'use strict';

const productCalc = require('../');

const sampleData1 = {
  price: 100,
  type: "8%",
};

const sampleData1_result = {
  price: 100,
  type: "8%",
  priceIntax: 108,
};

describe('#productPriceCalc()', () => {
  test('正確に価格計算ができる', () => {
    expect(productCalc.productPriceCalc(sampleData1)).toBe(sampleData1_result);
  });
});

