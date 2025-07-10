window.addEventListener("load", function () {
    const container = document.getElementById("productsContainer");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));

    // ✅ রিলেটেড ভ্যারিয়েন্টস
    const productVariants = {
        1: [
            { id: 101, name: "টি-শার্ট (লাল)", price: "২৮০", image: "assets/tshirt-red.jpg", description: "লাল রঙের টি-শার্ট, সুতির", badge: "নতুন" },
            { id: 102, name: "টি-শার্ট (নীল)", price: "২৮০", image: "assets/tshirt-blue.jpg", description: "নীল রঙের টি-শার্ট, সুতির", badge: "জনপ্রিয়" },
        ],
        2: [
            { id: 201, name: "জুতা (কালো)", price: "৮৫০", image: "assets/shoes-black.jpg", description: "কালো রঙের জুতা", badge: "নতুন" },
            { id: 202, name: "জুতা (লাল)", price: "৯০০", image: "assets/shoes-red.jpg", description: "লাল রঙের ফ্যাশনেবল আরামদায়ক জুতা", badge: "নতুন কালার" },
        ],
        3: [
            { id: 301, name: "স্কুল ব্যাগ", price: "৫৫০", image: "assets/bag.jpg", description: "মজবুত আরামদায়ক স্কুল ব্যাগ", badge: "জনপ্রিয়" },
            { id: 302, name: "স্কুল ব্যাগ (লাল)", price: "৫৮০", image: "assets/bag-red.jpg", description: "লাল রঙের স্কুল ব্যাগ", badge: "নতুন কালার" },
            { id: 303, name: "স্কুল ব্যাগ (নীল)", price: "৫৯০", image: "assets/bag-blue.jpg", description: "নীল রঙের স্কুল ব্যাগ", badge: "নতুন কালার" },
        ],
        9: [
            { id: 401, name: "ছাতা (লাল)", price: "৩৫০", image: "assets/umbrela-red.jpg", description: "লাল রঙের উন্নত মানের জলরোধী ছাতা।", badge: "নতুন" },
            { id: 402, name: "ছাতা (নীল)", price: "৩৫০", image: "assets/umbrela-blue.jpg", description: "নীল রঙের উন্নত মানের জলরোধী ছাতা।", badge: "নতুন" },
            { id: 403, name: "ছাতা (সবুজ)", price: "৩৫০", image: "assets/umbrela-green.jpg", description: "সবুজ রঙের উন্নত মানের জলরোধী ছাতা।", badge: "নতুন" }
        ]
    };

    // ✅ মূল প্রোডাক্ট বের করা
    const product = products.find(p => p.id === productId);
    const variants = productVariants[productId] || [];

    if (product) {
        document.title = `রিলেটেড পণ্য - ${product.name}`;
    }

    // ✅ প্রোডাক্ট দেখানোর ফাংশন
    function displayProducts(productsToDisplay) {
        container.innerHTML = "";
        productsToDisplay.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}" onclick="openModal('${product.image}')">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">৳${product.price}</p>
                <p class="product-description">${product.description}</p>
                <span class="badge">${product.badge}</span>
                <button class="order-button" onclick="showOrderFormRelated('${product.name}')">অর্ডার করুন</button>
            `;
            container.appendChild(card);
        });
    }

    // ✅ ফর্ম লোড করার ফাংশন
    window.showOrderFormRelated = function (productName) {
        const formSection = document.querySelector("#orderFormSection");
        if (!formSection) return;

        formSection.innerHTML = `
            <h2>অর্ডার ফর্ম - ${productName}</h2>
            <form action="https://formspree.io/f/xjkrqkzw" method="POST" class="order-form">
                <input type="hidden" name="product" value="${productName}">
                <label>আপনার নাম:</label>
                <input type="text" name="name" required>
                
                <label>মোবাইল নম্বর:</label>
                <input type="tel" name="phone" id="phoneInput" required placeholder="+8801XXXXXXXXX অথবা আন্তর্জাতিক নাম্বার">
                
                <label>ঠিকানা:</label>
                <textarea name="address" required></textarea>
                
                <button type="submit">অর্ডার কনফার্ম করুন</button>
            </form>
        `;

        formSection.scrollIntoView({ behavior: 'smooth' });
    };

    // ✅ modal viewer ফাংশন
    window.openModal = function (imageSrc) {
        modal.style.display = "block";
        modalImg.src = imageSrc;
        document.body.style.overflow = "hidden";
    };

    window.closeModal = function () {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    };

    window.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    // ✅ পণ্য দেখানো শুরু
    if (product) {
        displayProducts([product, ...variants]);
    } else if (variants.length > 0) {
        displayProducts(variants);
    } else {
        container.innerHTML = "<p>এই পণ্যটির কোনো ভ্যারিয়েন্ট পাওয়া যায়নি।</p>";
    }
});
