# slender

A humble proposal (possible future project?) for alternative syntaxes for [svelte](https://github.com/sveltejs/svelte).

The example [here](./reactive.svelte) is taken from <https://svelte.dev/examples#each-blocks>
and is a reference for the other alternative formats mentioned below.

## Rationales for overhaul of the current syntax

Svelte's use of compilation to provide [performant reactivity](https://svelte.dev/blog/svelte-3-rethinking-reactivity) is quite appealing.

However, from my perspective, there are a few (solvable) deficiencies related to the choice of syntax.

While a rewrite or abstraction of the syntax component of svelte could be avoided by compiling from some other language into svelte, this would of course increase compilation time. So, I would like to offer this proposal as something that svelte might consider themselves integrating given what I feel are compelling advantages for change, even if I also know the current syntax already has its own momentum in terms of adoption and development effort.

### Non-standard syntax and vocabulary

For newcomers to be able to jump quickly into a new framework (and ultimately help adoption), it helps tremendously if the syntax and/or the vocabulary of the API is not new and leverages what the user is already familiar with.

And use of a standard syntax can also help with tooling reuse.

While svelte does use an HTML-like syntax, and uses a kind of syntax favored by templating engines, it is nevertheless not standard, and comes with its own built-in vocabulary which covers the same ground as alternative standard terms (e.g., `each` in place of the more widespread `forEach` (or `map`)) along with non-standard syntax.

Any new syntax or vocabulary ought to have compelling reasons, e.g., a syntax which is more readable or a vocabulary which saves a lot of steps. Even with the latter (and with svelte's compilation avoiding adding unused vocabulary), it may nevertheless be more appealing to newcomers if the vocabulary is provided as an optional library (imported through the same mechanisms as any other web libraries), and not seen as something custom that must be mastered.

A non-standard syntax also does nothing to encourage designers to better learn standards and their vocabulary, as would choice of a standard syntax.

### Aesthetics (angular brackets and closing tags)

1. Angled brackets are ugly. Who wants to buy a boxy car? Looking at code should be liberating.
1. Closing tags violate DRY principles. They are especially unnecessary when using any respectable IDE which can allow jumping to matching brackets (and the fact that one typically adds indentation to clarify ending). Any use closing tags may be seen to have in clarifying what tag is ending a section is overridden by the fact that in using them, one is distracted by the total noise they add--as with static typing, and code folding and less distraction can allow one to be reminded of the block one is in anyways. LESS IS MORE. (And tools could provide ways for showing the context if users still wanted the information.)

One may argue that svelte's pseudo-HTML can give at least some kind of HTML preview when the raw files are viewed in a browser, for example, but this doesn't provide that strong of an argument:

1. The syntax may not be completely valid HTML.
1. The additional templating directives, e.g., to iterate over an array to build an HTML list, especially if not enhanced to indicate sample values, will not show as normal HTML anyways.
1. HTML previewing can be built for other syntaxes.

## Rationales for using a JavaScript/JSON syntax

JSON/JavaScript in contrast is:

1. More aesthetically pleasing in using a JSON/JavaScript syntax (by use of curly or square brackets, without closing tags)
1. A ubiquitous standard, and with ES6+ in particular, the vocabulary, e.g., array extras, are increasingly being enriched.
1. Of use to designers, so its use encourages designers to learn and leverage more of its features, with less to learn, and more instruction available in the community. While designers can and typically should limit themselves to design logic within JavaScript templating as with other forms of templating, when used as the syntax, it is less of a stretch for designers to pick up some of JavaScript's other powerful and ubiquitous, well-documented syntax and of use beyond templates.

See [here](./reactive.js) for a JavaScript/JSON example (using [Jamilih](https://github.com/brettz9/jamilih/)).

## Considerations for more minimalist derivatives

The one compelling use case for facilitating use of a new syntax is if it is more succinct at being expressive.

This is particularly true if the syntax merely omits or makes optional redundant features, as this does little to add to the memory burden on new users.

In looking at JSON/JavaScript as a templating option (embodied by the likes of [Jamilih](https://github.com/brettz9/jamilih/) or [JsonML](http://www.jsonml.org/)), we can envisage alternative syntaxes which omit the need for some of JSON's redundant features, such as commas after items within arrays or object keys. Some examples are [Hjson](https://hjson.org/), [RJSON](http://www.relaxedjson.org/), and [SJSON](http://help.autodesk.com/view/Stingray/ENU/?guid=__stingray_help_managing_content_sjson_html). I provide a sample in this repository of [another simplified JSON variant](./reactive.sjson) (without a supporting parser currently), and which also allows embedding of evaluable JavaScript (and use of the simplified JSON within evaluable JavaScript).

To be fair, however, we might also consider simplified versions of HTML to see if they can be adapted to positive use. Markdown admittedly offers some advantages here in that it is generally more aesthetically pleasing, is in widespread use as its own kind of standard, and even more succinct than JSON/JavaScript. However, as per [our example Markdown file](./reactive.md), use of Markdown actually fits nicely here too, through the embedding of JavaScript (as opposed to the custom svelte syntax) in the handling of template logic--logic which can in turn add its own Markdown, JSON/JavaScript, or simplified JSON/JavaScript, in place of HTML strings.

Such a use of Markdown--in leveraging fenced code blocks for evaluation of JavaScript instead of used for documenting JavaScript--also has the advantage of being viewable outside-of-the-box, even with syntax highlighting.
