/* global chai describe rectangle it */
var rectangle=require('../calc.js');
var chai=require('./chai.js');
var expect=chai.expect;
describe('矩形计算器面积计算测试', function(){
  it('长是5，宽是2，面积是10', function(){
    var rect=new rectangle(5,2);// eslint-disable-line
    expect(rect.area()).to.be.equal(10);
  });

  it('长是4宽是3，周长是14', function() {
    var rect=new rectangle(4,3);
    expect(rect.perimeter()).to.be.equal(14);
  });
});
