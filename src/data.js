const colors = [
  '#FC8181',
  '#F6AD55',
  '#F6E05E',
  '#68D391',
  '#4FD1C5',
  '#63B3ED',
  '#7F9CF5',
  '#B794F4',
  '#F687B3',
];

export const firstNames = [
  'Adam',
  'Alex',
  'Aaron',
  'Ben',
  'Carl',
  'Dan',
  'David',
  'Edward',
  'Fred',
  'Frank',
  'George',
  'Hal',
  'Hank',
  'Ike',
  'John',
  'Jack',
  'Joe',
  'Larry',
  'Monte',
  'Matthew',
  'Mark',
  'Nathan',
];

const lastNames = [
  'Anderson',
  'Ashwoon',
  'Aikin',
  'Bateman',
  'Bongard',
  'Bowers',
  'Boyd',
  'Cannon',
  'Cast',
  'Deitz',
  'Dewalt',
  'Ebner',
  'Frick',
  'Hancock',
  'Haworth',
  'Hesch',
  'Hoffman',
  'Kassing',
  'Knutson',
];

const messages = [
  'Can we go to the park.',
  'Where is the black dog? Said the purple bird.',
  'We can make the bird fly away if we jump on something.',
  'We can go down to the store with the dog. It is not too far away.',
  'My big yellow cat ate the little black bird.',
  'I like to read my book at school.',
  'We are going to swim at the park.',
];

export const generateData = (count = 50) =>
  Array(count)
    .fill()
    .map((_, index) => ({
      name:
        firstNames[Math.floor(Math.random() * firstNames.length)] +
        ' ' +
        lastNames[Math.floor(Math.random() * lastNames.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      message: messages[Math.floor(Math.random() * messages.length)],
      key: index,
    }));
