import { useState } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      image: "/sony-wh-ch720n.png",
      name: "Sony-WH-1000XM5 Wireless Noise Canceling Headphones",
      price: 299.9,
      isNew: true,
      category: "Living Room",
    },
    {
      id: 2,
      image: "/sony-wh-ch720n.png",
      name: "Beats Studio Pro Headphones",
      price: 349.99,
      isNew: false,
      category: "Bedroom",
    },
    {
      id: 3,
      image: "/sony-wh-ch720n.png",
      name: "Sony-WH-CH720N Wireless Noise Canceling Headphones",
      price: 149.99,
      isNew: false,
      category: "Kitchen",
    },
    {
      id: 4,
      image: "/sony-wh-ch720n.png",
      name: "Skullcandy- Rail True Wireless Earbuds",
      price: 79.99,
      isNew: true,
      category: "Bathroom",
    },
    {
      id: 5,
      image: "/sony-wh-ch720n.png",
      name: "Beats Studio Pro Headphones",
      price: 249.99,
      isNew: false,
      category: "Outdoor",
    },
    {
      id: 6,
      image: "/sony-wh-ch720n.png",
      name: "JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports",
      price: 179.95,
      isNew: false,
      category: "Kitchen",
    },
    {
      id: 7,
      image: "/sony-wh-ch720n.png",
      name: "Bose QuietComfort Headphones",
      price: 349.0,
      isNew: true,
      category: "Living Room",
    },
    {
      id: 8,
      image: "/sony-wh-ch720n.png",
      name: "AKG Y600NC Wireless Headphones",
      price: 349.99,
      isNew: false,
      category: "Outdoor",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  const categories = [...new Set(products.map((product) => product.category))];
  const priceRanges = [
    { label: "$0 - $99.99", min: 0, max: 99.99 },
    { label: "$100 - $199.99", min: 100, max: 199.99 },
    { label: "$200 - $299.99", min: 200, max: 299.99 },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      !selectedCategory || product.category === selectedCategory;
    const matchesPrice =
      !selectedPriceRange ||
      (product.price >= selectedPriceRange.min &&
        product.price <= selectedPriceRange.max);
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="flex flex-wrap gap-6 p-6">
      {/* Sidebar Filter */}
      <aside className="w-full lg:w-1/4 bg-gray-100 p-4 rounded-md">
        <h4 className="text-lg font-semibold mb-4">Filter</h4>

        {/* Categories */}
        <div className="mb-6">
          <h5 className="text-base font-medium mb-2">Categories</h5>
          <ul className="space-y-2">
            <li
              className={`text-sm text-gray-700 cursor-pointer hover:underline ${
                !selectedCategory ? "font-bold" : ""
              }`}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </li>
            {categories.map((category) => (
              <li
                key={category}
                className={`text-sm text-gray-700 cursor-pointer hover:underline ${
                  selectedCategory === category ? "font-bold" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Price */}
        <div>
          <h5 className="text-base font-medium mb-2">Price</h5>
          <ul className="space-y-2">
            <li
              className={`text-sm text-gray-700 cursor-pointer hover:underline ${
                !selectedPriceRange ? "font-bold" : ""
              }`}
              onClick={() => setSelectedPriceRange(null)}
            >
              All
            </li>
            {priceRanges.map((range) => (
              <li
                key={range.label}
                className={`text-sm text-gray-700 cursor-pointer hover:underline ${
                  selectedPriceRange?.label === range.label ? "font-bold" : ""
                }`}
                onClick={() => setSelectedPriceRange(range)}
              >
                {range.label}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Product Grid */}
      <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {filteredProducts.length === 0 && (
          <div className="col-span-full text-center text-gray-600">
            No products found.
          </div>
        )}
      </section>
    </div>
  );
};

export default ProductGrid;
