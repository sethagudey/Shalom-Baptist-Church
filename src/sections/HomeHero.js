export default function HomeHero() {
  return (
    <section className="h-screen flex items-center justify-center text-center bg-[url('https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070')] bg-cover bg-center">
      <div className="bg-black/60 absolute inset-0"></div>

      <div className="relative z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Faith. Purpose. Community.
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          A modern church helping young people encounter God and discover purpose.
        </p>

        <button className="bg-accent px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition">
          Plan Your Visit
        </button>
      </div>
    </section>
  );
}
