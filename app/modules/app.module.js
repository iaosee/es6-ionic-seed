
import globalModule   from './global/global.module';
import commonModule   from './common/common.module';
import homeModule     from './home/home.module';
import guideModule    from './guide/guide.module';
import listModule     from './list/list.module';
import accountModule  from './account/account.module';

export default angular
  .module('app', [
    'ionic',
    'oc.lazyLoad',
    globalModule,
    commonModule,

    homeModule,
    guideModule,
    listModule,
    listModule,
    accountModule,
  ])
  .name;
