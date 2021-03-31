
(function () {
	// window.addEventListener('DOMContentLoaded', function(){



		let bodyCheckInterval = setInterval(function(){
	        let element = document.querySelector("body");
	       
	        if(element != undefined){
	            clearInterval(bodyCheckInterval);
	            runPreload();            
	        }
	    }, 50);


		function runPreload(){
			let body = document.querySelector('body');
	        body.classList.add('loading');

	        // Create Markup
	        let percentNode = document.createElement('div'),
	        	progressNode = document.createElement('div'),
	        	preloadWrapper = document.createElement('div');

	        percentNode.classList.add('preload-precent');
	        percentNode.innerHTML = '00';
	        progressNode.classList.add('preload-progress');
	        preloadWrapper.classList.add('preload-wrapper');
	        preloadWrapper.classList.add('style-1');

	        preloadWrapper.appendChild(progressNode);
	        preloadWrapper.appendChild(percentNode);

	        body.appendChild(preloadWrapper);

	        let pageStatus = null;
		    let progress = null;
		    
		   
		    

		   
		    function updateProgress(){
		        if(pageStatus == "complete"){
		            percentNode.innerHTML = 100;
		            clearInterval(updateInterval);
		            setTimeout(function(){
		                body.classList.remove('loading');
		                body.classList.add('loaded');
		            }, 700);
		        }
		        else{            
		            if(progress == null){
		                progress = 1;
		            }
		           
		            progress = progress + 1;
		            if(progress >= 0 && progress <= 30){
		                percentNode.innerHTML = progress;
		            }
		            else if(progress > 30 && progress <= 60){
		                percentNode.innerHTML = progress;
		            }
		            else if(progress > 60 && progress <= 80){
		                percentNode.innerHTML = progress;
		            }
		            else if(progress > 80 && progress <= 90){
		                percentNode.innerHTML = progress;
		            }
		            else if(progress > 90 && progress <= 95){
		                percentNode.innerHTML = progress;
		            }
		            else if(progress > 95 && progress <= 99){
		                percentNode.innerHTML = progress;
		            }
		            else if(progress >= 100){
		                percentNode.innerHTML = 99;
		            }
		        }
		        console.log(progress);
		    }
		   
		    let updateInterval = setInterval(()=>{
		    	updateProgress();
		    }, 50);

		    window.document.addEventListener("readystatechange", function(){
		        if(document.readyState == "complete"){
		            pageStatus = "complete";
		            console.log("ready")
		        }
		    }, false);
		}
        
	// });
})();