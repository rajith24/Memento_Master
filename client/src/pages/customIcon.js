import React, { Component, Fragment } from "react";
import loadingVideo from "./loading.mp4";
import { Avatar } from '@mui/material';
import expecto from './expecto1.mp4'
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
class CustomIcon extends Component {
  constructor(props) {
    super(props);

    this.endWelcome = this.endWelcome.bind(this);
    //Create Chart Reference
    this.ref = {};

    this.state = {
      loading: true,
      usersList:[],
      userlist:[],
      customerList:[],
      loggedInUserName : "",
      imageData : undefined,
      welcome : false,
    };
    // this.audio = new Audio(Audio)
  }

  componentDidMount = async (e) => {
    var self = this
    this.setState({
      loading: true,
      usersList:[],
      userlist:[],
      customerList:[],
      loggedInUserName : "",
      imageData : undefined,
      welcome : false,

    })

    setTimeout(function(){
      self.setState({
        loading : false,
        welcome : true
      })
      self.endWelcome()
    },7000)
    const res = await fetch('/loggedUserName')
    const response = await res.json()

    const res1 = await fetch('/loginDetails')
    const response1 = await res1.json()  




   
    for(var i = 0 ; i<response1.length; i++){
      if(response1[i].name == response){
        var imageData =response1[i].image.data
        // var finalimageData = 'data:image/jpeg;base64, '+ imageData.toString('base64');
        var finalimageData = response1[i].image.toString('base64');
        this.getBase64(imageData).then(
          data => {
           // const myBuffer = Buffer.from(this.state.avatar, 'base64');
           console.log(data)
           
         }
       );
        this.setState({
          imageData : finalimageData,
          // loading : false,
          // welcome : true,
        })
        // var arr = []
        // for(var i in imageData) arr.push(imageData[i]);
        // console.log(arr)
        // const content = new Uint8Array(arr);

        // document.getElementById('my-img').src = URL.createObjectURL(
        //   new Blob([content.buffer], { type: 'image/png' } /* (1) */)
        // );
      }
    }
    this.setState({
      usersList : response1,
      loggedInUserName : response.toUpperCase(),
    })

    
    
    // console.log(this.state.usersList)

  }


  endWelcome = async(e) => {
    var self = this
    setTimeout(function(){
      self.setState({
        welcome : false,
      })
    },5500)
  }

  getBase64(file){
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      // reader.readAsDataURL(file);
      reader.readAsArrayBuffer(file);
      // reader.readAsText(file,"base64");
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
}


  componentDidUnmount = async (e) => {
    var self = this
    this.setState({
      loading: true,
      usersList:[],
      userlist:[],
      customerList:[],
      loggedInUserName : "",
      imageData : undefined,
      welcome : false,
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
          </>
        )}

        {this.state.welcome ? 
        <>
          {/* <div className="video-container"> */}
          <video autoPlay
                    loop
                    playsInline
                    muted
                    className="expecto"
                    playbackspeed={1}
                    >
                <source src={expecto} type="video/mp4" />
              </video>
            {/* </div> */}
              <div 
              className="loginAvatar"
              >
                <Avatar sx={{ width: 200, height: 200 }}  src={this.state.imageData} />
                <p className="loginText">Welcome To Hogwarts ! {this.state.loggedInUserName}  </p>
              
            </div>
        </>: 
        <>
          
        </>}

        {(!this.state.loading) && (!this.state.welcome) ? 
        <>
          <Navigate to="/message" replace={true} />
        </> : <></>}
      </Fragment>
    );
  }
}

export default CustomIcon;
