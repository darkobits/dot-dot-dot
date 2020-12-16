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
  return randomElement(MESSAGES);
}


/**
 * Provided a delay in milliseconds, returns a function that gets a random
 * message, caches it, and returns it. A new random message will be selected
 * after the provided interval. This method is useful in contexts where a
 * library may be calling getMessage() several times a second (e.g. an
 * interactive logger) but you only want the message to update every second or
 * so.
 */
export function getMessageEvery(ttl: number) {
  if (typeof ttl !== 'number') {
    throw new TypeError(`Expected first argument to be of type "number", got "${typeof ttl}".`);
  }

  let lastUpdated = 0;
  let lastMessage = getMessage();

  return () => {
    if (Date.now() - lastUpdated > ttl) {
      lastMessage = getMessage();
      lastUpdated = Date.now();
    }

    return lastMessage;
  };
}
