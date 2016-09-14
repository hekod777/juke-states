juke.config(function ($stateProvider) {
  $stateProvider.state('albumList', {
    url: '/albums',
    templateUrl: '../../albumTemplate.html',
    controller: 'AlbumsCtrl'
  });
});

juke.config(function ($stateProvider) {
  $stateProvider.state('album', {
    url: '/album/:id',
    templateUrl: '../../albumTemplate.html',
    controller: function ($scope, $stateParams) {
      $scope.name = $stateParams.id;
    }
  });
});