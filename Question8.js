let order = {
  customer: "Fatima",
  items: [
    { product: "Bag", unitPrice: 15000, qty: 2 },
    { product: "Shoes", unitPrice: 22000, qty: 1 },
    { product: "Belt", unitPrice: 5000, qty: 3 }
  ]
};
let totalCost= 0

for(i=0; i<order.items.length; i++){
  totalCost= totalCost + (order.items[i].unitPrice * order.items[i].qty)
}
console.log(`${order.customer}'s total cost is ₦ ${totalCost}`)