import '../styles/globals.scss'
import Layout from '@components/Layout'
import Header from '@components/navigation/header'
import Footer from '@components/navigation/footer'
import MobileFooter from '@components/navigation/mobileFooter'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <MobileFooter />
    </Layout>
  )
}

export default MyApp
