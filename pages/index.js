import hero from "../components/hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="h-screen bg-white flex items-center justify-center">
        <h2 className="text-4xl font-bold">Scroll Down Section</h2>
      </section>
    </>
  );
}