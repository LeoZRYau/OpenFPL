export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".ic-assets.json",".well-known/ic-domains",".well-known/ii-alternative-origins","FPLCoin.png","ICPCoin.png","Manrope-Regular.woff2","apple-touch-icon.png","background.jpg","board.png","brace-bonus.png","captain-fantastic.png","ckBTCCoin.png","ckETHCoin.png","countrymen.png","discord.png","favicon.ico","favicon.png","github.png","goal-getter.png","hat-trick-hero.png","no-entry.png","openchat.png","openfpl.webmanifest","pass-master.png","pitch.png","poppins-regular-webfont.woff2","profile_placeholder.png","prospects.png","safe-hands.png","team-boost.png","telegram.png","twitter.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".woff2":"font/woff2",".jpg":"image/jpeg",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.2b65cb78.js","app":"_app/immutable/entry/app.92434cd6.js","imports":["_app/immutable/entry/start.2b65cb78.js","_app/immutable/chunks/index.c7b38e5e.js","_app/immutable/chunks/singletons.04c19f05.js","_app/immutable/chunks/index.8caf67b2.js","_app/immutable/entry/app.92434cd6.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.c7b38e5e.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/add-fixture-data",
				pattern: /^\/add-fixture-data\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/club",
				pattern: /^\/club\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/fixture-validation",
				pattern: /^\/fixture-validation\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/gameplay-rules",
				pattern: /^\/gameplay-rules\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/governance",
				pattern: /^\/governance\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/manager",
				pattern: /^\/manager\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/pick-team",
				pattern: /^\/pick-team\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/player",
				pattern: /^\/player\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/profile",
				pattern: /^\/profile\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/terms",
				pattern: /^\/terms\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/whitepaper",
				pattern: /^\/whitepaper\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
