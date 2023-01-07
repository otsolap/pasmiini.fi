import styles from "../styles/footer.module.scss";

const ContactDetails = ({ contactList }) => {
  const contactInfo = contactList.map((contacts, i) => {
    return (
      <p className={styles.contactText} key={i}>
        {contacts.type === "phone" ? (
          <a
            className={styles.contactLink}
            href={`tel:${contacts.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contacts.title}
          </a>
        ) : null}
        {contacts.type === "whatsapp" ? (
          <a
            className={styles.contactLink}
            href={`tel:${contacts.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contacts.title}
          </a>
        ) : null}
        {contacts.type === "email" ? (
          <a
            className={styles.contactLink}
            href={`mailto:${contacts.url}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contacts.title}
          </a>
        ) : null}
        {contacts.type === "instagram" ? (
          <a
            className={styles.contactLink}
            href={contacts.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contacts.title}
          </a>
        ) : null}
        {contacts.type === "linkedIn" ? (
          <a
            className={styles.contactLink}
            href={contacts.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contacts.title}
          </a>
        ) : null}
        {contacts.type === "facebook" ? (
          <a
            className={styles.contactLink}
            href={contacts.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contacts.title}
          </a>
        ) : null}
      </p>
    );
  });

  return <>{contactInfo}</>;
};

export default ContactDetails;
