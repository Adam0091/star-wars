import UIVideo from "@ui/UIVideo/UIVideo";

import video from './video/han-solo.mp4';
import styles from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={styles.text__container}>
      <p>The dark side has won.</p>
      <p>Wait for the Jedi Order to revive.</p>
      <UIVideo src={video} classes={styles.video} />
    </div>
  );
};

export default ErrorMessage;
