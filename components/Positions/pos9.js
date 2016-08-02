import pos1 from './pos1';
import pos9and10 from './pos9and10';

let pos9 = [];

pos9.push(pos1[0]);
for (let i in pos9and10) pos9.push(pos9and10[i]);

module.exports = pos9