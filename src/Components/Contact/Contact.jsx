import styles from './Contact.module.css';
import { profile } from '../../profile';

function Contact() {
  function openEmail(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Portfolio enquiry: ${data.get('subject')}`;
    const body = `Hi Bruce,\n\n${data.get('message')}\n\nFrom: ${data.get('name')}\nEmail: ${data.get('email')}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <section className={styles.contact_wrapper} id="contact" aria-labelledby="contact-title">
      <form className={styles.form} onSubmit={openEmail}>
        <p className="eyebrow">Have an idea in mind?</p>
        <h2 className="title" id="contact-title">Let’s work together.</h2>
        <p>Tell me about your software or video project. This form opens a draft in your email app for you to send.</p>
        <label htmlFor="contact-name">Your name</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required />
        <label htmlFor="contact-email">Your email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required />
        <label htmlFor="contact-subject">What would you like to discuss?</label>
        <select id="contact-subject" name="subject">
          <option>Software development</option>
          <option>Creative video editing</option>
          <option>AI & technology</option>
          <option>Other collaboration</option>
        </select>
        <label htmlFor="contact-message">Your message</label>
        <textarea id="contact-message" name="message" rows="5" required />
        <button type="submit">Open email app</button>
      </form>
      <div className={styles.details}>
        <h3>Let’s connect</h3>
        <dl>
          <div><dt>Email</dt><dd><a href={`mailto:${profile.email}`}>{profile.email}</a></dd></div>
          <div><dt>Location</dt><dd>{profile.location}</dd></div>
          <div><dt>LinkedIn</dt><dd><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">Karangwa Manzi Bruce <span aria-hidden="true">↗</span></a></dd></div>
          <div><dt>GitHub</dt><dd><a href={profile.github} target="_blank" rel="noopener noreferrer">brucekarangwamanzi <span aria-hidden="true">↗</span></a></dd></div>
        </dl>
      </div>
    </section>
  );
}

export default Contact;
