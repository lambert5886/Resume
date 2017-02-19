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

		//事件绑定

		wrap.addEventListener('touchstart',function(e){
			firstY = e.targetTouches[0].pageY;
		
			
				//number = parseInt(e.target.parentNode.getAttribute('key'));	
			
				for(var i = 0; i < sectionsLen;i++){
					
					if(document.defaultView.getComputedStyle(sections[i]).display === 'block'){
						number = parseInt(sections[i].getAttribute('key'));
					}
				}
			
			
		},false)


		wrap.addEventListener('touchmove',function(e){
			secY = e.targetTouches[0].pageY;

			
			
		},false)

		wrap.addEventListener('touchend',function(e){

			if(!secY) return;
 
			let chaZhi = firstY - secY;
			
			

			if(chaZhi < 0 ){
				
					if(number == '0'){
						return ;
					}else{
						sections[number ].style.opacity = 0;
						sections[number ].style.transform = 'translate3d(0px,'+(-chaZhi)+'px,0px)';
						sections[number ].style.transition = 'transform 2s,opacity 1.5s';

					
						setTimeout(function(){
							

							sections[number -1].style.display = 'block';
							sections[number -1].style.opacity = 1;
							sections[number -1].style.transition = 'opacity 1.5s';
							
						},1000)
							

						sections[number ].addEventListener('webkitTransitionEnd',function(){
							
							sections[number].style.transform = '';
							this.style.display = 'none';
							firstY = null;
							secY = null;
						})	
							}

				


			}else if(chaZhi > 0){
			

				if(number == '3'){
					return;
				}else{
					
					
					sections[number].style.opacity = 0;
					sections[number].style.transform = 'translate3d(0px,'+(-chaZhi)+'px,0px)';
					sections[number].style.transition = 'transform 2s,opacity 1.5s';

					setTimeout(function(){
						sections[number + 1].style.display = 'block';
						sections[number + 1].style.opacity = 1;
						sections[number + 1].style.transition = 'opacity 1.5s';
						
					},1000)
					
			

					sections[number].addEventListener('webkitTransitionEnd',function(){

						sections[number ].style.transform = '';
						this.style.display = 'none';
						firstY = null;
						secY = null;
					})
					}
				

			}
		},false)
	
	
}


export default app;