'use strict';
document.addEventListener('DOMContentLoaded',function(){
	//head
	var oHd = document.querySelector('header');
	var oSimShow = document.querySelector('.sim-show');
	var oMe = document.querySelector('.me');
	var oSha = oMe.querySelector('.shadow');
	var oOther = document.querySelector('.others');
	oHd.style.width = document.documentElement.clientWidth+'px';
	oHd.style.height = document.documentElement.clientHeight+'px';
	oHd.style.backgroundSize = document.documentElement.clientWidth+'px auto';
	oOther.style.width = document.documentElement.clientWidth+'px';
	oOther.style.height = document.documentElement.clientHeight+'px';
	oOther.style.backgroundSize = document.documentElement.clientWidth+'px auto';
	//me scale
	window.onresize = window.onscroll = function(){
		var oHd = document.querySelector('header');
		var oSimShow = document.querySelector('.sim-show');
		oHd.style.width = document.documentElement.clientWidth+'px';
		oHd.style.height = document.documentElement.clientHeight+'px';
		oHd.style.backgroundSize = document.documentElement.clientWidth+'px auto';
		oOther.style.width = document.documentElement.clientWidth+'px';
		oOther.style.height = document.documentElement.clientHeight+'px';
		oOther.style.backgroundSize = document.documentElement.clientWidth+'px auto';
		var scale = oMe.offsetTop-document.body.scrollTop;
		oMe.style.backgroundPosition = 'center '+(scale/3-200)+'px';
		oSha.style.opacity = 0.8*(1-scale/200);
	};
	//me 选项卡
	;(function(){
		var oUl = oMe.getElementsByTagName('ul')[0];
		var oOl = oMe.getElementsByTagName('ol')[0];
		var aLi = oUl.children;
		var aBtn = oOl.children;
		for(var i=0;i<aBtn.length;i++){
			(function(index){
				aBtn[i].onmouseover = function(){
					for(var i=0;i<aBtn.length;i++){
						aBtn[i].className = '';
						aLi[i].style.opacity = 0;
					}
					aBtn[index].className = 'on';
					aLi[index].style.opacity = 1;
				};
			})(i);
		}
	})();
	//header btn
	;(function(){
		var oBtn = oHd.querySelector('.me-btn');
		oBtn.onmouseover = function(){
			
		};
	})();
	
},false);