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

Given('I am on home page',{timeout: 60 * 1000}, async ()=> {
            await driver.get('http://localhost:3000');
          });
        When('I search for Black',{timeout: 60 * 1000}, async ()=> {
            await driver.findElement(By.name('q')).sendKeys('Black'+'\n');
          });
        
      
          Then('I should see the results',{timeout: 60*1000}, async ()=> {
            await driver.sleep(20000);
            let text = await driver.findElement(By.className('MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12')).getText().then(null, function (err) {
              if (err.name === "NoSuchElementError")
                  assert.fail('could not search')
                  else
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
               Given('I add a product to cart', async()=>{
            await driver.get('http://localhost:3000/s/1');
            await driver.sleep(5000)
            await driver.findElement(By.css('.makeStyles-link-103')).click()
            await driver.sleep(5000)
            await driver.findElement(By.css('.makeStyles-noShadow-207')).click()
            await driver.sleep(5000)
          })


          Given('I am on the cart page', async ()=> {
            await driver.get('http://localhost:3000/cart');
            await driver.sleep(5000)});
              let quantitybeforeIncrease=0;
          When('I increase the product quantity using plus button', async ()=> {
            await driver.sleep(5000)
            quantitybeforeIncrease=await driver.findElement(By.name('quantity')).getAttribute('value');
            quantitybeforeIncrease=parseInt(quantitybeforeIncrease);
            console.log(quantitybeforeIncrease);
            await driver.findElement(By.css('[aria-label="subtract one quantity"]')).click()
            
          });
          let quantityafterIncrease=0
          Then('My product quantity increases', async ()=> {
            await driver.sleep(2000);
            quantityafterIncrease=await driver.findElement(By.name('quantity')).getAttribute('value');
            quantityafterIncrease=parseInt(quantityafterIncrease);
            if(quantityafterIncrease==(quantitybeforeIncrease+1))
            console.log(quantityafterIncrease);
            else{
              assert.fail('functionalities malfunctioning');}
          });
Given('I am on specific product page', async ()=> {
            await driver.get('http://localhost:3000/s/1');
            await driver.sleep(5000)
          });
          When('I select a specific product', async ()=> {
            await driver.findElement(By.id('item-1')).click()
            await driver.sleep(5000)
            await driver.findElement(By.css('.makeStyles-noShadow-207')).click()
            await driver.sleep(5000)
          });
          When('I go to the cart page', async ()=> {
            await driver.get('http://localhost:3000/cart');
            await driver.sleep(5000)
          });
          Then('That specific product are shown on the cart page', async ()=> {     
            
            await driver.sleep(10000)
            let text = await driver.findElement(By.css('.MuiGrid-item')).getText()
            console.log(text);
          });
