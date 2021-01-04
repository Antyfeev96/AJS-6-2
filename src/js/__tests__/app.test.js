/* eslint-disable object-curly-newline */
/* eslint-disable no-param-reassign */
test('Object should be restructed', () => {
  const takeInfo = jest.fn(({ id, name, description, icon }) => {
    if (!description) {
      description = 'Описание недоступно';
    }
    const obj = {
      id,
      name,
      description,
      icon,
    };
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
  });

  takeInfo({
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
    description: 'Двойной выстрел наносит двойной урон',
  });

  expect(takeInfo).toHaveReturnedWith([{ id: 8 },
    { name: 'Двойной выстрел' },
    { description: 'Двойной выстрел наносит двойной урон' },
    { icon: 'http://...' },
  ]);
});

test('Description should be hidden', () => {
  const takeInfo = jest.fn(({ id, name, description, icon }) => {
    if (!description) {
      description = 'Описание недоступно';
    }
    const obj = {
      id,
      name,
      description,
      icon,
    };
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
  });

  takeInfo({
    id: 8,
    name: 'Двойной выстрел',
    icon: 'http://...',
  });

  expect(takeInfo).toHaveReturnedWith([{ id: 8 },
    { name: 'Двойной выстрел' },
    { description: 'Описание недоступно' },
    { icon: 'http://...' },
  ]);
});

// По этому заданию актуален вопрос с jest.fn, насколько я понимаю, это мока
// выходит, что сначала я пишу функцию в файле, а потом пишу её еще раз в тесте,
// мне кажется, что такой подход это много лишнего кода, существует ли способ без моки?
// чтобы просто тест смотрел сразу на файл и видел, какое значение возвращается, я что в первом
// задании, что во втором из-за этого воспринимаю моё решение как костыль... Без jest.fn при
// импорте функции и обращении к ней получал постоянно ответ от jest, что нужно юзать mock, поэтому
// реализация получилась такая, какая она есть.
// Еще в этом задании проверка на покрытие тоже пустое, так что думаю это как раз из-за этого, если
// функция не проверяется, то и покрывать нечего, так ли это и как это исправить?
// Еще проблема в том, что порядок свойств почему то меняется и description c icon меняются местами,
// является ли это ошибкой и если да, то как это исправить?
// Еще линтер ругался на то, что я присваиваю в description значение, если оно undefined и на то,
// что свойство объекта начинается не с новой строки, там, где это не влияет на визуальное удобное
// восприятие я поправил, но, например в объявлении аргументов jest.fn это, на мой взгляд, только
// мешает восприятию, поэтому эти 2 ошибки я добавил в игнор, важно ведь не только соблюдение
// линтера, но и внешнее восприятие для разработчиков?
