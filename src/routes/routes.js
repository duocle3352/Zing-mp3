import { configs } from '~/configs';
import { Home } from '~/page/Home';
import { MyMusic } from '~/page/MyMusic';
import { ZingChart } from '~/page/ZingChart';
import { Radio } from '~/page/Radio';
import { Follow } from '~/page/Follow';

const publicRoutes = [
    { path: configs.router.home, component: Home },
    { path: configs.router.myMusic, component: MyMusic },
    { path: configs.router.zingChart, component: ZingChart },
    { path: configs.router.radio, component: Radio },
    { path: configs.router.follow, component: Follow },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
