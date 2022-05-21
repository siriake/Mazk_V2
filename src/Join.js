import "./Join.css";
import React, { Component } from "react"; 

class Join extends Component {
    componentDidMount() {
    }
    render(){
        return(
            < div className="join-container">
                <div className="join-div1" >

                </div>
                <div className="join-div2">
                    <br/><br/>
                    <span className='join-head'> Join the community </span><br/>
                    STU Discord already has over 2,000 members. If you want to join the STU community, it’s here. Join us to get the news as soon as possible and follow our latest announcements
                    <br/><br/>
                    <button className="join-button">
                        <a href="https://discord.gg/hErmQwYKkT" target="_blank"> Join our Discord </a>
                    </button>
                    <br/><br/><br/>
                    <center className='copyright'> ©2021 STU. All rights reserved.</center><br/>
                </div>
                <div className="join-div3">

                </div>
                
            </div>
        )
    }
}
export default Join;