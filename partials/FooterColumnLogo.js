import Image from 'next/image'
import styles from "../styles/components/footer.module.scss";

const FooterColumnLogo = ({ logo }) => {
  return (
    <div className={styles.column}>
      {logo && (
        <div className={styles.logoContainer}>
          <Image
            src={logo}
            alt=""
            quality={100} 
            fill
          />
        </div>
      )}
    </div>
  );
};

export default FooterColumnLogo;
