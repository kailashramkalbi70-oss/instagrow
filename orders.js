document.addEventListener("DOMContentLoaded",()=>{

const params =
new URLSearchParams(location.search);

const plan =
params.get("plan");

const price =
params.get("price");

const selectedPlan =
document.getElementById("selectedPlan");

if(selectedPlan && plan){

selectedPlan.innerHTML = `
<div class="info-box">
<h2>${Number(plan).toLocaleString("en-IN")} Followers</h2>
<h3>₹${Number(price).toLocaleString("en-IN")}</h3>
</div>
`;

}


const orderForm =
document.getElementById("orderForm");

if(orderForm){

orderForm.addEventListener("submit",(e)=>{

e.preventDefault();

const instagramUrl =
document.getElementById("instagramUrl").value.trim();

const playerName =
document.getElementById("playerName").value.trim();

if(!instagramUrl.includes("instagram.com")){

alert("Please enter a valid Instagram profile URL.");

return;

}

const pendingOrder = {

plan,
price,
instagramUrl,
playerName

};

localStorage.setItem(
"pendingOrder",
JSON.stringify(pendingOrder)
);

location.href="checkout.html";

});


}


const ordersList =
document.getElementById("ordersList");

if(ordersList){

const orders =
JSON.parse(localStorage.getItem("orders") || "[]");

if(!orders.length){

ordersList.innerHTML =
"<p>No orders found.</p>";

}else{

ordersList.innerHTML =
orders.map(order=>`

<div class="order-item">

<h3>Order ${order.id}</h3>

<p>
Plan:
${Number(order.plan).toLocaleString("en-IN")}
Followers
</p>

<p>
Price:
₹${Number(order.price).toLocaleString("en-IN")}
</p>

<p>
Status:
<span class="status">
${order.status}
</span>
</p>

<a
class="btn secondary"
href="order-details.html?id=${order.id}"
>
View Details
</a>

</div>

`).join("");

}

}

});
