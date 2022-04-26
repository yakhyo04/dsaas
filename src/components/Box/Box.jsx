import classes from "./Box.module.scss";
import cx from "classnames";

const Box = ({ children, fit = false }) => {
  const classname = cx(classes.wrapper, fit && classes["wrapper--fit"]);

  return <div className={classname}>{children}</div>;
};

export default Box;
