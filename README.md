# vue-locale

## Installation

`$ npm install vue-locale --save`

## Setup

```js
var Vue = require('vue');
var Locale = require('vue-locale');

var locales = {
    "en": require("./locale/en.json"),
    "nl": require("./locale/nl.json")
}

Vue.use(Locale, {lang: 'en', locales: locales})
```

Where `en.json` is defined as:

```js
{
  "hello": "World {0} {1}",
  "messages": "You have {0} {1} messages",
}
```


## Usage

In HTML:

```html
<p>Hello {{$lang.hello}}</p>
<p>{{$lang.messages | replace 5 "new"}}</p>
```

Result:

```html
<p>Hello World</p>
<p>You have 5 new messages</p>
```


Change Language (reactive)
```js
Vue.$setLang("nl")
```
Or
```js
this.$setLang("nl")
```
