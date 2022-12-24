import React, { useState, useEffect, useRef } from 'react'
import styles from '../styles/components/accordion.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const AccordionItem = ({ answer, question, open }) => {
    const contentRef = useRef(null)
    const [active, setActive] = useState(open);
    useEffect(() => {
        contentRef.current.style.maxHeight = active
            ? `${contentRef.current.scrollHeight}px`
            : "0px";
    }, [contentRef, active]);

    const toggleAccordion = () => {
        setActive(!active);
    };

    return (
        <button className={styles.button} onClick={toggleAccordion}>
            <div className={styles.item}>
                <div className={active ? `${styles.open}` : `${styles.closed}`}>
                    <div className={styles.flexBox}>
                        <h4 className={styles.heading}>
                            {question}
                        </h4>
                        <FontAwesomeIcon
                            className={styles.icon} aria-label="Usein kysytty kysymys" icon={active ? faAngleUp : faAngleDown}
                        />
                    </div>
                </div>
                <div ref={contentRef} className={active ? `${styles.answer} ${styles.divider}` : `${styles.answer}`} >
                    <p className={styles.text}>{answer}</p>
                </div>
            </div>
        </button >
    )
}

export default AccordionItem