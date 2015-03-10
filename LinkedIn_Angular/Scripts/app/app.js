var mainApp = angular.module("mainApp", ["linkedInControllers"]);

// Setup an event listener to make an API call once auth is complete
function onLinkedInLoad() {
    IN.Event.on(IN, "auth", getProfileData);
}

// Use the API call wrapper to request the member's basic profile data
function getProfileData() {
    angular.element(document.getElementById("MainAppContainer")).scope().$apply(
        function ($scope) {
            $scope.getLinkedInData();
        });
}

