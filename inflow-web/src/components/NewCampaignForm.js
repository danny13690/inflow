import { Form, Input, Button, Checkbox } from 'antd';
import { collection, addDoc, refEqual } from "firebase/firestore";
import { db, storage } from "../index";
import { list, ref, uploadBytes } from "firebase/storage";
import React from "react";
import './campaignForm.css';

export const NewCampaignForm = () => {
  let file = null;
  function chooseFile(e) {
    file = e.target.files[0];
  }

  const addCampaign = async function (values) {
    console.log('Success:', values);
    let delivs = document.getElementsByClassName("deliv-item");
    let deliverables = [];
    for (var i = 0; i < delivs.length; i++) {
      deliverables.push(delivs[i].value);
    }

    let comps = document.getElementsByClassName("comp-item");
    let compensations = [];
    for (var i = 0; i < comps.length; i++) {
      compensations.push(comps[i].value);
    }

    let hashes = document.getElementsByClassName("hash-item");
    let hashtags = [];
    for (var i = 0; i < hashes.length; i++) {
      hashtags.push(hashes[i].value);
    }

    let locs = document.getElementsByClassName("loc-item");
    let locations = [];
    for (var i = 0; i < locs.length; i++) {
      locations.push(locs[i].value);
    }

    let engMin = document.getElementById("eng-min").value;
    let engMax = document.getElementById("eng-max").value;
    let followMax = document.getElementById("follower-max").value;
    let followMin = document.getElementById("follower-min").value;

    const docRef = await addDoc(collection(db, "campaigns"), {
      name: values["title"],
      deliverables: deliverables,
      compensation: compensations,
      description: values["description"],
      ended: false,
      industry: values["industry"],
      hashtags: hashtags,
      filters: {
        engagement: [engMin, engMax],
        followers: [followMin, followMax],
        locations: locations
      }
    });
    if (file != null) {
      const storageRef = ref(storage, 'campaigns/'+ docRef.id + '/banner.jpg');
      uploadBytes(storageRef, file).then(snapshot => {
        console.log("successfully uploaded", snapshot);
      }).catch(error => {
        console.log(error.message);
      });
    }
  };

  const onAddDeliverable = () => {
    let newInput = document.createElement("input");
    newInput.className = "short-input deliv-item";
    document.getElementById("deliverables-yo").appendChild(newInput);
  };

  const onAddCompensation = () => {
    let newInput = document.createElement("input");
    newInput.className = "short-input comp-item";
    document.getElementById("compensation-yo").appendChild(newInput);
  };

  const onRemoveDeliverable = () => {
    let newInput = document.createElement("input");
    newInput.className = "short-input";
    let listDeliverables = document.getElementById("deliverables-yo");
    if (listDeliverables.children.length > 1) {
      listDeliverables.removeChild(listDeliverables.lastChild);
    }
  };

  const onRemoveCompensation = () => {
    let newInput = document.createElement("input");
    newInput.className = "short-input";
    let listDeliverables = document.getElementById("compensation-yo");
    if (listDeliverables.children.length > 1) {
      listDeliverables.removeChild(listDeliverables.lastChild);
    }
  };

  const onAddHashtag = () => {
    let newInput = document.createElement("input");
    newInput.className = "short-input hash-item";
    document.getElementById("hashtags-yo").appendChild(newInput);
  };

  const onRemoveHashtag = () => {
    let newInput = document.createElement("input");
    newInput.className = "short-input";
    let listDeliverables = document.getElementById("hashtags-yo");
    if (listDeliverables.children.length > 1) {
      listDeliverables.removeChild(listDeliverables.lastChild);
    }
  };

  const onAddLocation = () => {
    let newInput = document.createElement("input");
    newInput.className = "short-input loc-item";
    document.getElementById("locations-yo").appendChild(newInput);
  };

  const onRemoveLocation = () => {
    let newInput = document.createElement("input");
    newInput.className = "short-input";
    let listDeliverables = document.getElementById("locations-yo");
    if (listDeliverables.children.length > 1) {
      listDeliverables.removeChild(listDeliverables.lastChild);
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
      style={{ textAlign: "right" }}
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
        <input className="short-input"/>
      </Form.Item>

      <Form.Item
        label="Industry"
        name="industry"
        rules={[
          {
            required: true,
            message: 'Your Campaign Industry',
          },
        ]}
      >
        <input className="short-input"/>
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
        <input className="long-input"/>
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
        <div id="deliverables-yo">
        <input className="short-input deliv-item" />
        </div>
      </Form.Item>
      <Form.Item >
      <Button onClick={onAddDeliverable} className="add-button">Add</Button>
      <Button onClick={onRemoveDeliverable} className="add-button">Remove</Button>
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
        <div id="compensation-yo">
        <input className="short-input comp-item" />
        </div>
      </Form.Item>
      <Form.Item >
      <Button onClick={onAddCompensation} className="add-button">Add</Button>
      <Button onClick={onRemoveCompensation} className="add-button">Remove</Button>
      </Form.Item>

      <Form.Item
        label="Hashtags"
        name="hashtags"
        rules={[
          {
            message: 'What hashtags for the campaign can help it be discovered?',
          },
        ]}
      >
        <div id="hashtags-yo">
        <input className="short-input hash-item" />
        </div>
      </Form.Item>
      <Form.Item >
      <Button onClick={onAddHashtag} className="add-button">Add</Button>
      <Button onClick={onRemoveHashtag} className="add-button">Remove</Button>
      </Form.Item>

      <Form.Item
        label="Engagement Filter"
        name="engagement"
      >
        <input className="short-input" type="decimal" placeholder="Minimum engagement rate" id="eng-min"/>
        <input className="short-input" type="decimal" placeholder="Maximum engagement rate" id="eng-max"/>
      </Form.Item>

      <Form.Item
        label="Follower Filter"
        name="follower"
      >
        <input className="short-input" type="number" placeholder="Minimum # followers" id="follower-min"/>
        <input className="short-input" type="number" placeholder="Maximum # followers" id="follower-max"/>
      </Form.Item>

      <Form.Item
        label="Locations"
        name="locations"
        rules={[
          {
            message: 'What locations would you like your influencers to reach?',
          },
        ]}
      >
        <div id="locations-yo">
        <input className="short-input loc-item" />
        </div>
      </Form.Item>
      <Form.Item >
      <Button onClick={onAddLocation} className="add-button">Add</Button>
      <Button onClick={onRemoveLocation} className="add-button">Remove</Button>
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
        <input 
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