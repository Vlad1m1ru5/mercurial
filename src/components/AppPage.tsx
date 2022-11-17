import { Button, Col, Input, Row, Space, Table } from "antd";
import { useState } from "react";
import { useListQueriedProjectsQuery } from "../services/projects";
import "./AppPage.css";

interface Props {
  onClickProjectCreate: () => void;
  onClickProjectEdit: (id: string) => void;
  onClickProjectName: (id: string) => void;
}

function AppPage({
  onClickProjectCreate,
  onClickProjectEdit,
  onClickProjectName,
}: Props) {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [query, setQuery] = useState("");
  const { data: projects, isFetching } = useListQueriedProjectsQuery({
    page,
    perPage,
    query,
  });

  return (
    <Space className="app-page" size="large" direction="vertical">
      <Row>
        <Col span={12}>
          <Button type="primary" shape="round" onClick={onClickProjectCreate}>
            Create Project
          </Button>
        </Col>
        <Col span={12}>
          <Input.Search placeholder="Search" onSearch={setQuery} />
        </Col>
      </Row>
      <Table
        loading={isFetching}
        rowKey={({ id }) => id}
        dataSource={projects ? projects.data : []}
        pagination={{
          current: page,
          pageSize: perPage,
          onChange: (page, pageSize) => {
            setPage(page);
            setPerPage(pageSize);
          },
        }}
        columns={[
          {
            title: "Name",
            dataIndex: "name",
            render: (_: unknown, { id, name }) => (
              <Button
                type="link"
                size="small"
                onClick={() => onClickProjectName(id)}
              >
                {name}
              </Button>
            ),
          },
          {
            title: "Actions",
            dataIndex: "id",
            width: "0",
            render: (_: unknown, { id }) => (
              <Button
                type="link"
                size="small"
                onClick={() => onClickProjectEdit(id)}
              >
                Edit
              </Button>
            ),
          },
        ]}
      />
    </Space>
  );
}

export default AppPage;
