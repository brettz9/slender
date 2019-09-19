<script>
/* globals jml */
/* eslint-disable object-curly-spacing, jsdoc/require-jsdoc */
let count = 0;

function handleClick () {
  count += 1;
}

jml('button', {$on: {click: handleClick}}, [
  `Clicked ${count} ${count === 1 ? 'time' : 'times'}`
]);
</script>

<button on:click={handleClick}>
	Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
