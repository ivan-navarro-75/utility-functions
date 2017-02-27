const initials = (name = '') => (
  name
    .split(' ')
    .map(word => `${word.charAt(1).toUpperCase()}.`)
    .join('')
);

export default initials;
