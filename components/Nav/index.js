// Node Module Imports

// Styles
import styles from './index.module.css';

export default function Nav(props) {
  const { routeDefinition } = props;

  // Helpers
  const routes = routeDefinition.reduce((acc, route) => {
    const navRoutes = [];

    if (route.children) {
      route.children.forEach((childRoute) => {
        if (childRoute.forNav) navRoutes.push(childRoute);
      });
    }

    if (route.forNav) navRoutes.push(route);

    return [
      ...acc,
      ...navRoutes,
    ];
  }, []);

  // Renderers
  function renderNavItem(route) {
    return (
      <li key={route.id}>
        <a className={styles.navLink} href={route.path}>
          {route.label}
        </a>
      </li>
    );
  }

  function renderNavList() {
    return (
      <ul>
        { routes.map((routeId) => renderNavItem(routeId)) }
      </ul>
    );
  }

  return (
    <div className={styles.nav}>
      { renderNavList() }
    </div>
  );
}
