<template>
  <div>
    <section class="">
      <h2
        class="lg:text-2xl text-lg font-bold underline underline-offset-8 decoration-2"
      >
        Contact me
      </h2>
      <br />
      <p class="lg:text-lg text-sm text-justify leading-6">
        &nbsp;&nbsp;&nbsp;&nbsp; Have an idea you want it to become a reality? I
        can make it happen for you! Don't feel hesitated to contact me, I will
        be responding to your messages as soon as possible.
      </p>
    </section>
    <section
      class="divCenter pt-5 8xl:ml-[-70rem] 7xl:ml-[-55rem] 6xl:ml-[-20rem] 5xl:ml-[-10rem] 4xl:ml-[-5rem] 3xl:ml-[-2rem] xl:mr-[40rem] lg:mr-[27rem] md:mr-[15rem] sm:ml-[0rem] ml-[3rem] flex flex-col w-full"
    >
      <div id="Contact_ThreeContainer" class="-mt-10 pl-20 hidden"></div>
    </section>
    <section class="pt-5">
      <p class="lg:text-lg text-sm text-justify leading-6">
        You can reach me by emailing me at
        <strong>aaronlyn88@gmail.com</strong>. I will be able to reply to your
        mail within 2 days of working days.
      </p>
    </section>
    <br />
    <section class="">
      <p class="lg:text-lg text-sm text-justify leading-6">
        You can visit my
        <strong class="underline"
          ><router-link to="/work">portfolio</router-link></strong
        >
        to view my works. Alternatively, you can visit my
        <strong class="underline"
          ><a href="https://github.com/Kuon-dev">Github Profile</a></strong
        >
        to view my projects posted on Github
      </p>
    </section>
  </div>
</template>

<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

export default {
	mounted() {
		/*
        console.clear()
    	//const scene = new THREE.Scene();
		// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
		const camera = new THREE.PerspectiveCamera( 75, 2, 0.1, 1000 );
		camera.position.x = 30;
		camera.position.y = 20;
		camera.position.z = -25;

		//loader
		// const dracoLoader = new DRACOLoader();
		// dracoLoader.setDecoderPath( 'js/libs/draco/gltf/' );

		const loader = new GLTFLoader()
		// loader.setDRACOLoader( dracoLoader );
		loader.load( './src/assets/contact_me/scene.gltf', function ( gltf ) {
		// loader.load( './src/assets/room/scene.gltf', function ( gltf ) {
			const model = gltf.scene;
			model.traverse( function ( child ) {
				if ( child.isMesh) {
					child.castShadow = true;
					child.receiveShadow = true;
				}
			})
			// position the model from the camera
			model.position.set( 5, 0, 0 );
			model.scale.set( 0.25, 0.25, 0.25 ); //model size
			scene.add( gltf.scene );

		}, undefined, function ( error ) {
			console.error( error );
		} );

		// const renderer = new THREE.WebGLRenderer();
		// renderer.setSize( window.innerWidth, window.innerHeight );

		// add to HTML viewer
		// const container = document.body;
		const container = document.getElementById( '' );
		//container.appendChild( renderer.domElement ); // may need to change to append this on the right element


		// three js renderer and size on the element
		const renderer = new THREE.WebGLRenderer( { antialias: true }, { alpha: true }  );
			renderer.setPixelRatio( window.devicePixelRatio );
			// renderer.setSize( window.innerWidth, window.innerHeight );
			renderer.outputEncoding = THREE.sRGBEncoding;
			renderer.setSize( 600, 600/2) // size
			renderer.shadowMap.enabled = true;
			renderer.shadowMap.type = THREE.PCFSoftShadowMap;
			container.appendChild( renderer.domElement );
			renderer.setClearColor( 0x000000, 0 ); // set transparent bg
			renderer.physicallyCorrectLights = true;

		// attempt to add sadows
		const pmremGenerator = new THREE.PMREMGenerator( renderer );

			const scene = new THREE.Scene();
			// scene.background = new THREE.Color( 0xbfe3dd );
			// scene.environment = pmremGenerator.fromScene( new RoomEnvironment(), 5 ).texture;

		const ambientLight = new THREE.AmbientLight( 0xF4E99B, 1)
		scene.add( ambientLight );

		// lightning and casting shadows
		const light = new THREE.DirectionalLight( 0xFFE3AC, 2)
			light.position.set(30, 50, -105);
			light.target.position.set(5, 0, 0);
			light.castShadow = true;

			light.shadow.mapSize.width = 512; // default
			light.shadow.mapSize.height = 512; // default
			// light.shadowCameraLeft = -30;
			// light.shadowCameraRight = 30;
			// light.shadowCameraTop = 35;
			// light.shadowCameraBottom = -30;
			scene.add( light );
			scene.add( light.target )

		// helpers
		const controls = new OrbitControls(camera, renderer.domElement) // allow users to view around the model
			// controls.enablePan = false;
			controls.enableDamping = true; // adds a physic effect of "inertia" when spinning camera
			controls.maxPolarAngle = (Math.PI/2) - 0.3; // don't let user view below the ground, 0.3 is slightly above the base level
			controls.minDistance = 40; // don't let user zoom too close
			controls.maxDistance = 40;  // don't let user zoom too far away
            controls.minAzimuthAngle = 1.5; // radians
            controls.maxAzimuthAngle = (Math.PI); // radians; // radians            
			controls.enableRotate = true;
			controls.rotateSpeed = 0.1; // set rotation speed of the mouse

			controls.autoRotateSpeed = 1.5; // 30 seconds per orbit when fps is 60

		// grid helper
		const gridHelper = new THREE.GridHelper(200, 50) // add a grid 
		// light helper
		const helper = new THREE.DirectionalLightHelper( light, 5 );
		// scene.add( gridHelper );
		// scene.add( helper );
		
		// responsive design
		window.onresize = function () {
		const width = window.innerWidth/2;
		const height = window.innerHeight/2;
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( width, height );
		}
		// trigger a resize on load 
		window.onload = function () {
			const width = window.innerWidth/2;
			const height = window.innerHeight/2;
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize( width, height );
		}

		function animate() {
			requestAnimationFrame( animate );

			// cube.rotation.x += 0.01;
			//cube.rotation.y += 0.01;
			controls.update();
			renderer.render( scene, camera );
		};
		animate();

		// setup loading page
		*/
	},
};
</script>

<style>
hr {
  border-color: var(--text);
}
</style>
