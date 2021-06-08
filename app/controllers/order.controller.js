const Restaurants = require("./restaurant.controller").Restaurants;
let Orders = [
    {
        id: "1",
        customer: "Ali",
        restaurant: {
            id: "11",
            name: "Mc Donald",
        },
    },
];

// Create and Save a new order
exports.create = (req, res) => {
    // if (!req.body.content) {
    //     return res.status(400).send({
    //         message: "Order content can not be empty",
    //     });
    // }

    const restaurantId = req.body.restaurantId;
    let restaurant;
    Restaurants.forEach(function (item) {
        if (item.id == restaurantId) {
            restaurant = item;
        } else {
            res.send({
                error: "There is no Restaurant with that id",
            });
        }
    });

    // Create a Order
    const order = {
        id: req.body.id,
        customer: req.body.customer || "Untitled customer",
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
