import styles from "./element-prop-button.module.css";

const Button = ({
  As = "button",
  size = "m",
  className = "",
  ...otherProps
}) => {
  return (
    <As
      {...otherProps}
      className={`${styles.button} ${styles[size]} ${className}`}
    />
  );
};

export default Button;
