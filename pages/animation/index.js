// Node Module Imports
import { useEffect } from 'react';

// Styles
import styles from  './index.module.css';

export default function Animation() {
  // Hooks
  useEffect(() => {
    const pupils = document.querySelectorAll('.pupil');

    window.addEventListener('mousemove', (e) => {
      pupils.forEach((pupil) => {
        const rect = pupil.getBoundingClientRect();
        const x = `${(e.pageX - rect.left) / 80}px`;
        const y = `${(e.pageY - rect.top) / 80}px`;
        pupil.style.transform = `translate3d(${x},${y},0px)`;
      });
    });
  });

  return (
    <div className={styles.panda}>
      <div className={styles.ears}>
        <div className={`${styles.ear} ${styles.earLft}`} />
        <div className={`${styles.ear} ${styles.earRgt}`} />
      </div>
      <div className={styles.face}>
        <div className={styles.eyes}>
          <div className={`${styles.eyeShadow} ${styles.eyeShadowLft}`}>
            <div className={`${styles.eyeWht} ${styles.eyeWhtLft}`}>
              <div className={`${styles.pupil} pupil`} />
            </div>
          </div>
          <div className={`${styles.eyeShadow} ${styles.eyeShadowRgt}`}>
            <div className={`${styles.eyeWht} ${styles.eyeWhtRgt}`}>
              <div className={`${styles.pupil} pupil`} />
            </div>
          </div>
          <div className={styles.nose} />
        </div>
      </div>
    </div>
  );
}
