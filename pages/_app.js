import "../styles/globals.scss";
import Layout from "@components/Layout";
import Header from "@components/navigation/Header";
import Footer from "@components/navigation/Footer";
import MobileFooter from "@components/navigation/MobileFooter";
import 'swiper/css';
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { faPasmiini } from '../public/icons/Pasmiini'
import "@fortawesome/fontawesome-svg-core/styles.css";
library.add(faPasmiini)
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
