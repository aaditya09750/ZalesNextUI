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
    <main className="bg-ink text-cream relative min-h-screen w-full overflow-x-hidden pt-20 sm:pt-24">
      {/* Persistent Floating Navbar Across Entire Page Scroll */}
      <div className="pointer-events-none fixed inset-x-0 top-3 z-50 px-3 sm:top-5 sm:px-6 lg:px-10">
        <div className="pointer-events-auto mx-auto max-w-[1600px]">
          <Navbar />
        </div>
      </div>

      <header className="w-full">
        <div className="mx-auto w-full max-w-[1600px] px-3 sm:px-6 lg:px-10">
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
