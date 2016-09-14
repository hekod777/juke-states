juke.config(function($stateProvider){
	$stateProvider.state('artistList',{
		url:'/artists',
		templateUrl:'../../artistTemplate.html',
		controller:'ArtistsCtrl',
	});
});