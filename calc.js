/* exported Rectangle */
function Rectangle() {// eslint-disable-line
  return{
    'perimeter':function(width,height){
      return 2*(Number(width)+Number(height));
    },
    'area':function(width,height){
      return (Number(width)*Number(height));
    }
  };
}
module.exports=Rectangle;
