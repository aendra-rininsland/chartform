/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';

declare var moment: moment.MomentStatic;

module chartform {
  'use strict';

  angular.module('chartform', [
    'ngAnimate',
    'ngCookies',
    // 'ngTouch', // Disabled because Angular Material has its own touch library.
    'ngSanitize',
    'ngMessages',
    'ngAria',
    'ngResource',
    'ui.router',
    'ngMaterial'
  ])
    .constant('moment', moment)
    .config(config)
    .config(routerConfig)
    .run(runBlock)
    .controller('MainController', MainController);
}
