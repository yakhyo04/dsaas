import classes from "./SignUpPage.module.scss";

import { RegisterForm } from "../../../module/auth/form";
import { Button, Col, Image, Input, message, Row, Typography } from "antd";
import Logo from "../../../assets/images/logo.png";
import Box from "../../../components/Box";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <div className={classes.wrapper}>
      <Box>
        <RegisterForm
          onSuccess={() => {
            message.success(t("register_success"));
            history.push("/login");
          }}
          onError={() => {
            message.error(t("register_error"));
          }}
        >
          {({ handleChange, isValid, dirty }) => (
            <>
              <span>{isValid}</span>
              <Row gutter={[16, 16]}>
                <Col className={classes.header} span={24}>
                  <Typography.Title level={3}>
                    {t("register_welcome")}
                  </Typography.Title>
                  <Image preview={false} width={200} src={Logo} />
                  <Typography.Text className={classes.text}>
                    {t("register_text")}
                  </Typography.Text>
                </Col>
                <Col span={24}>
                  <Input
                    onChange={handleChange}
                    name="firstName"
                    type="text"
                    placeholder={t("field_first_name")}
                  />
                </Col>
                <Col span={24}>
                  <Input
                    onChange={handleChange}
                    name="lastName"
                    type="text"
                    placeholder={t("field_last_name")}
                  />
                </Col>
                <Col span={24}>
                  <Input
                    onChange={handleChange}
                    name="phone"
                    type="phone"
                    placeholder={t("field_phone")}
                  />
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
                  <Input
                    onChange={handleChange}
                    placeholder={t("field_conformation_password")}
                    name="confirmationPassword"
                    type="password"
                  />
                </Col>
                <Col span={24}>
                  <Button
                    disabled={!(isValid && dirty)}
                    type="primary"
                    htmlType="submit"
                    block
                  >
                    {t("field_button_register")}
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </RegisterForm>
      </Box>
    </div>
  );
};

export default SignUp;
