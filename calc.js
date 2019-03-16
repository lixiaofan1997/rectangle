/* exported rectangle */
function rectangle(width, height) {// eslint-disable-line
  var w = Number(width),
      h = Number(height);

  this.area = function() {
    return w * h;
  };

  this.perimeter = function() {
    return 2 * (w + h);
  };
}
module.exports=rectangle;
