import styles from './Footer.module.css';
import { navigation, profile } from '../../profile';

function Footer() {
  return (
    <footer className={styles.footer_wrapper}>
      <a href="#hero" className="monogram" aria-label={`${profile.displayName} — home`}>BK<span>.</span></a>
      <p>{profile.displayName} · {profile.title}</p>
      <nav aria-label="Footer navigation"><ul>
        {navigation.map(({ href, label }) => <li key={href}><a href={href}>{label}</a></li>)}
      </ul></nav>
      <p className={styles.copyright}>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
