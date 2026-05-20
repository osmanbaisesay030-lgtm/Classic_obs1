export default function EasyBookingsApp() {
  const services = [
    {
      id: 1,
      name: 'Haircut & Styling',
      duration: '45 min',
      price: '$25',
      image: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 2,
      name: 'Home Cleaning',
      duration: '2 hrs',
      price: '$60',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop',
    },
    {
      id: 3,
      name: 'Personal Training',
      duration: '1 hr',
      price: '$40',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <header className="bg-black text-white px-6 py-5 shadow-lg">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">EasyBookings</h1>
            <p className="text-sm text-gray-300 mt-1">
              Fast bookings for services near you
            </p>
          </div>

          <button className="bg-white text-black px-5 py-2 rounded-2xl font-semibold hover:scale-105 transition">
            My Bookings
          </button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="bg-white rounded-3xl p-8 shadow-xl grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-5xl font-bold leading-tight">
              Book trusted services in seconds.
            </h2>
            <p className="mt-5 text-lg text-gray-600">
              Find professionals, choose a time, and confirm instantly.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <button className="bg-black text-white px-6 py-3 rounded-2xl font-semibold hover:opacity-90 transition">
                Start Booking
              </button>

              <button className="border border-gray-300 px-6 py-3 rounded-2xl font-semibold hover:bg-gray-100 transition">
                Explore Services
              </button>
            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="booking"
              className="rounded-3xl shadow-lg w-full h-[350px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Popular Services</h3>

          <input
            type="text"
            placeholder="Search services..."
            className="px-4 py-3 rounded-2xl border border-gray-300 w-64 outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src={service.image}
                alt={service.name}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-bold">{service.name}</h4>
                    <p className="text-gray-500 mt-1">
                      Duration: {service.duration}
                    </p>
                  </div>

                  <span className="bg-gray-100 px-3 py-1 rounded-xl font-semibold">
                    {service.price}
                  </span>
                </div>

                <div className="mt-5">
                  <button className="w-full bg-black text-white py-3 rounded-2xl font-semibold hover:opacity-90 transition">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-16">
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-6">Quick Booking</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Phone Number</label>
              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Select Service</label>
              <select className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-black">
                <option>Haircut & Styling</option>
                <option>Home Cleaning</option>
                <option>Personal Training</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">Choose Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <button className="mt-8 bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:opacity-90 transition">
            Confirm Booking
          </button>
        </div>
      </section>

      <footer className="bg-black text-white py-6 text-center text-sm">
        © 2026 EasyBookings App. All rights reserved.
      </footer>
    </div>
  );
}
