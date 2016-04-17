'use strict';
/**
 * @ngdoc function
 * @name fireBaseAppApp.controller:ChatCtrl
 * @description
 * # ChatCtrl
 * A demo of using AngularFire to manage a synchronized list.
 */
angular.module('fireBaseAppApp')
  .controller('ChatCtrl', function ($scope, Ref, $firebaseArray, $timeout) {
    $scope.messages = $firebaseArray(Ref.child('messages').limitToLast(10));

    $scope.messages.$loaded().catch(alert);

    $scope.addMessage = function(newMessage) {
      if( newMessage ) {
        $scope.messages.$add({text: newMessage})
          .catch(alert);
      }
    };

    function alert(msg) {
      $scope.err = msg;
      $timeout(function() {
        $scope.err = null;
      }, 5000);
    }
  });
