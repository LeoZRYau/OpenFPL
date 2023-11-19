export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/club": [3],
		"/fixture-validation": [4],
		"/gameplay-rules": [5],
		"/governance": [6],
		"/pick-team": [7],
		"/player": [8],
		"/profile": [9],
		"/terms": [10],
		"/whitepaper": [11]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';