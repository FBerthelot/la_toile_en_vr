import React from 'react';
import {
	AppRegistry,
	asset,
	Pano,
	View
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
					</View>
				</Pano>
			</View>
		);
	}
}

AppRegistry.registerComponent('LaToileEnVR', () => LaToileEnVR);
