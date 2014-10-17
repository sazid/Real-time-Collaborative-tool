/**
 * Created by Sazid on 10/17/2014.
 */

(function () {

    var app = angular.module('collaborator', []);

    app.controller('TabController', function () {
        this.tab = 1;

        this.setTab = function (selectedTab) {
            this.tab = selectedTab;
        };

        this.isSet = function (checkTab) {
            return this.tab === checkTab;
        }
    });

})();
