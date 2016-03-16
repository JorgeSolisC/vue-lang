# vue-lang

## Installation

`$ npm install vue-lang --save`

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

```js
{
    data: {
        countmsg: 5
    }
}
```

```html
<p>Hello {{$lang.hello}}</p>
<p>{{$lang.messages | replace countmsg "new"}}</p>
```

Result:

```html
<p>Hello World</p>
<p>You have 5 new messages</p>
```


Change Language (reactive):

```js
Vue.$setLang("nl")
this.$setLang("nl")
```

Available Languages:

```html
<ul>
  <li v-for="lang in $langs">{{lang}}</li>
</ul>
```
