
var app = angular.module('employeeApp', []);

app.controller('customersController', function($scope,$http) {
    /*
	$http.get('dummy_data.json')
    .success(function(response) 
	{
		//console.log(response.employees);
		$scope.employees = response.employees;
	});
	*/
	$scope.employees = 
	[{
	  "name":"Mike Sullivan",
	   "age": 22,
	   "class":"C++",
	   "address":"22 ABC street, Santa Clara, CA",
	   "id":1
	}
	,
	{
	  "name":"Daisy",
	   "age": 26,
	   "class":"JAVA, SQL, AngularJS",
	   "address":"21212 london street, San Jose, CA",
	      "id":2
	}
	,
	{
	  "name":"Mr Kumar",
	   "age": 23,
	   "class":"JAVA, SQL",
	   "address":"21212 london street, San Jose, CA",
	      "id":3
	}
		

	
]
	
	$scope.addUser = function()
	{
	  var newEmp = {
	     "name": $scope.newName,
		 "class": $scope.newSkill
	  };
	   $scope.employees.push(newEmp);
	}
	
	$scope.editUser = function(name)
	{
	 for(i in $scope.employees) {
            if($scope.employees[i].name == name) {
            $scope.newName = $scope.employees[i].name;
			 $scope.newSkill = $scope.employees[i].class;
			 $scope.temp_id = $scope.employees[i].id;
            }
        }  
	
	}
	
	$scope.saveEditChanges = function()
	{
       for(i in $scope.employees) {
            if($scope.employees[i].id ==  $scope.temp_id) {
               $scope.employees[i].name =  $scope.newName;
		       $scope.employees[i].class = 	 $scope.newSkill;
            }
        }  		
	}
	
});
/*
sampleApp .config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/addOrder', {
        templateUrl: 'templates/add-order.html',
        controller: 'AddOrderController'
      }).
      when('/showOrders', {
        templateUrl: 'templates/show-orders.html',
        controller: 'ShowOrdersController'
      }).
      otherwise({
        redirectTo: '/addOrder'
      });
  }]);

*/


function customersController($scope,$http) {
    $http.get('dummy_data.json')
    .success(function(response) {$scope.employees = response.employees;});
}

