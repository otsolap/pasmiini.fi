import footer from '@content/settings/footer.json'
import styles from '../../styles/components/footer.module.scss'
import FooterColumnCompany from '@partials/FooterColumnLogo'
import FooterColumnContact from '@partials/FooterColumnCompany'
import FooterColumnLogo from '@partials/FooterColumnContact'

const Footer = () => {
    const { logo, company, contact } = footer
    console.log(contact)
    return (
        <footer className={styles.footer}>
            <div className={styles.columnContainer}>
                <FooterColumnLogo {...logo} />
                <FooterColumnCompany {...company} />
                <FooterColumnContact {...contact} />
            </div>
        </footer>
    )
}

export default Footer;