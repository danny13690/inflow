import { Form, Input, Button, Checkbox } from 'antd';
import { collection, addDoc, refEqual } from "firebase/firestore";
import { db, storage } from "../index";
import { createPortal } from 'react-dom';
import { ref, uploadBytes } from "firebase/storage";

export const NewCampaignForm = () => {
  let file = null;
  function chooseFile(e) {
    file = e.target.files[0];
  }

  const addCampaign = async function (values) {
    console.log('Success:', values);
    const docRef = await addDoc(collection(db, "campaigns"), {
      name: values["title"],
      deliverables: [values["deliverables"]],
      compensation: [values["compensation"]],
      description: values["description"]
    });
    if (file != null) {
      const storageRef = ref(storage, 'campaigns/'+ docRef.id + '/image.jpg');
      uploadBytes(storageRef, file).then(snapshot => {
        console.log("successfully uploaded", snapshot);
      }).catch(error => {
        console.log(error.message);
      });
    }
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
      onFinish={addCampaign}
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
        label="Campaign Description"
        name="description"
        rules={[
          {
            required: true,
            message: 'A description for your campaign',
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
        label="Picture"
        name="picture"
        rules={[
          {
            required: false,
          },
        ]}
      >
        <Input 
          type='file'
          onChange={chooseFile}
        />
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