const jwt = require('jsonwebtoken');

const secret = 'uAbyIc';
const payload = {
  ownerName: 'Anand Kumar Jha',
  rollNo: '1JS21CS023',
  ownerEmail: 'anandkrishnajha07@gmail.com',
};

const token = jwt.sign(payload, secret, { expiresIn: '1h' });

console.log('Generated Token:', token);
