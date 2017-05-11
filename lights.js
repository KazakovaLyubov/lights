$(function(){
	var status=false;
	var update=function(){	
		if(status){
			$('#red').removeClass('red');			
			$('#green').addClass('green');			
		}
		else{
			$('#red').addClass('red');
			$('#green').removeClass('green');			
		}
		$('#yellow').removeClass('yellow');
	}
	var setYellow=function(){
		$('#yellow').addClass('yellow');
		$('#green').removeClass('green');
	}
	setInterval(function(){
		status=!status;
		update();
		
	},5000);
	setTimeout(function(){
		setInterval(function(){
			setYellow();
		}, 5000);
		setYellow();
	},4500);
	update();
});