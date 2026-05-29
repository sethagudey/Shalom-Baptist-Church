export default function EventsPreview() {
  return (
    <section className="bg-slate-900">
      <div className="container-custom">
        <h2 className="text-4xl font-bold text-center mb-12">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">
              Worship Night
            </h3>

            <p className="text-gray-300">
              Friday • 6PM
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">
              Youth Hangout
            </h3>

            <p className="text-gray-300">
              Saturday • 4PM
            </p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4">
              Sunday Experience
            </h3>

            <p className="text-gray-300">
              Sunday • 9AM
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
