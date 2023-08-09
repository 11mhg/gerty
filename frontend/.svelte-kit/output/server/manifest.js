export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ab84c964.js","app":"_app/immutable/entry/app.f3bb717d.js","imports":["_app/immutable/entry/start.ab84c964.js","_app/immutable/chunks/index.ddb9a552.js","_app/immutable/chunks/singletons.6e4cb641.js","_app/immutable/chunks/index.7be621fd.js","_app/immutable/entry/app.f3bb717d.js","_app/immutable/chunks/index.ddb9a552.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
