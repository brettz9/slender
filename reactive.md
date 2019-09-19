# The Famous Cats of YouTube

```js
mdLines(cats.map(({id, name}, i) =>
  `* [${i + 1}: ${name}](https://www.youtube.com/watch?v=${id}){:target="_blank"}`
));
```
