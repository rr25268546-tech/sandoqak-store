let cart = JSON.parse(localStorage.getItem("cart")) || [];


function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}


function addToCart(name, price) {

    cart.push({
        name: name,
        price: Number(price)
    });

    saveCart();

    updateCart();

    alert("تم إضافة " + name + " للسلة 🛒");

}


function updateCart() {

    const count = document.getElementById("cartCount");

    const items = document.getElementById("cartItems");

    const totalElement = document.getElementById("cartTotal");


    if (!count || !items || !totalElement) {

        return;

    }


    count.innerText = cart.length;


    items.innerHTML = "";


    let total = 0;


    if (cart.length === 0) {

        items.innerHTML = `
            <p style="text-align:center;padding:20px;color:#777;">
                السلة فاضية 🛒
            </p>
        `;

    }


    cart.forEach(function(item, index) {

        total += Number(item.price);


        const product = document.createElement("div");

        product.style.padding = "12px 0";

        product.style.borderBottom = "1px solid #ddd";

        product.style.display = "flex";

        product.style.justifyContent = "space-between";

        product.style.alignItems = "center";

        product.innerHTML = `

            <div>

                <strong>
                    ${item.name}
                </strong>

                <br>

                <span>
                    ${item.price} جنيه
                </span>

            </div>


            <button
                onclick="removeFromCart(${index})"
                style="
                    background:#e53935;
                    color:white;
                    border:0;
                    padding:7px 10px;
                    border-radius:8px;
                    cursor:pointer;
                ">

                حذف

            </button>

        `;


        items.appendChild(product);

    });


    totalElement.innerText = total;

}


function removeFromCart(index) {

    cart.splice(index, 1);

    saveCart();

    updateCart();

}


function openCart() {

    const modal = document.getElementById("cartModal");

    if (!modal) {

        return;

    }

    modal.style.display = "block";

    updateCart();

}


function closeCartButton() {

    const modal = document.getElementById("cartModal");

    if (!modal) {

        return;

    }

    modal.style.display = "none";

}


function checkout() {

    if (cart.length === 0) {

        alert("السلة فاضية 🛒");

        return;

    }


    saveCart();


    window.location.href = "checkout.html";

}


updateCart();
