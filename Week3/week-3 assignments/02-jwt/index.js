const jwt = require('jsonwebtoken');
const zod = require('zod');

const jwtPassword = 'secret';

/**
 * Defines the validation schema using zod
 */

const userSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(6)
});

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 8 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {
  try {
    // Validate the input using zod
    userSchema.parse({ username, password });

    // Generate the JWT if validation passes
    const token = jwt.sign({ username }, jwtPassword);
    return token;
  } catch (error) {
    // Return null if validation fails
    return null;
  }
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
  try {
    jwt.verify(token, jwtPassword);
    return true;
  } catch (err) {
    return false;
  }
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
  try {
    const decoded = jwt.decode(token);
    const username = decoded.username;
    return true
  } catch (err) {
    return false;
  }
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
