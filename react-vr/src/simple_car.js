import React, {Component} from 'react';

import {
	View,
	Cylinder,
	Box
} from 'react-vr';

export class SimpleCar extends Component {
	render() {
		return (
			<View>
				<Cylinder
					style={{
						color: 'black',
						transform: [
							{rotateX: 90},
							{translateX: -1}
						]
					}}
					radiusTop={0.5}
					radiusBottom={0.5}
					dimHeight={2}
					segments={12}
				/>

				<Cylinder
					style={{
						color: 'grey',
						transform: [
							{rotateX: 90},
							{translateX: 1}
						]
					}}
					radiusTop={0.5}
					radiusBottom={0.5}
					dimHeight={2}
					segments={12}
				/>

				<Box style={{color: 'white', transform: [{translateY: 0.5}]}} dimWidth={4} dimDepth={3} dimHeight={1}/>
				<Box style={{color: 'black', transform: [{translateY: 1.5}]}} dimWidth={3} dimDepth={3} dimHeight={1}/>

			</View>
		);
	}
}
