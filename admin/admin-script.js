/* =========================================
   InstaGrow Admin Panel - admin-script.js
   ========================================= */


/* -----------------------------------------
   1. Admin Login Check
----------------------------------------- */

function checkAdminLogin() {

    const isLoggedIn =
        localStorage.getItem("adminLoggedIn") === "true";

    if (!isLoggedIn) {

        if (
            !window.location.pathname.endsWith("/login.html") &&
            !window.location.pathname.endsWith("login.html")
        ) {

            window.location.href = "login.html";

        }

    }

}


/* -----------------------------------------
   2. Admin Logout
----------------------------------------- */

function adminLogout() {

    localStorage.removeItem("adminLoggedIn");

    localStorage.removeItem("adminEmail");

    window.location.href = "login.html";

}


/* -----------------------------------------
   3. Get Users
----------------------------------------- */

function getUsers() {

    return JSON.parse(
        localStorage.getItem("instagrowUsers") || "[]"
    );

}


/* -----------------------------------------
   4. Save Users
----------------------------------------- */

function saveUsers(users) {

    localStorage.setItem(
        "instagrowUsers",
        JSON.stringify(users)
    );

}


/* -----------------------------------------
   5. Get Orders
----------------------------------------- */

function getOrders() {

    return JSON.parse(
        localStorage.getItem("instagrowOrders") || "[]"
    );

}


/* -----------------------------------------
   6. Save Orders
----------------------------------------- */

function saveOrders(orders) {

    localStorage.setItem(
        "instagrowOrders",
        JSON.stringify(orders)
    );

}


/* -----------------------------------------
   7. Get Plans
----------------------------------------- */

function getPlans() {

    return JSON.parse(
        localStorage.getItem("instagrowPlans") || "[]"
    );

}


/* -----------------------------------------
   8. Save Plans
----------------------------------------- */

function savePlans(plans) {

    localStorage.setItem(
        "instagrowPlans",
        JSON.stringify(plans)
    );

}


/* -----------------------------------------
   9. Dashboard Statistics
----------------------------------------- */

function updateDashboardStats() {

    const users = getUsers();

    const orders = getOrders();


    const totalUsers =
        document.getElementById("totalUsers");

    const totalOrders =
        document.getElementById("totalOrders");

    const pendingOrders =
        document.getElementById("pendingOrders");

    const completedOrders =
        document.getElementById("completedOrders");


    if (totalUsers) {

        totalUsers.textContent =
            users.length;

    }


    if (totalOrders) {

        totalOrders.textContent =
            orders.length;

    }


    if (pendingOrders) {

        const pending =
            orders.filter(order =>
                String(
                    order.status || ""
                ).toLowerCase() === "pending"
            );

        pendingOrders.textContent =
            pending.length;

    }


    if (completedOrders) {

        const completed =
            orders.filter(order =>
                ["completed", "success", "successful"]
                .includes(
                    String(
                        order.status || ""
                    ).toLowerCase()
                )
            );

        completedOrders.textContent =
            completed.length;

    }

}


/* -----------------------------------------
   10. Update Order Status
----------------------------------------- */

function updateOrderStatusById(
    orderId,
    newStatus
) {

    const orders =
        getOrders();


    const index =
        orders.findIndex(order =>
            String(order.id) ===
            String(orderId)
        );


    if (index === -1) {

        return false;

    }


    orders[index].status =
        newStatus;


    saveOrders(orders);


    return true;

}


/* -----------------------------------------
   11. Delete Order
----------------------------------------- */

function deleteOrder(orderId) {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this order?"
        );


    if (!confirmDelete) {

        return;

    }


    let orders =
        getOrders();


    orders =
        orders.filter(order =>
            String(order.id) !==
            String(orderId)
        );


    saveOrders(orders);


    location.reload();

}


/* -----------------------------------------
   12. Delete User
----------------------------------------- */

function deleteUser(userId) {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this user?"
        );


    if (!confirmDelete) {

        return;

    }


    let users =
        getUsers();


    users =
        users.filter(user =>
            String(user.id) !==
            String(userId)
        );


    saveUsers(users);


    location.reload();

}


/* -----------------------------------------
   13. Add Plan
----------------------------------------- */

function addPlan(
    planName,
    price,
    description
) {

    const plans =
        getPlans();


    const newPlan = {

        id:
            Date.now(),

        name:
            planName,

        price:
            price,

        description:
            description,

        createdAt:
            new Date().toISOString()

    };


    plans.push(newPlan);


    savePlans(plans);


    return newPlan;

}


/* -----------------------------------------
   14. Delete Plan
----------------------------------------- */

function deletePlan(planId) {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this plan?"
        );


    if (!confirmDelete) {

        return;

    }


    let plans =
        getPlans();


    plans =
        plans.filter(plan =>
            String(plan.id) !==
            String(planId)
        );


    savePlans(plans);


    location.reload();

}


/* -----------------------------------------
   15. Admin Notification
----------------------------------------- */

function showAdminMessage(
    message
) {

    alert(message);

}


