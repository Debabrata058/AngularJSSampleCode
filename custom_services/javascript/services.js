/*
    CUSTOM SERVISE USING SERVISE
*/
app.service('custom_service',function(){
    this.calculate = function(a,b,operator){
        switch(operator)
        {
            case '+':
                return a+b;
            break;
            case '-':
                return a-b;
            break;
            case '*':
                return a*b;
            break;
            case '/':
                return a/b;
            break;
            case '%':
                return a%b;
            break;
        }
    }
});
/*
    app.service('custom_service',function(){
    this.add = function(a,b,){
        return a+b;
    }
    this.sub = function(a,b){
        return a-b;
    }
    this.mul = function(a,b){
        return a*b;
    }
    this.div = function(a,b){
        return a/b;
    }
    this.rem = function(a,b)
    {
        return a%b;
    }
});
*/