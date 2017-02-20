//main.jsx

// import $ from 'jquery';

const app = function (){
		const wrap = document.getElementById('wrap');

		

		function reSize(){
			const dEle = document.documentElement;
			const width = window.innerWidth;
			const winWidth = window.innerWidth/100;
			const winHeight = window.innerHeight/(width/15);
			dEle.style.fontSize = width/15 + 'px';
		
			wrap.style.height = winHeight + 'rem';
		
		};

		reSize();
	
		window.onresize = function(){
			reSize();
		}

		let firstY = null;
		let secY = null;

		let sections = document.querySelectorAll('.pageo1');
		let sectionsLen = sections.length;
		let number = 0;


		let time01 = '';
		let time02 = '';
		let animated = true;
		//事件绑定

		wrap.addEventListener('touchstart',function(e){
			if(animated){
				time01 = new Date().getTime();
				console.log(time01)
				firstY = e.targetTouches[0].pageY;
		
			
				//number = parseInt(e.target.parentNode.getAttribute('key'));	
			
				for(var i = 0; i < sectionsLen;i++){
					
					if(document.defaultView.getComputedStyle(sections[i]).display.trim() === 'block'){
						number = parseInt(sections[i].getAttribute('key'));
					}
				}
			
							for(var i = 0;i < sections.length;i++){
								sections[i].style.transform = '';
								console.log(sections)
							};



			}else{
				return;
			} 
			
			
		},false)


		wrap.addEventListener('touchmove',function(e){
			secY = e.targetTouches[0].pageY;
			time02 = new Date().getTime();

			animated = false;
			
		},false)



		function animates(){
			let ul01 = document.getElementsByClassName('project01')[0];//个人简介
			let lis01 = ul01.querySelectorAll('li');
			let ul02 = document.getElementsByClassName('project02')[0];//专业技能
			let lis02 = ul02.querySelectorAll('li');
			let ul03 = document.getElementsByClassName('project03')[0];//项目经验
			let lis03 = ul03.querySelectorAll('li');
			let num;
			for(var i = 0; i < sectionsLen;i++){
					
					if(document.defaultView.getComputedStyle(sections[i]).display.trim() === 'block'){
						num = parseInt(sections[i].getAttribute('key'));
					}
				}
			
			switch(num){

				case  1:
				console.log('++++++++++++ from animated  1++++++++')
					for (var i = 0; i < lis01.length; i++){
						lis01[i].setAttribute('class','show');
						
						lis03[i].setAttribute('class','');
					}

					for(var i = 0; i < lis02.length; i++){
						lis02[i].setAttribute('class','');
					}
					
					break;
				case  2:
				console.log('++++++++++++ from animated  2++++++++')
					for (var i = 0; i < lis02.length; i++){
						lis02[i].setAttribute('class','show')
					}

					for (var i = 0; i < lis03.length; i++){
						lis01[i].setAttribute('class','')
						lis03[i].setAttribute('class','')
					}
					
					break;
				case  3:
					
					console.log('++++++++++++ from animated  3++++++++')
					
					for (var i = 0; i < lis03.length; i++){
						lis03[i].setAttribute('class','show');
						lis01[i].setAttribute('class','')
					}

					

					for (var i = 0; i < lis02.length; i++){
						lis02[i].setAttribute('class','')
					}
					break; 
			}
			
		}

		function bindAnimate(obj,chazhi){
			
		}

		wrap.addEventListener('touchend',function(e){



			if(!secY) return;
 
			let chaZhi = firstY - secY;

			console.log('======  time ======')
			
			if(time02 - time01 < 120) return;
			
			
			console.log('====== number =====')
			console.log(number )



			if(chaZhi < 0 ){// 向下滑动

				
				console.log('向下滑动!')
					if(number == '0'){
						number = 1;
						return ;
					}else{
				console.log(number)


						sections[number ].style.opacity = 0;
						sections[number ].style.transform = 'translate3d(0px,'+(-chaZhi)+'px,0px)';
						sections[number ].style.transition = 'transform 2s,opacity 1.5s';

					
						setTimeout(function(){
							

							sections[number -1].style.display = 'block';
							sections[number -1].style.opacity = 1;
							sections[number -1].style.transition = 'opacity 1.5s';
							
						},1000);
							

						sections[number ].addEventListener('webkitTransitionEnd',function(){
							for(var i = 0;i < sections.length;i++){
								sections[i].style.transform = '';
							};
							
						
							animates()
							sections[number].style.display = 'none';
							firstY = null;
							secY = null;
							animated = true;
						})	
							 }

				


			}else if(chaZhi > 0){
			
				console.log('向上滑动!')
				
					console.log(number)
					
					if(number == 3){
						return;
					}

					sections[number].style.opacity = 0;
					sections[number].style.transform = 'translate3d(0px,'+(-chaZhi)+'px,0px)';
					sections[number].style.transition = 'transform 2s,opacity 1.5s';

					setTimeout(function(){
						sections[number +1].style.display = 'block';
						sections[number +1].style.opacity = 1;
						sections[number +1].style.transition = 'opacity 1.5s';
						
					},1000)
					
			

					sections[number].addEventListener('webkitTransitionEnd',function(){

						for(var i = 0;i < sections.length;i++){
								sections[i].style.transform = '';
							}

							
							sections[number].style.display = 'none';
							animates()
						animated = true;
						firstY = null;
						secY = null;
					})
					}
				

			},false)
	
	
}


export default app;