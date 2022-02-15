import { Table } from 'antd';
import React from 'react';
import { FirebaseError } from 'firebase/app';
import { initializeApp } from "firebase/app";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

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
                text: 'New York',
                value: 'New York',
            },
        ],
        onFilter: (value, record) => record.location === value,
  
      },
      {
        title: 'Total Reach',
        dataIndex: 'reach',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.reach - b.reach,
      }
    ];
  }

  getInfluencers = async (values) => {
    const firebaseConfig = {
      apiKey: "AIzaSyBQ9pLA5iHoAijrd-Gf7XHOH_qhz7asE74",
      authDomain: "inflow-3382f.firebaseapp.com",
      projectId: "inflow-3382f",
      storageBucket: "inflow-3382f.appspot.com",
      messagingSenderId: "16173008953",
      appId: "1:16173008953:web:dd099b7b74b4c64d1ee5e8",
      measurementId: "G-8FCDTE5ZRY"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    const db = getFirestore();
    console.log(this.props);
    const docRef = doc(db, 'campaigns', this.props.match.params.campaignID);
    const docReceived = await getDoc(docRef); 
    const users = docReceived.data().completed_users;
    // const users = ['IzDzQSpzFSnIldYcQ7eF']
    console.log("users");
    console.log(users);

    const usersCol = collection(db, "users");
    const usersSnapshot = await getDocs(usersCol);
    const usersList = usersSnapshot.docs.map(doc => {let d = doc.data(); d['id'] = doc.id; return d;});
    let newList = [];
    usersList.forEach((doc) => {
      console.log(doc.id)
      if (users.includes(doc.id)){
        console.log("included")
          newList.push({
          id: doc.id,
          name: doc.name,
          gender: doc.gender,
          age: doc.age,
          location: doc.location,
          reach: doc.reach
        });
      }
    })
    this.setState({listData: newList});
    console.log("list data")
    console.log(this.state.listData);
  }

  componentDidMount() {
    this.getInfluencers();
  }


  // const data = [
  //   {
  //     key: '1',
  //     name: 'Jannik Obenhoff',
  //     gender: 'F',
  //     age: 20,
  //     location: 'New York',
  //     reach: 767.5
  //   },
  //   {
  //     key: '2',
  //     name: 'Maria Chen',
  //     gender: 'F',
  //     age: 22,
  //     location: 'SF',
  //     reach: 10
  //   },
  // ];

  render() {
    return (
        <Table columns={this.columns} dataSource={this.state.listData} onChange={console.log("updated")} />
    )
  }
}
