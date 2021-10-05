<div id="top"></div>
<p align="center">
    <a href="https://www.npmjs.com/package/reactaccelerometervalue">
        <img src="https://img.shields.io/npm/v/reactaccelerometervalue"
            alt="NPM Package"></a>
    <a href="https://github.com/maheshrao98/React-Accelerometer-Value/blob/main/LICENSE.txt">
          <img src="https://img.shields.io/github/license/maheshrao98/React-Accelerometer-Value"
              alt="License"/></a>
    <a href="https://twitter.com/raomahesh98">
        <img src="https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2Fraomahesh98"
            alt="follow on Twitter"></a>
</p>
<div align="center">
  <h3 align="center">React-Accelerometer-Value</h3>

  <p align="center">
    The most easiest way to obtain the accelerometer and orientation values of your device in React JS.
    <br />
    <br />
    <a href="https://reactaccelerometertest.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/maheshrao98/React-Accelerometer-Value/issues">Report Bug</a>
    ·
    <a href="https://github.com/maheshrao98/React-Accelerometer-Value/issues">Request Feature</a>
  </p>
</div>

This is an improvised version of [React Accelerometer](https://www.npmjs.com/package/react-accelerometer) and almost similar to React Native [Expo Sensor](https://www.npmjs.com/package/expo-sensors) . It will run efficiently in the latest versions of React. I have also made notable changes in the way the accelerometer value is calculated according to the latest [Sensor API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Sensor_APIs). 

## Installation
```js
npm install --save reactaccelerometervalue
// or
yarn add reactaccelerometervalue
```

## Usage
The React-Accelerometer-Value is a parent component with the value of orientation and accelerometer values are passed as children values. Therefore, to obtain the values the best way is to wrap your component that you need the value to display in as a Child component inside the ReactAccelerometerValue.

### In App.js
```js
import React from "react";
import ReactAccelorometerValue from 'reactaccelerometervalue'
import List from './List'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div >
        <ReactAccelorometerValue>
          <List></List>
        </ReactAccelorometerValue>
      </div>
    );
  }
}
export default App
```
### In List.js
```js
import React,{Component} from 'react';

class List extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        console.log(this.props)
        return(
            <div>
                <ul>
                <li>Is it landscape:{this.props.state.landscape.toString()} </li>
                <li>x:{this.props.state.x}</li>
                <li>y:{this.props.state.y}</li>
                <li>z:{this.props.state.z}</li>
                <li>rotation alpha:{this.props.state.rotation.alpha}</li>
                <li>rotation beta:{this.props.state.rotation.beta}</li>
                <li>rotation gamma:{this.props.state.rotation.gamma}</li>
                </ul>
            </div>
        )
    }
}

export default List;
```
<p align="right">(<a href="#top">Back to top</a>)</p>

## Test
```js
npm test
// or
yarnpkg test
```

## Roadmap
- [x] Improvise to support latest React versions
- [ ] Integrate React Motion
- [ ] Build an example app

<p align="right">(<a href="#top">Back to top</a>)</p>

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">Back to top</a>)</p>

## License
Distributed under the MIT License. See [LICENSE.txt](https://github.com/maheshrao98/React-Accelerometer-Value/blob/main/LICENSE.txt) for more information.

<p align="right">(<a href="#top">Back to top</a>)</p>

## Contact

Author - [@raomahesh98](https://twitter.com/raomahesh98) - raomahesh610@gmail.com

Project Link: [https://github.com/maheshrao98/React-Accelerometer-Value](https://github.com/maheshrao98/React-Accelerometer-Value)

<p align="right">(<a href="#top">Back to top</a>)</p>
