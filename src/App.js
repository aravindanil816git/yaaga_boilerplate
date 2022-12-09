import * as React from "react";
import { Button, Drawer, Divider, Switch } from "antd";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ShoppingCartOutlined
} from "@ant-design/icons";

import "./styles.css";
import Menu from "./Menu";
import AdCarousel from "./Carousel";
import { Avatar, Badge } from "antd";

export default function App() {
  const [open, setOpen] = React.useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          type="primary"
          onClick={showDrawer}
          style={{ marginBottom: 16 }}
        >
          {open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <div>
          <Switch size="small" defaultChecked style={{ marginRight: "16px" }} />
          <Badge count={6}>
            <Avatar shape="square" icon={<ShoppingCartOutlined />} />
          </Badge>
        </div>
      </div>
      <Drawer
        title="Basic Drawer"
        placement="left"
        onClose={onClose}
        open={open}
      >
        <Menu />
      </Drawer>
      <Divider />
      <AdCarousel />
    </div>
  );
}
