import React, { useState } from "react";
import AccordionItem from "@partials/AccordionItem";
import styles from "../styles/components/accordion.module.scss";

const Accordion = ({ accordion }) => {
  return (
    <section id={styles.accordion}>
      <div className={styles.container}>
        <div className={styles.content}>
            {accordion ?? <h2>Hello World</h2>}
        </div>
      </div>
    </section>
  );
};

export default Accordion;

/*
{accordion.items.map((item, i) => (
    <AccordionItem
        key={i}
        {...item}
    />
))}
*/
