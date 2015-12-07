'use strict';
document.addEventListener('DOMContentLoaded',function(){
	//map
	var oMap = document.querySelector('#container');
	oMap.addEventListener('DOMMouseScroll',function(ev){
		ev.preventDefault();
	},false);
	var map = new AMap.Map('container');
	var map = new AMap.Map('container',{
        zoom: 12,
        center: [116.4228,39.988829],
        mapStyle: 'light'
    });
    var icon = new AMap.Icon({
            image : 'img/loca.png',//24px*24px
            //icon可缺省，缺省时为默认的蓝色水滴图标，
            size : new AMap.Size(42,42)
    });
    var marker = new AMap.Marker({
            icon : icon,//24px*24px
            position : [116.4228,39.988829],
            offset : new AMap.Pixel(-21,-21),
            map : map
    });
	//contact me left
	;(function(){
		var oCon = document.querySelector('.my-info');
		var aDd = oCon.getElementsByTagName('dd');
		var aI = oCon.getElementsByTagName('i');
		for(var i=0;i<aDd.length;i++){
			(function(index){
				aDd[i].onmouseover = function(){
					aI[index].style.opacity = 1;
				};
				aDd[i].onmouseout = function(){
					aI[index].style.opacity = 0;
				};
			})(i);
		}
	})();
	
},false);