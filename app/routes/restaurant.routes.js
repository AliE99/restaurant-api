module.exports = (app) => {
    const restaurants = require("../controllers/restaurant.controller.js");

    // Create a new restaurant
    app.post("/restaurants", restaurants.create);

    // Retrieve all restaurants
    app.get("/restaurants", restaurants.findAll);

    // Retrieve a single restaurant with restaurantId
    app.get("/restaurants/:restaurantId", restaurants.findOne);

    // Retrieve a single restaurants menu
    app.get("/restaurants/menu/:restaurantId", restaurants.menu);

    // Update a restaurant with restaurantId
    app.put("/restaurants/:restaurantId", restaurants.update);

    // Delete a restaurant with restaurantId
    app.delete("/restaurants/:restaurantId", restaurants.delete);
};
