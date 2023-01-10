import Image from "next/image";
import AccordionItem from "@partials/AccordionItem";
import styles from "../styles/components/accordion.module.scss";

const Accordion = ({ accordion }) => {
  return (
    <section id={styles.accordion}>
      <div className={styles.container}>
        {accordion.image && (
          <div className={styles.imgContainer}>
            <Image src={accordion.image} alt="" quality={100} width={500} height={500} />
          </div>
        )}
        {accordion.items && (
          <div className={styles.content}>
            {accordion.items.map((item, i) => (
              <AccordionItem key={i} {...item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Accordion;
