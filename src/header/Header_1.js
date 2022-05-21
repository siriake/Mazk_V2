import { useState, useRef } from "react";
import { ReactComponent as CloseMenu } from "../assets/x.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";
import "./header.css";
import { ethers } from "ethers";
import axios from "axios";

const baseURL = "https://sv1.siri-art.com:5000/";
var config = {
    headers: {
        'Content-Length': 0,
        'Content-Type': 'text/plain'
    },
    responseType: 'text'
};

export default function Header() {
    const resultBox = useRef();
    const [signatures, setSignatures] = useState([]);
    const [error, setError] = useState();
    const [click, setClick] = useState(false);
    //const [message1,setMessage1] = useState("");
    const [post, setPost] = useState(null);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    var message1;
    var provider;
    const MenuIcon1 = (props) =>(
      <svg xmlns="http://www.w3.org/2000/svg" fill={props.fill} className={props.class}></svg>
  )

    const signOut = async (e) => {
        document.getElementById('bt1').style.display = "inline";
        document.getElementById('bt2').style.display = "none";
        document.getElementById('ad1').innerHTML = "";
    }

    const fetchSTU = async(address) => {
        document.getElementById('showNFT').style.display = "inline";
        const url = "https://api.opensea.io/api/v1/assets?format=json&owner=" + address;
        await fetch(url)
        .then(response => response.json())
        .then((jsonData) => {
            // jsonData is parsed json object received from url
                console.log(jsonData)
                jsonData.assets.map((as1,i) => {
                    var previous_innerHTML = document.getElementById('showNFT').innerHTML;
                    var p = as1.description;
                    document.getElementById('showNFT').innerHTML =  previous_innerHTML + p + "<br/>" ;
                    
                    /*if(p == null){
                        var img1 = "<img src='"+ as1.image_url + "=s0' style='height:300px; max-width:100%;' />";
                        document.getElementById('showNFT').innerHTML =  previous_innerHTML + img1  ; 
                        
                    }else if(p.endsWith('.mp4')){
                        var img1 = "<video src='"+ p + "' style='height:300px; max-width:100%;' loop autoplay />";
                        document.getElementById('showNFT').innerHTML =  previous_innerHTML +  img1 + " ";
                    }*/
                    
                })
                
            })
        .catch((error) => {
            // handle your errors here
            console.error(error)
        })
    }   
    
    const signMessage = async (e) => {
        e.preventDefault();

       const pack = await fs1().then(async (message)=>{
            e.preventDefault();
            if (!window.ethereum){
                throw new Error("No crypto wallet found. Please install it.");
            }
            return message1;
        }).then( async (message) =>{
            await window.ethereum.send("eth_requestAccounts");
            
            provider =  await new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const signature = await signer.signMessage(message);
            const address = await signer.getAddress();
            localStorage.setItem('$$NAMESPACE__wallet_address',address);
            await fetchSTU(address);
            document.getElementById('bt1').style.display = "none";
            document.getElementById('bt2').style.display = "inline";
            document.getElementById('ad1').innerHTML = "("+address+") ";
            return {
                message,
                signature,
                address
            };
        })
        .catch ((err)=> {
            alert(err.message);
        });
        return pack;
    }

    const fs1 = async () => {
        await axios.get(baseURL, config)
            .then(async function(response) {
                message1 = response.data;
            })
            .catch(function(error) {
                console.log(error);
                //alert("Error = " + error);
            });
        return message1;
    };

    return (
        <div className="header">
          <div className="logo-nav">
            <div className="logo-container">
              <a href=".">
                <Logo className="logo" />
              </a>
            </div>
            <ul className={click ? "nav-options active" : "nav-options"}>
              <li className="option" onClick={closeMobileMenu}>
                <a href=".">ABOUT</a>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <a href=".">CONTACT</a>
              </li>
              <li className="option" onClick={closeMobileMenu}>
                <a href=".">BLOG</a>
              </li>
              <li className="option mobile-option" onClick={closeMobileMenu}>
                <a href=".">SIGN-IN</a>
              </li>
              <li className="option mobile-option" onClick={closeMobileMenu}>
                <a href="." className="sign-up" >
                  SIGN-UP
                </a>
              </li>
            </ul>
          </div>
          <div className="gap">
            <ul className="signin-up">
              <li id='ad1' >
              </li>
              <li  className="sign-up" >
                <a id='bt1' href="." className="button1" onClick={signMessage}>
                  SIGN IN WITH METAMASK
                </a>
              </li>
              <li className="sign-up" >
                <a id='bt2' href="." className="button1" style={{display:"none"}} onClick={signOut}>
                  SIGN OUT
                </a>
              </li>
            </ul>
          </div>
          
          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <CloseMenu className="menu-icon" />
            ) : (
              <MenuIcon1  />
            )}
          </div>
        </div>
    );
}