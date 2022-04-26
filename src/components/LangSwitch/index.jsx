// import { Dropdown } from "antd";
import { Select } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const Lang = () => {
  const { i18n } = useTranslation();

  return (
    <Select
      size="small"
      defaultValue={i18n.language}
      onChange={(val) => i18n.changeLanguage(val)}
    >
      <Select.Option value="uz">UZ</Select.Option>
      <Select.Option value="ru">RU</Select.Option>
      <Select.Option value="en">EN</Select.Option>
    </Select>
  );
};

export default Lang;
