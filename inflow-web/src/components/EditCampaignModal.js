import React from 'react';
import { Typography } from '@material-ui/core';
import { Form, Input, Button, Checkbox } from 'antd';
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db, storage } from "../index";
import { createPortal } from 'react-dom';
import { ref, uploadBytes } from "firebase/storage";

class EditCampaignModal extends React.Component {
  constructor(props){
    super(props);
  }

  UpdateCampaign = async (values) => {
    console.log(values)
     const docRef = doc(db, 'campaigns', this.props.campaign.id);
        const docRef2 = await updateDoc(docRef, {
            name: values["title"],
            description: values["description"],
            deliverables: [values["deliverables"]],
            compensation: [values["compensation"]],
        });
    this.props.setCampaign({
            name: values["title"],
            description: values["description"],
            deliverables: [values["deliverables"]],
            compensation: [values["compensation"]],
        });
    this.props.handleClose();

    
    // if (file != null) {
    //   const storageRef = ref(storage, 'campaigns/'+ docRef.id + '/image.jpg');
    //   uploadBytes(storageRef, file).then(snapshot => {
    //     console.log("successfully uploaded", snapshot);
    //   }).catch(error => {
    //     console.log(error.message);
    //   });
    // }
  };

  onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  render() {
    const showHideClassName =  this.props.show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">

        <Typography variant="h5" style={{marginBottom: "40px", marginTop: "40px", paddingLeft:"4em" }}>
          Update Campaign
        </Typography>
        <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={this.UpdateCampaign}
            onFinishFailed={this.onFinishFailed}
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
              initialValue={this.props.campaign.name}
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
              initialValue={this.props.campaign.description}
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
              initialValue={this.props.campaign.deliverables}
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
              initialValue={this.props.campaign.compensation}
            >
              <Input />
            </Form.Item>

            {/* <Form.Item
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
            </Form.Item> */}

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Save
              </Button>
            </Form.Item>
          </Form>

          {this.props.children}
          <button type="button" onClick={this.props.handleClose}>
            Close
          </button>
        </section>
      </div>
    )
  }
};

export default EditCampaignModal;