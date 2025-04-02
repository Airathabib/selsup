/**
 * Создание случайного, но не уникального числа, но здесь хватит и этого решения
 * @returns случайное число от 0 до 17-значного
 */

function makeId() {
  const randomNumber = Math.random().toString().slice(2);
  return +randomNumber;
}

export default makeId;
