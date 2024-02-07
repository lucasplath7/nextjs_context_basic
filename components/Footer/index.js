// Styles
import styles from './index.module.css';

export default function Footer(props) {
  const {
    contactEmail,
    author,
  } = props;

  return (
    <footer role="contentinfo" className={styles.footer}>
      <p className={styles.footerContent}>
        Author:
        {author}
      </p>
      <a href={`mailto:${contactEmail}`} className={styles.footerContent}>{contactEmail}</a>
    </footer>
  );
}
