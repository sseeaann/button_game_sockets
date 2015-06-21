module.exports = function Route(app, server){
	// this gets the socket.io module
	var io = require("socket.io").listen(server);
	// initialize and set counter to 0
	var counter = 0;
	io.sockets.on("connection", function(socket){
		socket.on("push_button", function(data){
			// increment the counter when triggered
			counter += 1;
			io.emit("push_counter", {response: counter});
		})
		// reset the counter
		socket.on("reset_counter", function(data){
			counter = 0;
			io.emit("reset_response", {response: counter});
		})
	})
	// root route to render index.ejs view
	app.get("/", function(req, res){
		res.render("index");
	});
};