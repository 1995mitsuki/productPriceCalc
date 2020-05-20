'use strict';

const productCalc = require('../');

const sampleData1 = {
  name: "パン",
  price: 100,
  type: "8%",
};
// 消費税込みの価格を追加
const sampleData1_result = sampleData1
sampleData1_result.priceIntax = 108;

const sampleData2 = {
  name: "本",
  price: 100,
  type: "10%",
};

const sampleData2_result = sampleData2
sampleData2_result.priceIntax = 110;



describe('#productPriceCalc()', () => {
  test('消費税が8%のときに正しく税込み価格の計算ができる', () => {
    expect(productCalc.productPriceCalc(sampleData1)).toBe(sampleData1_result);
  });

  test('消費税が10%のときに正しく税込み価格の計算ができる', () => {
    expect(productCalc.productPriceCalc(sampleData2)).toBe(sampleData2_result);
  })

});

