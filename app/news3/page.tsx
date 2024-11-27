import { bebas } from '@/config/fonts';
import { prisma } from '@/lib/prisma';
import BlogCard from '@/components/ui/BlogCard'; // Ensure this import is correct

export default async function NewsPage() {
  const articles = await prisma.article?.findMany({
    include: { author: true },
  });
  return (
    <>
      {/* Card Blog */}
      <div className='mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14'>
        {/* Title */}
        <div className='mx-auto mb-10 max-w-7xl text-left lg:mb-14 p-4 md:p-8 bg-white text-foreground md:rounded-2xl '>
          <h2
            className={`${bebas.className} text-2xl font-bold dark:text-white md:text-4xl md:leading-tight`}>
            News & Articles
          </h2>
          <p className='mt-1 max-w-4xl text-gray-600 dark:text-neutral-400'>
            Welcome to our News and Articles section, where we dive into
            Africa's evolving markets, exploring the power of trade, technology,
            and sustainability.
          </p>
          <br />
          <p className='mt-1 max-w-4xl text-gray-600 dark:text-neutral-400'>
            From the game-changing African Continental Free Trade Area (AfCFTA)
            to the leading commodities of 2024, discover fresh insights that
            drive regional growth, support sustainable investment, and empower
            Africa's economic transformation.
          </p>
        </div>
        {/* End Title */}

        {/* Render articles only if there are any */}
        <div className='container mx-auto bg-white text-foreground p-4 md:p-8  '>
          {articles.length > 0 ? (
            <ul className='grid gap-3 sm:grid-cols-2 lg:grid-cols-4'>
              {articles.map((article) => (
                <li key={article.id}>
                  <BlogCard
                    imageSrc={`${article.thumbnail}`}
                    imageAlt='Intra-African Trade'
                    title={`${article.title}`}
                    description={`${article.text}`}
                    author='By Astar Team'
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p className='text-center text-gray-600 dark:text-neutral-400'>
              No articles available at the moment. Please check back later.
            </p>
          )}
        </div>
      </div>
      {/* End Card Blog */}
    </>
  );
}