/* -----------------------------------------
   16. Page Load
----------------------------------------- */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateDashboardStats();

    }
);/* =========================================
   InstaGrow Admin Panel - admin-script.js
   ========================================= */


/* -----------------------------------------
   1. Admin Login Check
----------------------------------------- */

function checkAdminLogin() {

    const isLoggedIn =
        localStorage.getItem("adminLoggedIn") === "true";

    if (!isLoggedIn) {

        if (
            !window.location.pathname.endsWith("/login.html") &&
            !window.location.pathname.endsWith("login.html")
        ) {

            window.location.href = "login.html";

        }

    }

}


/* -----------------------------------------
   2. Admin Logout
----------------------------------------- */

function adminLogout() {

    localStorage.removeItem("adminLoggedIn");

    localStorage.removeItem("adminEmail");

    window.location.href = "login.html";

}


/* -----------------------------------------
   3. Get Users
----------------------------------------- */

function getUsers() {

    return JSON.parse(
        localStorage.getItem("instagrowUsers") || "[]"
    );

}


/* -----------------------------------------
   4. Save Users
----------------------------------------- */

function saveUsers(users) {

    localStorage.setItem(
        "instagrowUsers",
        JSON.stringify(users)
    );

}


/* -----------------------------------------
   5. Get Orders
----------------------------------------- */

function getOrders() {

    return JSON.parse(
        localStorage.getItem("instagrowOrders") || "[]"
    );

}


/* -----------------------------------------
   6. Save Orders
----------------------------------------- */

function saveOrders(orders) {

    localStorage.setItem(
        "instagrowOrders",
        JSON.stringify(orders)
    );

}


/* -----------------------------------------
   7. Get Plans
----------------------------------------- */

function getPlans() {

    return JSON.parse(
        localStorage.getItem("instagrowPlans") || "[]"
    );

}


/* -----------------------------------------
   8. Save Plans
----------------------------------------- */

function savePlans(plans) {

    localStorage.setItem(
        "instagrowPlans",
        JSON.stringify(plans)
    );

}


/* -----------------------------------------
   9. Dashboard Statistics
----------------------------------------- */

function updateDashboardStats() {

    const users = getUsers();

    const orders = getOrders();


    const totalUsers =
        document.getElementById("totalUsers");

    const totalOrders =
        document.getElementById("totalOrders");

    const pendingOrders =
        document.getElementById("pendingOrders");

    const completedOrders =
        document.getElementById("completedOrders");


    if (totalUsers) {

        totalUsers.textContent =
            users.length;

    }


    if (totalOrders) {

        totalOrders.textContent =
            orders.length;

    }


    if (pendingOrders) {

        const pending =
            orders.filter(order =>
                String(
                    order.status || ""
                ).toLowerCase() === "pending"
            );

        pendingOrders.textContent =
            pending.length;

    }


    if (completedOrders) {

        const completed =
            orders.filter(order =>
                ["completed", "success", "successful"]
                .includes(
                    String(
                        order.status || ""
                    ).toLowerCase()
                )
            );

        completedOrders.textContent =
            completed.length;

    }

}


/* -----------------------------------------
   10. Update Order Status
----------------------------------------- */

function updateOrderStatusById(
    orderId,
    newStatus
) {

    const orders =
        getOrders();


    const index =
        orders.findIndex(order =>
            String(order.id) ===
            String(orderId)
        );


    if (index === -1) {

        return false;

    }


    orders[index].status =
        newStatus;


    saveOrders(orders);


    return true;

}


/* -----------------------------------------
   11. Delete Order
----------------------------------------- */

function deleteOrder(orderId) {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this order?"
        );


    if (!confirmDelete) {

        return;

    }


    let orders =
        getOrders();


    orders =
        orders.filter(order =>
            String(order.id) !==
            String(orderId)
        );


    saveOrders(orders);


    location.reload();

}


/* -----------------------------------------
   12. Delete User
----------------------------------------- */

function deleteUser(userId) {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this user?"
        );


    if (!confirmDelete) {

        return;

    }


    let users =
        getUsers();


    users =
        users.filter(user =>
            String(user.id) !==
            String(userId)
        );


    saveUsers(users);


    location.reload();

}


/* -----------------------------------------
   13. Add Plan
----------------------------------------- */

function addPlan(
    planName,
    price,
    description
) {

    const plans =
        getPlans();


    const newPlan = {

        id:
            Date.now(),

        name:
            planName,

        price:
            price,

        description:
            description,

        createdAt:
            new Date().toISOString()

    };


    plans.push(newPlan);


    savePlans(plans);


    return newPlan;

}


/* -----------------------------------------
   14. Delete Plan
----------------------------------------- */

function deletePlan(planId) {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this plan?"
        );


    if (!confirmDelete) {

        return;

    }


    let plans =
        getPlans();


    plans =
        plans.filter(plan =>
            String(plan.id) !==
            String(planId)
        );


    savePlans(plans);


    location.reload();

}


/* -----------------------------------------
   15. Admin Notification
----------------------------------------- */

function showAdminMessage(
    message
) {

    alert(message);

}


/* -----------------------------------------
   16. Page Load
----------------------------------------- */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateDashboardStats();

    }
);
