import Image from 'next/image'
import styles from "../styles/components/footer.module.scss";

const FooterColumnLogo = ({ image }) => {
  
  return (
    <div className={styles.footerColumn}>
      {image && (
        <div className={styles.footerLogoContainer}>
          <Image
            src={image}
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
