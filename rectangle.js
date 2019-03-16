/* global rectangle: true */
$(function(){
  var $width=$('#width'),
      $height=$('#height'),
      $btncal=$('#calculate'),
      $perimeter=$('#perimeter'),
      $area=$('#area');
  $btncal.click(function(){
    var rect = new rectangle($width.val(),$height.val());
    $area.val(rect.area());
    $perimeter.val(rect.perimeter());             
  });
});
