import React, {Component} from 'react';

import {
	asset,
	Model
} from 'react-vr';

export class Bugatti extends Component {
	render() {
		return (
			<Model
				source={{
					obj: asset('bugatti/bugatti.obj'),
					mtl: asset('bugatti/bugatti.mtl')
				}}
				style={{
					transform: [{rotateY: 90}]
				}}
			/>
		);
	}
}
