import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
    return (
        <div className={styles.text__container}>
            <p>The dark side has won.</p>
            <p>Wait for the Jedi Order to revive.</p>
        </div>
    );
};

export default ErrorMessage;