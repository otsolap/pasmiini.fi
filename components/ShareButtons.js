import React, { useState, useEffect } from 'react'
import styles from "../styles/components/shareButtons.module.scss";
import { useRouter } from "next/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faWhatsapp, faFacebook, } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ShareButtons = ({ description, }) => {
    const router = useRouter();
    const [url, setUrl] = useState("");
  
    useEffect(() => {
      const host = window.location.host;
      const baseUrl = `https://${host}`;
  
      setUrl(`${baseUrl}${router.asPath}`);
    }, [router.asPath]);
  
    console.log(url)

  return (
    <>
      <footer className={styles.shareButtons}>
    {url}
      </footer>
    </>
  )
}

export default ShareButtons