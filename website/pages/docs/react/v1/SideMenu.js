import React from "react";

import { Menu, Select } from "antd";
import {
  CoffeeOutlined,
  ClockCircleOutlined,
  FormatPainterOutlined,
  BookOutlined,
  MessageOutlined,
  DatabaseOutlined,
  UsergroupAddOutlined,
  CompassOutlined,
  MailOutlined,
  NotificationOutlined,
  ShoppingCartOutlined,
  CaretUpOutlined,
} from "@ant-design/icons";

import Link from "next/link";

import { useRouter } from "next/router";

const { Option } = Select;

const SideMenu = () => {
  const router = useRouter();
  const { pathname } = window.location;

  let paths = pathname.split("/");
  paths.splice(0, 2);
  if (paths.length === 0) paths = ["docs"];

  const majorVersion = pathname.indexOf("v2") !== -1 ? "v2" : "v1";

  const handleChange = (version) => {
    if (version === "v2") {
      router.push("/docs/react/v2");
    } else {
      router.push("/docs/react/v1");
    }
  };

  return (
    <div>
      <Select
        defaultValue={majorVersion}
        style={{
          width: 218,
          marginLeft: "24px",
          marginTop: "12px",
          marginBottom: "12px",
        }}
        onChange={handleChange}
      >
        <Option value="v1">react-chat-engine</Option>
        <Option value="v2">react-chat-engine-advanced</Option>
      </Select>

      <Menu
        mode="inline"
        defaultSelectedKeys={paths}
        defaultOpenKeys={paths}
        style={{
          position: "fixed",
          maxWidth: "256px",
          height: "calc(100vh - 88px)",
          overflowY: "scroll",
        }}
      >
        <Menu.Item icon={<CoffeeOutlined />} key="docs">
          <Link href="/docs">Introduction</Link>
        </Menu.Item>

        <Menu.Item icon={<ClockCircleOutlined />} key="getting_started">
          <Link href="/docs/getting_started">Getting start</Link>
        </Menu.Item>

        <Menu.SubMenu
          key="tutorials"
          icon={<BookOutlined />}
          title="Project Tutorials"
        >
          <Menu.Item icon={<ShoppingCartOutlined />} key="marketplace">
            <Link href="/docs/tutorials/marketplace">Marketplace Chat</Link>
          </Menu.Item>
          <Menu.Item icon={<MessageOutlined />} key="dms">
            <Link href="/docs/tutorials/direct_messages">
              Direct Messages (DMs)
            </Link>
          </Menu.Item>
          <Menu.Item icon={<UsergroupAddOutlined />} key="chatfeeds">
            <Link href="/docs/tutorials/chatfeeds">Community Chat Board</Link>
          </Menu.Item>
          <Menu.Item icon={<CompassOutlined />} key="react_support_chat">
            <Link href="/docs/tutorials/react_support_chat">Support Chat</Link>
          </Menu.Item>
          <Menu.Item icon={<CaretUpOutlined />} key="nextjs_chat_app">
            <Link href="/docs/tutorials/nextjs_chat_app">Next.JS Chat</Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu
          key="customize_ui"
          icon={<FormatPainterOutlined />}
          title="Customize UI"
        >
          <Menu.Item key="">
            <Link href="/docs/customize_ui/">Introduction</Link>
          </Menu.Item>
          <Menu.Item key="render_functions">
            <Link href="/docs/customize_ui/render_functions">
              Render Functions
            </Link>
          </Menu.Item>
          <Menu.Item key="components">
            <Link href="/docs/customize_ui/components">Components</Link>
          </Menu.Item>
          <Menu.Item key="custom_css">
            <Link href="/docs/customize_ui/custom_css">Custom CSS</Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu
          key="notifications"
          icon={<NotificationOutlined />}
          title="Notifications"
        >
          <Menu.Item icon={<MailOutlined />} key="emails">
            <Link href="/docs/notifications/emails">Email Notifications</Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item icon={<DatabaseOutlined />} key="backend">
          <Link href="/docs/backend">Connect Your Backend</Link>
        </Menu.Item>

        <Menu.Item key="server_rest">
          <Link href="/docs/server_rest">Full Rest API</Link>
        </Menu.Item>

        <Menu.Item key="sockets">
          <Link href="/docs/sockets">Sockets</Link>
        </Menu.Item>

        <Menu.Item key="context_api">
          <Link href="/docs/context_api">Context API</Link>
        </Menu.Item>

        <Menu.Item key="event_hooks">
          <Link href="/docs/event_hooks">Event Hooks</Link>
        </Menu.Item>

        <Menu.Item key="webhooks">
          <Link href="/docs/webhooks">Webhooks</Link>
        </Menu.Item>

        <Menu.Item key="timezones">
          <Link href="/docs/timezones">Timezones</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default SideMenu;
