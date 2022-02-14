import { List, Card } from 'antd';
import { Row, Col } from 'antd';
import { FirebaseError } from 'firebase/app';
import { db } from "../index";
import { collection, getDocs } from "firebase/firestore";
import '../App.css';

export function CampaignList (props) {
let listData = [];

const getCampaigns = async function (values) {
  const campaignsCol = collection(db, "campaigns");
  const campaignsSnapshot = await getDocs(campaignsCol);
  const campaignsList = campaignsSnapshot.docs.map(doc => doc.data());
  console.log(campaignsList);
  this.listData = [];
  let i = 1;
  campaignsList.forEach((doc) => {
    if (i === 1) {
      this.listData.push({
      id: i,
      title: doc.title,
      deliverables: doc.deliverables,
      compensation: doc.compensation,
    });
  }
    i += 1;
  })
}

getCampaigns();

if (listData.length > 0 ){
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
    dataSource={listData}

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
};