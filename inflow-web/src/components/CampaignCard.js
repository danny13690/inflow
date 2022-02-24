import { Card } from 'antd';
import React from 'react';
import '../App.css';
import "../index.css";



export class CampaignCard extends React.Component {

  render() {
      let item = this.props.item;
      return (
              <Card title={item.name} className="campaign-title" style={{borderRadius: 25}}>
              </Card>
      )
  }
};

