let Restaurants = [
    {
        id: "1",
        name: "pizza hot",
        address: "tehran",
        foods: [
            {
                name: "pizza",
            },
            {
                name: "sandwich",
            },
        ],
    },
    {
        id: "11",
        name: "Mc Donald",
        address: "tehran",
        foods: [
            {
                name: "pizza",
            },
            {
                name: "sandwich",
            },
        ],
    },
];

exports.Restaurants = Restaurants;

// Create and Save a new restaurant
exports.create = (req, res) => {
    // if (!req.body.content) {
    //     return res.status(400).send({
    //         message: "Restaurant content can not be empty",
    //     });
    // }

    // Create a Res
    const restaurant = {
        id: req.body.id,
        name: req.body.name || "Untitled Restaurant",
        address: req.body.address,
        foods: req.body.foods,
    };

    Restaurants.push(restaurant);

    res.send(restaurant);
};

// Retrieve and return all restaurants from the database.
exports.findAll = (req, res) => {
    res.send(Restaurants);
};

// Find a single restaurant with a restaurantId
exports.findOne = (req, res) => {
    const id = req.params.restaurantId;
    Restaurants.forEach(function (item) {
        if (item.id == id) {
            res.send(item);
        }
    });
};

// Update a restaurant identified by the restaurantId in the request
exports.update = (req, res) => {
    const id = req.params.restaurantId;
    Restaurants.forEach(function (item) {
        if (item.id == id) {
            item.name = req.body.name;
            item.address = req.body.address;
            item.foods = req.body.foods;
        }
        res.send(item);
    });
};

// Delete a restaurant with the specified restaurantId in the request
exports.delete = (req, res) => {
    const id = req.params.restaurantId;
    Restaurants.forEach(function (item) {
        if (item.id == id) {
            Restaurants.pop(item);
        }
        res.send("200");
    });
};

exports.menu = (req, res) => {
    const id = req.params.restaurantId;
    Restaurants.forEach(function (item) {
        if (item.id == id) {
            res.send(item.foods);
        }
    });
};
