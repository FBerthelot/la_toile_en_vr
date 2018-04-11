import React, {Component} from 'react';

import {
	asset,
	Model
} from 'react-vr';

export class Dodge extends Component {
	render() {
		return (
			<Model
				source={{
					obj: asset('dodge/CHALLENGER71.obj'),
					mtl: asset('dodge/CHALLENGER71.mtl')
				}}
				style={{
					width: 5,
					transform: [{rotateX: -90}, {rotateY: 0}, {rotateZ: 90}]
				}}
			/>
		);
	}
}
