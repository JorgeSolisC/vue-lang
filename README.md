# vue-lang

## Installation

```
$ npm install vue-lang --save
```

## Setup

```js
var Vue = require('vue');
var Lang = require('vue-lang');

var locales = {
  "en": require("./locale/en.json"),
  "nl": require("./locale/nl.json")
}

Vue.use(Lang, {lang: 'en', locales: locales})
```

Where `en.json` is defined as:

```js
{
  "hello": "World",
  "messages": "You have {0} {1} messages",
}
```


## Usage

### Language output

```html
<p>Hello {{$lang.hello}}</p>
<p>{{$lang.messages | replace countmsg "new"}}</p>
```

With:

```js
{
  "data": {
    "countmsg": 5
  }
}
```

Results in:

```html
<p>Hello World</p>
<p>You have 5 new messages</p>
```


### Change Language (reactive)

```js
Vue.$setLang("nl")
this.$setLang("nl")
```

### Available Languages

```html
<ul>
  <li v-for="lang in $langs" @click="$setLang(lang)">{{lang}}</li>
</ul>
```

### Parse Path (Reactive) (TODO)

```html
<p>Hello {{$l('cities.amsterdam'}}</p>
```

## Credits

[@Haixing-Hu](https://github.com/Haixing-Hu/)
