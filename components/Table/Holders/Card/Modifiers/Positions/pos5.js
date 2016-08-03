import pos1 from './pos1';
import pos4 from './pos4';

let pos5 = [];

pos5.push(pos1[0]);
for (let i in pos4) pos5.push(pos4[i]);

module.exports = pos5