import BookingForm from '@/components/BookingForm';

const services = [
  {
    title: 'Soft Gel Extensions',
    description: 'Delicate length, pastel polish, and glitter accents for a luxe finish.',
    price: '$65+',
  },
  {
    title: '3D Floral Art',
    description: 'Hand-sculpted blossoms, pearls, and shimmer for premium texture.',
    price: '$75+',
  },
  {
    title: 'Luxury Manicure',
    description: 'Hydrating care, shaped nails, and a silky pink-blue glow.',
    price: '$45+',
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Minailstore</p>
          <h1>Soft luxury nails made for dreamy days.</h1>
          <p className="hero-text">
            Explore our pastel nail art, premium nail care, and effortless online booking. Feel the pink and blue shimmer in every service.
          </p>
          <div className="hero-actions">
            <a href="#services" className="button button-primary">View Services</a>
            <a href="#booking" className="button button-secondary">Book Appointment</a>
          </div>
        </div>
        <div className="hero-preview">
          <div className="preview-card preview-card-1" />
          <div className="preview-card preview-card-2" />
          <div className="preview-card preview-card-3" />
        </div>
      </section>

      <section id="about" className="section-light">
        <div className="section-inner">
          <div className="section-copy">
            <p className="section-title">About the studio</p>
            <h2>Whimsical polish, elegant details, and a calm booking experience.</h2>
            <p className="section-text">
              Minailstore blends dreamy pink and soft blue styling with premium nail services. Our looks are inspired by floral luxury, crystal shimmer, and soft lighting for every manicure.
            </p>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <span>✨</span>
              <h3>Signature Designs</h3>
              <p>3D florals, pearl shine, and translucent gradients created for special occasions.</p>
            </div>
            <div className="feature-card">
              <span>💅</span>
              <h3>Care & Comfort</h3>
              <p>Every appointment includes cuticle care, nail shaping, and a soothing finish.</p>
            </div>
            <div className="feature-card">
              <span>📅</span>
              <h3>Easy Booking</h3>
              <p>Choose your preferred service, date, and style directly from the website.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-dark">
        <div className="section-inner">
          <p className="section-title light">Services</p>
          <h2 className="section-heading light">Beauty with a pastel polish.</h2>
          <div className="service-grid">
            {services.map((service) => (
              <article key={service.title} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <strong>{service.price}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light gallery-section">
        <div className="section-inner">
          <div className="gallery-copy">
            <p className="section-title">Inspiration</p>
            <h2>Soft pink and blue nail stories.</h2>
            <p className="section-text">
              This palette combines pastel textures, delicate pearls, and subtle sparkle to create a calm, luxurious feeling.
            </p>
          </div>
          <div className="gallery-grid">
            {['nail-1.jpg', 'nail-2.jpg', 'nail-3.jpg', 'nail-4.jpg'].map((image) => (
              <div key={image} className="gallery-card">
                <img src={`/images/${image}`} alt={`Nail design ${image}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="section-accent">
        <div className="section-inner booking-panel">
          <div className="booking-copy">
            <p className="section-title">Book an appointment</p>
            <h2>Reserve your luxury nail session.</h2>
            <p className="section-text">
              Fill the form with your preferred service and date, and we’ll save your booking to Supabase instantly.
            </p>
          </div>
          <BookingForm />
        </div>
      </section>

      <footer className="footer-bar">
        <p>Minailstore • Soft luxury press-on nails and services</p>
      </footer>
    </main>
  );
}
