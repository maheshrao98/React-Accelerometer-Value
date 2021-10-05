import React,{Component, cloneElement, Children } from 'react'

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
      landscape: false
    };
  };

  componentDidMount(){
    this.handleOrientation();
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
      DeviceMotionEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            window.addEventListener('devicemotion', this.handleOrientation);
          }
        })
        .catch(console.error);
    } else {
      // handle regular non iOS 13+ devices
      window.addEventListener('devicemotion', this.handleAcceleration);
    }
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      DeviceOrientationEvent.requestPermission()
        .then(permissionState => {
          if (permissionState === 'granted') {
            window.addEventListener('deviceorientation', this.handleOrientation);
          }
        })
        .catch(console.error);
    } else {
      // handle regular non iOS 13+ devices
      window.addEventListener('orientationchange', this.handleOrientation);
    }
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
    return (
        <div>
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