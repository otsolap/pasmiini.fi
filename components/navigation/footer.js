import FooterContent from '@content/settings/footer.json'
import styles from ''
import FooterColumnCompany from './FooterColumnLogo'
import FooterColumnContact from './FooterColumnCompany'
import FooterColumnLogo from './FooterColumnContact'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.columnContainer}>
                <FooterColumnLogo {...FooterContent.Logo} />
                <FooterColumnCompany {...FooterContent.Company} />
                <FooterColumnContact {...FooterContent.Contact} />
            </div>
        </footer>
    )
}

export default Footer;