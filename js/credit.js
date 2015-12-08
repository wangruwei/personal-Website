'use strict';
document.addEventListener('DOMContentLoaded',function(){
	//map
	var map = new AMap.Map('container',{
        zoom: 11,
        center: [116.4228,39.988829],
        mapStyle: 'light'
    });
    var icon = new AMap.Icon({
            image : 'img/loca.png',
            size : new AMap.Size(42,42)
    });
    var marker = new AMap.Marker({
            icon : icon,
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