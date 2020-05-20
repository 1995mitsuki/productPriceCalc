'use strict';

/**
 * 
 * @param {object} productInfo 商品の価格と消費税情報のオブジェクト
 * @return {object} プロパティに消費税込みの価格を追加したオブジェクト
 */

function productPriceCalc(productInfo) {
  let taxRate = productInfo.productType === "8%" ? 1.08 : 1.1;
  productInfo.priceIntax = Math.floor(productInfo.price * taxRate);

  return productInfo;
};

module.exports = { productPriceCalc: productPriceCalc };