import { List, Card } from 'antd';
import { Row, Col } from 'antd';
import { collection, getDocs } from "firebase/firestore";
import React from 'react';
import '../App.css';
import { db } from "../index";


export class CampaignList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listData:[]};
    this.getCampaigns();
  }

  getCampaigns = async (values) => {
    const campaignsCol = collection(db, "campaigns");
    const campaignsSnapshot = await getDocs(campaignsCol);
    const campaignsList = campaignsSnapshot.docs.map(doc => {let d = doc.data(); d['id'] = doc.id; return d;});
    let newList = [];
    campaignsList.forEach((doc) => {
        newList.push({
        id: doc.id,
        name: doc.name,
        deliverables: doc.deliverables,
        compensation: doc.compensation,
      });
    })
    this.setState({listData: newList});
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
              onClick={() => window.location.assign(`/home/InfluencerTable/${item.id}`)}
              key={item.id}
            >
              <Card title={item.name} className="campaign-title">
                <Row>
                <Col span={12}>
                  <h>Deliverables</h>
                <ul>
                {item.deliverables.map(n => {
                  return (
                    <li>{n}</li>
                  );
                })}
                </ul>
                </Col> 
                <Col span={12}>
                <h>Compensation</h>
                <ul>
                {item.compensation.map(n => {
                  return (
                    <li>{n}</li>
                  );
                })}
                </ul>
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