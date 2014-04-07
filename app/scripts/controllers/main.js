'use strict';

angular.module('contactListApp')
	.controller('contactListCtrl', function ($scope, $location, $anchorScroll, Localstorage) {
		 
		
		$scope.contacts = Localstorage.get();

		$scope.contactAction = {
			show: false,
			contact: undefined
		};

		$scope.showContactForm = function(contact){
			$scope.contactAction.show = true;
			$scope.contactAction.contact = contact || undefined;
			// $location.hash('top');
 
		    // call $anchorScroll()
			// $anchorScroll();
		};

		$scope.hideContactForm = function(){
			$scope.contactAction.show = false;
			$scope.contactAction.contact = undefined;
			$scope.validationError = false;
			$scope.contacts = Localstorage.get();
		};

		$scope.saveContact = function(){
			if(validate($scope.contactAction.contact)){
				if($scope.contacts.indexOf($scope.contactAction.contact) === -1) {
					//adding
					$scope.contacts.push($scope.contactAction.contact);
				}
				//saveing
				Localstorage.put($scope.contacts);
				$scope.hideContactForm();
			}else{
				$scope.validationError = true;
			}
		};

		$scope.deleteContact = function(contact) {
			$scope.contacts.splice($scope.contacts.indexOf(contact), 1);
			Localstorage.put($scope.contacts);
		};

		function validate (contact){
			return (!contact || contact.name === '') ? false : true;
		}

	});
