"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

const wordlists = {};

exports.wordlists = wordlists;
let _default;
exports._default = _default;

try {
    exports._default = _default = require('./wordlists/czech.json');
    wordlists.czech = _default;
} catch (err) {}

try {
    exports._default = _default = require('./wordlists/korean.json');
    wordlists.korean = _default;
} catch (err) {}

try {
    exports._default = _default = require('./wordlists/french.json');
    wordlists.french = _default;
} catch (err) {}

try {
    exports._default = _default = require('./wordlists/italian.json');
    wordlists.italian = _default;
} catch (err) {}

try {
    exports._default = _default = require('./wordlists/spanish.json');
    wordlists.spanish = _default;
} catch (err) {}

try {
    exports._default = _default = require('./wordlists/japanese.json');
    wordlists.japanese = _default;
    wordlists.JA = _default;
} catch (err) {}

try {
    exports._default = _default = require('./wordlists/portuguese.json');
    wordlists.portuguese = _default;
} catch (err) {}

try {
    exports._default = _default = require('./wordlists/english.json');
    wordlists.english = _default;
    wordlists.EN = _default;
} catch (err) {}