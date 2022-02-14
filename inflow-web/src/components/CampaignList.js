import { List, Card } from 'antd';
import { Row, Col } from 'antd';
import { FirebaseError } from 'firebase/app';
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import React from 'react';
import '../App.css';

export class CampaignList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listData:[]};
  }

  getCampaigns = async (values) => {

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
    const campaignsCol = collection(db, "campaigns");
    const campaignsSnapshot = await getDocs(campaignsCol);
    const campaignsList = campaignsSnapshot.docs.map(doc => doc.data());
    let i = 1;
    let newList = [];
    campaignsList.forEach((doc) => {
        newList.push({
        id: i,
        title: doc.title,
        deliverables: doc.deliverables,
        compensation: doc.compensation,
      });
      i+=1;
    })
    this.setState({listData: newList});
    console.log(this.state.listData);
  }

  componentDidMount() {
    this.getCampaigns();
  }

  render() {
    console.log("Render");
    if (this.state.listData.length > 0 ){
      return (
        <List
          itemLayout="vertical"
          size="large"
          pagination={{
            onChange: page => {
              console.log(page);
            },
            pageSize: 3,
          }}
          dataSource={this.state.listData}

          renderItem={item => (
            <List.Item
              key={item.id}
            >
              <Card title={item.title} className="campaign-title">
                <Row>
                <Col span={12}>
                {item.deliverables}
                </Col>    
                <Col span={12}>  
                {item.compensation}
                </Col>  
                </Row> 
              </Card>
            
            </List.Item>
          )}
          />
          )
      } else {
            return (
              <p> Submit a Campaign! </p>
            )
      }
  }
};