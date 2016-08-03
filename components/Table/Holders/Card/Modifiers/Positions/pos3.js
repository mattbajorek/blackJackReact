import pos1 from './pos1';
import pos2 from './pos2';

let pos3 = [];

pos3.push(pos1[0]);
for (let i in pos2) pos3.push(pos2[i]);

module.exports = pos3