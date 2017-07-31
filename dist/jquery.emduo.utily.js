/*!
 * Copyright 2017-2017 emduo, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

if (typeof jQuery === 'undefined') {
  throw new Error('emduo jqury utily lib requires jQuery')
}

"use strict";
$.isPhone = function(s) 
{
	var tel_preg = /^(13[0-9]|14[0-9]|15[0-9]|17[0-9]|18[0-9])\d{8}$/i;
	return tel_preg.test(s);
}
$.isHanzi = function(s)
{
	return  (/.*[\u4e00-\u9fa5]+.*$/.test(s));
}

$.getSync=function(url){
        var result=null;
        $.ajax({
          url:url,
          async:false,
          success:function(data){
            result=data;
          }
        });
        return result;
}