import heroImage from '../../assets/me.jpg';
import { profile } from '../../profile';
import styles from './Portrait.module.css';

function Portrait() {
  function moveSpotlight(event) {
    if (event.pointerType === 'touch' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const frame = event.currentTarget;
    const bounds = frame.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (event.clientX - bounds.left) / bounds.width));
    const y = Math.max(0, Math.min(1, (event.clientY - bounds.top) / bounds.height));
    frame.style.setProperty('--pointer-x', `${x * 100}%`);
    frame.style.setProperty('--pointer-y', `${y * 100}%`);
    frame.style.setProperty('--tilt-x', `${(0.5 - y) * 10}deg`);
    frame.style.setProperty('--tilt-y', `${(x - 0.5) * 10}deg`);
  }

  function resetSpotlight(event) {
    ['--pointer-x', '--pointer-y', '--tilt-x', '--tilt-y'].forEach(property => event.currentTarget.style.removeProperty(property));
  }

  return (
    <figure className={styles.portrait} onPointerMove={moveSpotlight} onPointerLeave={resetSpotlight} onPointerCancel={resetSpotlight} tabIndex={0} aria-label={`Portrait of ${profile.name}`}>
      <span className={styles.orbit} aria-hidden="true" />
      <div className={styles.card}>
        <div className={styles.imageFrame}>
          <img className={styles.photo} src={heroImage} alt={`Portrait of ${profile.name}`} width="600" height="600" fetchPriority="high" />
          <span className={styles.spotlight} aria-hidden="true" />
          <span className={styles.frameCorners} aria-hidden="true" />
          <span className={styles.nameOverlay} aria-hidden="true">{profile.name}</span>
        </div>
        <div className={styles.reflection} aria-hidden="true">
          <img src={heroImage} alt="" width="600" height="600" />
        </div>
      </div>
    </figure>
  );
}

export default Portrait;
