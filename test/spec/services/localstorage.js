'use strict';

describe('Service: Localstorage', function () {

  // load the service's module
  beforeEach(module('contactListApp'));

  // instantiate service
  var Localstorage;
  beforeEach(inject(function (_Localstorage_) {
    Localstorage = _Localstorage_;
  }));

  it('should save to Localstorage', function () {
    Localstorage.put([{name:'Jose', address:'an address', phone: 'a phone number'}]);
    var contacts = Localstorage.get();
    expect(contacts[0].name).toBe('Jose');
  });

  it('should delete to Localstorage', function () {
    Localstorage.put([]);
    var contacts = Localstorage.get();
    expect(contacts.length).toBe(0);
  });

});
