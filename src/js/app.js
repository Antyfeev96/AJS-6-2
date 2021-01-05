/* eslint-disable one-var */
/* eslint-disable no-param-reassign */
/* eslint-disable object-curly-newline */
export default function getSpecialAttack(obj) {
  const { special } = obj,
    resultArr = [];

  for (const item of special) {
    const { id, name, icon, description = 'Описание недоступно' } = item;
    resultArr.push({ id, name, icon, description });
  }

  return resultArr;
}
