// Node Module Imports

// Styles
import styles from './index.module.css';

export default function Banner(props) {
  const { title } = props;

  return (
    <header role="banner" className={styles.banner}>
      <img src="/favicon.ico" className={styles.logo}  />
      <h1 className={styles.bannerHeading}>{title}</h1>
    </header>
  );
}
