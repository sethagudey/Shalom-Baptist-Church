export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="container-custom flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold">
          REVIVE
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Events</a>
          <a href="#">Watch</a>
          <a href="#">Contact</a>
        </div>

        <button className="bg-accent px-5 py-2 rounded-full">
          Visit Us
        </button>
      </div>
    </nav>
  );
}
