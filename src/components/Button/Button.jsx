import styles from "./Button.module.scss";

// function that returns the classname of the btn depending on the value passed in by the component prop
const getBtnStyle = (btn) => {
  const btnStyles = {
    "=": "equals",
    "*": "opt",
    "/": "opt",
    "-": "opt",
    "+": "opt",
    "%": "opt",
    DEL: "opt",
    C: "opt",
  };

  return btnStyles[btn];
};

export default function Button({ value, ...props }) {
  return (
    <button
      value={value}
      className={`${styles.btn} ${styles[getBtnStyle(value)]}`}
      {...props}
    >
      {value}
    </button>
  );
}
