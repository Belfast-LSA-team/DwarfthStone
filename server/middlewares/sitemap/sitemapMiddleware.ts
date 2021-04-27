// import { Response, Request } from 'express';
// import sitemap from 'express-sitemap';
// import moment from 'moment';

// // Преобразование объекта вида {PAGE_1: {INDEX: '/', SUB_PAGE: {USER: '...'}}} в массив урлов
// // import {flatRoutes} from 'server/utils/flatRoutes';

// const sitemapExpress = sitemap({
// 	url: 'my-app-domain',
// 	http: 'https',
// 	map: flatRoutes.reduce((result, route) => ({
// 		...result,
// 		[route]: ['get'],
// 	}), {}),
// 	route: flatRoutes.reduce((result, route) => ({
// 		...result,
// 		[route]: {
// 			lastmod: moment().toISOString(),
// 		},
// 	}), {}),
// });

// export function sitemapMiddleware(_req: Request, response: Response) {
// 	sitemapExpress.XMLtoWeb(response);
// }