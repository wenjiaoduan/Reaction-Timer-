		// make the shape appear after 1000ms;
		
		var start = new Date().getTime();
		
		function getRandomColor() {
			var letters = '0123456789ABCDEF';
			var color = '#';
			for (var i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)];
			}
			return color;
		}
		
		function makeShapeAppear(){
		
			var  top = Math.random()*400;
			
			var left = Math.random()*400;
			
			var width = Math.random()*200+100;
			
			var height = Math.random()*200+100 ;
			
			if(Math.random()>0.5){
			
				document.getElementById("shape").style.borderRadius="50%";
			
			}else{
			
				document.getElementById("shape").style.borderRadius="0";
			
			}
			
			document.getElementById("shape").style.backgroundColor= getRandomColor();
			
			
			document.getElementById("shape").style.width= width + "px";
			
			document.getElementById("shape").style.height= height + "px";
		
			document.getElementById("shape").style.top= top + "px";
			
			document.getElementById("shape").style.left= left + "px";
		
			document.getElementById("shape").style.display ="block";
			
			start = new Date().getTime();
		
		}
		
		function appearAfterDelay(){
		
		setTimeout(makeShapeAppear,Math.random()*2000);
		
		}
		
		function average(num){
		
			var total =0;
			for(var i=0; i<num.length;i++){
			
			total+=num[i];
			
			}
			return (total/num.length);
		
		}
		
		appearAfterDelay();
		
		var count= 0;
		
		var test = new Array(5);
		
		document.getElementById("shape").onclick = function(){
		
			document.getElementById("shape").style.display="none";
			
			var end = new Date().getTime();
			
			var timeTaken = (end - start)/1000;
			
			test[count++]=timeTaken;
			
			document.getElementById("timeTaken").innerHTML = timeTaken+"s";
			
			if(count == 5){
			
				alert("your average reaction time is " +average(test));
				
				count=0;
											
			}
						
			appearAfterDelay();
		
		}