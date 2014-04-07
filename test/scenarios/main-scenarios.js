var util = require('util');

describe('Scenario: main', function() {
  beforeEach(function() {
    browser.get('http://localhost:9000');
    browser.executeScript('window.sessionStorage.clear();');
    browser.executeScript('window.localStorage.clear();');

    mainList = element(by.css('.list-box'));
    contactForm = element(by.css('.contactForm'));
    contactsContainer = element(by.css('.contacts'));
    search = element(by.css('.search-box'));

  });

  it('should load index', function() {
    //Test
    expect(mainList.isDisplayed()).toBeTruthy();
    expect(search.isDisplayed()).toBeTruthy();
    expect(contactsContainer.isDisplayed()).toBeTruthy();
    expect(contactForm.isPresent()).toBeTruthy();
    expect(contactsContainer.element(by.css('.no-contact')).isDisplayed()).toBeTruthy();
  });

  it('should add a new contact', function() {
    //Test
    element(by.css('.btn-add')).click();
    expect(contactForm.isDisplayed()).toBeTruthy();

    element(by.model('contactAction.contact.name')).sendKeys('Daniel Mariz');
    element(by.model('contactAction.contact.phone')).sendKeys('+55 31 87831070');
    
    var btn = element(by.css('.btn-save'));
    btn.click();
    
    var list = element.all(by.css('.contacts li'));
    expect(list.count()).toBe(2);    

  });

  it('should edit a contact', function() {
    //Test
    element(by.css('.contacts li:first-child .btn-edit')).click();
    expect(contactForm.isDisplayed()).toBeTruthy();
    
    var item = element(by.css('.contacts li:first-child strong:first-child'));

    var nameInput = element(by.model('contactAction.contact.name'));
    nameInput.clear();
    nameInput.sendKeys('Dan');
    element(by.css('.btn-save')).click();

    expect(item.getText()).toBe('Dan');
    expect(!contactForm.isDisplayed()).toBeFalsy();
  });

  it('should delete a contact', function() {
    element(by.css('.contacts li:first-child .btn-delete')).click();

    var list = element.all(by.css('.contacts li'));
    expect(list.count()).toBe(1);
    expect(contactsContainer.element(by.css('.no-contact')).isDisplayed()).toBeTruthy();

  });
  
});