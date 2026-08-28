let cart = [];

function addToCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert("تم إضافة " + name + " للسلة 🛒");
}

function updateCart() {
    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    cartCount.textContent = cart.length;

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const div = document.createElement("div");

        div.style.padding = "12px 0";
        div.style.borderBottom = "1px solid #eee";

        div.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <span>${item.name}</span>
                <strong>${item.price} جنيه</strong>
                <button
                    onclick="removeFromCart(${index})"
                    style="
                        background:#e53935;
                        color:white;
                        border:0;
                        padding:6px 10px;
                        border-radius:8px;
                        cursor:pointer;
                    "
                >
                    حذف
                </button>
            </div>
        `;

        cartItems.appendChild(div);
    });

    cartTotal.textContent = total;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function openCart() {
    document.getElementById("cartModal").style.display = "block";
    updateCart();
}

function closeCart(event) {
    if (event.target.id === "cartModal") {
        document.getElementById("cartModal").style.display = "none";
    }
}

function checkout() {
    if (cart.length === 0) {
        alert("السلة فاضية 🛒");
        return;
    }

    alert("تم تجهيز طلبك 🚀");

    cart = [];
    updateCart();

    document.getElementById("cartModal").style.display = "none";
}
