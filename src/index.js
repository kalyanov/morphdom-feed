'use strict';

// Import sources
import items from './items.json';

// Load libriaries
const morphdom = require('morphdom');

// Set constants
const STEP = 10;
const ITEM_GAP = 50;

// Main code
let offset = 0;

const getNewList = offset => {
	let itemsString = '';

	for (let i = 1; i <= 2 * STEP; i++) {
		const articleId = offset + i;
		const article = items[Math.abs(articleId % 10)];

		itemsString +=
			`<li class="list__item">
				<div class="article">
					<h2 class="article__title">${articleId}. Article</h2>
					<div class="article__text">${article.text}</div>
				</div>
			</li>`;
	}

	return `<ul class="list js-list">${itemsString}</ul>`;
};

const listWrap = document.documentElement.querySelector('.js-list-wrap');

listWrap.innerHTML = getNewList(offset);

const list = document.documentElement.querySelector('.js-list');

/**
 * Get first STEP items height
 */
const getFirstItemsHeight = () => {
	let itemsHeight = ITEM_GAP * STEP;
	for (let i = 0; i < STEP; i++) {
		itemsHeight += list.childNodes[i].offsetHeight;
	}

	return itemsHeight;
};

// Handle next button
const nextButton = document.documentElement.querySelector('.js-button-next');
nextButton.addEventListener('click', () => {
	offset = offset + STEP;
	const delta = getFirstItemsHeight();

	morphdom(list, getNewList(offset));

	window.document.body.scrollTop -= delta;
});

// Handle prev button
const prevButton = document.documentElement.querySelector('.js-button-prev');
prevButton.addEventListener('click', () => {
	offset = offset - STEP;

	const newList = getNewList(offset);

	morphdom(list, newList);

	window.document.body.scrollTop += getFirstItemsHeight();
});
