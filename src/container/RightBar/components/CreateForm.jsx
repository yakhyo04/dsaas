import { Col, DatePicker, Input, Row } from "antd";
import React from "react";
const { TextArea } = Input;

const CreateForm = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <TextArea rows={4} placeholder="text" />
      </Col>
      <Col span={24}>
        <DatePicker />
      </Col>
    </Row>
  );
};

export default CreateForm;
