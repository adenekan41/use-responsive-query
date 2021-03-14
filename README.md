<br />
<p align="center">
	<a href="https://i.ibb.co/b7WjPCP/Group-38.png">
		<img src="https://i.ibb.co/b7WjPCP/Group-38.png" width="260" alt="use-responsive-query">
	</a>
</p>

<p align="center"> An extremely powerful but easy to use hook for listening to media events in React.</p>

<hr / >
<br />

[![npm](https://badge.fury.io/js/use-responsive-query.svg)](https://www.npmjs.com/package/use-responsive-query)

[![NPM](https://nodei.co/npm/use-responsive-query.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/use-responsive-query/)

<br />

### 🔍 [Try out the interactive Demo](https://codesandbox.io/embed/red-tdd-q45p3?fontsize=13&hidenavigation=1&theme=dark) on codesandbox

## ⚡️About

[Urley](https://github.com/adenekan41/use-responsive-query), An extremely
powerful but easy to use hook for listening to media events in React. URQ create
an experience of a javascript like **reactive accomodation** for your react
application.

## ✨ Features

- 🚀 Typescript support
- 📦 Light Weight ~675b (gzipped)
- 🔧 Cross platform supported
- 🙅‍♂️ Zero dependencies
- ✅ Fully tested and reliable
- ⚒ CommonJS, ESM & browser standalone support

## ⬇ Installing [use-responsive-query](https://github.com/adenekan41/use-responsive-query)

### Using NPM

```bash
npm i use-responsive-query
```

### Using Yarn

```bash
yarn add use-responsive-query
```

## 🛠 Usage

Getting familiar with the libary and all you need is to understand how
[media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
works, **URQ** is create with support and flexibility in mind, we have
ochestrated some set of standard screen sizes to make work easier for you.

Here are some few primary ranges you need to get aquantained with.

- `xs`: `320px` Extra small devices (portrait phones, less than 320px)
- `sm`: `320px` Extra small devices (portrait phones, less than 576px)
- `md`: `768px` Small devices (landscape phones, less than 768px)
- `lg`: `992px` Medium devices (tablets, less than 992px)
- `xl`: `1200px` Large devices (desktops, less than 1200px)

```jsx
import useResponsiveQuery from 'use-responsive-query';

export default function App() {
  const isSmallDevices = useResponsiveQuery('md'); // Small devices (landscape phones, less than 768px)

  return (
    <div className="App">
      {isSmallDevices && <h1>Hello Use responsive query</h1>}
      <h2>Start hacking!!! (see changes up)</h2>
    </div>
  );
}
```

just like that very easy and staight forward. Easy right ?, we are also created
accomodative access for you so you can write your raw query wiht **URQ** like
this.

```jsx
import useResponsiveQuery from 'use-responsive-query';

export default function App() {
  const isMin300 = useResponsiveQuery('(min-width: 300px)'); // a truthy value is called immediately our window matches this value

  return (
    <div className="App">
      {isMin300 && <h1>Hello Use responsive query</h1>}
      <h2>Start hacking!!! (see changes up)</h2>
    </div>
  );
}
```

Moreover, we call this pacakage the most flexible and easy to libary and we say
that with every use case and intent in mind, if you are wondering how you can
create your own custom config for your team here is how.

## 🔧 Creating your own config

**URQ** give you a creative option to modify your default primary media ranges
and lets you created a unique configuration access for your team.

```jsx
import useResponsiveQuery from 'use-responsive-query';

const config = {
  sm: '400px',
};

export default function App() {
  const isSmall = useResponsiveQuery('sm', config); // a truthy value is called immediately our window matches <400px

  return (
    <div className="App">
      {isSmall && <h1>Hello Use responsive query</h1>}
      <h2>Start hacking!!! (see changes up)</h2>
    </div>
  );
}
```

MIT © [codewonders.dev](https://codewonders.dev) &nbsp;&middot;&nbsp; GitHub
[@adenekan41](https://github.com/adenekan41) > &nbsp;&middot;&nbsp;
