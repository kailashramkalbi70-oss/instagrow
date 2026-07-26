const CACHE_NAME = "instagrow-v1";

const FILES = [

"index.html",
"login.html",
"register.html",
"verify-otp.html",
"plans.html",
"order.html",
"checkout.html",
"payment.html",
"order-success.html",
"my-orders.html",
"order-details.html",
"dashboard.html",
"profile.html",
"support.html",
"about.html",
"terms.html",
"privacy.html",
"refund.html",

"style.css",
"responsive.css",

"script.js",
"auth.js",
"orders.js",
"payment.js",

"manifest.json"

];


self.addEventListener(
"install",
event=>{

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache=>
cache.addAll(FILES)
)

);

});


self.addEventListener(
"fetch",
event=>{

event.respondWith(

caches.match(event.request)
.then(response=>
response || fetch(event.request)
)

);

});


self.addEventListener(
"activate",
event=>{

event.waitUntil(

caches.keys()
.then(keys=>
Promise.all(

keys
.filter(key=>key !== CACHE_NAME)
.map(key=>caches.delete(key))

)

)

);

});
