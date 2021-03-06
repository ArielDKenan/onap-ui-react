import React from 'react';
import Examples from '../utils/Examples.js';

import ReactButton from '../../src/components/Button.js';

import LinkButton from '../../node_modules/onap-ui-common/lib/html/components/button/button-link.html';
import LinkButtonDisabled from '../../node_modules/onap-ui-common/lib/html/components/button/button-link-disabled.html';
import ExtraSmall from '../../node_modules/onap-ui-common/lib/html/components/button/button-link-extra-small.html';
import Small from '../../node_modules/onap-ui-common/lib/html/components/button/button-link-small.html';
import Medium from '../../node_modules/onap-ui-common/lib/html/components/button/button-link-medium.html';
import Large from '../../node_modules/onap-ui-common/lib/html/components/button/button-link-large.html';
import Auto from '../../node_modules/onap-ui-common/lib/html/components/button/button-link-auto.html';

let examples = {
	'Link Default': {
		jsx: <ReactButton btnType='link' onClick={() => {}}>Click Me</ReactButton>,
		html: LinkButton
	},
	'Link Disabled': {
		jsx: <ReactButton btnType='link' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: LinkButtonDisabled,
	},
	'Extra Small': {
		jsx: <ReactButton btnType='link' size='x-small' onClick={() => {}}>Click Me</ReactButton>,
		html: ExtraSmall
	},
	'Small': {
		jsx: <ReactButton btnType='link' size='small' onClick={() => {}}>Click Me</ReactButton>,
		html: Small,
	},
	'Medium': {
		jsx: <ReactButton btnType='link' size='medium' onClick={() => {}}>Click Me</ReactButton>,
		html: Medium
	},
	'Large': {
		jsx: <ReactButton btnType='link' size='large' onClick={() => {}}>Click Me</ReactButton>,
		html: Large,
	},
	'Auto Sizing': {
		jsx: <ReactButton btnType='link' size='default' onClick={() => {}}>Click Me</ReactButton>,
		html: Auto,
	}
};

const DefaultButtons = () => (
	<Examples examples={examples} />
);

export default DefaultButtons;
