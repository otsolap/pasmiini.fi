import footer from '@content/settings/footer.json'
import styles from '../../styles/components/footer.module.scss'
import FooterColumnLogo from '@partials/FooterColumnLogo'
import FooterColumnCompany from '@partials/FooterColumnCompany'
import FooterColumnContact from '@partials/FooterColumnContact'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.columnContainer}>
                <FooterColumnLogo {...footer.logo} />
                <FooterColumnCompany {...footer.company} />
                <FooterColumnContact {...footer.contact} />
            </div>
        </footer>
    )
}

export default Footer;