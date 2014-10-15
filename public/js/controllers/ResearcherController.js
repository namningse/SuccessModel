app.controller('ResearcherFormController', function($scope, Researcher, $state, $stateParams, Faculty) {
//    console.log($state);
//    console.log($stateParams);

    $scope.isAddOrEdit = 'ADD';
    $scope.researcher = {};
    $scope.allFaculty = {};
    $scope.selFaculty = 0;
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
                        $scope.selFaculty = $scope.researcher.faculty.id;
                        console.log($scope.researcher);
                    });
                }
            });

    $scope.submitAddResearcher = function() {

        var researcher = $scope.researcher;
        researcher.faculty = $scope.selFaculty;
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

app.controller('ResearcherController', function($scope, $modal, Faculty, Researcher) {

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
});
