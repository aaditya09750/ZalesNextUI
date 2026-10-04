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
import { JsonLd } from "@/components/atoms";
import {
  BREADCRUMB_SCHEMA,
  JEWELRY_STORE_SCHEMA,
  ORGANIZATION_SCHEMA,
  WEBSITE_SCHEMA,
} from "@/constants";

export default function HomePage() {
  return (
    <main className="bg-ink text-cream relative min-h-screen w-full overflow-x-hidden pt-20 sm:pt-24">
      {/* Schema.org Structured Data for Rich Google Snippets */}
      <JsonLd data={ORGANIZATION_SCHEMA} />
      <JsonLd data={WEBSITE_SCHEMA} />
      <JsonLd data={JEWELRY_STORE_SCHEMA} />
      <JsonLd data={BREADCRUMB_SCHEMA} />

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
