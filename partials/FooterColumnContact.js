import React, { useEffect, useRef } from 'react'
import styles from "../styles/components/footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import useToggle from '@hooks/useToggleState';
import ContactDetails from '@partials/ContactDetails'

const FooterColumnContact = ({  open, title, list }) => {
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
        <div className={styles.column}>
            <button className={styles.button} onClick={toggleAccordion}>
                <div className={styles.content}>
                    <div className={active ? `${styles.open}` : `${styles.closed}`}>
                        <div className={styles.flexBox}>
                            <h4 className={styles.heading}>
                                {title}
                            </h4>
                            <FontAwesomeIcon className={styles.Icon} aria-label="Alatunnisteen lisätieto" icon={active ? faAngleUp : faAngleDown} />
                        </div>
                    </div>
                    <div ref={contentRef} className={active ? `${styles.content} ${styles.contentDivider}` : `${styles.content}`} >
                        <ContactDetails list={list} />
                    </div>
                </div>
            </button>
        </div>
    )
}

export default FooterColumnContact