import { List, Card } from 'antd';
import { Row, Col } from 'antd';
import '../App.css';

export function CampaignList (props) {
const listData = [];
for (let i = 0; i < 5; i++) {
  listData.push({
    id: i,
    title: `Kiehl's Brand Ambassador ${i}`,
    deliverables:
      <ul> <li> Instagram post per week minimum </li> <li> 500 likes per pots with #kiehls hashtag </li> <li> 1 unpacking video on story </li> </ul>,
    compensation:
      <ul> <li> 1x Kiehl's Ultra Facial Cream (150ml) </li> <li> 3x Kiehls Ultra Facial Cream (15ml) </li> <li> $100 per post </li> </ul>,
  });
}

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
};