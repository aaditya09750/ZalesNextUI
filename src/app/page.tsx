import {
  CategoryCarousel,
  CustomCTA,
  Hero,
  InfoCards,
  Navbar,
  NewCollection,
  Newsletter,
  OurWorks,
  QuoteLogos,
  ShopByShape,
  Testimonials,
  TryOn,
} from "@/components/organisms";

export default function HomePage() {
  return (
    <main className="bg-ink text-cream relative min-h-screen w-full overflow-x-hidden">
      <header className="w-full">
        <div className="mx-auto w-full max-w-[1600px] px-3 pt-3 sm:px-6 sm:pt-5 lg:px-10">
          <div className="sticky top-3 z-50 sm:top-5">
            <Navbar />
          </div>
          <Hero />
          <InfoCards />
        </div>
      </header>
      <ShopByShape />
      <CategoryCarousel />
      <OurWorks />
      <NewCollection />
      <TryOn />
      <QuoteLogos />
      <Testimonials />
      <CustomCTA />
      <Newsletter />
    </main>
  );
}
