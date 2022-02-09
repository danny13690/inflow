import { Form, Input, Button, Checkbox } from 'antd';

export const NewCampaignForm = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Campaign Title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Your Campaign Title',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Deliverables"
        name="deliverables"
        rules={[
          {
            required: true,
            message: 'What do you expect from the influencer?',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Compensation"
        name="compensation"
        rules={[
          {
            required: true,
            message: 'What will you give the influencer?',
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};