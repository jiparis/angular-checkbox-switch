(function(ng){
    ng.module('cbSwitch', [])
    .directive('cbSwitch', function(){
        return{
            replace: false,
            restrict: 'EA',
            require: 'ngModel',
            link: function (scope, elm, attrs, ngModel) {
                elm.after("<div><div></div></div>")
                    .addClass("switch bigswitch green");
            }
        };
    });
})(angular);

