'use strict';

import styles from './styles.less';

import items from './items.json';

const contentContainer = document.documentElement.querySelector('.js-content');
const content = document.createElement('h2');

content.innerText = 'index.js loaded';
contentContainer.appendChild(content);

console.log(items);