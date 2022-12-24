import React, { useState } from 'react'
import AccordionItem from "@partials/AccordionItem";
import styles from '../styles/components/accordion.module.scss'

const Accordion = ({ accordion }) => {

    return (
        <section id={styles.accordion}>
            <div className={styles.container}>
                <header>
                    <h2>{accordion.title}</h2>
                </header>
                <div className={styles.content}>
                    {accordion.items.map((item, i) => (
                        <AccordionItem
                            key={i}
                            {...item}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Accordion