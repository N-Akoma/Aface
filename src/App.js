import React, {Component} from 'react';
import Navigation from './component/Navigation/Navigation';
import FaceRcognition from './component/FaceRcognition/FaceRcognition';
import Logo from './component/Logo/Logo';
import ImageLinkForm from './component/imageLinkForm/ImagelinkForm';
import Rank from './component/Rank/Rank';
import Signin from './component/Signin/Signin';
import Register from './component/Register/Register'
import Particles from 'react-particles-js';
import Clarifai  from 'clarifai';
import './App.css';
import 'tachyons';

const app = new Clarifai.App({
  apiKey: '9310bd34352d47cfb9fdba71315db6b5'
});

const ParticlesOption = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
    }
  }

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box:{},
      route: 'signin',
      isSignedIn: false
    }
  }

  // componentDidMount() {
  //   fetch('http://localhost:3001/')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }

calculateFacelocaion =(data) =>{
  const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
  const image = document.getElementById('inputimage');
  const width = Number(image.width);
  const height = Number(image.height);
  return {
    leftCol: clarifaiFace.left_col * width,
    topRow: clarifaiFace.top_row * height,
    rightCol: width - (clarifaiFace.right_col * width),
    bottomRow: height - (clarifaiFace.bottom_row * height)
  }
}

displayFaceBox = (box) => {
  this.setState({box: box})
}

onButtonSumbit = (event) =>{
  this.setState({imageUrl: this.state.input})
  app.models
  .predict(
    Clarifai.FACE_DETECT_MODEL, 
  this.state.input)
  .then(response =>this.displayFaceBox(this.calculateFacelocaion(response)))
    .catch(err => console.log(err))
}

onRouteChange = (route) =>{
  if(route === 'signout'){
    this.setState({isSignedIn: false})
  }else if(route === 'Home'){
    this.setState({isSignedIn: true})
  }
  this.setState({route: route})
}

onInputChange =(event) =>{
  this.setState({input:event.target.value})
}

  render(){
   const {isSignedIn, imageUrl, route, box} = this.state;
  return (
    <div className="App">
      <Particles className='particles'
     params = {ParticlesOption} 
     />
     <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
    { this.state.route === 'Home' 
     ? <div> 
     <Logo />
    <Rank />
    <ImageLinkForm 
    onInputChange={this.onInputChange} 
    onButtonSumbit={this.onButtonSumbit}/>
     <FaceRcognition box={box} imageUrl={imageUrl} />
     </div> 
     :(
       route === 'signin'
     ? <Signin onRouteChange={this.onRouteChange} />
     : <Register onRouteChange={this.onRouteChange} />
      )   
      
    }
    </div>
  );
  }
}

export default App;
