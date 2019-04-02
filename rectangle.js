/* global Rectangle: valid */
$(function(){
  var $width=$('#width'),
      $height=$('#height'),
      $btncal=$('#calculate'),
      $perimeter=$('#perimeter'),
      $area=$('#area'),
      $form=$('form');
  $form.submit(function(e){
    e.preventDefault();
  });
  $btncal.click(function(){
    var w = $width.val(),
        h = $height.val();                    
    
    var r=Rectangle();
    $perimeter.val(r.perimeter(w,h));
    $area.val(r.area(w,h));
  
  });
});
