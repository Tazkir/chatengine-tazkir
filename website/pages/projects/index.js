import React, { useRef, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getProjects } from "../../actions/Projects";

import NewProject from "./_NewProject";
import ProjectsTable from "./_ProjectsTable";

import { Layout, Breadcrumb } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";

import { useRouter } from "next/router";

const { Content, Footer } = Layout;

const ProjectsPage = (props) => {
  const didMountRef = useRef(false);
  const router = useRouter();

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      props.getProjects();
    }
  });

  if (!props.accounts || !props.accounts.token) {
    router.push("/");
  }

  return (
    <Layout style={{ minHeight: "calc(100vh - 64px)" }}>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 42 }}
      >
        <Breadcrumb style={{ margin: "16px 24px" }}>
          <Breadcrumb.Item>
            <UnorderedListOutlined /> Projects
          </Breadcrumb.Item>
        </Breadcrumb>

        <NewProject />

        <div style={{ height: "32px" }} />

        <div className="site-layout-background">
          <ProjectsTable projects={props.projects.list} />
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        Chat Engine is a La Morre Company
      </Footer>
    </Layout>
  );
};

function mapStateToProps(state) {
  return {
    accounts: state.accounts,
    projects: state.projects,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getProjects }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
