import Image from 'next/image'
import styles from "../../styles/Footer.module.scss";

const FooterColumnCompany = ({ logo }) => {
  return (
    <div className={styles.footerColumn}>
      {FooterContent.logoImage && (
        <div className={styles.footerLogoContainer}>
          <Image
            src={FooterContent.logoImage}
            alt={FooterContent.logoAlt}
            width={100}
            height={100}
            quality={100}
            layout="responsive"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      )}
    </div>
  );
};

export default FooterColumnCompany;
