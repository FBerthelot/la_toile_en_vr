import React from 'react';
import {
	AppRegistry,
	asset,
	View,
	Sound,
	VrButton,
	Sphere
} from 'react-vr';

import {Dodge} from './src/dodge';
import Walk from './src/walk';

export default class LaToileEnVR extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			carPositionX: -2,
			buttonColor: 'yellow'
		};
	}

	moveCar(newXPos) {
		this.setState({
			carPositionX: newXPos
		});
	}

	render() {
		return (
			<View>
				<Walk panoSource={asset('rond_point.jpg')}>
					<View style={{
						transform: [{translate: [this.state.carPositionX, -2, -10]}]
					}}
					>
						<Dodge/>
						<Sound source={asset('dodge.wav')} loop volume={4}/>
					</View>

					<VrButton
						style={{transform: [{translate: [9.5, 9, -40]}]}}
						onEnter={() => this.moveCar(this.state.carPositionX + 1)}
						onClick={() => this.moveCar(this.state.carPositionX - 1)}
					>
						<Sphere
							onEnter={() => this.setState({buttonColor: 'red'})}
							onExit={() => this.setState({buttonColor: 'yellow'})}
							style={{color: this.state.buttonColor}}
							radius={2}
							widthSegments={20}
							heightSegments={12}
						/>
					</VrButton>
				</Walk>
			</View>
		);
	}
}

AppRegistry.registerComponent('LaToileEnVR', () => LaToileEnVR);
