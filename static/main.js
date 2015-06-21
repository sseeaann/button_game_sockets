$(document).ready(function(){
	// trigger the connection event in our server
	var socket = io.connect();
	// submit data to the server using emit
	$('#push').click(function(){
		socket.emit("push_button", {action: "Somebody pushed the button"});
	});
	// reset counter
	$('#reset').click(function(){
		socket.emit("reset_counter", {action: "Resetting the counter"});
	});
	// display the counter
	socket.on("push_counter", function(data){
		$('#message').html(JSON.stringify(data.response));
		if(JSON.stringify(data.response) > 9){
			$('#happy').html("A little click happy are we?");
		}
		if(JSON.stringify(data.response) > 29){
			$('#happy').html("Bored much?");
		}
		if(JSON.stringify(data.response) > 49){
			$('#happy').html("Really?! You don't have anything better to do?");
		}
		if(JSON.stringify(data.response) > 69){
			$('#happy').html("GO OUTSIDE!");
		}
		if(JSON.stringify(data.response) > 99){
			$('#happy').html("Daaannnngg! You're an animal!");
		}
		if(JSON.stringify(data.response) > 149){
			$('#happy').html("OK now I'm bored.");
		}
	});
	// reset the counter messages
	socket.on("reset_response", function(data){
		$('#message').html('0');
		$('#happy').html("");
	});
});