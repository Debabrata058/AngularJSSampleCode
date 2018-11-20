app.controller('custom_service_controller_one',function($scope,custom_service,$log){
    $scope.result = 0;
    $scope.add = function(){
        $scope.result = custom_service.calculate($scope.a,$scope.b,'+');
    }
    $scope.sub = function(){
        $scope.result = custom_service.calculate($scope.a,$scope.b,'-');
    }
    $scope.mul = function(){
        $scope.result = custom_service.calculate($scope.a,$scope.b,'*');
    }
    $scope.div = function(){
        $scope.result = custom_service.calculate($scope.a,$scope.b,'/');
    }
    $scope.rem = function(){
        $scope.result = custom_service.calculate($scope.a,$scope.b,'%');
    }
});
app.controller('custom_service_controller_two',function($scope,service_factory,$log){
    $scope.result = 0;
    $scope.add = function(){
        $scope.result = service_factory.add($scope.a,$scope.b);
    }
    $scope.sub = function(){
        $scope.result = service_factory.sub($scope.a,$scope.b);
    }
    $scope.mul = function(){
        $scope.result = service_factory.mul($scope.a,$scope.b);
    }
    $scope.div = function(){
        $scope.result = service_factory.div($scope.a,$scope.b);
    }
    $scope.rem = function(){
        $scope.result = service_factory.rem($scope.a,$scope.b);
    }
});
app.controller('custom_service_controller_three',function($scope,services,$log){
    $scope.result = 0;
    $scope.add = function(){
        $scope.result = services.add($scope.a,$scope.b);
    }
    $scope.sub = function(){
        $scope.result = services.sub($scope.a,$scope.b);
    }
    $scope.mul = function(){
        $scope.result = services.mul($scope.a,$scope.b);
    }
    $scope.div = function(){
        $scope.result = services.div($scope.a,$scope.b);
    }
    $scope.rem = function(){
        $scope.result = services.rem($scope.a,$scope.b);
    }
});