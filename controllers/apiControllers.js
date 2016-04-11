function index(req, res) {
  res.json({
    message: "Welcome to textEm!",
    documentation_url: "https://github.com/hermchan/textEm",
    base_url: "http://strawberry-cupcake-16867.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"},
      {method: "GET", path: "/api/messages", description: "List all data under message model"},
      {method: "POST", path: "/api/messages", description: "Add a new message"},
      {method: "GET", path: "/api/messages/:id", description: "Select a specific message that includes the all properties"},
      {method: "PUT", path: "/api/messages/:id", description: "Edit and update a saved message"},
      {method: "DELETE", path: "/api/message/:id", description: "Remove a saved message"}
    ]
  });
}

module.exports.index = index;
