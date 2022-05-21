import "./Mazk_Story.css";
import React, { Component } from "react";
import { ReactComponent as MenuIcon } from "../assets/menu2.svg";
//import { id } from "@ethersproject/hash";

var isBlurSTU1 = false;
function blurSTU1(e) {
    /*var wy = window.scrollY;
    var ot1 = document.getElementById("storyDiv").offsetTop - 100;

    if((wy >= (ot1-400)) && (wy < ot1)){
        var bf = 100*(1 - Math.sin( 0.0174 * 90 * (wy-(ot1-400))/400 ));
        document.getElementById("story_main_img").style.filter = 'blur('+ bf +'px)';
    }else if((wy >= ot1) && (wy < (ot1+400))){
        document.getElementById("story_main_img").style.filter = 'blur('+ 0 +'px)';
    }else if((wy >= (ot1+400)) && (wy < (ot1+1000))){
        var bf = 100*Math.sin( 0.0174 * 90 * (wy-(ot1+400))/600);
        document.getElementById("story_main_img").style.filter = 'blur('+ bf +'px)';
    }else{
        document.getElementById("story_main_img").style.filter = 'blur('+ 100 +'px)';
    }*/
}

class Story extends Component {
    componentDidMount() {
    }
    render(){
        return (
            <div >
            </div>
        )
    }
}
export default Story;