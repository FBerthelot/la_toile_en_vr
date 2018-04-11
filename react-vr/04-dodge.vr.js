import React from 'react';
import {
	AppRegistry,
	asset,
	Pano,
	View,
	Sound
} from 'react-vr';

import {Dodge} from './src/dodge';

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
						<Dodge/>
						<Sound source={asset('dodge.wav')} loop volume={8}/>
					</View>
				</Pano>
			</View>
		);
	}
}

AppRegistry.registerComponent('LaToileEnVR', () => LaToileEnVR);
