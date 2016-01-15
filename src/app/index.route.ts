/** @ngInject */
export function routerConfig(
  $stateProvider: angular.ui.IStateProvider,
  $urlRouterProvider: angular.ui.IUrlRouterProvider,
  JOURNEYTYPE: string,
  SCENES: ISceneList) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: `app/main/main.${JOURNEYTYPE}.html`,
      controller: 'MainController',
      controllerAs: 'main'
    });

  $urlRouterProvider.otherwise('/');
}
