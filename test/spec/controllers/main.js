'use strict';

describe('Controller: contactListCtrl', function () {

  // load the controller's module
  beforeEach(module('contactListApp'));

  var contactListCtrl,
    scope,
    contact = {name:'Jose', address:'an address', phone: 'a phone number'};
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    contactListCtrl = $controller('contactListCtrl', {
      $scope: scope
    });
  }));

  it('should not save contact whithout a name', function () {
    scope.contactAction.contact = {name:'', address:'an address', phone: 'a phone number'};
    scope.saveContact();
    scope.$digest();
    expect(scope.contacts.length).toBe(0);
  });

  it('should create a new contact', function () {
    scope.contactAction.contact = contact;
    scope.saveContact();
    scope.$digest();
    expect(scope.contacts.length).toBe(1);
  });

  it('should delete contact from contacts', function () {
    scope.deleteContact(contact);
    scope.$digest();
    expect(scope.contacts.length).toBe(0);
  });


});
