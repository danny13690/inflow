import './modal.css';
import { Card, Row, Col, Typography } from 'antd';


const CampaignModal = ({ handleClose, show, campaign, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {campaign && 
            <Card title={campaign.name} className="campaign-modal" >
                <Row>
                <Col span={12}>
                <Typography>Deliverables</Typography>
                <ul>
                {campaign.deliverables.map(n => {
                return (
                    <li>{n}</li>
                );
                })}
                </ul>
                </Col>
                <Col span={12}>
                <Typography>Compensation</Typography>
                <ul>
                {campaign.compensation.map(n => {
                return (
                    <li>{n}</li>
                );
                })}
                </ul>
                </Col>
                </Row> 
            </Card>
        }
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default CampaignModal;
