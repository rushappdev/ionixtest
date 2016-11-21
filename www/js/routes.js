angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('companyNameSlogan.yourName', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/yourName.html',
        controller: 'yourNameCtrl'
      }
    }
  })

  .state('companyNameSlogan.services', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/services.html',
        controller: 'servicesCtrl'
      }
    }
  })

  .state('companyNameSlogan.socialMedia', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/socialMedia.html',
        controller: 'socialMediaCtrl'
      }
    }
  })

  .state('companyNameSlogan', {
    url: '/page1',
    templateUrl: 'templates/companyNameSlogan.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/page1/page2')

  

});