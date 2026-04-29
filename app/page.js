import Image from "next/image";

const contact = {
  phoneDisplay: "681 944 273",
  phoneLink: "34681944273",
  instagramDisplay: "@maisoneclair__",
  instagramLink: "https://www.instagram.com/maisoneclair__/",
  address: "C/ Pintor Velázquez 4, Móstoles, Madrid",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=C%2F+Pintor+Vel%C3%A1zquez+4%2C+M%C3%B3stoles%2C+Madrid",
};

const rituals = [
  {
    title: "Miel & Oro",
    price: "60€",
    duration: "1 hora",
    description:
      "Nutrición profunda y luminosidad inmediata con un ritual exclusivo que revitaliza y deja la piel sedosa.",
    image: "/images/servicio2.jpg",
  },
  {
    title: "Chocolaterapia",
    price: "60€",
    duration: "1 hora",
    description:
      "Relajación total y efecto antiestrés. El cacao envuelve el cuerpo, nutre la piel y eleva los sentidos.",
    image: "/images/servicio3.jpeg",
  },
  {
    title: "Vinoterapia",
    price: "60€",
    duration: "1 hora",
    description:
      "Tratamiento antioxidante con efecto rejuvenecedor que activa la circulación y aporta firmeza y frescura.",
    image: "/images/servicio2.jpg",
  },
];

const massages = [
  {
    title: "Drenante",
    price: "Desde 50€",
    duration: "45 min",
    description:
      "Reduce retención, activa la circulación y aporta sensación de ligereza y desinflamación.",
    bonus:
      "Plus VIP: aceite frío, activación drenante y envoltura reafirmante exprés en piernas o abdomen.",
  },
  {
    title: "Relajante",
    price: "Desde 45€",
    duration: "45 min",
    description:
      "Calma profunda para cuerpo y mente. Una pausa pensada para desconectar y resetear.",
    bonus: "Plus VIP: aromaterapia y masaje craneal.",
  },
  {
    title: "Descontracturante",
    price: "50€",
    duration: "45 min",
    description:
      "Libera tensión muscular y sobrecarga para conseguir alivio inmediato y sensación de descarga.",
    bonus:
      "Plus VIP: calor localizado, técnica profunda y descarga cervical intensiva.",
  },
];

const whyChoose = [
  "Atención cercana y profesional",
  "Experiencias exclusivas enfocadas en bienestar real",
  "Resultados naturales y tratamientos personalizados",
  "Contacto directo para reservar sin intermediarios",
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Maison Clair</p>
          <h1>Belleza, bienestar y exclusividad para realzar tu mejor versión.</h1>
          <p className="lead">
            Tratamientos estéticos y rituales corporales en Móstoles con una
            propuesta pensada para cuidar tu imagen, tu confianza y tu momento
            de desconexión.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href={`https://wa.me/${contact.phoneLink}`}
              target="_blank"
              rel="noreferrer"
            >
              Reservar por WhatsApp
            </a>
            <a className="button button-secondary" href={contact.instagramLink} target="_blank" rel="noreferrer">
              Ver Instagram
            </a>
          </div>
          <ul className="contact-strip">
            <li>{contact.phoneDisplay}</li>
            <li>{contact.instagramDisplay}</li>
            <li>Móstoles, Madrid</li>
          </ul>
        </div>
        <div className="hero-card">
          <div className="portrait-frame">
            <Image
              src="/images/minx.png"
              alt="Profesional estética Maison Clair"
              width={294}
              height={355}
              priority
            />
          </div>
          <div className="hero-note">
            <strong>Tu bienestar, nuestra pasión.</strong>
            <span>
              Experiencias premium para cuerpo y labios con un enfoque natural,
              elegante y personalizado.
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Tratamiento estrella</p>
          <h2>Aumento de labios con Hyaluron Pen</h2>
          <p>
            Volumen, definición e hidratación profunda con un resultado natural,
            seguro y mínimamente invasivo.
          </p>
        </div>
        <div className="highlight-grid">
          <div className="highlight-text">
            <div className="pill-row">
              <span>Resultados naturales</span>
              <span>Hidratación profunda</span>
              <span>Seguro y confiable</span>
            </div>
            <p>
              Un tratamiento pensado para realzar la belleza de tus labios con
              un acabado armónico, elegante y favorecedor.
            </p>
            <div className="price-box">
              <small>Promoción destacada</small>
              <strong>99€</strong>
            </div>
          </div>
          <div className="service-image">
            <Image
              src="/images/servicio1.jpg"
              alt="Tratamiento de aumento de labios con Hyaluron Pen"
              width={677}
              height={960}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Rituales exclusivos</p>
          <h2>Experiencias VIP corporales</h2>
          <p>
            Sesiones de una hora diseñadas para nutrir, relajar y renovar la
            piel mientras conviertes el autocuidado en un verdadero ritual.
          </p>
        </div>
        <div className="cards-grid">
          {rituals.map((ritual) => (
            <article className="service-card" key={ritual.title}>
              <div className="card-image">
                <Image
                  src={ritual.image}
                  alt={ritual.title}
                  width={678}
                  height={960}
                />
              </div>
              <div className="card-copy">
                <div className="card-topline">
                  <h3>{ritual.title}</h3>
                  <span>{ritual.price}</span>
                </div>
                <p className="duration">{ritual.duration}</p>
                <p>{ritual.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section accent-section">
        <div className="section-heading">
          <p className="eyebrow">Masajes corporales</p>
          <h2>Bienestar profundo, alivio real</h2>
          <p>
            Opciones enfocadas en drenaje, relajación o descarga muscular,
            siempre con extras VIP para elevar la experiencia.
          </p>
        </div>
        <div className="pricing-grid">
          {massages.map((massage) => (
            <article className="pricing-card" key={massage.title}>
              <div className="card-topline">
                <h3>{massage.title}</h3>
                <span>{massage.price}</span>
              </div>
              <p className="duration">{massage.duration}</p>
              <p>{massage.description}</p>
              <p className="bonus">{massage.bonus}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section two-column">
        <div className="section-heading left-aligned">
          <p className="eyebrow">Por qué elegir Maison Clair</p>
          <h2>Una atención estética pensada para que te sientas bien contigo.</h2>
        </div>
        <div className="reasons">
          {whyChoose.map((item, index) => (
            <div className="reason" key={item}>
              <span className="reason-mark">{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Ambiente</p>
          <h2>Un espacio creado para cuidarte sin prisas</h2>
          <p>
            Cada cita está pensada para que disfrutes una experiencia estética
            íntima, relajante y alineada con lo que tu cuerpo necesita.
          </p>
        </div>
        <div className="gallery-single">
          <div className="service-image">
            <Image
              src="/images/servicio4.jpg"
              alt="Masajes corporales y experiencia de bienestar Maison Clair"
              width={678}
              height={960}
            />
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="contact-card">
          <p className="eyebrow">Contacto</p>
          <h2>Reserva tu cita de forma directa</h2>
          <p>
            Escríbeme por WhatsApp o Instagram para consultar disponibilidad,
            resolver dudas y elegir el tratamiento que mejor encaja contigo.
          </p>
          <div className="contact-links">
            <a href={`tel:+${contact.phoneLink}`}>{contact.phoneDisplay}</a>
            <a href={contact.instagramLink} target="_blank" rel="noreferrer">
              {contact.instagramDisplay}
            </a>
            <a href={contact.mapsLink} target="_blank" rel="noreferrer">
              {contact.address}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
