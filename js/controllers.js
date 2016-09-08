angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ksSwiper'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.mySlides = [
    'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
  ];
})
.controller('AboutCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("about");
  $scope.menutitle = NavigationService.makeactive("About");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();


})
.controller('MappCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("mapp");
  $scope.menutitle = NavigationService.makeactive("Mapp");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();


})

.controller('FinderCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("finder");
  $scope.menutitle = NavigationService.makeactive("Finder");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();


})





.controller('GmapCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("gmap");
  $scope.menutitle = NavigationService.makeactive("Gmap");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();


})

.controller('Map2Ctrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("map2");
  $scope.menutitle = NavigationService.makeactive("Map2");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();


})

.controller('ServicesCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("services");
  $scope.menutitle = NavigationService.makeactive("Services");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();


})

.controller('CareerCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("career");
  $scope.menutitle = NavigationService.makeactive("Career");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();


})

.controller('DemoCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file

  console.log("Testing Consoles");

  $scope.template = TemplateService.changecontent("demo");
  $scope.menutitle = NavigationService.makeactive("Demo");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.contacts = [{
    'name': 'Sanket',
    'number' : 978946513
  },{
    'name' : 'Rohan',
    'number' : 9768542565
  },{
    'name' : 'Vinod',
    'number' : 9768542565
  },{
    'name' : 'Amit',
    'number' : 9768542565
  }];

  $scope.addRow = function(fname,fnumber){
      $scope.contacts.push({ name:fname, number: fnumber });
      console.log(fname);
      console.log(fnumber);

      };


      $scope.remove = function (index) {
      //  splice $scope.contacts[index];
         $scope.contacts.splice(index, 1);
    };

    $scope.edit = function (index) {
       $scope.contacts.name=fname;
       $scope.contacts.number=fnumber;
  };



})


.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
  $.fancybox.close(true);
})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

  $scope.changeLanguage = function() {
    console.log("Language CLicked");

    if (!$.jStorage.get("language")) {
      $translate.use("hi");
      $.jStorage.set("language", "hi");
    } else {
      if ($.jStorage.get("language") == "en") {
        $translate.use("hi");
        $.jStorage.set("language", "hi");
      } else {
        $translate.use("en");
        $.jStorage.set("language", "en");
      }
    }
    //  $rootScope.$apply();
  };


})

;
