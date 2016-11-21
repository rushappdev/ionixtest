angular.module('app.controllers', [])
  
.controller('yourNameCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('servicesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('socialMediaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
.controller("shareCtrl", function($scope, $cordovaSocialSharing) {
 
    $scope.shareAnywhere = function() {
        $cordovaSocialSharing.share("This is Rashaan and he can make things happen for you! Get started with your very own app today!", "Want a Profile App about you? ", "www/img/prof-pic.jpg", "https://www.kovecmedia.com");
    }
 
    $scope.shareViaTwitter = function(message, image, link) {
        $cordovaSocialSharing.canShareVia("twitter", message, image, link).then(function(result) {
            $cordovaSocialSharing.shareViaTwitter(message, image, link);
        }, function(error) {
            alert("Cannot share on Twitter");
        });
    }
 
  })

.controller('mCtrl', function($scope, $ionicModal) {
      // $scope.data = {
      //   fName:"Rick",
      //   lName:"Johnson",
      //   email:"Rick@jhnson.com",
      //   pNumber:"6938489343",
      //   reason:{"Business","Personal"}
      // };
  $ionicModal.fromTemplateUrl('my-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  // Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
    // Execute action
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  })
  
  // $scope.sendFeedback= function() {
  //       if(window.plugins && window.plugins.emailComposer) {
  //           window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
  //               console.log("Email success -> " + result);
  //           }, 
  //           "Feedback for your App", // Subject
  //           "Name: "+ $scope.data.fName + " " + $scope.data.lName 
  //           +"\n"
  //           +"Email: "+ $scope.data + "\n"
  //           +"Phone Number: "+ $scope.data.pNumber
  //           +"Reason: "+ $scope.data.reason,                      // Body
  //           ["test@gmail.com","thompson.rashaan@gmail.com"],    // To
  //           null,                    // CC
  //           null,                    // BCC
  //           false,                   // isHTML
  //           null,                    // Attachments
  //           null                    // Attachment Data
  //           )               
  //       }
  //   }
})
.controller('AppCtrl', function($scope, $http) {
$scope.data = {};
     // $scope.choice = ["Business", "Personal"];
       $scope.choice = [
    { text: "Business", value: "business" },
    { text: "Personal", value: "personal" }
   ];
    $scope.submit = function(){
        // var link = 'http://nikola-breznjak.com/_testings/ionicPHP/api.php';
        // var link = 'http://127.0.0.1/main/Source/api.php';
        var link = 'http://rawgit.com/rushappdev/myAPis/master/api.php';
        // var link = 'api.php';

        $http({
            method: 'POST',
            url : link,
            data : $scope.data, 
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      
        }).then(function (response){
            $scope.response = response.data;
               console.log("success: " + $scope.response);
        }).error(function (response){
              console.log("failed api call return:" + response);
        }); 
    };
})

.controller('PopupCtrl',function($scope, $ionicPopup, $timeout) {

// Triggered on a button click, or some other target
$scope.showPopup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="password" ng-model="data.wifi">',
    title: 'Enter Wi-Fi Password',
    subTitle: 'Please use normal things',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);
 };

 // A confirm dialog
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Consume Ice Cream',
     template: 'Are you sure you want to eat this ice cream?'
   });

   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };

 // An alert dialog
 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Expert Web & App Developer ',
     template: 'My purpose to help you become AWESOME!'
   });

   alertPopup.then(function(res) {
     console.log('close popup success');
   });
 };
})


// window.plugins.emailComposer.showEmailComposerWithCallback(callback, subject, body, toRecipients, ccRecipients, bccRecipients, isHtml, attachments, attachmentsData);
// .controller('EmailCrtl', function($scope) {
//    $scope.sendFeedback= function(email) {
//         if(window.plugins && window.plugins.emailComposer) {
//             window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
//                 console.log("Response -> " + result);
//             }, 
//             "Feedback for your App", // Subject
//             "",                      // Body
//             [email],    // To
//             null,                    // CC
//             null,                    // BCC
//             false,                   // isHTML
//             null,                    // Attachments
//             null);                   // Attachment Data
//         }
//     }
// });