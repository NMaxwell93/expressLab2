import express from "express";

const routes = express.Router();

routes.get("/pizza", (req, res) => {
  const toppingsArray = [
    "Sausage",
    "Pepperoni",
    "Chicken",
    "Mushroom",
    "Olive",
    "Green Pepper",
    "Onion",
    "Banana Pepper",
    "Anchovies",
    "Pineapple",
  ];

  res.render("custom-pizza",{toppingsArray});
});

// size toppings gluten-free instructions price
routes.get("/order",(req,res) => {
    const size = req.query.size;
    const toppings: number = parseInt(req.query.toppings as string);
    const crust = req.query.crust;
    const instructions = req.query.instructions;

    let price = 0;
    if (size === "Large") {
        price = 12 + toppings * 1.25
    } else if (size === "Medium") {
        price = 10 + toppings * 1.00
    } else {
        price = 7 + toppings * .50
    }
    
    res.render("custom-pizza-order", {size,toppings,crust,instructions, price})
})


export default routes;
