import * as React from "react";
import { List } from "antd";

const data = [
  {
    title: "Membership"
  },
  {
    title: "Settings"
  },
  {
    title: "Help"
  },
  {
    title: "Signout"
  }
];
export default function Menu() {
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            title={<a href="https://ant.design">{item.title}</a>}
          />
        </List.Item>
      )}
    />
  );
}
