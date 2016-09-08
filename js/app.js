// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice',
  'pascalprecht.translate',
  'angulartics',
  'angulartics.google.analytics'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
  // for http request with session
  $httpProvider.defaults.withCredentials = true;
  $stateProvider
    .state('home', {
    url: "/",
    templateUrl: "views/template.html",
    controller: 'HomeCtrl'
  })
  .state('mapp', {
  url: "/mapp",
  templateUrl: "views/template.html",
  controller: 'MappCtrl'
  })

  .state('finder', {
  url: "/finder",
  templateUrl: "views/template.html",
  controller: 'FinderCtrl'
  })


  .state('gmap', {
  url: "/gmap",
  templateUrl: "views/template.html",
  controller: 'GmapCtrl'
  })

  .state('map2', {
  url: "/map2",
  templateUrl: "views/template.html",
  controller: 'Map2Ctrl'
  })


  .state('career', {
  url: "/career",
  templateUrl: "views/template.html",
  controller: 'CareerCtrl'
})

.state('services', {
url: "/services",
templateUrl: "views/template.html",
controller: 'ServicesCtrl'
})

  .state('d', {
  url: "/demo",
  templateUrl: "views/template.html",
  controller: 'DemoCtrl'
})
    .state('about', {
    url: "/about",
    templateUrl: "views/template.html",
    controller: 'AboutCtrl'
  });
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});

firstapp.directive('fancyboxBox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
               target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});


firstapp.config(function ($translateProvider) {
  $translateProvider.translations('en', LanguageEnglish);
  $translateProvider.translations('hi', LanguageHindi);
  $translateProvider.preferredLanguage('en');
});
