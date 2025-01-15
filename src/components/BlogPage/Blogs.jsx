import React from "react";

const StylishTravelBags = () => {
  return (
    <div className="bg-gray-100">
      {/* Blog Page Container */}
      <div className="container mx-auto p-2">
        {/* Blog Header */}
        <div className="flex pt-5">
          <img src="/assets/home.png" alt="Home" />
          <p>
            &nbsp; /<span className="font-thin text-sm">&nbsp; Blog</span>&nbsp; /{" "}
            <span className="text-base font-bold">&nbsp; Stylish Travel Bags</span>
          </p>
        </div>

        {/* Blog Hero Section */}
        <div
          className="relative z-10 mt-8 rounded-3xl overflow-hidden bg-cover bg-center h-96"
          style={{
            backgroundImage: "url('/assets/30b855df11cc62ecb16de050c35a5be0.png')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 pt-28 pl-9">
            <h4
              className="text-base text-white inline-block px-4 py-2 rounded-lg"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                backdropFilter: "blur(10px)",
              }}
            >
              TRENDY
            </h4>
            <h1 className="text-white text-5xl font-semibold uppercase pt-3">
              Stylish Travel Bags
            </h1>
            <div className="flex gap-5 pt-4 pb-4">
              <img
                className="w-14 h-14 rounded-full ring-2 ring-gray-400"
                src="/assets/Author Image.png"
                alt="Author"
              />
              <div>
                <h1 className="text-xl text-white font-medium">Omar Farooq</h1>
                <p className="text-xl text-white font-medium">17 September, 2024</p>
              </div>
            </div>
            <button className="flex gap-2 items-center px-4 py-1 border-2 text-white text-lg rounded-full hover:bg-blue-700">
              <img src="/assets/share.png" alt="Share" />
              <span className="text-base font-normal">Share</span>
            </button>
          </div>
        </div>

        {/* Blog Content */}
        <div className="lg:flex lg:space-x-8 gap-2 mt-8">
          {/* Main Content */}
          <div className="lg:w-2/3">
            {/* Article Sections */}
            <ArticleSection
              title="Your Perfect Companion for Every Journey"
              content="Traveling can be transformative, and having the right accessories can make all the difference. Among these, a stylish travel bag stands out as a practical yet fashionable companion for any traveler. Whether you're jetting off for a weekend getaway or embarking on a long adventure, the right travel bag not only holds your essentials but also complements your style."
            />
            <ArticleSection
              title="The Importance of Choosing the Right Travel Bag"
              content="A stylish travel bag is a blend of functionality and fashion. It's essential to choose a travel bag that fits your journey type while enhancing your overall travel experience."
            />
            {/* List Section */}
            <ArticleList
              title="Types of Stylish Travel Bags"
              items={[
                {
                  label: "Carry-Ons",
                  description:
                    "Ideal for those who prefer to travel light or for weekend escapes, carry-ons are compact yet spacious enough to hold a few days' worths of clothing and essentials.",
                },
                {
                  label: "Duffel Bags",
                  description:
                    "Perfect for adventurers and impromptu travelers, duffel bags offer a lot of space and flexibility. Leather or canvas duffel bags can add an elegant touch while being exceptionally functional.",
                },
                {
                  label: "Tote Bags",
                  description:
                    "Tote bags offer an elegant, minimalist solution for light travel. They're ideal for carrying personal items during a short trip.",
                },
                {
                  label: "Backpacks",
                  description:
                    "Modern travel backpacks are not just for hikers but for anyone who wants to keep their hands free while on the move. Many come with dedicated compartments for laptops, cameras, and other tech gadgets, making them ideal for tech-savvy travelers.",
                },
              ]}
            />
            {/* Conclusion */}
            <ArticleSection
              title="Conclusion"
              content="A travel bag is more than just a container; it's part of your travel journey. Select a bag that matches your needs and style, making each journey enjoyable and memorable."
            />
            {/* Comment Section */}
            <CommentSection />
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

const ArticleSection = ({ title, content }) => (
  <div className="mt-4">
    <h2 className="text-3xl text-gray-800 font-medium mb-4">{title}</h2>
    <p className="text-gray-700 text-base font-normal mb-4">{content}</p>
  </div>
);

const ArticleList = ({ title, items }) => (
  <div className="mt-4">
    <h2 className="text-3xl text-gray-800 font-medium mb-4">{title}</h2>
    <ol className="list-decimal pl-5 space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700 text-base font-normal mb-4">
          <span className="font-semibold">{item.label}: </span>
          {item.description}
        </li>
      ))}
    </ol>
  </div>
);

const CommentSection = () => (
  <div className="flex justify-center p-6 rounded-lg shadow mt-16 bg-white">
    <div>
      <h3 className="text-3xl text-center font-medium text-gray-800 mb-4">
        Leave a Comment
      </h3>
      <form>
        <div className="mb-4 flex gap-2">
          <input
            type="text"
            className="mt-1 pl-2 p-3 text-sm block w-full rounded-md bg-gray-100 border-gray-300 shadow focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Name *"
          />
          <input
            type="email"
            className="mt-1 pl-2 p-3 text-sm block w-full rounded-md bg-gray-100 border-gray-300 shadow focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Email *"
          />
        </div>
        <textarea
          className="mt-1 pl-2 block w-full rounded-md bg-gray-100 border-gray-300 shadow focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          rows="3"
          placeholder="Comment *"
        ></textarea>
        <button
          type="submit"
          className="bg-red-500 text-white text-base px-4 py-2 w-full rounded-full mt-4"
        >
          POST COMMENT
        </button>
      </form>
    </div>
  </div>
);

const Sidebar = () => (
  <div className="lg:w-1/3 mt-8 lg:mt-0">
    <div className="bg-white p-6 rounded-3xl border border-gray-300 shadow">
      <h3 className="text-4xl font-bold text-center mb-12">In The Spotlight</h3>
      <div className="space-y-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-start p-1">
            <img
              src={`/assets/Article Image (${index}).png`}
              alt="Spotlight Article"
              className="w-48 h-36 object-cover rounded-lg"
            />
            <div className="ml-4 flex flex-col justify-between h-32">
              <div className="flex flex-col gap-1">
                <h4 className="text-lg font-semibold">Sample Article Title</h4>
                <p className="text-sm text-gray-500">Author &nbsp;•&nbsp; Date</p>
              </div>
              <div>
                <h4
                  className="text-base text-gray-700 inline-block px-4 py-2 rounded-lg"
                  style={{
                    backgroundColor: "#EBECF0",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  TRENDY
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default StylishTravelBags;
