import React, { Component, Fragment } from "react";
import loadingVideo from "./loading.mp4";


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
    },700)

    const res1 = await fetch('/loginDetails')
    const response1 = await res1.json()  
    this.setState({
      usersList : response1
    })
    console.log(this.state.usersList)

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
              {/* {console.log(this.state.usersList)} */}
              {this.state.usersList.map((value,index) => {
                return(
                  <>
                  {/* {console.log(value)} */}
                      <div key={index}>
                          {value.name}
                      </div>
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
