import './modal.css';
import { Card, Row, Col, Typography } from 'antd';
import { Redirect } from "react-router";
import React from 'react';

class CampaignModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false,

    };
  }

    render() {
    const showHideClassName =  this.props.show ? "modal display-block" : "modal display-none";
    if (this.state.redirect && this.props.campaign) {
      this.props.setCampaign(this.props.campaign);
      return (
        <Redirect to={`/home/InfluencerTable/${this.props.campaign.id}`}/>
      )
    } 

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {this.props.campaign && 
              <Card title={this.props.campaign.name} className="campaign-modal" >
                  <Row>
                  <Col span={12}>
                  <Typography>Deliverables</Typography>
                  <ul>
                  {this.props.campaign.deliverables.map(n => {
                  return (
                      <li>{n}</li>
                  );
                  })}
                  </ul>
                  </Col>
                  <Col span={12}>
                  <Typography>Compensation</Typography>
                  <ul>
                  {this.props.campaign.compensation.map(n => {
                  return (
                      <li>{n}</li>
                  );
                  })}
                  </ul>
                  </Col>
                  </Row> 
              </Card>
          }
          {this.props.children}
          <button type="button" onClick={this.props.handleClose}>
            Close
          </button>
          <button type="button" onClick={() => this.setState({ redirect: true})}>
            Campaign Home
          </button>

        </section>
      </div>
    )
  }
};

export default CampaignModal;
