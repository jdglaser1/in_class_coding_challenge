//Step 2
let inventory = [
{
    sku: "SKU-1001",
    name: "AirPods",
    price: "199.00",
    stock: "210"

},
{
    sku: "SKU- 1002",
    name: "iPod",
    price: "299.00",
    stock: "15"

},
{
    sku: "SKU-1003",
    name: "iPhone",
    price: "649.00",
    stock: "205"

},
{
    sku: "SKU-1004",
    name: "iPad",
    price: "499.00",
    stock: "115"

}

]

inventory.forEach(obj => console.log(` SKU: ${obj.sku} | Name: ${obj.name} | Price: ${obj.price} | Stock: ${obj.stock}`))

