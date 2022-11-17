import type { FormInstance } from "antd";
import { Form, Input } from "antd";

interface Values {
  name: string;
}

interface Props {
  form: FormInstance<Values>;
  initialValues: Partial<Values>;
  onFinish: (values: Values) => void;
}

function ProjectForm({ form, initialValues, onFinish }: Props) {
  return (
    <Form
      layout="vertical"
      form={form}
      initialValues={initialValues}
      onFinish={onFinish}
    >
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input placeholder="my-project" />
      </Form.Item>
    </Form>
  );
}

export default ProjectForm;
