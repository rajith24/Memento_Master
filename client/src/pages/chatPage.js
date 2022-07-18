import React, { Fragment, Component } from "react";
import {
    Row,
    Col,
    Button,
    ButtonGroup,
    Container,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardText,
    CardTitle,
    TabContent,
    TabPane,
    FormGroup,
    Input,
    Label,
    CustomInput,
  } from "reactstrap";
import { Avatar } from '@mui/material';
import test1 from './test1.png'
import test3 from './test3.png'
import castle from './castle.png'



export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
        loading: false,
        usersList:[],
        loggedInUserName : "",
        imageData : undefined,
    };
  }


  componentDidMount = async (e) => {
    this.setState({
        usersList:[],
        loggedInUserName : "",
        imageData : undefined,  
      })

    var self = this
    const res = await fetch('/loggedUserName')
    const response = await res.json()

    const res1 = await fetch('/loginDetails')
    const response1 = await res1.json()  

    // for(var i = 0 ; i<response1.length; i++){
    //   if(response1[i].name == response){
    //     var finalimageData = response1[i].image.toString('base64');
    //     this.setState({
    //       imageData : finalimageData,
         
    //     })
    //   }
    // }
    this.setState({
      usersList : response1,
      loggedInUserName : response.toUpperCase(),
    })

  }

  render() {
    return (
      <Fragment>
        <div className="removeScrollbar">
        <Row >
            <div>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand titleText" href="/" style={{}}>MEMENTO</a>
                <Col style={{display : "flex"}}>
                    <ul className="navbar-nav mr-2">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Chat</a>
                            </li>
                    </ul>
                    <ul className="navbar-nav mr-2">
                            <li className="nav-item">
                                <a className="nav-link" href="#"> / </a>
                            </li>
                    </ul>
                    <ul className="navbar-nav mr-2">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Profile</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-2 ">
                            <li className="nav-item">
                                <a className="nav-link" href="#">/</a>
                            </li>
                    </ul>
                    <ul className="navbar-nav mr-2">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Friends</a>
                        </li>
                    </ul>
                </Col>
                
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
            </div>
        </Row>
        <Row>
        <Col className="col-4 chatColumn" >
            <Card className="text-center chatCard">
                <CardHeader style={{
                    backgroundImage: "-webkit-linear-gradient(#3e4f60, #232222)",
                    // backgroundImage: "linear-gradient(#141e30  , #243b55)",
                    // background:"-webkit-linear-gradient(#2C3E50, #000000)"
                }}>
                    <div>
                            <nav className="navbar">
                                <Avatar sx={{ width: 58, height: 58 }}  src={this.state.imageData} />
                            </nav>
                        </div>
                </CardHeader>
                <CardBody 
                style={{
                    backgroundImage:"linear-gradient(rgb(195 138 224 / 34%), rgb(108 159 217 / 33%))",
                    // background:"-webkit-linear-gradient(#2C3E50, #000000)"
                }}>
                {/* <CardTitle>
               
                </CardTitle> */}
                {this.state.usersList.map((val,index)=>{
                    var userImage = ""
                    var userName = ""
                    var userexists = false
                    if((val.name).toUpperCase() != this.state.loggedInUserName){
                        userName = val.name
                        // userImage = val.image.toString('base64');
                        userexists = true
                    }

                    return(
                        <>
                            {userexists ? 
                            <>
                                <div className="userRow" style={{display:"flex"}}>
                                    {/* <Avatar sx={{ width: 58, height: 58 }}  src={userImage} /> */}
                                    <p className ="ml-3" style={{margin:"0px",alignItems:"center",display:"flex"}}>  {userName.charAt(0).toUpperCase() + userName.slice(1)}  </p>
                                </div>
                            </>: <></>}
                        </>
                    )
                       
                    
                })}
            </CardBody>
            <CardFooter className="text-muted"> <div className="greenDot mr-2"></div>Online</CardFooter>
            </Card>
        </Col>
        {this.state.clicked ? 
         <Col className="col-8 chatColumn" >
         <Card className="text-center chatCard">
         <CardHeader>
            
         </CardHeader>
         <CardBody>
             <div className="parent">
                 {/* <img class="image1" src={test} />
                 <img class="image2" src={castle} /> */}
             </div>
             
         </CardBody>
         <CardFooter className="text-muted"></CardFooter>
         </Card>
     </Col>
     : 
         <Col className="col-8 chatColumn" >
         <Card className="text-center chatCard">
         <CardBody className="parent">
         <div class="parent">
             <img class="image3" src={test3} />
             <img class="image2" src={test1} />
             
             <img class="image4" src={castle} />
         </div>
         <CardTitle className="centerText">MEMENTO</CardTitle>
         <p className="centerTextP">Now send and receive messages in an enternaing way.</p>
     </CardBody>
     </Card>
        </Col>
     }
     
       
                {/* <Col className="col-4 mt-5 chatColumn" >
                    <div>
                        <nav className="navbar navbar-dark bg-dark">
                            <Avatar sx={{ width: 58, height: 58 }}  src={this.state.imageData} />
                        </nav>
                    </div>
                </Col>
                <Col className="col-1 mt-5 chatColumn" style={{width:"auto"}}>
                    <div class="vl"></div>
                </Col>
                <Col className="col-7 mt-5 chatColumn" >
                    <div className="chatArea">
                        
                    </div>
                </Col> */}
        </Row>
        </div>
      </Fragment>
    );
  }
}
