import React from 'react';
import {
	AppRegistry,
	asset,
	Pano,
	View
} from 'react-vr';

export default class LaToileEnVR extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render() {
		return (
			<View>
				<Pano source={asset('rond_point.jpg')}/>
			</View>
		);
	}
}

AppRegistry.registerComponent('LaToileEnVR', () => LaToileEnVR);
