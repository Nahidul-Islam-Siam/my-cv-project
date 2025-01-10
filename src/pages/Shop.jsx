

import NewsletterSignup from '../components/NewsLetter';
import ProductGrid from '../components/ProductGrid';
import ShopBanner from '../components/ShopBanner';

const Shop = () => {
   
  return (
 <div>
     <div className='mx-[50px]'>
<ShopBanner/>
<ProductGrid/>
  </div>

  <NewsletterSignup/>
 
  {/* <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div> */}
 </div>
  );
};

export default Shop;