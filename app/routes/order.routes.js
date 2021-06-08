module.exports = (app) => {
    const orders = require("../controllers/order.controller.js");

    // Create a new order
    app.post("/orders", orders.create);

    // Retrieve all orders
    app.get("/orders", orders.findAll);

    // Retrieve a single order with orderId
    app.get("/orders/:orderId", orders.findOne);

    // Retrieve a single orders menu
    // app.get("/orders/menu/:orderId", orders.menu);

    // Update a order with orderId
    // app.put("/orders/:orderId", orders.update);

    // Delete a order with orderId
    // app.delete("/orders/:orderId", orders.delete);
};
