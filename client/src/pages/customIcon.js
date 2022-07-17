import React, { Component, Fragment } from "react";
import loadingVideo from "./loading.mp4";
import { Avatar } from '@mui/material';

class CustomIcon extends Component {
  constructor(props) {
    super(props);
    
    //Create Chart Reference
    this.ref = {};

    this.state = {
      loading: true,
      usersList:[],
      userlist:[],
      customerList:[],
      loggedInUserName : ""
    };
    // this.audio = new Audio(Audio)
  }

  componentDidMount = async (e) => {
    var self = this
    this.setState({
      usersList : [],
    })
    setTimeout(function(){
      self.setState({
        loading : false,
      })
    },7500)

    const res = await fetch('/loggedUserName')
    const response = await res.json()

    const res1 = await fetch('/loginDetails')
    const response1 = await res1.json()  
    this.setState({
      usersList : response1,
      loggedInUserName : response,
    })
    // console.log(this.state.usersList)

  }

  componentDidUnmount = async (e) => {
    var self = this
    this.setState({
      usersList : [],
    })
  }
  render() {
    return (
      <Fragment>
        {this.state.loading ? (
          <>
            <div>
              <video
                className="VideoTag"
                id="videoTag"
                autoPlay
                loop
                playsInline
                muted
              >
                <source src={loadingVideo} type="video/mp4" />
              </video>
            </div>
          </>
        ) : (
          <>
            <div>
              Contacts
              {this.state.usersList.map((value,index) => {
                return(
                  <>
                    {this.state.loggedInUserName != value.name ? 
                      <div key={index}>
                        {value.name}
                      </div>
                    : <></>}
                      
                  </>
                )
              })}
            </div>

          </>
        )}
      </Fragment>
    );
  }
}

export default CustomIcon;
