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
        <Redirect to={`/home/CampaignHome/${this.props.campaign.id}`}/>
      )
    }

    let campaign = this.props.campaign;

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {this.props.campaign && 
              <Card title={this.props.campaign.name} className="campaign-modal" >
                  <Row>
                  <Col span={24}>
                  <Typography className="modal-head">Description</Typography>
                  <Typography>{this.props.campaign.description}</Typography>
                  </Col>
                  </Row> 
                  <Row>
                  <Col span={12}>
                  <Typography className="modal-head">Deliverables</Typography>
                  <ul>
                  {this.props.campaign.deliverables.map(n => {
                  return (
                      <li>{n}</li>
                  );
                  })}
                  </ul>
                  </Col>
                  <Col span={12}>
                  <Typography className="modal-head">Compensation</Typography>
                  <ul>
                  {this.props.campaign.compensation.map(n => {
                  return (
                      <li>{n}</li>
                  );
                  })}
                  </ul>
                  </Col>
                  </Row>
                  <Row>
                  <Col span={24}>
                  <Typography className="modal-head">Filters</Typography>
                  </Col>
                  </Row>
                  <Row>
                  <Col span={8}>
                  <Typography className="modal-sub-head">Engagement</Typography>
                  {"engagement" in campaign.filters ? 
                    <Typography>{campaign.filters.engagement[0]} - {campaign.filters.engagement[1]}</Typography> :
                    <Typography>None</Typography>}
                  </Col>
                  <Col span={8}>
                  <Typography className="modal-sub-head">Follower</Typography>
                  {"follower" in campaign.filters ? 
                    <Typography>{campaign.filters.follower[0]} - {campaign.filters.follower[1]}</Typography> :
                    <Typography>None</Typography>}
                  </Col>
                  <Col span={8}>
                  <Typography className="modal-sub-head">Location</Typography>
                  {"follower" in campaign.filters ? 
                    <ul>
                    {campaign.filters.locations.map(n => {
                    return (
                        <li>{n}</li>
                    );
                    })}
                    </ul> :
                    <Typography>None</Typography>}
                  </Col>
                  </Row>
                  <Row>
                  <Col span={24}>
                  <Typography className="modal-head">Hashtags:</Typography>
                  <Typography> {campaign.hashtags.map(n => {return (<>{n} </>) })} </Typography>
                  </Col>
                  </Row>
                  <Row>
                  <Col span={24}>
                  <Typography className="modal-head">Industry:</Typography>
                  <Typography>{campaign.industry}</Typography>
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
