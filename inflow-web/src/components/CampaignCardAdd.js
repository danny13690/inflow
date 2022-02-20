import { Card } from 'antd';
import React from 'react';
import '../App.css';
import {
    PlusCircleOutlined,
  } from '@ant-design/icons';
import { Typography } from '@material-ui/core';

export class CampaignCardAdd extends React.Component {

    render() {
        return (
                <Card className="campaign-title add-card" style={{borderRadius: 25}}>
                    <PlusCircleOutlined style={{ fontSize: '70px', marginBottom: "20px" }}/>
                    <Typography variant="h6">Create New Campaign</Typography>
                </Card>
        )
    }
  };