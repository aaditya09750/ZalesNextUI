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
    <div className="bg-shell min-h-screen px-2 py-2 sm:px-4 sm:py-4 lg:px-6 lg:py-6">
      <main className="bg-ink mx-auto max-w-[1440px] overflow-hidden rounded-[2rem] shadow-[0_40px_120px_rgba(40,25,15,0.45)] sm:rounded-[2.75rem]">
        <header className="px-3 pt-3 sm:px-5 sm:pt-5">
          <Navbar />
          <Hero />
          <InfoCards />
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
    </div>
  );
}
