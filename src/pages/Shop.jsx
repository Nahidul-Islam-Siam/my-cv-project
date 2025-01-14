import NewsletterSignup from '../components/commoon/NewsLetter';
import ProductGrid from '../components/ProductPage/ProductGrid';

import ShopBG from '../assets/ShopBanner.png';
import Banner from '../components/commoon/Banner/Banner';

const Shop = () => {
  const breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Shop' },
  ];

  return (
    <div>
      <div className="lg:mx-[50px]">
        <Banner
          backgroundImage={ShopBG}
          title="Shop Page"
          subtitle="Let's design the place you always imagined."
          breadcrumbs={breadcrumbs}
        />
        <ProductGrid />
      </div>

      <NewsletterSignup />
    </div>
  );
};

export default Shop;
