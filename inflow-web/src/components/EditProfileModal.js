import React from 'react';
import { Typography } from '@material-ui/core';
import { Form, Input, Button, Checkbox } from 'antd';
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db, storage } from "../index";
import { createPortal } from 'react-dom';
import { ref, uploadBytes } from "firebase/storage";

class EditProfileModal extends React.Component {
  constructor(props){
    super(props);
  }

  UpdateProfile = async (values) => {
    const docRef = doc(db, 'brands', this.props.profileId);

    let newProfile = {
        name: values["name"],
        description: values["description"] || "",
        industry: values["industry"] || "",
    }

    const docRef2 = await updateDoc(docRef, newProfile);
    this.props.handleClose();
    this.props.handleUpdate(newProfile)
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
          Update Profile
        </Typography>
        <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            onFinish={this.UpdateProfile}
            onFinishFailed={this.onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Brand Name"
              name="name"
              rules={[
                {
                  required: false,
                },
              ]}
              initialValue={this.props.profile.name}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Brand Description"
              name="description"
              rules={[
                {
                  required: false,
                },
              ]}
              initialValue={this.props.profile.description}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Brand Industry"
              name="industry"
              rules={[
                {
                  required: false,
                },
              ]}
              initialValue={this.props.profile.industry}
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

export default EditProfileModal;