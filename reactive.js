/* eslint-disable object-curly-spacing, implicit-arrow-linebreak */
/* globals jml */
const cats = [
  { id: 'J---aiyznGQ', name: 'Keyboard Cat' },
  { id: 'z_AbfPXTKms', name: 'Maru' },
  { id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
];

jml(
  'h1', [
    'The Famous Cats of YouTube'
  ],
  'ul', cats.map(({id, name}, i) =>
    ['li', [
      ['a', {target: '_blank', href: `https://www.youtube.com/watch?v=${id}`}, [
        `${i + 1}: ${name}`
      ]]
    ]])
);
