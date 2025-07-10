// পণ্যগুলো product.js থেকে এসেছে
const container = document.getElementById("productsContainer");

// সব পণ্য দেখাও
function displayProducts(productsToDisplay) {
    container.innerHTML = ""; // আগের গুলো মুছে ফেল
    productsToDisplay.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onclick="openModal('${product.image}')">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">
                ৳${product.price}
                <button class="see-more-btn" onclick="seeMore(${product.id})">আরো দেখুন</button>
            </p>
            <p class="product-description">${product.description}</p>
            <span class="badge">${product.badge}</span>
            <button class="order-button" onclick="showOrderForm(${product.id})">অর্ডার করুন</button>
        `;
        container.appendChild(card);
    });
}

// প্রোডাক্টের ডিটেইলস পেজে যাও
function seeMore(productId) {
    window.location.href = `related.html?id=${productId}`;
}

// প্রথম লোডে সব পণ্য দেখাও
displayProducts(products);

// অর্ডার ফর্ম দেখানোর ফাংশন
function showOrderForm(productId) {
    const product = products.find(p => p.id === productId);
    const formSection = document.getElementById("orderFormSection");

    formSection.innerHTML = `
        <h2>অর্ডার ফর্ম - ${product.name}</h2>
        <form action="https://formspree.io/f/xjkrqkzw" method="POST" class="order-form" onsubmit="return validateForm()">
            <input type="hidden" name="product" value="${product.name}">
            <label>আপনার নাম:</label>
            <input type="text" name="name" required>
            
            <label>মোবাইল নম্বর:</label>
            <input type="text" name="phone" id="phoneInput" required placeholder="+8801XXXXXXXXX অথবা আন্তর্জাতিক নাম্বার">
            
            <label>ঠিকানা:</label>
            <textarea name="address" required></textarea>
            
            <button type="submit">অর্ডার কনফার্ম করুন</button>
        </form>
    `;
    formSection.scrollIntoView({ behavior: 'smooth' });
}

// মোবাইল নাম্বার ভ্যালিডেশন
function validatePhoneNumber(phone) {
    const bdRegex = /^(?:\+8801|01)[0-9]{9}$/;
    const intlRegex = /^\+?[0-9]{8,15}$/;
    return bdRegex.test(phone) || intlRegex.test(phone);
}

// ফর্ম ভ্যালিডেশন
function validateForm() {
    const phone = document.getElementById("phoneInput").value;
    if (!validatePhoneNumber(phone)) {
        alert("দয়া করে সঠিক মোবাইল নম্বর দিন। বাংলাদেশি নম্বরের জন্য +8801 অথবা 01 দিয়ে শুরু করুন অথবা আন্তর্জাতিক নম্বর ব্যবহার করুন।");
        return false; // ফর্ম সাবমিট হতে দেবে না
    }
    return true;
}

// 🔍 সার্চ ফাংশন
function searchProducts() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );

    if (filteredProducts.length > 0) {
        displayProducts(filteredProducts);
    } else {
        container.innerHTML = "<p class='no-results'>কোনো পণ্য খুঁজে পাওয়া যায়নি।</p>";
    }
}

// ডার্ক মোড টগল ফাংশন
function toggleDarkMode() {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
}

// পেজ লোড হলে ডার্ক মোড চেক করো
window.onload = function() {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark");
        document.getElementById("darkModeToggle").checked = true;
    }
}

// Full Image Modal Function
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImg.src = imageSrc;
    modal.classList.add("show");
    document.body.style.overflow = "hidden"; // স্ক্রল বন্ধ
}

// Modal Close Function
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
    modal.classList.remove("show");
    document.body.style.overflow = "auto"; // স্ক্রল পুনরায় চালু
}

// ESC চাপলে modal বন্ধ হবে
window.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});

// modal এর বাইরে ক্লিক করলে modal বন্ধ হবে
const modal = document.getElementById("imageModal");
modal.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// intl-tel-input লাইব্রেরি ব্যবহার করার জন্য:
document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("phoneInput");

    const iti = window.intlTelInput(phoneInput, {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",  
        preferredCountries: ["bd", "us", "in", "uk", "ca"],
    });

    document.querySelector("form").addEventListener("submit", function (e) {
        if (!iti.isValidNumber()) {
            e.preventDefault();
            alert("অনুগ্রহ করে সঠিক মোবাইল নাম্বার দিন।");
        }
    });
});
