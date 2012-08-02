var exampleModule = (function(){
    var thePrivateVariable = 5;
    return {
        thePublicFunction: function(){
            alert(thePrivateVariable);
        }
    };
})();