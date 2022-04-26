import classes from "./SignInPage.module.scss";

import { LoginForm } from "../../../module/auth/form";
import {
  Button,
  Checkbox,
  Col,
  Image,
  Input,
  message,
  Row,
  Space,
  Typography,
} from "antd";
import Logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import Box from "../../../components/Box";
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.wrapper}>
      <Box>
        <LoginForm
          onSuccess={() => {
            message.success(t("login_success"));
          }}
          onError={() => {
            message.error(t("login_error"));
          }}
        >
          {({ handleChange, isValid, dirty }) => (
            <>
              <Row gutter={[16, 16]}>
                <Col className={classes.header} span={24}>
                  <Typography.Title level={3}>
                    {t("login_welcome")}
                  </Typography.Title>
                  <Image preview={false} width={200} src={Logo} />
                  <Typography.Text className={classes.text}>
                    {t("login_text")}
                  </Typography.Text>
                </Col>
                <Col span={24}>
                  <Input
                    onChange={handleChange}
                    name="email"
                    type="email"
                    placeholder={t("field_email")}
                  />
                </Col>
                <Col span={24}>
                  <Input
                    onChange={handleChange}
                    placeholder={t("field_password")}
                    name="password"
                    type="password"
                  />
                </Col>
                <Col span={24}>
                  <Space
                    size="middle"
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Link to="/forgot">{t("login_forgot_password")}</Link>
                    <Checkbox>{t("login_remember")}</Checkbox>
                  </Space>
                </Col>
                <Col span={24}>
                  <Button
                    disabled={!(isValid && dirty)}
                    type="primary"
                    htmlType="submit"
                    block
                  >
                    {t("field_button_login")}
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </LoginForm>
      </Box>
    </div>
  );
};

export default SignIn;
