import ProductCard from "./ProductCard";


const ProductGrid = () => {
  const products = [
    {
      id: 1,
      image: "/sony-wh-ch720n.png",
      name: "Sony-WH-1000XM5 Wireless Noise Canceling Headphones",
      price: "299.90",
      isNew: true,
    },
    {
      id: 2,
      image: "/sony-wh-ch720n.png",
      name: "Beats Studio Pro Headphones",
      price: "349.99",
      isNew: false,
    },
    {
      id: 3,
      image: "/sony-wh-ch720n.png",
      name: "Sony-WH-CH720N Wireless Noise Canceling Headphones",
      price: "149.99",
      isNew: false,
    },
    {
      id: 4,
      image: "/sony-wh-ch720n.png",
      name: "Skullcandy- Rail True Wireless Earbuds",
      price: "79.99",
      isNew: true,
    },
    {
      id: 5,
      image: "/sony-wh-ch720n.png",
      name: "Beats Studio Pro Headphones",
      price: "249.99",
      isNew: false,
    },
    {
      id: 6,
      image: "/sony-wh-ch720n.png",
      name: "JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports",
      price: "179.95",
      isNew: false,
    },
    {
      id: 7,
      image: "/sony-wh-ch720n.png",
      name: "Bose QuietComfort Headphones",
      price: "349.00",
      isNew: true,
    },
    {
      id: 8,
      image: "/sony-wh-ch720n.png",
      name: "AKG Y600NC Wireless Headphones",
      price: "349.99",
      isNew: false,
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 p-6">
      {/* Sidebar Filter */}
      <aside className="w-full lg:w-1/4 bg-gray-100 p-4 rounded-md">
        <h4 className="text-lg font-semibold mb-4">Filter</h4>

        {/* Categories */}
        <div className="mb-6">
          <h5 className="text-base font-medium mb-2">Categories</h5>
          <ul className="space-y-2">
            {["Living Room", "Bedroom", "Kitchen", "Bathroom", "Outdoor"].map(
              (category) => (
                <li
                  key={category}
                  className="text-sm text-gray-700 cursor-pointer hover:underline"
                >
                  {category}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Price */}
        <div>
          <h5 className="text-base font-medium mb-2">Price</h5>
          <ul className="space-y-2">
            {["$0 - $99.99", "$100 - $199.99", "$200 - $299.99"].map(
              (priceRange) => (
                <li
                  key={priceRange}
                  className="text-sm text-gray-700 cursor-pointer hover:underline"
                >
                  {priceRange}
                </li>
              )
            )}
          </ul>
        </div>
      </aside>

      {/* Product Grid */}
      <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default ProductGrid;
