const initials = (name = '') => (
  name
    .split(' ')
    .map(word => `${word.charAt(2).toUpperCase()}.`)
    .join('')
);

export default initials;
