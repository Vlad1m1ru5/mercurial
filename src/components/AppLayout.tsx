import { Layout } from "antd";
import type { ReactNode } from "react";
import "./AppLayout.css";

interface Props {
  logo: ReactNode;
  children?: ReactNode;
}

function AppLayout({ children, logo }: Props) {
  return (
    <Layout className="app-layout">
      <Layout.Header>{logo}</Layout.Header>
      <Layout.Content className="app-layout-content">{children}</Layout.Content>
    </Layout>
  );
}

export default AppLayout;
