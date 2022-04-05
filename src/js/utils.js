export function getLastKeyInObject(object) {
  const keys = Object.keys(object);

  return keys[keys.length - 1];
}