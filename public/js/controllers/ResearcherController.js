app.controller('ResearcherFormController', function($scope, Researcher, $state, $stateParams, Faculty) {
//    console.log($state);
//    console.log($stateParams);

    $scope.isAddOrEdit = 'ADD';
    $scope.researcher = {};
    $scope.allFaculty = {};
    $scope.$on('$viewContentLoaded',
            function(event) {
      
                Faculty.get().success(function(data) {
                    $scope.allFaculty = data;
                });
                if ($state.current.name === 'researcher.add') {
                    $scope.isAddOrEdit = 'ADD';
                    $scope.researcher = {};
                } else if ($state.current.name === 'researcher.edit') {
                    $scope.isAddOrEdit = 'EDIT';
                    Researcher.edit($stateParams.researcherId).success(function(data) {
                        $scope.researcher = data;
                        console.log($scope.researcher);
                    });
                }
            });

    $scope.submitAddResearcher = function() {

        var researcher = $scope.researcher;
        researcher.faculty = researcher.faculty.id;
        if ($scope.isAddOrEdit === 'ADD') {
            
            Researcher.store(researcher).success(function(data) {
                $state.go('researcher');
            });
        } else {
            Researcher.update(researcher).success(function(data) {
                
                $state.go('researcher');
            });
        }

    };

});

var DeleteResearcherModalController = function($scope, $modalInstance, researcher) {

    $scope.researcher = researcher;
    $scope.ok = function() {
        $modalInstance.close(true);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
};


app.controller('ResearcherController', function($scope, $modal, Researcher) {

    $scope.allResearcher = {};

    $scope.loadAll = function() {
        Researcher.get().success(function(data) {
            $scope.allResearcher = data;
        });
    };

    $scope.$on('$viewContentLoaded', function(event) {
        $scope.loadAll();
    });
    //console.log('ResearcherController');
    
    
    $scope.deleteResearcher = function(researcher) {

        //show modal
        var modalInstance = $modal.open({
            templateUrl: 'partial/researcher/researcher.delete.html',
            controller: 'DeleteResearcherModalController',
            resolve: {
                researcher: function() {
                    return researcher;
                }
            }
        });

        modalInstance.result.then(function(result) {
            if (result) {
                Researcher.destroy(researcher)
                        .success(function(data) {
                            $scope.loadAll();
                        });
            }
        });
    };
});
