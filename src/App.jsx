import React, { useState } from "react";
import Slider from "react-slick";
import {
  ShoppingBag,
  Heart,
  User,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Search,
  Menu,
  X,
} from "lucide-react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("*");
  const [deptOpen, setDeptOpen] = useState(true);
  // Categories Carousel Data
  const categoriesCarousel = [
    { title: "Smartphones", img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "Laptops", img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" },
    { title: "Headphones", img: "https://images.pexels.com/photos/159873/headphones-earphones-music-sound-159873.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "Cameras", img: "https://images.pexels.com/photos/51383/camera-lens-technology-photography-51383.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { title: "Smartwatches", img: "https://images.pexels.com/photos/277406/pexels-photo-277406.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ];

  const categories = [
    "Smartphones",
    "Laptops",
    "Headphones",
    "Cameras",
    "Smartwatches",
    "Gaming Consoles",
    "Tablets",
    "Accessories",
  ];

  const products = [
    { id: 1, name: "iPhone 14 Pro", price: 999, category: ["smartphones"], img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 2, name: "MacBook Pro 16", price: 2399, category: ["laptops"], img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=300" },
    { id: 3, name: "Sony WH-1000XM4", price: 349, category: ["headphones"], img: "https://images.pexels.com/photos/159873/headphones-earphones-music-sound-159873.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 4, name: "Canon EOS R6", price: 2499, category: ["cameras"], img: "https://images.pexels.com/photos/51383/camera-lens-technology-photography-51383.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 5, name: "Apple Watch Series 9", price: 399, category: ["smartwatches"], img: "https://images.pexels.com/photos/277406/pexels-photo-277406.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 6, name: "Nintendo Switch", price: 299, category: ["gaming-consoles"], img: "https://images.pexels.com/photos/8458/controller-console-gaming-joystick.jpg?auto=compress&cs=tinysrgb&w=300" },
    { id: 7, name: "iPad Pro", price: 1099, category: ["tablets"], img: "https://images.pexels.com/photos/5082572/pexels-photo-5082572.jpeg?auto=compress&cs=tinysrgb&w=300" },
    { id: 8, name: "Wireless Charger", price: 49, category: ["accessories"], img: "https://images.pexels.com/photos/3945650/pexels-photo-3945650.jpeg?auto=compress&cs=tinysrgb&w=300" },
  ];

  const blogs = [
    { 
      id: 1, 
      title: "Top 5 Smartphones in 2025",
      date: "Oct 1, 2025",
      comments: 3,
      excerpt: "Discover the latest features and specifications of the top smartphones released this year.",
      img: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      id: 2, 
      title: "Laptop Buying Guide",
      date: "Sep 20, 2025",
      comments: 2,
      excerpt: "Tips to choose the perfect laptop for work, gaming, and creativity.",
      img: "https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400"
    },
    { 
      id: 3, 
      title: "Best Wireless Headphones",
      date: "Sep 10, 2025",
      comments: 5,
      excerpt: "A review of the best wireless headphones for music and calls.",
      img: "https://images.pexels.com/photos/159873/headphones-earphones-music-sound-159873.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const filteredProducts = activeFilter === "*"
    ? products
    : products.filter(p => p.category.includes(activeFilter));

  // Slick settings for categories slider
  const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,              // 🔹 Tự động chạy
  autoplaySpeed: 2000,         // 🔹 Thời gian dừng giữa mỗi lần trượt (ms)
  pauseOnHover: true,          // 🔹 Tạm dừng khi rê chuột
  cssEase: "ease-in-out",      // 🔹 Hiệu ứng trượt mượt hơn
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } },
  ],
};

  return (
    <div className="min-h-screen bg-white">

      {/* Top Header */}
      <div className="bg-gray-100 py-2 text-sm hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center text-gray-600">
          <div className="flex space-x-6">
            <span>✉ hello@electroshop.com</span>
            <span>Free Shipping for all Orders over $99</span>
          </div>
          <div className="flex space-x-4 items-center">
            <div className="flex space-x-3">
              <a href="#" className="hover:text-green-600"><Facebook size={16} /></a>
              <a href="#" className="hover:text-green-600"><Twitter size={16} /></a>
              <a href="#" className="hover:text-green-600"><Linkedin size={16} /></a>
            </div>
            <button className="hover:text-green-600 flex items-center gap-1">
              <User size={16} /> Login
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-green-600">ElectroShop</div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-green-600 font-medium">Home</a>
            <a href="#" className="hover:text-green-600">Shop</a>
            <a href="#" className="hover:text-green-600">Pages</a>
            <a href="#" className="hover:text-green-600">Blog</a>
            <a href="#" className="hover:text-green-600">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="relative">
              <Heart size={24} className="text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">1</span>
            </button>
            <button className="relative">
              <ShoppingBag size={24} className="text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </button>
            <span className="text-sm hidden md:block">item: <span className="font-semibold">$150.00</span></span>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <a href="#" className="hover:text-green-600 font-medium">Home</a>
              <a href="#" className="hover:text-green-600">Shop</a>
              <a href="#" className="hover:text-green-600">Pages</a>
              <a href="#" className="hover:text-green-600">Blog</a>
              <a href="#" className="hover:text-green-600">Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100">
        <div className="container mx-auto px-4 py-8 grid md:grid-cols-4 gap-6">
          {/* Categories Sidebar */}
         <div className="bg-white rounded-lg shadow-sm hidden md:block">
  {/* Nút tiêu đề có toggle */}
  <button
    onClick={() => setDeptOpen(!deptOpen)}
    className="flex items-center justify-between w-full px-4 py-3 font-semibold text-gray-800 border-b hover:bg-green-50 transition"
  >
    <span className="flex items-center gap-2">
      <Menu size={20} />
      All Departments
    </span>
    <svg
      className={`w-5 h-5 transform transition-transform duration-300 ${deptOpen ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </button>

  {/* Danh sách trượt xuống */}
  <ul
    className={`overflow-hidden transition-all duration-500 ease-in-out ${
      deptOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    {categories.map((cat, idx) => (
      <li key={idx}>
        <a
          href="#"
          className="block px-4 py-2 text-gray-600 hover:bg-green-50 hover:text-green-600 text-sm"
        >
          {cat}
        </a>
      </li>
    ))}
  </ul>
</div>


          {/* Hero Content */}
          <div className="md:col-span-3 space-y-6">
            {/* Search Bar */}
           {/* 🔍 Search Bar Improved */}
<div className="bg-white rounded-2xl shadow-md p-5 flex flex-col md:flex-row items-center justify-between gap-4 border border-green-100">
  {/* Input + Button */}
  <div className="flex items-center w-full md:w-3/4 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 focus-within:border-green-500 transition">
    <input
      type="text"
      placeholder="Search for products, brands, or categories..."
      className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
    />
    <button className="ml-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-lg flex items-center gap-2 transition">
      <Search size={18} />
      <span className="text-sm">Search</span>
    </button>
  </div>

  {/* Hotline */}
  <div className="flex items-center gap-3 bg-green-50 px-5 py-3 rounded-xl border border-green-100">
    <div className="flex items-center justify-center w-10 h-10 bg-green-100 text-green-600 rounded-full">
      <Phone size={20} />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800 leading-none">
        +65 11.188.888
      </h4>
      <p className="text-sm text-gray-500">Support 24/7 time</p>
    </div>
  </div>
</div>


            {/* Hero Banner */}
            <div 
              className="bg-cover bg-center rounded-lg p-12 md:p-20 text-white"
              style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1200)'}}
            >
              <div className="max-w-md">
                <div className="text-green-400 font-semibold mb-2">ELECTRONICS</div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Latest Laptops<br />For Everyone</h1>
                <p className="mb-6">Free Pickup and Delivery Available</p>
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 font-semibold">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Slider Section */}
      <section className="py-16">
        <div className="container mx-auto">
          <Slider {...sliderSettings}>
            {categoriesCarousel.map((cat, idx) => (
              <div key={idx} className="px-2">
                <div
                  className="relative rounded-lg h-40 flex items-end justify-center bg-cover bg-center shadow-md"
                  style={{ backgroundImage: `url(${cat.img})` }}
                >
                  <h5 className="bg-black bg-opacity-40 text-white px-3 py-1 rounded mb-2">
                    <a href="#">{cat.title}</a>
                  </h5>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[{ label: 'All', value: '*' }, { label: 'Smartphones', value: 'smartphones' }, { label: 'Laptops', value: 'laptops' }, { label: 'Headphones', value: 'headphones' }, { label: 'Cameras', value: 'cameras' }, { label: 'Smartwatches', value: 'smartwatches' }]
            .map(filter => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2 rounded-full transition ${activeFilter===filter.value?'bg-green-600 text-white':'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div key={product.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
                <div className="relative overflow-hidden">
                  <img src={product.img} alt={product.name} className="w-full h-64 object-cover group-hover:scale-110 transition duration-300" />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition flex items-center justify-center space-x-3">
                    <button className="bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition transform translate-y-4 group-hover:translate-y-0 hover:bg-green-600 hover:text-white">
                      <Heart size={20} />
                    </button>
                    <button className="bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition transform translate-y-4 group-hover:translate-y-0 delay-75 hover:bg-green-600 hover:text-white">
                      <ShoppingBag size={20} />
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h6 className="text-gray-800 mb-2">{product.name}</h6>
                  <div className="text-green-600 font-bold text-xl">${product.price}.00</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">From The Blog</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogs.map(blog => (
              <div key={blog.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition">
                <img src={blog.img} alt={blog.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                    <span>📅 {blog.date}</span>
                    <span>💬 {blog.comments}</span>
                  </div>
                  <h5 className="text-lg font-semibold mb-3 text-gray-800 hover:text-green-600 cursor-pointer">{blog.title}</h5>
                  <p className="text-gray-600 text-sm">{blog.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white text-2xl font-bold mb-4">ElectroShop</h3>
            <ul className="space-y-2 text-sm">
              <li>Address: 60-49 Road 11378 New York</li>
              <li>Phone: +65 11.188.888</li>
              <li>Email: hello@electroshop.com</li>
            </ul>
          </div>
          <div>
            <h6 className="text-white font-semibold mb-4">Useful Links</h6>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-600">About Us</a></li>
              <li><a href="#" className="hover:text-green-600">About Our Shop</a></li>
              <li><a href="#" className="hover:text-green-600">Secure Shopping</a></li>
              <li><a href="#" className="hover:text-green-600">Delivery Information</a></li>
              <li><a href="#" className="hover:text-green-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-600">Our Sitemap</a></li>
            </ul>
          </div>
          <div>
            <h6 className="text-white font-semibold mb-4">My Account</h6>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-green-600">Sign In</a></li>
              <li><a href="#" className="hover:text-green-600">View Cart</a></li>
              <li><a href="#" className="hover:text-green-600">My Wishlist</a></li>
              <li><a href="#" className="hover:text-green-600">Track My Order</a></li>
              <li><a href="#" className="hover:text-green-600">Help</a></li>
            </ul>
          </div>
          <div>
            <h6 className="text-white font-semibold mb-4">Newsletter</h6>
            <p className="text-sm mb-4">Subscribe to our newsletter and get 10% off your first purchase</p>
            <div className="flex space-x-2">
              <input type="text" placeholder="Email" className="p-2 rounded-l bg-gray-800 text-white focus:outline-none" />
              <button className="bg-green-600 px-4 rounded-r hover:bg-green-700">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="text-center border-t border-gray-800 pt-4 text-sm">&copy; 2025 ElectroShop. All Rights Reserved.</div>
      </footer>
    </div>
  );
};

export default App;
