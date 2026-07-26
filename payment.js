function completePayment(){

const transactionId =
document.getElementById("transactionId").value.trim();

if(!transactionId){

alert("Please enter Transaction ID.");

return;

}

const pending =
JSON.parse(
localStorage.getItem("pendingOrder")
);

if(!pending){

alert("No pending order found.");

location.href="plans.html";

return;

}

const orders =
JSON.parse(
localStorage.getItem("orders") || "[]"
);

const orderId =
"IG" +
Date.now().toString().slice(-8);

const newOrder = {

id:orderId,

plan:pending.plan,

price:pending.price,

instagramUrl:pending.instagramUrl,

playerName:pending.playerName,

transactionId,

status:"Pending",

createdAt:new Date().toISOString()

};

orders.push(newOrder);

localStorage.setItem(
"orders",
JSON.stringify(orders)
);

localStorage.setItem(
"lastOrderId",
orderId
);

localStorage.removeItem(
"pendingOrder"
);

location.href="order-success.html";

}
