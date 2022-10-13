import styles from "./ErrorModol.module.css";
import Card from "./Card";
import Button from "./Button";
const ErrorModol = ({ title, message, closeErrorModol }) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={closeErrorModol} />

      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{title}</h2>
        </header>
        <div className={styles.content}>
          <p>{message} </p>
        </div>

        <footer className={styles.actions}>
          <Button onClick={closeErrorModol}>Close</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModol;
