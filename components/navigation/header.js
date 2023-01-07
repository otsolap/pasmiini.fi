import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Nav from "@content/settings/nav.json";
import styles from "../../styles/components/header.module.scss";

const Header = () => {
  const router = useRouter();
  const { brand, navigation } = Nav;

  const pages = navigation.pages.map((page, i) => {
    return (
      <li
        className={`${styles.linkWrapper}  ${
          router.asPath === page.path ? styles.active : ""
        }`}
        key={i}
      >
        <Link className={styles.link} href={page.path}>
          {page.title}
        </Link>
      </li>
    );
  });

  return (
    <>
      <header className={styles.header}>
        <div className={`container ${styles.navContainer}`}>
          <div className={styles.logoContainer}>
            {brand.logo && (
              <div className={styles.logo}>
                <Image src={brand.logo} alt="" quality={100} fill />
              </div>
            )}
            <h2 className={styles.slogan}>{brand.slogan}</h2>
          </div>
          <div className={`desktop-only ${styles.desktopLinks}`}>
            <nav className={styles.nav}>
              <ul className={styles.sticky}>{pages}</ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
