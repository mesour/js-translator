[![NPM version](https://img.shields.io/npm/v/domain-translator.svg?style=flat-square)](http://badge.fury.io/js/domain-translator)

# Domain translator

JavaScript translator with plural forms support written in ES6.

## Installation

```
$ npm install domain-translator
```

## Dictionary

```
var dictionary = {
    'en': {
        projectName: 'Trees',
        trees: {
            appleTree: {
                title: 'Apple tree',
                fruits: {
                    title: 'Some apple|Some %count% apples',
                }
            }
        }
    }
};
```

## Usage

```
var translator = new mesour.Translator({
    language: 'en',
    dictionary: dictionary
});

var projectName = translator.translate('projectName');    // output: Trees
var message = translator.translate('trees.appleTree.title');    // output: Apple tree
```

## Using DomainTranslator

Can use `DomainTranslator` to shorten keys.
 
```
var domainTranslator = translator.domain('trees.appleTree');

var title = domainTranslator.translate('title');    // output: Apple tree
```

And use method domain again on `domainTranslator`:

```
var domainTranslatorFruits = domainTranslator.domain('fruits');

var title = domainTranslatorFruits.translate('title');    // output: Some apple
```

## Plural forms

There is already registered 138 plural forms and you can find list of them on [this](http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html)
site. If you will miss some language, wrote issue or register it by your own.

```
translator.addPluralForm(
	'en',               // language code
	2,                  // total count of plural forms for this language
	'(n===1) ? 0 : 1'   // decision code. In "n" variable is count of items and it says that if it is 1 item, first (0) form will be used, otherwise second form
);
```

For comparing, here is example of czech plural forms.

```
translator.addPluralForm(
	'cs',
	3,
	'(n===0) ? 2 : ((n===1) ? 0 : ((n>=2 && n<=4) ? 1 : 2))'
);
```

Now we have to add plural forms to our dictionary.

```
{
	"apples": 'Some apple|Some %count% apples'
}
```

%count% will be automatically replaced with count of items. Again for comparing czech version.

```
{
	"apples": 'Jedno jablko|%count% jablka|%count% jablek'
}
```

And now you can finally use it.

```
var message = translator.translate('apples', 2);		// output: Some 2 apples
```

You can change pluralSeparator. Default is `|`:

```
var translator = new mesour.Translator({
    language: 'en',
    dictionary: dictionary,
    pluralSeparator: '|'
});
```

## Replacements

%count% is the base example of replacements, but you can create others. For example you can set replacement for %url%
and then it will be automatically changed to name of your site, so if you will change it in future.

Dictionary:

```
{
	"info": "web site url: <a href=\"%url%\">%url%</a>"
}
```

Usage:

```
var message = translator.translate('info', {
    'url': 'http://mesour.com'
});
// output: web site url: <a href="http://mesour.com">http://mesour.com</a>
```

You can change replacement prefix and suffix character. Default is `%`:

```
var translator = new mesour.Translator({
    language: 'en',
    dictionary: dictionary,
    replacePrefix: '%',
    replaceSuffix: '%'
});
```

## Debug

If you set debug to true, you will receive warning in console for all non existing translate keys.

```
var translator = new mesour.Translator({
    language: 'en',
    dictionary: dictionary,
    debug: true
});
```

## Synchronous AJAX loading

Warning: This triggers in Chrome warning for deprecated.

```
var translator = new mesour.Translator({
    language: 'en',
    url: '/dictionary.php?locale=%locale%'  // -> /dictionary.php?locale=en
});

// can translate here
var message = translator.translate('apples');
```