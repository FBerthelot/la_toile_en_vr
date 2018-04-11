import React from 'react';
import {shallow} from 'enzyme';

import Sessions from './index';

describe('page /session', () => {
	it('should use the redux provider', () => {
		const index = shallow(<Sessions/>);
		expect(index.text()).toBe('<Provider />');
	});
});
