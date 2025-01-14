import BlogBG from '../assets/BlogBG.png'
import BlogPage from '../components/BlogPage/BlogPage';


import Banner from '../components/commoon/Banner/Banner';
import NewsletterSignup from '../components/commoon/NewsLetter';
const Blog = () => {
    const breadcrumbs = [
        { label: 'Home', url: '/' },
        { label: 'Blog' },
      ];
    return (
<div>
<div className='px-10'>
              <Banner
                backgroundImage={BlogBG}
                title="Our Blog"
                subtitle="Home ideas and design inspiration"
                breadcrumbs={breadcrumbs}
              />
        </div>
        <BlogPage/>
        <NewsletterSignup/>
</div>
    );
};

export default Blog;