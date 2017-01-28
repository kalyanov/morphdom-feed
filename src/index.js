'use strict';

var contentContainer = document.documentElement.querySelector('.js-content');

var content = document.createElement('p');
content.innerText = 'Index.js content';

contentContainer.appendChild(content);