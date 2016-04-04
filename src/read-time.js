'use strict';

function readTime(string, wpm = 1) {
  return Math.ceil(numWords(string)/wpm);
}
