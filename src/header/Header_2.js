//import { useState, useRef } from "react";
import { ReactComponent as CloseMenu } from "../assets/x2.svg";
import { ReactComponent as MenuIcon } from "../assets/menu2.svg";
import "./Header_2.css";
//import { ethers } from "ethers";
//import axios from "axios";
import Web3 from 'web3';
//import Web3Modal from "web3modal";
import { useState } from 'react';

//const baseURL = "https://sv1.siri-art.com:5000/";
//var isSignedIn = false;
export default function Header() {
    const [account, setAccount] = useState(0); // state variable to set account.

    const signOut = async (e) => {
      document.getElementById('bt1').style.display = "inline";
      document.getElementById('bt2').style.display = "none";
      document.getElementById('ad1').innerHTML = "";
    }

    function test111() {
      if(!account){
        checkMetaMask();
      }else{
        alert("Your wallet address is " + account);
      }
    } 
   
    function openMiniMenu(){
      document.getElementById('mini-open-menu').style.display = 'none';
      document.getElementById('mini-close-menu').style.display = 'inline';
      document.getElementById('upmost_right_menu_mini').style.display = 'block';
      document.getElementById('upmost_right_menu_mini').style.right = '0px';
      document.getElementById('upmost_right_menu_mini').style.filter = 'blur(0px)';
      document.getElementById('upmost_right_menu_mini').style.transition = 'cubic-bezier(0.075, 0.82, 0.165, 1) all .75s';
    }
    
    function closeMiniMenu(){
      document.getElementById('mini-open-menu').style.display = 'inline';
      document.getElementById('mini-close-menu').style.display = 'none';
      document.getElementById('upmost_right_menu_mini').style.right = '-300vw';
      document.getElementById('upmost_right_menu_mini').style.filter = 'blur(300px)';
      document.getElementById('upmost_right_menu_mini').style.transition = 'all 4s';
    }
    
    function openStoryLine(){
      closeMiniMenu();
      document.getElementById('storyline_main_container').style.transition = 'all 0.6s';
      document.getElementById('storyline_main_container').style.top = '0px';
      
      document.getElementById('top_menu').style.filter = "blur(20px)";
      document.getElementById('comp_char_containter').style.filter = "blur(20px)";
      document.getElementById('banner_container').style.filter = "blur(20px)";
      document.getElementById('APP_FAQ').style.filter = "blur(20px)";
      document.getElementById('APP_MASTER').style.filter = "blur(20px)";
    }
    
    function checkMetaMask() {
      if (typeof window.ethereum !== 'undefined') {
        connectMetaMask()
      }else{
        window.location.href = 'https://metamask.app.link/dapp/www.mazkgang.io?connect=2';
      }
    }

    async function clearAndcheckPassConnect(){
      var url =  new URL(window.location.href);
      var c = url.searchParams.get('connect');
      if(c === 2) connectMetaMask();
    }
    clearAndcheckPassConnect();
    
    async function connectMetaMask() {
      const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
      const accounts = await web3.eth.requestAccounts();
      
      setAccount(accounts[0]);
      var ad_short = "  0" +  accounts[0].substring(1,6) + "..." + accounts[0].substring(accounts[0].length - 4) + "  ";
      document.getElementById("wallet_address").style.display = 'block';
      document.getElementById("wallet_address").innerHTML = ad_short;
      document.getElementById("bt1").style.display = "none";
      if(accounts[0]){
        setTimeout(closeMiniMenu, 800);
      }
    }

    /*const fs1 = async () => {
        await axios.get(baseURL, config)
            .then(async function(response) {
                message1 = response.data;
            })
            .catch(function(error) {
                console.log(error);
            });
        return message1;
    };

    const CloseAndSign = async (e) =>{
    }*/

    var scpos;
    var targetPos , deltaPos , startPos ;
    var slideAnimation;
    function mazkScroll(id) {
      closeMiniMenu();
      scpos = -200;
      startPos = window.scrollY;
      targetPos = document.getElementById(id).offsetTop;
      deltaPos = targetPos - window.scrollY;
      if(id === 'FAQ_main_container' ){
        deltaPos -= 500;
      }
      var mazkScrollAnimate = function () {
        slideAnimation = requestAnimationFrame( mazkScrollAnimate );
         //
        if(scpos <= 220) {
          window.scrollTo(0 , startPos + deltaPos * Math.pow(.5*(1 + Math.tanh(scpos * .017453)),1) );
          //window.scrollTo(0 , startPos + deltaPos*((scpos-180)/180));
        } else {
          window.scrollTo(0,startPos + deltaPos);
          cancelAnimationFrame(slideAnimation);
        }
        scpos += 4;
      }
      mazkScrollAnimate();
    }

  return (
      <div className="header" >
        <div id='upmost_left_menu'>
          <center>
            <span id='wallet_address'> </span>
            <a rel="noreferrer" href="https://twitter.com/Mazkgang?s=20&t=CD8EyvH5T4MNfb3YuQlZYQ" target={'_blank'} >
              <img  alt="" src="twitter.svg" className="upmost_svg" />
            </a>
            <a rel="noreferrer" href="https://discord.gg/xakkFhAzut" target={'_blank'} >
              <img  alt="" src="discord.svg" className="upmost_svg" />
            </a>
            <img  alt="" src="opensea.svg" className="upmost_svg" style={{filter:'opacity(.3)'}}/>
          </center>
        </div>
        <div id='upmost_right_menu'>
          <button href="" className="upmost_btn">HOME</button>
          <button onClick={() => mazkScroll('story_img1')} className="upmost_btn">JOURNEY</button>
          <button className="upmost_btn" onClick={openStoryLine} >STORY</button>
          <button onClick={() => mazkScroll('dd')} className="upmost_btn">MAZKGANG</button>
          <button onClick={() => mazkScroll('master_essentialDiv')} className="upmost_btn">SQUAD</button>
          <button onClick={() => mazkScroll('FAQ_main_container')} className="upmost_btn">FAQ</button>
        </div>
        <div id='upmost_right_menu_mini'>
          <button href="" className="upmost_btn_mini">HOME</button><br/>
          <button onClick={() => mazkScroll('story_img1')} className="upmost_btn_mini">JOURNEY</button><br/>
          <button className="upmost_btn_mini" onClick={openStoryLine} >STORY</button><br/>
          <button onClick={() => mazkScroll('dd')} className="upmost_btn_mini">MAZKGANG</button><br/>
          <button onClick={() => mazkScroll('master_essentialDiv')} className="upmost_btn_mini">SQUAD</button><br/>
          <button onClick={() => mazkScroll('FAQ_main_container')} className="upmost_btn_mini">FAQ</button>
        </div>
        
        <div id='center_div_banner'>
          <center>
            <img  alt="" src="MAZK_LOGO.png" id="main_logo"  />
            <br/>
            <img id='bt1' src='Connect-Wallet.png' onClick={test111} alt="" /> 
            <button><img alt="" id='mazk_story_btn' src='mazk_story_btn_2.png' onClick={openStoryLine}/></button>
          </center>
        </div>
       
        <button id='bt2' alt="" href="" className="connect_button1" style={{display:"none"}} onClick={signOut}>
            SIGN OUT
        </button>

        <div className="mobile-menu" >
          <MenuIcon id='mini-open-menu' fill="#ffac0c"  className="menu-icon"   onClick={openMiniMenu} />
          <CloseMenu id='mini-close-menu' stroke="#ffac0c"  fill="#dc7107"  className="menu-icon" onClick={closeMiniMenu} style={{display:'none'}} />
        </div>
      </div>
  );
}

