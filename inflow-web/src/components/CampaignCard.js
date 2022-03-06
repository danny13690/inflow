import { Card } from 'antd';
import React from 'react';
import '../App.css';
import "../index.css";
import defaultCampaign from '../images/default_campaign.jpeg';

import { getStorage, ref, getDownloadURL } from "firebase/storage";

export class CampaignCard extends React.Component {

  render() {
    let item = this.props.item;

      const storage = getStorage();
      const img = document.getElementById('banner' + item.id);
      getDownloadURL(ref(storage, 'campaigns/'+ item.id + '/banner.jpg'))
        .then((url) => {
          img.setAttribute('src', url);
        }).catch(() => {
          img.setAttribute('src', defaultCampaign);
        });
      console.log(item)
      return (
              <Card title={item.name} className="campaign-title" style={{borderRadius: 25}}>
                <img className="campaign-img" id={"banner"+item.id} ></img>
              </Card>
      )
  }
};

