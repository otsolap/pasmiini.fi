import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Nav from "@content/settings/nav.json";
import site from "@content/settings/site.json";
import styles from "../../styles/components/header.module.scss";

const Header = () => {
  const router = useRouter();
  const { brand, navigation } = Nav;
  const { calender } = site;

  const pages = navigation.pages.map((page, i) => {
    return (
      <li
        className={`${styles.linkWrapper}  ${
          router.asPath == page.path ? "active" : ""
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
        <nav className="container">
          <div className={styles.topMenu}>
            {brand.logo && (
              <div className={styles.logo}>
                <Link href={"/"}>
                  <Image src={brand.logo} alt="" quality={100} fill />
                </Link>
              </div>
            )}
            <h3 className={`desktop-only ${styles.slogan}`}>{brand.slogan}</h3>
            {calender && (
              <Link className="active mobile-only" href={calender.url}>
                {calender.title}
              </Link>
            )}
          </div>
          <ul className={`desktop-only ${styles.wrapper}`}>
            {pages}
            {calender && (
              <Link className={`active ${styles.calender}`} href={calender.url}>
                {calender.title}
              </Link>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
