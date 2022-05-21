import "./Util.css";
import React, { Component } from "react"; 

class Util extends Component {
    componentDidMount() {
        var uh1 = document.getElementById('util_head_1');
        document.addEventListener('scroll', function(e) {
            var ud = document.getElementById('util_head_1').getBoundingClientRect().y - window.innerHeight;
            var dvd1 = window.innerWidth/150;
            var lop = ud;
            if((lop <= 0) && (lop > -1000)){
                uh1.style.width = -1*lop/dvd1 +'vw';
            }
        });
    }
    render(){
        return(
            < div className="util_div" id='util_div'>
                <br/><br/><br/>
                <center>
                    <img src='util_head_1.png' id='util_head_1'  width='0%' />
                </center>
                <div className="util-container">
                    <div className="util-cell">
                        <center><img src='STU_01.png' className='circle-clip-1'   /></center><br/>
                        <span style={{fontSize:"45px",lineHeight:"45px",color:"#48bf54"}}><b>Free market <br/>for classes. </b></span><br/><br/>
                        Everyone could open or join the classes. Normal class anyone could join. Special classes for STU NFT holders. Please check our class schedule
                    </div>
                    <div className="util-cell">
                        <center><img src='STU_02.png' className='circle-clip-1'   /></center><br/>
                        <span style={{fontSize:"45px",lineHeight:"45px",color:"#e98085"}}><b>Free gift in a real world </b></span><br/><br/>
                        such as one coffee per day in a cafe  of Munmun cafe  in Seacon square shopping mall , Bangkok Thailand. 
                        OR discounts with some brands that we are working on partner ship

                    </div>
                    <div className="util-cell">
                        <center><img src='STU_03.png' className='circle-clip-1'   /></center><br/>
                        <span style={{fontSize:"45px",lineHeight:"45px",color:"#ec7053"}}><b>Cartoon animation </b></span><br/><br/>
                        which the story come from our NFT holders. You can be a part of it. Just connect your wallet and make a story of each character.(Link). Please read our main story and make our character ‘story to get along well. 

                    </div>
                    <div className="util-cell">
                        <center><img src='STU_04.png' className='circle-clip-1'   /></center><br/>
                        <span style={{fontSize:"45px",lineHeight:"45px",color:"#4b6db4"}}><b>VDO games </b></span><br/><br/>
                        in the future using blockchain technology which mean each character you buy is unique and you own it not a VDO game company!
                    </div>
                </div>
                <br/><br/><br/>
            </div>
        )
    }
}
export default Util;