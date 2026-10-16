import styles from './Service.module.css';

const services = [
  { title: 'Software Development', description: 'Building practical digital solutions that turn ideas into useful, accessible experiences.' },
  { title: 'Creative Video Editing', description: 'Shaping footage into engaging visual content through creative editing and storytelling.' },
  { title: 'AI Exploration', description: 'Exploring AI-powered technologies and how they can support digital solutions and creative work.' },
];

function Service() {
  return (
    <section className={styles.service_wrapper} id="service" aria-labelledby="services-title">
      <p className="eyebrow">What I do</p>
      <h2 className="title" id="services-title">Code, creativity & curiosity.</h2>
      <p>My interests bring together technology, visual storytelling, and practical problem solving.</p>
      <div className={styles.services_cards}>
        {services.map((service, index) => (
          <article className={styles.service_card} key={service.title}>
            <span className={styles.number}>0{index + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Service;
