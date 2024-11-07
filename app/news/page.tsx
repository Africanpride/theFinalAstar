import BlogCard from '@/components/ui/BlogCard';
import { bebas } from '@/config/fonts';
// Removed the import of BlogCard due to the error

export default function NewsPage() {
  return (
    <>
      {/* Card Blog */}
      <div className='max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
        {/* Title */}
        <div className='max-w-7xl mx-auto text-left mb-10 lg:mb-14'>
          <h2
            className={`${bebas.className} text-2xl font-bold md:text-4xl md:leading-tight dark:text-white`}>
            News & Articles
          </h2>
          <p className='max-w-4xl mt-1 text-gray-600 dark:text-neutral-400'>
            Welcome to our News and Articles section, where we dive into
            Africa's evolving markets, exploring the power of trade, technology,
            and sustainability.
          </p>
          <br />
          <p className='max-w-4xl mt-1 text-gray-600 dark:text-neutral-400'>
            {' '}
            From the game-changing African Continental Free Trade Area (AfCFTA) to the
            leading commodities of 2024, discover fresh insights that drive
            regional growth, support sustainable investment, and empower
            Africa's economic transformation.
          </p>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-3'>
          {/* Card */}
          <BlogCard
            imageSrc='/images/farming.jpg'
            imageAlt='Intra-African Trade'
            title='The Rise of Intra-African Trade: What It Means for Regional Growth'
            description='We will Discuss the opportunities that the African Continental Free Trade Area 
              (AfCFTA) provides for businesses and investors in commodities'
            author='By Astar Team'
          />
          <BlogCard
            imageSrc='/images/construction.jpg'
            imageAlt='Commodities in Africa'
            title='Top Commodities Driving Africa’s Economy in 2024'
            description='We will focus on the key commodities (like oil, gas, minerals, agriculture) and how 
                they impact regional markets.'
            author='By Astar Team'
          />
          <BlogCard
            imageSrc='/images/mission2.jpg'
            imageAlt='Sustainable Investment'
            title='Why Sustainable Investment Matters for Africa’s Future'
            description='Under this we will explain the importance of sustainability in investment, 
                  highlighting ASTAR’s commitment to promoting eco-friendly projects.'
            author='By Astar Team'
          />
          <BlogCard
            imageSrc='/images/trading.jpg'
            imageAlt='Sustainable Investment'
            title='The Role of Technology in Africa’s Commodity Markets'
            description='Here, we will Discuss how technology is transforming commodities trading in Africa, 
            from blockchain for transparency to AI for market analysis.'
            author='By Astar Team'
          />
          {/* End Card */}
        </div>
        {/* End Grid */}
      </div>
      {/* End Card Blog */}
    </>
  );
}
