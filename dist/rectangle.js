$(function(){var e=$("#width"),r=$("#height"),a=$("#calculate"),l=$("#perimeter"),t=$("#area");a.click(function(){var a=new rectangle(e.val(),r.val());t.val(a.area()),l.val(a.perimeter())})});