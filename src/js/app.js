/* eslint-disable no-param-reassign */
/* eslint-disable object-curly-newline */
const takeInfo = ({ id, name, description, icon }) => {
  if (!description) {
    description = 'Описание недоступно';
  }
  const obj = { id, name, description, icon };
  const arr = [];
  for (const prop in obj) {
    // eslint-disable-next-line no-prototype-builtins
    if (obj.hasOwnProperty(prop)) {
      const objToSort = {
        [prop]: obj[prop],
      };
      arr.push(objToSort);
    }
  }
  return arr;
};

takeInfo({
  id: 8,
  name: 'Двойной выстрел',
  icon: 'http://...',
  description: 'Двойной выстрел наносит двойной урон',
});
