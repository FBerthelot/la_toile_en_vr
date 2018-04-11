import React from 'react';
import {
	AppRegistry,
	asset,
	Pano,
	View,
	Sound
} from 'react-vr';

import {SimpleCar} from './src/simple_car';

export default class LaToileEnVR extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<View>
				<Pano source={asset('rond_point.jpg')}>
					<View style={{
						transform: [{translate: [0, -2, -10]}]
					}}
					>
						<SimpleCar/>
						<Sound source={asset('car.wav')} loop volume={7}/>
					</View>
				</Pano>
			</View>
		);
	}
}

AppRegistry.registerComponent('LaToileEnVR', () => LaToileEnVR);
