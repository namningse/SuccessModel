app.factory('Researcher', function($http) {

    return {
        get: function() {
            return $http.get('/api/v1/researcher');
        },
        show: function(researcher) {
            return $http.get('/api/v1/researcher/' + researcher.id);
        },
        edit: function(id) {
            return $http.get('/api/v1/researcher/' + id+'/edit');
        },
        store: function(researcher) {
            return $http({
                method: 'POST',
                url: '/api/v1/researcher',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                params: researcher
            });
        },
        update: function(researcher) {
            id = researcher.id;
            return $http({
                method: 'PUT',
                url: '/api/v1/researcher/' + id,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                params: researcher
            });
        },
        destroy: function(researcher) {
            id = researcher.id;
            return $http({
                method: 'delete',
                url: '/api/v1/researcher/' + id,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                params: researcher
            });
        }
    };
});

