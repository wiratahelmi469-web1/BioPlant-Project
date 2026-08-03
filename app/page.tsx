import BackgroundVideo from "@/components/BackgroundVideo";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      {/* Background Video */}
      <BackgroundVideo />

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/45 backdrop-blur-[2px] -z-10" />

      {/* Main Content */}
      <main className="relative z-10 flex min-h-screen justify-center px-5 py-10">
        <Hero />
      </main>
    </>
  );
}