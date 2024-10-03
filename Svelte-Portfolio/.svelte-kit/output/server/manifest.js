export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "UrbanoPrincessYAN.github.io/_app",
	assets: new Set(["favicon.png","images/about.jpg","images/Addpost-Bloggy.png","images/Bloggy LOGO.png","images/Collab-WeManage.png","images/Dashboard-WeManage.png","images/Editprofile-WeManage.png","images/Game LOGO.png","images/Game0.png","images/Game1.png","images/Game2.png","images/Game3.png","images/Home-Bloggy.png","images/Image Mapping1.png","images/Image Mapping2.png","images/Image Mapping3.png","images/Image Mapping4.png","images/LogIn-Bloggy.png","images/Login-WeManage.png","images/Newsfeed-Bloggy.png","images/profile.png","images/Progress-WeManage.png","images/Register-WeManage.png","images/Sched-WeManage.png","images/SignUp-Bloggy.png","images/TaskManager-WeManage.png","images/WeManage LOGO.png"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start._57q7ODf.js","app":"_app/immutable/entry/app.C68gloOV.js","imports":["_app/immutable/entry/start._57q7ODf.js","_app/immutable/chunks/entry.8xbNQBbJ.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.DspQOGsj.js","_app/immutable/entry/app.C68gloOV.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.CY7AifqN.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js'))
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
				id: "/Home-Page",
				pattern: /^\/Home-Page\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/portfolio",
				pattern: /^\/portfolio\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
