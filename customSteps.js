const{When, Then, Given, After, Before, setDefaultTimeout}=require('@cucumber/cucumber');
const {expect}= require('chai');
const { By } = require('selenium-webdriver');
let sum=0;
const webdriver = require('selenium-webdriver');
setDefaultTimeout(60*1000)
let driver;
    Before(function () {
        driver = new webdriver.Builder()
    .forBrowser(webdriver.Browser.EDGE)
    .build();
      });
      After(function () {
        driver.quit();
      });
When('I add {int} into {int}', function (number1, number2) {   
   sum = number1 + number2;
    });
        Then('The result shall be {int}', function (result) {      
       expect(sum).equal(result);
        });

Given('I visit google homepage',{timeout: 60 * 1000}, async ()=> {
            await driver.get('http://google.com');
          });
        When('I search for Techverito',{timeout: 60 * 1000}, async ()=> {
            await driver.findElement(By.name('q')).sendKeys('Techverito'+'\n');
          });
        
      
          Then('I should see the results',{timeout: 60*1000}, async ()=> {
            let text = await driver.findElement(By.id('search')).getText()
            console.log(text);
 
           });
           Given('I am on Home Page', async()=> {
            await driver.get('http://localhost:3000');
          });
          When('I select a specific category', async ()=> {
            await driver.findElement(By.css('.RSFNavTab-tab-69')).click()
          });
          Then('I am redirected to the page with that subcategory of that category', async ()=> {
            await driver.sleep(10000)
            let text = await driver.findElement(By.css('.MuiTypography-gutterBottom')).getText()
            console.log(text);
          });
Given('I am on the cart page', async ()=> {
            await driver.get('http://localhost:3000/s/1');
            await driver.sleep(5000)
            await driver.findElement(By.css('.makeStyles-link-103')).click()
            await driver.sleep(5000)
            await driver.findElement(By.css('.makeStyles-noShadow-207')).click()
            await driver.sleep(5000)
            await driver.get('http://localhost:3000/cart');
            await driver.sleep(5000)

          });
          When('I increase the product quantity using plus button', async ()=> {
            await driver.sleep(5000)
            await driver.findElement(By.css('.MuiIconButton-sizeSmall')).click()
            
          });
          let quantity=1
          Then('My product quantity increases', async ()=> {
            await driver.sleep(10000)
            quantity.equal(await driver.findElement(By.css('.RSFQuantitySelector-input-116')))
          });
