import { Card } from 'antd';
import { Row, Col } from 'antd';
import React from 'react';
import '../App.css';


export class CampaignCard extends React.Component {

  render() {
      let item = this.props.item;
      return (
              <Card title={item.name} className="campaign-title" style={{borderRadius: 25}}>
                  
                {/* <Row>
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
                </Row>  */}
              </Card>
      )
  }
};

