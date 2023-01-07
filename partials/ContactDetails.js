import styles from "../styles/components/footer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const ContactDetails = ({ list }) => {
  const contactInfo = list.map((contacts, i) => {
    return (
      <p className={styles.contactText} key={i}>
        {contacts.type === "phone" ? (
          <Link
            className={styles.contactLink}
            href={`tel:${contacts.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={styles.icon}
              aria-label="Phone"
              icon={faPhone}
            />
            {contacts.title}
          </Link>
        ) : null}
        {contacts.type === "whatsapp" ? (
          <Link
            className={styles.contactLink}
            href={`tel:${contacts.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={styles.icon}
              aria-label="Whatsapp"
              icon={faWhatsapp}
            />
            {contacts.title}
          </Link>
        ) : null}
        {contacts.type === "email" ? (
          <Link
            className={styles.contactLink}
            href={`mailto:${contacts.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={styles.icon}
              aria-label="Sähköposti"
              icon={faEnvelope}
            />
            {contacts.title}
          </Link>
        ) : null}
        {contacts.type === "instagram" ? (
          <Link
            className={styles.contactLink}
            href={contacts.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contacts.title}
          </Link>
        ) : null}
        {contacts.type === "linkedIn" ? (
          <Link
            className={styles.contactLink}
            href={contacts.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon
              className={styles.icon}
              aria-label="LinkedIn"
              icon={faLinkedin}
            />
            {contacts.title}
          </Link>
        ) : null}
        {contacts.type === "facebook" ? (
          <Link
            className={styles.contactLink}
            href={contacts.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={styles.icon}
              aria-label="Facebook"
              icon={faFacebook}
            />
            {contacts.title}
          </Link>
        ) : null}
      </p>
    );
  });

  return <>
  {contactInfo}
  </>;
};

export default ContactDetails;
