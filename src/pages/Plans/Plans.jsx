import classes from "./PlansPage.module.scss";
import { useQueryParams } from "react-router-query-hooks";
import Draggable from "./components/Draggable";
import { Button, PageHeader, Modal } from "antd";
import { useHistory } from "react-router-dom";
import View from "./containers/View";

const Darshboard = () => {
  const [query, { pushQuery }] = useQueryParams();
  const history = useHistory();

  return (
    <div className={classes.wrapper}>
      <PageHeader
        className="site-page-header"
        onBack={() => window.history.back()}
        title="Plans"
        // subTitle="This is a subtitle"
        extra={[
          <Button
            type="primary"
            onClick={() => history.push("/plans/create")}
            key="1"
          >
            Add plan
          </Button>,
        ]}
      >
        <Modal visible={!!query.task} onCancel={() => pushQuery('')}>
          <View />
        </Modal>
      </PageHeader>
      <div className={classes.draggable}>
        <Draggable />
      </div>
    </div>
  );
};

export default Darshboard;
