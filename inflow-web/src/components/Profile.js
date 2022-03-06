import React from 'react';
import { db } from "../index";
import { getAuth } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Typography } from '@material-ui/core';
import EditProfileModal from './EditProfileModal.js';

export class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        profile: null,
        profileId: null,
    };
    props.setCampaign(null);
    this.getProfile();

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
};

hideModal = () => {
    this.setState({ show: false });
};

updateProfile = (profile_) => {
  console.log(profile_)
  this.setState({ profile: profile_ });
}

  getProfile = async () => {
    const q = query(collection(db, "brands"), where("userId", "==", getAuth().currentUser.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        this.setState({profile: doc.data(), profileId: doc.id})
    });
  }

  render() {
    return (
    <>
    {this.state.profile == null ?
        <Typography>Loading</Typography> :
        <>
        <EditProfileModal show={this.state.show} handleClose={this.hideModal} profile={this.state.profile} profileId={this.state.profileId} handleUpdate={this.updateProfile}/>
        <Typography variant='h5'>Brand Name: {this.state.profile.name}</Typography>
        <Typography style={{marginTop: "20px"}}>Brand description:</Typography>
        {"description" in this.state.profile  && this.state.profile.description != "" ? 
            <Typography>{this.state.profile.description}</Typography> :
            <Typography color="common.grey">None</Typography>
        }
        <Typography style={{marginTop: "20px"}}>Industry:</Typography>
        {"industry" in this.state.profile && this.state.profile.industry != "" ? 
            <Typography>{this.state.profile.industry}</Typography> :
            <Typography color="common.grey">None</Typography>
        }
        <button className="normal-button" onClick={this.showModal} style={{marginTop:"40px"}}>Edit</button>
        </>
    }
    </>
    );
  }
};