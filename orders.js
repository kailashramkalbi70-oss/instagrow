// ========================================
// InstaGrow - Order System
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ----------------------------------------
    // GET PLAN DETAILS FROM URL
    // Example:
    // order.html?plan=25000&price=1000
    // ----------------------------------------

    const params = new URLSearchParams(window.location.search);

    const plan = params.get("plan");
    const price = params.get("price");

    const selectedPlan = document.getElementById("selectedPlan");

    // ----------------------------------------
    // SHOW SELECTED PLAN
    // ----------------------------------------

    if (selectedPlan) {

        if (plan && price) {

            selectedPlan.innerHTML = `
                <div>
                    <strong>📦 Selected Plan</strong>
                </div>

                <div style="margin-top:8px;">
                    ${Number(plan).toLocaleString("en-IN")} Followers
                </div>

                <div style="margin-top:5px;">
                    ₹${Number(price).toLocaleString("en-IN")}
                </div>
            `;

        } else {

            selectedPlan.innerHTML = `
                <strong>⚠️ No Plan Selected</strong>
                <p style="margin-top:8px;">
                    Please go back and select a plan.
                </p>
            `;

        }

    }


    // ----------------------------------------
    // ORDER FORM
    // ----------------------------------------

    const orderForm = document.getElementById("orderForm");

    if (orderForm) {

        orderForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const instagramUrl =
                document.getElementById("instagramUrl").value.trim();

            const playerName =
                document.getElementById("playerName").value.trim();


            // ----------------------------------------
            // VALIDATION
            // ----------------------------------------

            if (!plan || !price) {

                alert(
                    "Please select a plan first."
                );

                window.location.href =
                    "plans.html";

                return;

            }


            if (!instagramUrl) {

                alert(
                    "Please enter your Instagram profile URL."
                );

                return;

            }


            if (!instagramUrl.includes("instagram.com")) {

                alert(
                    "Please enter a valid Instagram profile URL."
                );

                return;

            }


            if (!playerName) {

                alert(
                    "Please enter your name."
                );

                return;

            }


            // ----------------------------------------
            // CREATE ORDER ID
            // ----------------------------------------

            const orderId =
                "IG" +
                Date.now().toString().slice(-8);


            // ----------------------------------------
            // CREATE ORDER OBJECT
            // ----------------------------------------

            const order = {

                id: orderId,

                plan: Number(plan),

                price: Number(price),

                instagramUrl:
                    instagramUrl,

                playerName:
                    playerName,

                status:
                    "Pending",

                paymentStatus:
                    "Pending",

                date:
                    new Date().toLocaleString(
                        "en-IN"
                    )

            };


            // ----------------------------------------
            // GET OLD ORDERS
            // ----------------------------------------

            let orders =
                JSON.parse(
                    localStorage.getItem(
                        "orders"
                    )
                ) || [];


            // ----------------------------------------
            // ADD NEW ORDER
            // ----------------------------------------

            orders.unshift(order);


            // ----------------------------------------
            // SAVE ORDER
            // ----------------------------------------

            localStorage.setItem(
                "orders",
                JSON.stringify(orders)
            );


            // ----------------------------------------
            // SAVE CURRENT ORDER
            // ----------------------------------------

            localStorage.setItem(
                "currentOrder",
                JSON.stringify(order)
            );


            // ----------------------------------------
            // GO TO CHECKOUT
            // ----------------------------------------

            window.location.href =
                "checkout.html?id=" +
                encodeURIComponent(orderId);

        });

    }

});// ========================================
// InstaGrow - Order System
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ----------------------------------------
    // GET PLAN DETAILS FROM URL
    // Example:
    // order.html?plan=25000&price=1000
    // ----------------------------------------

    const params = new URLSearchParams(window.location.search);

    const plan = params.get("plan");
    const price = params.get("price");

    const selectedPlan = document.getElementById("selectedPlan");

    // ----------------------------------------
    // SHOW SELECTED PLAN
    // ----------------------------------------

    if (selectedPlan) {

        if (plan && price) {

            selectedPlan.innerHTML = `
                <div>
                    <strong>📦 Selected Plan</strong>
                </div>

                <div style="margin-top:8px;">
                    ${Number(plan).toLocaleString("en-IN")} Followers
                </div>

                <div style="margin-top:5px;">
                    ₹${Number(price).toLocaleString("en-IN")}
                </div>
            `;

        } else {

            selectedPlan.innerHTML = `
                <strong>⚠️ No Plan Selected</strong>
                <p style="margin-top:8px;">
                    Please go back and select a plan.
                </p>
            `;

        }

    }


    // ----------------------------------------
    // ORDER FORM
    // ----------------------------------------

    const orderForm = document.getElementById("orderForm");

    if (orderForm) {

        orderForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const instagramUrl =
                document.getElementById("instagramUrl").value.trim();

            const playerName =
                document.getElementById("playerName").value.trim();


            // ----------------------------------------
            // VALIDATION
            // ----------------------------------------

            if (!plan || !price) {

                alert(
                    "Please select a plan first."
                );

                window.location.href =
                    "plans.html";

                return;

            }


            if (!instagramUrl) {

                alert(
                    "Please enter your Instagram profile URL."
                );

                return;

            }


            if (!instagramUrl.includes("instagram.com")) {

                alert(
                    "Please enter a valid Instagram profile URL."
                );

                return;

            }


            if (!playerName) {

                alert(
                    "Please enter your name."
                );

                return;

            }


            // ----------------------------------------
            // CREATE ORDER ID
            // ----------------------------------------

            const orderId =
                "IG" +
                Date.now().toString().slice(-8);


            // ----------------------------------------
            // CREATE ORDER OBJECT
            // ----------------------------------------

            const order = {

                id: orderId,

                plan: Number(plan),

                price: Number(price),

                instagramUrl:
                    instagramUrl,

                playerName:
                    playerName,

                status:
                    "Pending",

                paymentStatus:
                    "Pending",

                date:
                    new Date().toLocaleString(
                        "en-IN"
                    )

            };


            // ----------------------------------------
            // GET OLD ORDERS
            // ----------------------------------------

            let orders =
                JSON.parse(
                    localStorage.getItem(
                        "orders"
                    )
                ) || [];


            // ----------------------------------------
            // ADD NEW ORDER
            // ----------------------------------------

            orders.unshift(order);


            // ----------------------------------------
            // SAVE ORDER
            // ----------------------------------------

            localStorage.setItem(
                "orders",
                JSON.stringify(orders)
            );


            // ----------------------------------------
            // SAVE CURRENT ORDER
            // ----------------------------------------

            localStorage.setItem(
                "currentOrder",
                JSON.stringify(order)
            );


            // ----------------------------------------
            // GO TO CHECKOUT
            // ----------------------------------------

            window.location.href =
                "checkout.html?id=" +
                encodeURIComponent(orderId);

        });

    }

});
