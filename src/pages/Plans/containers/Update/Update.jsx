import classes from "./UpdatePage.module.scss";
import {
  Button,
  PageHeader,
  Upload,
  Row,
  Col,
  Input,
  DatePicker,
  Select,
  message,
} from "antd";
import Box from "../../../../components/Box";
import { InboxOutlined } from "@ant-design/icons";
const { TextArea } = Input;
const { Option } = Select;
const { Dragger } = Upload;

const props = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

const CreateTask = () => {
  return (
    <div className={classes.wrapper}>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="Update Title"
        // subTitle="This is a subtitle"
        extra={[
          <Button type="primary" key="3">
            Update
          </Button>,
        ]}
      />

      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Box>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Input placeholder="plan title" />
              </Col>
              <Col span={24}>
                <TextArea placeholder="plan desc" />
              </Col>
              <Col span={24}>
                <div>
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibit
                      from uploading company data or other band files
                    </p>
                  </Dragger>
                </div>
              </Col>
            </Row>
          </Box>
        </Col>
        <Col span={8}>
          <Box>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <DatePicker className={classes.full} />
              </Col>
              <Col span={24}>
                <Select
                  className={classes.full}
                  defaultValue="lucy"
                // onChange={handleChange}
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                </Select>
              </Col>
            </Row>
          </Box>
        </Col>
      </Row>
    </div>
  );
};

export default CreateTask;
