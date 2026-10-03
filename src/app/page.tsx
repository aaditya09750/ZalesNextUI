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
      {/* Persistent Floating Navbar Across Entire Page Scroll with Soft Shroud */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 pt-3 pb-6 sm:pt-5">
        <div
          className="from-ink via-ink/80 pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b to-transparent"
          aria-hidden
        />
        <div className="pointer-events-auto relative z-10 mx-auto max-w-[1600px] px-3 sm:px-6 lg:px-10">
          <Navbar />
        </div>
      </header>

      <section className="w-full">
        <div className="mx-auto w-full max-w-[1600px] px-3 sm:px-6 lg:px-10">
          <Hero />
          <InfoCards />
        </div>
      </section>
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
