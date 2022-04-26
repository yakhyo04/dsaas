import { Layout } from "antd";
import LangSwitch from "../../components/LangSwitch";
import classes from "./Auth.module.scss";

const Auth = ({ children }) => {
  return (
    <Layout className={classes.wrapper}>
      <div className={classes.header}>
        <LangSwitch />
      </div>
      <Layout.Content className={classes.content}>{children}</Layout.Content>
    </Layout>
  );
};

export default Auth;
