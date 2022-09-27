const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

function generateAccessToken(id) {
    let token = jwt.sign({id: id}, process.env.TOKEN_SECRET, { expiresIn: '1d' });
    return token
}
module.exports = {
  generateAccessToken,  
}