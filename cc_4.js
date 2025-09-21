
// Step 2: Products Before Discount

const products = [
    {name:"phone case", category:"electronics",price:25.00,inventory:49},
    {name:"apple", category:"groceries",price:2.00,inventory: 27 },
    {name:"lamp", category:"household",price:45.00,inventory:55},
    {name:"shirt", category:"apparel",price:30.00,inventory:50 },
    {name:"earrings", category:"jewelry",price:10.00,inventory:15}
];

console.log("Product List Before Discount");

products.forEach(obj =>console.log(`Name: ${obj.name} | Category: ${obj.category} | Price: $${obj.price} | Inventory: ${obj.inventory}`) );

// Step 3: Discount Based on Category


for(let product of products) {

    switch (product.category) {
        case "electronics":
            product.price *= 0.8;
            break;
        case "apparel":
            product.price *= 0.85;
            break;
        case "groceries":
        case "household":
            product.price *= 0.9;
            break;
        default: 
             
            break;

    }
   
}

console.log("\nProduct List After Discount");

products.forEach(obj =>console.log(`Name: ${obj.name} | Category: ${obj.category} | Price: $${obj.price} | Inventory: ${obj.inventory}`) );

// Step 4: Customer Discounts 

let customerType = "student";
let extraDiscount = 0;

if (customerType === "student") {
    extraDiscount = 0.05;
} else if (customerType === "senior") {
    extraDiscount = 0.07;
} else {
    extraDiscount = 0;
}

console.log(`\nCustomer Type: ${customerType} | Discount Given: ${extraDiscount *100}%`);

// Step 5: Checkout Process and Inventory

for (let i = 1 ; i <= 3; i++) {
    let subtotal = 0;

    for (let product of products) {
        if (product.inventory > 0 ) {
          subtotal += product.price;
          product.inventory--;
        }
    }
    let finalTotal= subtotal * ( 1- extraDiscount);
    console.log(`Customer ${i}:$${finalTotal.toFixed(2)}`);
}

// Step 6: Log Each key/value pair

console.log("\nSingle Product After Checkout")
for (let key in products[0]) {
    console.log(`${key}: ${products[0][key]}`);
}

// Step 7: All Product Info Destructuring

console.log(`\n All Product Information After Checkout`)

for (let product of products) {
    for (let [key,value] of Object.entries(product)) {
        console.log(`${key} : ${value}`);
    }
}
    

