import styles from "../styles/components/textarea.module.scss";
import MarkdownBlock from "@partials/MarkdownBlock";

const Textarea = ({ textarea }) => {
  return (
    <section className={`${styles.textarea} bg-${textarea.backgroundColor} `}>
      <div className={styles.content}>
        {textarea.body && <MarkdownBlock markdown={textarea.body} />}
      </div>
    </section>
  );
};

export default Textarea;