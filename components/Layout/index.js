// Node Module Imports

// Custom Components
import Banner from '../Banner';
import Footer from '../Footer';
import Nav from '../Nav';

// Styles
import styles from './index.module.css';

const routeDefinition = [
  {
    forNav: true,
    id: 'home',
    label: 'HOME',
    path: '/',
  },
  {
    forNav: true,
    id: 'spinner',
    label: 'SPINNER',
    path: '/spinner',
  },
  {
    forNav: true,
    id: 'form',
    label: 'FORM',
    path: '/form',
  },
  {
    forNav: true,
    id: 'table',
    label: 'TABLE',
    path: '/table',
  },
  {
    forNav: true,
    id: 'animation',
    label: 'ANIMATION',
    path: '/animation',
  },
  {
    forNav: true,
    id: 'users',
    label: 'USERS',
    path: '/users',
  }
]

export default function Layout({children}) {
  return (
    <div className={styles.appGridContainer}>
      <Banner
        title="NEXTJS_CONTEXT_BASIC"
        className={styles.appBanner}
      />
      <Nav
        routeDefinition={routeDefinition}
        className={styles.appNav}
      />
      <main className={styles.mainContent}>{children}</main>
      <Footer
        className={styles.appFooter}
        contactEmail="lucas.plath@gmail.com"
        author="Lucas Plath"
      />
    </div>
  );
}
