/*
    FACTORY METHOD TO CREATE SERVICE
*/
app.factory('service_factory',function(){
    var factory_object = {};
    factory_object.add = function(a,b){
        return a+b;
    }
    factory_object.sub = function(a,b){
        return a-b;
    }
    factory_object.mul = function(a,b){
        return a*b;
    }
    factory_object.div = function(a,b){
        return a/b;
    }
    factory_object.rem = function(a,b)
    {
        return a%b;
    }
    return factory_object;
})