import "../styles/globals.scss";
import Layout from "@components/Layout";
import Header from "@components/navigation/Header";
import Footer from "@components/navigation/Footer";
import MobileFooter from "@components/navigation/MobileFooter";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
      <MobileFooter />
    </Layout>
  );
}

export default MyApp;
