/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('FacultyFormController', function($scope, Faculty, $state, $stateParams) {
//    console.log($state);
//    console.log($stateParams);

    $scope.isAddOrEdit = 'ADD';
    $scope.faculty = {};


    $scope.$on('$viewContentLoaded',
            function(event) {
                if ($state.current.name === 'faculty.add') {
                    $scope.isAddOrEdit = 'ADD';
                    $scope.faculty = {};
                } else if ($state.current.name === 'faculty.edit') {
                    $scope.isAddOrEdit = 'EDIT';
                    Faculty.edit($stateParams.facultyId).success(function(data) {
                        $scope.faculty = data;
                        //console.log($scope.faculty);
                    });
                }
            });

    $scope.submitAddFaculty = function() {

        var faculty = $scope.faculty;
        if ($scope.isAddOrEdit === 'ADD') {
            Faculty.store(faculty).success(function(data) {
                $state.go('faculty');
            });
        } else {
            Faculty.update(faculty).success(function(data) {
                $state.go('faculty');
            });
        }

    };

});

var DeleteFacultyModalController = function($scope, $modalInstance, faculty) {

    $scope.faculty = faculty;
    $scope.ok = function() {
        $modalInstance.close(true);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
};

app.controller('FacultyController', function($scope, $modal, Faculty) {


    //load faculty
    $scope.allFaculty = {};
    $scope.loadFaculty = function() {

        Faculty.get().success(function(data) {
            $scope.allFaculty = data;
        });
    };
    // end of load faculty 

    //deleted faculty
    $scope.deleteFaculty = function(faculty) {

        //show modal
        var modalInstance = $modal.open({
            templateUrl: 'partial/faculty/faculty.delete.html',
            controller: 'DeleteFacultyModalController',
            resolve: {
                faculty: function() {
                    return faculty;
                }
            }
        });

        modalInstance.result.then(function(result) {
            if (result) {
                Faculty.destroy(faculty)
                        .success(function(data) {
                            $scope.loadFaculty();
                        });
            }
        });
    };
    //end of delete faculty

    $scope.editorOptions = {
    };

    $scope.$on('$viewContentLoaded', function(event) {
        $scope.loadFaculty();
    });
});