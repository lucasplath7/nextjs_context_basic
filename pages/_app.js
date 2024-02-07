import './index.css';

import Layout from '../components/Layout';
import AppProvider from '../state';

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}