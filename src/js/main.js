// const test = require('./test.js');
import { test } from './test';
import '../style/style.sass';

test();

const msg = `This is a test: ${2 + 2}`;

const printMsg = () => {
    console.log( msg );
}

printMsg();
