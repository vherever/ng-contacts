app.controller('ListCtrl', function($scope, Projects) {
  $scope.contacts = Projects;
})
 
.controller('CreateCtrl', function($scope, $location, Projects) {
  $scope.save = function() {
      Projects.$add($scope.contact).then(function(data) {
          $location.path('/');
      });
  };
})

.controller('EditCtrl',
  function($scope, $location, $routeParams, Projects) {

    var contactId = $routeParams.contactId,
        contactIndex;
 
    $scope.contacts = Projects;
    contactIndex = $scope.contacts.$indexFor(contactId);
    $scope.contact = $scope.contacts[contactIndex];
 
    $scope.destroy = function() {
        $scope.contacts.$remove($scope.contact).then(function(data) {
            $location.path('/');
        });
    };
 
    $scope.save = function() {
        $scope.contacts.$save($scope.contact).then(function(data) {
           $location.path('/');
        });
    };

});