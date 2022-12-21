import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";
import { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ hideErrorModal }) => {
  return <div className={classes.backdrop} onClick={hideErrorModal} />;
};


const Modal = ({ title, message, hideErrorModal }) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{title}</h2>
      </header>
      <div className={classes.content}>
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={hideErrorModal}>Okay</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = ({ title, message, hideErrorModal }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop hideErrorModal={hideErrorModal} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          title={title}
          message={message}
          hideErrorModal={hideErrorModal}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
