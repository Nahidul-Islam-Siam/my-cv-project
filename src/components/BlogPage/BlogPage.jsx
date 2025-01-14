import { useState } from 'react';

// Blog Posts Data
const blogPosts = [
  {
    title: '7 ways to decor your home like a professional',
    image: 'https://i.ibb.co/6P9399X/image-1.jpg',
    date: 'October 16, 2022',
    category: 'decor',
  },
  {
    title: 'Inside a beautiful kitchen organization',
    image: 'https://i.ibb.co/y887p76/image-2.jpg',
    date: 'October 16, 2022',
    category: 'organization',
  },
  {
    title: 'Decor your bedroom for your children',
    image: 'https://i.ibb.co/w026Q58/image-3.jpg',
    date: 'October 16, 2022',
    category: 'decor',
  },
  {
    title: 'Modern texas home is beautiful and completely kid-friendly',
    image: 'https://i.ibb.co/v451T1L/image-4.jpg',
    date: 'October 16, 2022',
    category: 'kid-friendly',
  },
  // ... (remaining blog posts)
];

// BlogCard Component
const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800 line-clamp-2">{post.title}</h3>
        <p className="text-gray-600 text-sm mt-2">{post.date}</p>
      </div>
    </div>
  );
};

// FilterDropdown Component
const FilterDropdown = ({ categories, filter, setFilter }) => {
  return (
    <div className="mb-4">
      <label htmlFor="filter" className="mr-2 font-medium">Filter by Category:</label>
      <select
        id="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border rounded px-2 py-1"
      >
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

// Main App Component
const BlogPage = () => {
  const [filter, setFilter] = useState('all');

  const filteredPosts = filter === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === filter);

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  return (
    <div className="container mx-auto p-4">
      <FilterDropdown 
        categories={categories} 
        filter={filter} 
        setFilter={setFilter} 
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {filteredPosts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
