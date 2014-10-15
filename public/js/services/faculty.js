app.factory('Faculty', function($http) {

    return {
        get: function() {
            return $http.get('/api/v1/faculty');
        },
        show: function(faculty) {
            return $http.get('/api/v1/faculty/' + faculty.id);
        },
        edit: function(id) {
            return $http.get('/api/v1/faculty/' + id+'/edit');
        },
        store: function(faculty) {
            return $http({
                method: 'POST',
                url: '/api/v1/faculty',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                params: faculty
            });
        },
        update: function(faculty) {
            id = faculty.id;
            return $http({
                method: 'PUT',
                url: '/api/v1/faculty/' + id,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                params: faculty
            });
        },
        destroy: function(faculty) {
            id = faculty.id;
            return $http({
                method: 'delete',
                url: '/api/v1/faculty/' + id,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                params: faculty
            });
        }
    };
});

