/* global rectangle: valid */
$(function(){
  var $width=$('#width'),
      $height=$('#height'),
      $btncal=$('#calculate'),
      $perimeter=$('#perimeter'),
      $widthValidation=$('#width-validation'),
      $heightValidation=$('#height-validation'),
      $area=$('#area');
  $height.focusout(function(){
    var h=$height.val();
    if(h===''){
      $heightValidation.html('高度不能为空');
      $height.select();
      return;
    }else{
      $heightValidation.html('');
    }
    if(Number(h)<0){
      $heightValidation.html('高度不能为负');
      $height.select();
      return ;
    }else{
      $heightValidation.html('');
    } 
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(h)){
      $heightValidation.html('数据格式不正确');
      $height.select();
      return;
    }else{
      $heightValidation.html('');
    }
  });
  $width.focusout(function(){
    var w = $width.val();

    if(w===''){
      $widthValidation.html('宽度不能为空');
      $width.select();
      return;
    }else{
      $widthValidation.html('');
    }

    if(Number(w) < 0){
      $widthValidation.html('宽度不能为负');
      $width.select();
      return;
    }else{
      $widthValidation.html('');
    }

    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(w)){
      $widthValidation.html('数据格式不正确');
      $width.select();
      return;
    }else{
      $widthValidation.html('');           
    }

  });
  $btncal.click(function(){
    var w = $width.val(),
        h = $height.val();
    
    if(h === ''){
      $heightValidation.html('高度不能为空');
      $height.select(); 
      return ;
    }
    if(Number(h) < 0){
      $heightValidation.html('高度不能为负');
      $height.select();
      return;                      
    }
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(h)){
      $heightValidation.html('数据格式不正确');
      $height.select();
      return;                      
    }

    if(w === ''){
      $widthValidation.html('宽度不能为空');
      $width.select();           
      return ;
    }
    if(Number(w) < 0){
      $widthValidation.html('宽度不能为负');
      $width.select();
      return;                      
    }
    if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(w)){
      $widthValidation.html('数据格式不正确');
      $width.select();
      return;                      
    }
    var rect=rectangle();
    $perimeter.val(rect.perimeter(w,h));
    $area.val(rect.area(w,h));
  
  });
});
