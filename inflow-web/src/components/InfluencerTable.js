import { Table } from 'antd';
import React from 'react';
import { FirebaseError } from 'firebase/app';
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";
import { db, storage } from "../index";

export class InfluencerTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {listData:[]}
    this.columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        sorter: (a, b) => a.name.localeCompare(b.name),
        sortDirections: ['ascend', 'descend'],
      },
      {
        title: 'Instagram Handle',
        dataIndex: 'instagram_handle',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.instagram_handle.localeCompare(b.instagram_handle),
        sortDirections: ['ascend', 'descend'],
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        sorter: (a, b) => a.gender.localeCompare(b.gender),
        sortDirections: ['ascend', 'descend'],
        filters: [
            {
                text: 'F',
                value: 'F',
            },
            {
                text: 'M',
                value: 'M',
            },
        ],
        onFilter: (value, record) => record.gender === value,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.age - b.age,
        sortDirections: ['ascend', 'descend'],
      },
      {
        title: 'Location',
        dataIndex: 'location',
        filters: [
            {
                text: 'SF',
                value: 'SF',
            },
            {
                text: 'Seattle',
                value: 'Seattle',
            },
            {
              text: 'LA',
              value: 'LA',
            },
          {
            text: 'NYC',
            value: 'NYC',
          },
          {
            text: 'Chicago',
            value: 'Chicago',
          },
        {
          text: 'USA',
          value: 'USA',
          },
        ],
        onFilter: (value, record) => record.location === value,
      },
      {
        title: 'Followers',
        dataIndex: 'reach',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.reach - b.reach,
        sortDirections: ['ascend', 'descend'],
      }
    ];
  }

  getInfluencers = async (values) => {
    const docRef = doc(db, 'campaigns', this.props.match.params.campaignID);
    const docReceived = await getDoc(docRef); 
    const users = docReceived.data().applied_users;
    console.log("users HERE")
    console.log(users[0])
    // const users = ['IzDzQSpzFSnIldYcQ7eF']

    const usersCol = collection(db, "users");
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map(doc => {let d = doc.data(); d['id'] = doc.id; return d;});
    let newList = [];
    usersList.forEach((doc) => {
      if (users.includes(doc.id)){
          newList.push({
          id: doc.id,
          name: doc.name,
          gender: doc.gender,
          age: doc.age,
          location: doc.location,
          reach: doc.reach,
          instagram_handle: doc.instagram_handle,
        });
      }
    })
    this.setState({listData: newList});
  }

  componentDidMount() {
    this.getInfluencers();
  }

  render() {
    return (
        <Table columns={this.columns} dataSource={this.state.listData} onChange={console.log("updated")} />
    )
  }
}
