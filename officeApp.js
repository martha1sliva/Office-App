var app6 = angular.module('app6', []);

app6.controller('heroCtrl', function($scope, $rootScope) {
	$scope.hero = [
		{name: "Katie", fullName: "Katie Miller", phone: "555-236-8956"},
		{name: "Sam", fullName: "Samuel Love", phone: "578-635-2323"},
		{name: "Gloria", fullName: "Gloria Seebeck", phone: "555-556-2356"}
	];
	
	$scope.getHeroData = function() {
		heroSearch($scope.heroName);
	};
	
	function heroSearch(name) {
		$scope.herData = "Not Found";
		for(var i = 0; i < $scope.hero.length; i++) {
			if ($scope.hero[i].name == name) {
			$scope.heroData = $scope.hero[i].fullName + " is " + $scope.hero[i].name;
			}
		}
	}
	
	// updates both scopes
	$scope.$on("heroUpdated", function(event, args) {
		$scope.hero.push({
			name: args.name, fullName: args.fullName, phone: args.phone;
		});
	});
	
	$scope.addHeroData = function(name, fullName) {
		$rootScope.$broadcast("heroUpdated",
		{
			name: name, fullName: fullName
		});
		console.log("Colleague: " + fullName + " has been added.");
	};
	
});




