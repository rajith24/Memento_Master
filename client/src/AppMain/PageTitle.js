import React, {Component} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';

import TitleComponent1 from './PageTitleExamples/Variation1'
import TitleComponent2 from './PageTitleExamples/Variation2'
import TitleComponent3 from './PageTitleExamples/Variation3'
import Monthly from './monthly'
// import { SiGoogleanalytics } from "react-icons/si";
import {
    Row, Col, TabContent, TabPane, ButtonGroup, ListGroup, ListGroupItem,
    Card, CardBody, CardFooter,CardHeader,
} from 'reactstrap';
import {Button} from 'reactstrap';
import classnames from 'classnames';
import GridTables from '../../Pages/Tables/GridTables/index'



class PageTitle extends Component {
    // monthly = () => {
    //     <GridTables />
    // }
    randomize(myArray) {
        return myArray[Math.floor(Math.random() * myArray.length)];
    }

    render() {
        let {
            enablePageTitleIcon,
            enablePageTitleSubheading,

            heading,
            icon,
            subheading
        } = this.props;

        var arr = [<TitleComponent1 />]

        return (
            <Card>
                {/* <CardHeader className="col-12 bg-premium-dark"> */}
            <div className="app-page-title bg-dark" style={{margin: '0', padding: 'inherit', background:'#2a2a2a'}}>
                {/* '#ded7e0' */}
                <div className="page-title-wrapper">
                    <div className="page-title-heading">
                    <CardHeader style={{background:'inherit'}}>
                    <div id ="chartHeading" className="card-header-title">
                        <i className="header-icon lnr-chart-bars icon-gradient bg-white"> </i>  
                    </div>
                    </CardHeader>
                        {/* <div
                            style={{background: '#2a2a2a'}}
                            // "#6d597a"
                            className={cx("page-title-icon", {'d-none': !enablePageTitleIcon})}>
                            <i className="lnr-chart-bars icon-gradient bg-love-kiss"/>
                            {/* {<SiGoogleanalytics/>} */}
                        {/* </div> */}
                        <div style={{color:"white", fontSize:"medium"}}>
                            {heading}
                            <div
                                style={{fontSize:"small"}}
                                className={cx("page-title-subheading", {'d-none': !enablePageTitleSubheading})}>
                                {subheading}
                            </div>
                        </div>
                    </div>
                    {this.props.property.length < 2 ?
                     <div className="page-title-actions">
                        {this.randomize(arr)}
                    </div>
                     :
                     <>
                        <div className="page-title-actions">
                        {/* <Card className="card-hover-shadow profile-responsive card-border"> */}
                        {/* <div className="dropdown-menu-header">
                            <div className="dropdown-menu-header-inner text-white bg-dark"> */}
                                <div className="menu-header-content">
                                    <div className="menu-header-btn-pane">
                                        <div tabs="true" style={{paddingRight:'15px'}}>
                                            <ButtonGroup>
                                                   
                                                            <>
                                                            <Button caret="true" color="dark"
                                                           
                                                            
                                                            >Monthly</Button>
                                                            
                                                            </>
                                            </ButtonGroup>
                                        </div>
                                    </div>

                                </div>
                        
                            {/* </Card> */}
                            {/* <GridTables clicked={true} license={this.props.property}/> */}
                            </div>
                           
                            </>
                     }
                   
                </div>
            </div>
            {/* </CardHeader> */}
            </Card>
        );
    }
}

const mapStateToProps = state => ({
    enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
    enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);