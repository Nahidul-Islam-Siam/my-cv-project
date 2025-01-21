import { useState} from "react";
import ProductCard from "../commoon/ProductCard";
import filter from '../../assets/FilterIcon.png';
import useProducts from "../Hooks/AllProdutcs";

const ProductGrid = () => {
  // const [products, setProducts] = useState([]); // Store products fetched from JSON
  const {products} = useProducts();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false); // For mobile dropdown toggle
  const [visibleCount, setVisibleCount] = useState(4);

  const priceRanges = [
    { label: "$0 - $99.99", min: 0, max: 99.99 },
    { label: "$100 - $199.99", min: 100, max: 199.99 },
    { label: "$200 - $299.99", min: 200, max: 299.99 },
  ];

  const categories = [...new Set(products.flatMap((product) => product.categories))];

  const handlePriceChange = (range) => {
    setSelectedPriceRanges((prevSelectedRanges) =>
      prevSelectedRanges.some((r) => r.label === range.label)
        ? prevSelectedRanges.filter((r) => r.label !== range.label)
        : [...prevSelectedRanges, range]
    );
  };

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      !selectedCategory || product.categories.includes(selectedCategory);
    const matchesPrice =
      selectedPriceRanges.length === 0 ||
      selectedPriceRanges.some(
        (range) => product.price >= range.min && product.price <= range.max
      );
    return matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "priceLowToHigh") return a.price - b.price;
    if (sortOption === "priceHighToLow") return b.price - a.price;
    return 0; // Default (no sorting)
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Filter and Sort Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-4 rounded-md mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <img alt="filter icon" className="w-4 h-4 mr-2" src={filter} />
          <span className="text-gray-800 font-semibold">Filter</span>
        </div>
        <h2 className="text-lg font-semibold mb-4 md:mb-0">
          {selectedCategory || "All Categories"}
        </h2>
        <div className="flex items-center space-x-2">
          <label className="text-sm font-semibold">Sort by:</label>
          <select
            className="border rounded px-3 py-1 text-sm"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Mobile Filter Dropdown */}
      <div className="lg:hidden mb-4">
        <button
          className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-md flex justify-between items-center"
          onClick={() => setIsMobileFilterOpen((prev) => !prev)}
        >
          <span>Filters</span>
          <span>{isMobileFilterOpen ? "▲" : "▼"}</span>
        </button>
        {isMobileFilterOpen && (
          <div className="bg-gray-100 p-4 rounded-md mt-2">
            {/* Filter UI */}
            <div className="mb-6">
              <h5 className="text-base font-semibold mb-2">Categories</h5>
              <ul className="space-y-2">
                <li
                  className={`cursor-pointer ${!selectedCategory ? "font-bold underline" : ""}`}
                  onClick={() => setSelectedCategory(null)}
                >
                  All
                </li>
                {categories.map((category) => (
                  <li
                    key={category}
                    className={`cursor-pointer ${selectedCategory === category ? "font-bold underline" : ""}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-base font-semibold mb-2">Price</h5>
              <ul className="space-y-2">
                <li>
                  <label className="flex items-center justify-between">
                    All Price
                    <input
                      type="checkbox"
                      checked={selectedPriceRanges.length === 0}
                      onChange={() => setSelectedPriceRanges([])}
                      className="w-5 h-5"
                    />
                  </label>
                </li>
                {priceRanges.map((range) => (
                  <li key={range.label}>
                    <label className="flex items-center justify-between">
                      {range.label}
                      <input
                        type="checkbox"
                        checked={selectedPriceRanges.some((r) => r.label === range.label)}
                        onChange={() => handlePriceChange(range)}
                        className="w-5 h-5"
                      />
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar (Desktop Only) */}
        <aside className="hidden lg:block lg:w-1/4 bg-gray-100 p-4 rounded-md">
          <h4 className="text-xl font-semibold mb-6 flex items-center">
            <img alt="filter icon" className="w-4 h-4 mr-2" src={filter} />
            Filter
          </h4>
          <div className="mb-6">
            <h5 className="text-base font-semibold mb-2">Categories</h5>
            <ul className="space-y-2">
              <li
                className={`cursor-pointer ${!selectedCategory ? "font-bold underline" : ""}`}
                onClick={() => setSelectedCategory(null)}
              >
                All
              </li>
              {categories.map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer ${selectedCategory === category ? "font-bold underline" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-base font-semibold mb-2">Price</h5>
            <ul className="space-y-2">
              <li>
                <label className="flex items-center justify-between">
                  All Price
                  <input
                    type="checkbox"
                    checked={selectedPriceRanges.length === 0}
                    onChange={() => setSelectedPriceRanges([])}
                    className="w-5 h-5"
                  />
                </label>
              </li>
              {priceRanges.map((range) => (
                <li key={range.label}>
                  <label className="flex items-center justify-between">
                    {range.label}
                    <input
                      type="checkbox"
                      checked={selectedPriceRanges.some((r) => r.label === range.label)}
                      onChange={() => handlePriceChange(range)}
                      className="w-5 h-5"
                    />
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Products Grid */}
        <section className="flex-1 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedProducts.slice(0, visibleCount).map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
          {sortedProducts.length === 0 && <div>No products found.</div>}
        </section>
      </div>

      {/* Show More Button */}
      {visibleCount < sortedProducts.length && (
        <div className="flex justify-center mt-6">
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
