(function(window, angular) {
  "use strict"; // eslint-disable-line strict
  var appModule = angular.module("appModule", [ "ui.router" ]);

  if (window.self !== window.top) {
    // Add class to override styles
    document.querySelector("html").className += " v2";
    // Watch for height change
    const resizeObserver = new ResizeObserver(() => {
      // Can't use entry.contentRect because of polyfill misbehavior
      parent.window.postMessage(
        { iframeHeight: document.body.offsetHeight },
        "*"
      );
    });
    resizeObserver.observe(document.body);
    // Watch for URL change
    window.onpopstate = () => {
      parent.window.postMessage({ iframeUrl: location.href }, "*");
    };
  }

  // Router
  appModule.config([
    "$locationProvider",
    "$stateProvider",
    "$urlRouterProvider",
    function($locationProvider, $stateProvider, $urlRouterProvider) {
      // $locationProvider.html5Mode(true);

      $stateProvider.state({
        name: "home",
        url: "/",
        template: "<app-home></app-home>"
      });

      $stateProvider.state({
        name: "about",
        url: "/about",
        template: "<app-about></app-about>"
      });

      $urlRouterProvider.otherwise("/");
    }
  ]);

  // App
  appModule
    .controller("appController", [
      "$scope",
      function($scope) {
        // $scope
      }
    ])
    .directive("app", function() {
      return {
        restrict: "E",
        templateUrl: "html/app.html",
        controller: "appController",
        scope: {},
        link: function(scope, el, attrs) {}
      };
    });

  // Nav
  appModule
    .controller("appNavController", [
      "$scope",
      "$transitions",
      function($scope, $transitions) {
        $scope.isNavCollapsed = true;

        $scope.onClick = function() {
          $scope.isNavCollapsed = !$scope.isNavCollapsed;
        };

        $transitions.onSuccess({}, function() {
          $scope.isNavCollapsed = true;
        });
      }
    ])
    .directive("appNav", function() {
      return {
        restrict: "E",
        templateUrl: "html/app-nav.html",
        controller: "appNavController",
        scope: {},
        link: function(scope, el, attrs) {}
      };
    });

  // Home
  appModule
    .controller("appHomeController", [
      "$scope",
      function($scope) {
        // $scope
      }
    ])
    .directive("appHome", function() {
      return {
        restrict: "E",
        templateUrl: "html/app-home.html",
        controller: "appHomeController",
        scope: {
          message: "@"
        },
        link: function(scope, el, attrs) {}
      };
    });

  // About
  appModule
    .controller("appAboutController", [
      "$scope",
      function($scope) {
        // $scope
      }
    ])
    .directive("appAbout", function() {
      return {
        restrict: "E",
        templateUrl: "html/app-about.html",
        controller: "appAboutController",
        scope: {
          message: "@"
        },
        link: function(scope, el, attrs) {}
      };
    });
})(window, window.angular);
