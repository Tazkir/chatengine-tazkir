import React from "react";

import { Menu, Select } from "antd";
import {
  CoffeeOutlined,
  HomeOutlined,
  BlockOutlined,
  ApiOutlined,
  FunctionOutlined,
  CloudServerOutlined,
  CommentOutlined,
} from "@ant-design/icons";

import Link from "next/link";

import { useRouter } from "next/router";

const { Option } = Select;

export const SideMenu = () => {
  const router = useRouter();
  const { pathname } = window.location;

  const route = pathname.split("/v2")[1].split("#")[0];
  const folder = route.split("/")[1];
  const keys = [folder, route];

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
        defaultSelectedKeys={keys}
        defaultOpenKeys={keys}
        style={{
          position: "fixed",
          maxWidth: "256px",
          height: "calc(100vh - 88px)",
          overflowY: "scroll",
        }}
      >
        <Menu.Item icon={<CoffeeOutlined />} key="">
          <Link href="/docs/react/v2">Introduction</Link>
        </Menu.Item>

        <Menu.SubMenu
          key="getting_started"
          icon={<CommentOutlined />}
          title="Getting Started"
        >
          <Menu.Item key="/getting_started">
            <Link href="/docs/react/v2/getting_started">Setup</Link>
          </Menu.Item>
          {/* <Menu.Item key="/getting_started/custom_features">
            <Link href="/docs/react/v2/getting_started/custom_features">
              Custom Features
            </Link>
          </Menu.Item>
          <Menu.Item key="/getting_started/custom_style">
            <Link href="/docs/react/v2/getting_started/custom_style">
              Custom Style
            </Link>
          </Menu.Item>
          <Menu.Item key="/getting_started/notifications">
            <Link href="/docs/react/v2/getting_started/notifications">
              Notifications
            </Link>
          </Menu.Item> */}
        </Menu.SubMenu>

        <Menu.Item icon={<HomeOutlined />} key="overview">
          <Link href="/docs/react/v2/overview">Overview</Link>
        </Menu.Item>

        <Menu.SubMenu
          key="components"
          icon={<BlockOutlined />}
          title="Components"
        >
          <Menu.Item key="/components">
            <Link href="/docs/react/v2/components">How it Works</Link>
          </Menu.Item>
          <Menu.Item key="/components/list">
            <Link href="/docs/react/v2/components/list">Components List</Link>
          </Menu.Item>
          <Menu.Item key="/components/storybook">
            <Link href="https://chatengine-io.github.io/react-chat-engine-advanced/?path=/docs/MultiChatWindow--default-story">
              Storybook
            </Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="sockets" icon={<ApiOutlined />} title="Sockets">
          <Menu.Item key="/sockets">
            <Link href="/docs/react/v2/sockets">How it Works</Link>
          </Menu.Item>
          <Menu.Item key="/sockets/multi_chat_socket">
            <Link href="/docs/react/v2/sockets/multi_chat_socket">
              Multi Chat Socket
            </Link>
          </Menu.Item>
          <Menu.Item key="/sockets/single_chat_socket">
            <Link href="/docs/react/v2/sockets/single_chat_socket">
              Single Chat Socket
            </Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu key="hooks" icon={<FunctionOutlined />} title="Hooks">
          <Menu.Item key="/hooks">
            <Link href="/docs/react/v2/hooks">How it Works</Link>
          </Menu.Item>
          <Menu.Item key="/hooks/multi_chat_logic">
            <Link href="/docs/react/v2/hooks/multi_chat_logic">
              Multi Chat Logic
            </Link>
          </Menu.Item>
          <Menu.Item key="/hooks/single_chat_logic">
            <Link href="/docs/react/v2/hooks/single_chat_logic">
              Single Chat Logic
            </Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.SubMenu
          key="server"
          icon={<CloudServerOutlined />}
          title="Chat Server"
        >
          <Menu.Item key="/server">
            <Link href="/docs/react/v2/server">How it Works</Link>
          </Menu.Item>
          <Menu.Item key="/server/web_console">
            <Link href="/docs/react/v2/server/web_console">Web Console</Link>
          </Menu.Item>
          <Menu.Item key="/server/rest_apis">
            <Link href="https://rest.chatengine.io">Rest APIs</Link>
          </Menu.Item>
          <Menu.Item key="/server/domain_model">
            <Link href="/docs/react/v2/server/domain_model">Domain Model</Link>
          </Menu.Item>
          <Menu.Item key="/server/webhooks">
            <Link href="/docs/react/v2/server/webhooks">Webhooks</Link>
          </Menu.Item>
        </Menu.SubMenu>

        <Menu.Item key="email_notifications">
          <Link href="/docs/react/v2/email_notifications">
            Email Notifications
          </Link>
        </Menu.Item>

        <Menu.Item key="timezones">
          <Link href="/docs/react/v2/timezones">Timezones </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default function component() {
  return <></>;
}
