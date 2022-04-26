import classes from "./ForgotPage.module.scss";

import { ResetForm } from "../../../module/auth/form";
import {
  Button,
  Col,
  Input,
  message,
  Row,
  Typography,
} from "antd";

import Box from "../../../components/Box";
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const { t } = useTranslation();

  return (
    <div className={classes.wrapper}>
      <Box>
        <ResetForm
          onSuccess={() => {
            message.success(t("forgot_success"));
          }}
          onError={() => {
            message.error(t("forgot_error"));
          }}
        >
          {({ handleChange, isValid, dirty, isSubmitting }) => (
            <>
              <Row gutter={[16, 16]}>
                <Col className={classes.header} span={24}>
                  <Typography.Text className={classes.text}>
                    {t("fogot_text")}
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
                  <Button
                    disabled={!(isValid && dirty)}
                    type="primary"
                    htmlType="submit"
                    block
                  >
                    {t("field_button_forgot")}
                  </Button>
                </Col>
              </Row>
            </>
          )}
        </ResetForm>
      </Box>
    </div>
  );
};

export default SignIn;
