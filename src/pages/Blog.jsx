import BlogBG from '../assets/BlogBG.png'


import Banner from '../components/commoon/Banner/Banner';
import NewsletterSignup from '../components/commoon/NewsLetter';
const Blog = () => {
    const breadcrumbs = [
        { label: 'Home', url: '/' },
        { label: 'Shop' },
      ];
    return (
<div>
<div className='px-10'>
              <Banner
                backgroundImage={BlogBG}
                title="Shop Page"
                subtitle="Let’s design the place you always imagined."
                breadcrumbs={breadcrumbs}
              />
        </div>
        <NewsletterSignup/>
</div>
    );
};

export default Blog;