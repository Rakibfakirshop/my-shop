// পণ্য ডাটাবেস - এখানে সহজেই নতুন পণ্য যোগ করুন
const products = [
    {
        id: 1,
        name: "টি-শার্ট",
        price: "২৫০",
        image: "assets/tshirt.jpg",
        description: "উচ্চ মানের সুতি কাপড়, সকল সাইজে পাওয়া যায়",
        badge: "বেস্ট সেলার"
    },
    {
        id: 2,
        name: "জুতা",
        price: "৮০০",
        image: "assets/shoes.jpg",
        description: "আধুনিক ডিজাইনের আরামদায়ক জুতা",
        badge: "নতুন সংযোজন"
    },
    {
        id: 3,
        name: "ব্যাগ",
        price: "৫০০",
        image: "assets/bag.jpg",
        description: "মজবুত ওয়াটারপ্রুফ ব্যাগ, বহন সহজ",
        badge: "বিশেষ অফার"
    },
    {
        id: 4,
        name: "হেডফোন",
        price: "১,২০০",
        image: "assets/headphone.jpg",
        description: "ওয়্যারলেস হেডফোন, ২০ ঘণ্টা ব্যাটারি ব্যাকআপ",
        badge: "জনপ্রিয়"
    }
];

// নতুন মোবাইল চার্জার পণ্য যোগ
products.push({
    id: 5,
    name: "মোবাইল চার্জার",
    price: "৬৫০",
    image: "assets/charger.jpg",
    description: "ফাস্ট চার্জিং সাপোর্ট, সকল মোবাইলের সাথে কম্প্যাটিবল",
    badge: "নতুন"
});

products.push({
    id: 6,
    name: "পাওয়ার ব্যাংক",
    price: "১,২০০",
    image: "assets/powerbank.jpg",
    description: "10000mAh ক্ষমতা, ডুয়েল পোর্ট",
    badge: "অফার"
});
products.push({
    id: 7,
    name: "ঘড়ি",
    price: "১,৫০০",
    image: "assets/watch.jpg",
    description: "স্টাইলিশ ডিজাইন, জলরোধী এবং টেকসই",
    badge: "নতুন সংযোজন"
});
products.push({
    id: 8,
    name: "জিন্স প্যান্ট",
    price: "৭৫০",
    image: "assets/jeans-pant.jpg",
    description: "সেরা মানের ডেনিম কাপড়, ফ্যাশনেবল এবং আরামদায়ক।",
    badge: "নতুন"
    
});
products.push({
    id: 9, // পরবর্তী সিরিয়াল
    name: "ছাতা",
    price: "৩৫০",
    image: "assets/umbrela.jpg",
    description: "জলরোধী উন্নত মানের ছাতা, হালকা এবং বহনযোগ্য।",
    badge: "নতুন"
});
