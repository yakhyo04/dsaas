import { EyeOutlined } from "@ant-design/icons";
import { Card } from "antd";
import React from "react";
import { useQueryParams } from "react-router-query-hooks"
import classes from "./TaskCard.module.scss";

const TaskCard = ({ task }) => {
  const [query, { pushQuery }] = useQueryParams()
  return (
    <Card className={classes.wrapper} size="small" extra={<EyeOutlined onClick={() => pushQuery({ task: 323 })} className={classes.icon} />} title="Small size card">
      <p>{task?.content}</p>
    </Card>
  );
};

export default TaskCard;
