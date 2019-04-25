import {MESSAGES} from 'etc/constants';


/**
 * Provided an array of T, returns a T selected at random.
 */
function randomElement<T = any>(xs: Array<T>): T {
  return xs[Math.floor(Math.random() * xs.length)];
}


/**
 * Returns a random message.
 */
export default function getMessage() {
  return `${randomElement(MESSAGES)}...`;
}
