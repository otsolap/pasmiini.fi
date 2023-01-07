import React, { useEffect, useRef } from 'react'
import styles from "../styles/components/footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import useToggle from '@hooks/useToggleState';
import ContactDetails from '@partials/ContactDetails'

const FooterColumnContact = ({  open, title, list }) => {
    console.log(`footer column contact: ${list}`)
    const contentRef = useRef(null)
    const [active, setActive] = useToggle(open);
    useEffect(() => {
        contentRef.current.style.maxHeight = active
            ? `${contentRef.current.scrollHeight}px`
            : "0px";
    }, [contentRef, active]);

    const toggleAccordion = () => {
        setActive(!active);
    };

    return (
        <div className={styles.footerColumn}>
            <button className={styles.footerColButton} onClick={toggleAccordion}>
                <div className={styles.footerColContent}>
                    <div className={active ? `${styles.colOpen}` : `${styles.colClosed}`}>
                        <div className={styles.colFlexBox}>
                            <h4 className={styles.colHeading}>
                                {title}
                            </h4>
                            <FontAwesomeIcon className={styles.colIcon} aria-label="Alatunnisteen lisätieto" icon={active ? faAngleUp : faAngleDown} />
                        </div>
                    </div>
                    <div ref={contentRef} className={active ? `${styles.colContent} ${styles.colContentDivider}` : `${styles.colContent}`} >
                        <ContactDetails list={list} />
                    </div>
                </div>
            </button>
        </div>
    )
}

export default FooterColumnContact