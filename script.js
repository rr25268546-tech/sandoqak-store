// ================================
// SANDOQAK - Main JavaScript
// ================================

let cart = JSON.parse(
  localStorage.getItem("sandoqak_cart") || "[]"
);

// حفظ السلة
function saveCart() {
  localStorage.setItem(
    "sandoqak_cart",
    JSON.stringify(cart)
  );

  updateCartCount();
}

// تحديث رقم السلة
function updateCartCount() {
  const count = document.getElementById("cartCount");

  if (count) {
    count.textContent = cart.length;
  }
}

// إضافة منتج للسلة
function addToCart(name, price) {

  cart.push({
    name: name,
    price: price
  });

  saveCart();

  alert("🎁 تمت إضافة المنتج إلى السلة");
}

// فتح السلة
function openCart() {

  renderCart();

  const modal = document.getElementById("cartModal");

  if (modal) {
    modal.classList.add("show");
  }
}

// إغلاق السلة
function closeCart(event) {

  if (
    !event ||
    event.target.id === "cartModal"
  ) {

    const modal =
      document.getElementById("cartModal");

    if (modal) {
      modal.classList.remove("show");
    }
  }
}

// عرض المنتجات داخل السلة
function renderCart() {

  const box =
    document.getElementById("cartItems");

  const total =
    document.getElementById("cartTotal");

  if (!box || !total) return;

  if (cart.length === 0) {

    box.innerHTML =
      '<p style="color:#888">السلة فاضية لسه 😄</p>';

    total.textContent = "0";

    return;
  }

  box.innerHTML = cart
    .map(function (item, index) {

      return `
        <div class="cart-item">

          <span>
            ${item.name}
          </span>

          <span>
            ${item.price} جنيه

            <button
              onclick="removeItem(${index})"
              style="
                margin-right:8px;
                background:none;
                border:0;
                color:#ff6b6b;
                cursor:pointer;
              "
            >
              حذف
            </button>

          </span>

        </div>
      `;

    })
    .join("");

  const totalPrice =
    cart.reduce(
      function (sum, item) {
        return sum + Number(item.price);
      },
      0
    );

  total.textContent = totalPrice;
}

// حذف منتج
function removeItem(index) {

  cart.splice(index, 1);

  saveCart();

  renderCart();
}

// تأكيد الطلب
function checkout() {

  if (cart.length === 0) {

    alert("🛒 السلة فاضية");

    return;
  }

  alert(
    "🔥 الطلب جاهز!\n\n" +
    "دي نسخة تجريبية حاليًا.\n" +
    "في المرحلة القادمة هنربط الطلبات والدفع الحقيقي."
  );
}

// ================================
// فتح الصندوق بالكود
// ================================

function unlockBox() {

  const input =
    document.getElementById("code");

  const result =
    document.getElementById("unlockResult");

  if (!input || !result) return;

  const code =
    input.value
      .trim()
      .toUpperCase();

  if (code === "SANDOQAK001") {

    result.innerHTML = `
      🎉 مبروك!

      <br><br>

      🔓 تم فتح Level 1

      <br><br>

      🧩 التحدي:

      <br>

      ما الشيء الذي له أسنان
      ولا يعض؟
    `;

  } else {

    result.innerHTML = `
      ❌ الكود غير صحيح

      <br><br>

      جرّب الكود التجريبي:

      <br>

      <b>SANDOQAK001</b>
    `;
  }
}

// ================================
// تشغيل الموقع
// ================================

document.addEventListener(
  "DOMContentLoaded",
  function () {

    updateCartCount();

  }
);
