const Restaurants = require("./restaurant.controller").Restaurants;
let Orders = [
    {
        id: "1",
        customer: "Ali",
        food: "burger",
        restaurant: {
            id: "11",
            name: "Mc Donald",
        },
    },
];

// Create and Save a new order
exports.create = (req, res) => {
    const restaurantId = req.body.restaurantId;
    let restaurant;
    Restaurants.forEach(function (item) {
        if (item.id == restaurantId) {
            restaurant = item;
        }
    });

    if (restaurant == undefined) {
        return res.send({
            error: "There  is no restaurant with this id",
        });
    }

    if(!restaurant.foods.includes(req.body.food)){
        return res.send({
            error: "This Restaurant does not have this food",
        });
    }

    // Create a Order
    const order = {
        id: req.body.id,
        customer: req.body.customer || "Untitled customer",
        food: req.body.food,
        restaurant: {
            id: restaurantId,
            name: restaurant.name,
        },
    };

    Orders.push(order);

    res.send(order);
};

// Retrieve and return all Orders from the database.
exports.findAll = (req, res) => {
    res.send(Orders);
};

// Find a single order with a orderId
exports.findOne = (req, res) => {
    const id = req.params.orderId;
    Orders.forEach(function (item) {
        if (item.id == id) {
            res.send(item);
        }
    });
};

// Update an order identified by the orderId in the request
exports.update = (req, res) => {
    const id = req.params.orderId;
    Orders.forEach(function (item) {
        if (item.id == id) {
            item.customer = req.body.customer;
            item.food = req.body.food;
            item.restaurant = req.body.restaurant;
        }
        res.send(item);
    });
};

// Delete an order with the specified orderId in the request
exports.delete = (req, res) => {
    const id = req.params.orderId;
    Orders.forEach(function (item) {
        if (item.id == id) {
            Orders.pop(item);
        }
        res.send("200");
    });
};
