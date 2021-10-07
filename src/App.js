import React,{Component, cloneElement, Children } from 'react'
import './App.css';

class ReactAccelorometerValue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      z: 0,
      rotation: {
        alpha: 0,
        beta: 0,
        gamma: 0
      },
      landscape: false,
      noaccess: false
    };
  };

  componentDidMount(){
    this.handleOrientation();
    if (typeof DeviceMotionEvent.requestPermission === 'function' || typeof DeviceOrientationEvent.requestPermission === 'function') {
      this.setState({noaccess:true})
      window.addEventListener('orientationchange', this.handleOrientation);
    } else {
      // handle regular non iOS 13+ devices
      window.addEventListener('devicemotion', this.handleAcceleration);
      window.addEventListener('orientationchange', this.handleOrientation);
    }
  }

  handleSubmit = () => {
    console.log("hello")
    window.DeviceMotionEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          window.addEventListener('devicemotion', this.handleOrientation);
          this.setState({noaccess:false})
        }
      })
      .catch(console.error);
  }

  componentWillUnmount(){
    window.removeEventListener('devicemotion', this.handleAcceleration);
    window.removeEventListener('orientationchange', this.handleOrientation);
  }

  handleOrientation = () => {
    var orientation = window.orientation;
    this.setState({ landscape: orientation === 90 || orientation === -90 });
  }

  handleAcceleration = (event) => {
    var landscape = this.state.landscape;
    var acceleration = event.accelerationIncludingGravity;
    var rotation = event.rotationRate || 0;
    var x = acceleration.x;
    var y = acceleration.y;
    var z = acceleration.z;
    this.setState({
      rotation: rotation,
      x: landscape ? y : x,
      y: landscape ? x : y,
      z: z,
      landscape: this.state.landscape
    });
  }

  render() {
    const renderBanner = () => {
      if(this.state.noaccess) {
        return (
          <div className="DeviceMotionRequestBanner">
            <form onSubmit={this.handleSubmit}>
              <h3>Enable DeviceMotion on your device?</h3>
              <p>This app requires you to enable the DeviceMotion event on yout device.</p>
              <div style={{position:"relative",zIndex:"1"}}>
                <button className="DeviceMotionRequestButton">Enable</button>
              </div>
            </form>
          </div>
        )
      }
    }

    return (
        <div>
        {renderBanner()}
        {
            Children.map(this.props.children, child => {
                return cloneElement(child, { state: this.state });
            })
        }
        </div>
    );
  }
}

export default ReactAccelorometerValue;