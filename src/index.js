'use strict';

const contentContainer = document.documentElement.querySelector('.js-content');

const content = document.createElement('p');
content.innerText = 'Index.js content';

contentContainer.appendChild(content);