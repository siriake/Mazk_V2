import "./Banner1.css";
import * as THREE from 'three';

import ReactDOM from "react-dom";
import React, { Component } from "react"; 

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { HDRCubeTextureLoader } from 'three/examples/jsm/loaders/HDRCubeTextureLoader.js';
import { DebugEnvironment } from 'three/examples/jsm/environments/DebugEnvironment.js';
import { ColorSpaceNode, MeshStandardNodeMaterial } from 'three/examples/jsm/nodes/Nodes.js';

var renderer = new THREE.WebGLRenderer({alpha:true, antialias:true});
var camera = new THREE.PerspectiveCamera(70,window.innerWidth/window.innerHeight,0.01,1000);
var pX = 0;
var pY = 0;
var obj1;
var nv = 1;
class Banner1 extends Component {
  componentDidMount() {
    var scene = new THREE.Scene();
    
    var w = window.innerWidth;
    var h = window.innerHeight;
    renderer.setSize(w, h);
    renderer.setClearColor( 0x000000, 0 )
    renderer.physicallyCorrectLights = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMappingExposure = 4;
    this.mount.appendChild(renderer.domElement);

    let container, stats;
    let generatedCubeRenderTarget, ldrCubeRenderTarget, hdrCubeRenderTarget, rgbmCubeRenderTarget;
    let ldrCubeMap, hdrCubeMap, rgbmCubeMap;

    const hdrUrls = [ 'px.hdr', 'nx.hdr', 'py.hdr', 'ny.hdr', 'pz.hdr', 'nz.hdr' ];
    hdrCubeMap = new HDRCubeTextureLoader()
            .setPath( 'hdr1/' )
            .setDataType( THREE.UnsignedByteType )
            .load( hdrUrls, function () {
              //hdrCubeRenderTarget = pmremGenerator.fromCubemap( hdrCubeMap );
              hdrCubeMap.magFilter = THREE.LinearFilter;
              hdrCubeMap.needsUpdate = true;
            } );

    const loader = new GLTFLoader();
    loader.load("lo3.glb",(gltf) => {
      obj1 = gltf.scene;
      obj1.traverse((node)=>{
        if (node.isMesh) node.material.envMap = hdrCubeMap;
      });
      scene.add( gltf.scene );
      obj1.scale.set(0,0,0);
    }, 
    function ( xhr ) {
      //alert(xhr.total);
      console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    function ( error ) {
      console.log( 'An error happened' );
    }
    );
    //scene.background = hdrCubeMap;// new THREE.Color(0xffffff);
    var light = new THREE.HemisphereLight(0xffffff,0x000000,10);
    scene.add(light);
      
    camera.position.set(0,-0.2,10);
    var s = 0;
    var tt = 0;
    var animate = function () {
      requestAnimationFrame( animate );
      if(obj1){
        obj1.rotation.y += nv/100;
        obj1.scale.set(s,s,s);
      }
      if(tt <= 90) {
        tt += .7;
        s = Math.sin(tt * .0174);
      }
      renderer.render( scene, camera );
    };
    animate();

    var bannerDiv = document.getElementById('banner');
    bannerDiv.addEventListener('mousemove',function(e){
      var d = e.clientX - pX;
      obj1.rotation.y += d/500;
      
      if(d < -3){
        nv = -1
      }else if(d > 3){ 
        nv = 1
      }
      
      obj1.rotation.x = (e.clientY - 350 )/750;
      pX = e.clientX ;
      pY = e.clientY ;
    });
    bannerDiv.addEventListener('mouseenter',function(e){
      pX = e.clientX ;
      pY = e.clientY ;
    });
  }

  render() {
    return (
      <div id='banner' ref={ref => (this.mount = ref)}>
      </div>
    )
  }
}
export default Banner1;

window.addEventListener('resize', function(e) {
  var w = window.innerWidth;
  var h = window.innerHeight;
  renderer.setSize(w,h);
  camera.aspect = w/h;
  camera.updateProjectionMatrix();
});