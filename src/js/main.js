import fieldValue from './fieldValue';

import '../style/style.sass';

let app = [
	new fieldValue()
];

app.forEach( module => module.init() );
