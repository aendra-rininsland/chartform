import {SCENES} from './scenes';

/** @ngInject */
export function config(
  $logProvider: angular.ILogProvider,
  $provide: angular.auto.IProvideService,
  $mdIconProvider: angular.material.IIconProvider) {
  // enable log
  $logProvider.debugEnabled(true);

  // set up icons for easy access
  $mdIconProvider
    .iconSet('action', 'bower_components/material-design-iconsets/iconsets/action-icons.svg', 24)
    .iconSet('alert', 'bower_components/material-design-iconsets/iconsets/alert-icons.svg', 24)
    .iconSet('av', 'bower_components/material-design-iconsets/iconsets/av-icons.svg', 24)
    .iconSet('communication', 'bower_components/material-design-iconsets/iconsets/communication-icons.svg', 24)
    .iconSet('content', 'bower_components/material-design-iconsets/iconsets/content-icons.svg', 24)
    .iconSet('device', 'bower_components/material-design-iconsets/iconsets/device-icons.svg', 24)
    .iconSet('editor', 'bower_components/material-design-iconsets/iconsets/editor-icons.svg', 24)
    .iconSet('file', 'bower_components/material-design-iconsets/iconsets/file-icons.svg', 24)
    .iconSet('hardware', 'bower_components/material-design-iconsets/iconsets/hardware-icons.svg', 24)
    .iconSet('icons', 'bower_components/material-design-iconsets/iconsets/icons-icons.svg', 24)
    .iconSet('image', 'bower_components/material-design-iconsets/iconsets/image-icons.svg', 24)
    .iconSet('maps', 'bower_components/material-design-iconsets/iconsets/maps-icons.svg', 24)
    .iconSet('navigation', 'bower_components/material-design-iconsets/iconsets/navigation-icons.svg', 24)
    .iconSet('notification', 'bower_components/material-design-iconsets/iconsets/notification-icons.svg', 24)
    .iconSet('social', 'bower_components/material-design-iconsets/iconsets/social-icons.svg', 24)
    .iconSet('toggle', 'bower_components/material-design-iconsets/iconsets/toggle-icons.svg', 24);

  /**
   * What type of user journey do you want?
   * Currently supported values:
   * - swiped
   * - clicked
   */
  $provide.constant('JOURNEYTYPE', 'clicked');

  /**
   * This provides your scenes to the app. Scenes are defined in src/scenes.ts
   */
  $provide.constant('SCENES', SCENES);
}
