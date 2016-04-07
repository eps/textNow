function index(req, res) {
  res.json({
    message: "Welcome to textEm!",
    documentation_url: "https://github.com/hermchan/textEm",
    base_url: "http://strawberry-cupcake-16867.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes available endpoints"}
    ]
  });
}

module.exports.index = index;
