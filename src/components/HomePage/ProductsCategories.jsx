import { IoIosArrowRoundForward } from "react-icons/io";
import Heading from "../commoon/Heading";

const ProductCategories = () => {
  const categories = [
    { img: "/collection.png", title: "Headband" },
    { img: "/collection 02.png", title: "Earbuds" },
    { img: "/collection 03.png", title: "Accessories" },
  ];

  return (
    <div className="py-16">
          <Heading title="Shop Collection" />
      <div className="container mx-auto">
        <div className="flex flex-wrap md:flex-nowrap gap-7">
          {/* First collection */}
          <div className="w-full md:w-1/2 overflow-hidden">
            <div className="relative aspect-w-1 aspect-h-1">
              <img
                src={categories[0].img}
                alt={categories[0].title}
                className="object-cover w-full h-full"
              />
              <div className="p-6 absolute bottom-2">
                <h3 className="text-[34px] text-[#121212] font-medium mb-2 capitalize poppins-font">
                  {categories[0].title}
                </h3>
                <p className="text-[#121212] inter-font font-medium text-base  underline gap-1 flex align-middle items-center">
                  Collection <IoIosArrowRoundForward />
                </p>
              </div>
            </div>
          </div>

          {/* Second and Third collections */}
          <div className="flex flex-col md:w-1/2 gap-7">
            {categories.slice(1).map((category, index) => (
              <div key={index} className="relative aspect-w-1 aspect-h-1 overflow-hidden">
                <img
                  src={category.img}
                  alt={category.title}
                  className="object-cover w-full h-full"
                />
                <div className="p-6 absolute bottom-2">
                  <h3 className="text-[34px] text-[#121212] font-medium mb-2 capitalize poppins-font">
                    {category.title}
                  </h3>
                  <p className="text-[#121212] inter-font font-medium text-base  underline gap-1 flex align-middle items-center">
                    Collection <IoIosArrowRoundForward />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
