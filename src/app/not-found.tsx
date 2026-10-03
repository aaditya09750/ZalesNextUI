import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-ink grid min-h-screen place-items-center px-6">
      <div className="text-center">
        <h1 className="font-display text-cream text-8xl font-semibold">404</h1>
        <p className="text-mute mt-4 text-lg">This page could not be found.</p>
        <Link
          href="/"
          className="bg-cream text-ink hover:bg-tan mt-8 inline-block rounded-full px-7 py-3.5 text-sm font-medium transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
