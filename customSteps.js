const{When, Then, Given, After, Before, setDefaultTimeout}=require('@cucumber/cucumber');
const {expect, assert}= require('chai');
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
            await driver.findElement(By.id('item-0')).click()
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
When('I press the remove option', async ()=> {
            await driver.sleep(10000)
            let text = await driver.findElement(By.css('.MuiGrid-item')).getText()
            console.log('cart before removing item\n'+text);
            await driver.sleep(5000)
            await driver.findElement(By.css('.makeStyles-remove-118')).click()
            await driver.sleep(5000)
            await driver.findElement(By.css('.MuiButton-text')).click()});
            Then('My product is removed from the cart', async ()=> {
              await driver.sleep(10000)
            let text = await driver.findElement(By.css('.MuiGrid-item')).getText()
            console.log('cart after removing item\n'+text);
          });
Given('I am at products page', async () => {
  await driver.get('http://localhost:3000/s/1')
  await driver
    .manage()
    .window()
    .maximize()
  await driver.sleep(10000)
})
When('I select a particular color', async () => {
  await driver
    .findElement(
      By.css(
        '#__next > main > div > div.makeStyles-root-119 > div.PrivateHiddenCss-xsDown-31 > div > div > div.RSFFilter-facetGroups-174 > div:nth-child(1) > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > div:nth-child(3) > button'
      )
    )
    .click()
  await driver.sleep(12000)
})

Then('It shall show me the products of that color only', async () => {
  let class1 = await driver
    .findElement(
      By.css(
        '#__next > main > div > div.makeStyles-root-119 > div.PrivateHiddenCss-xsDown-31 > div > div > div.RSFFilter-facetGroups-174 > div:nth-child(1) > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > div:nth-child(3) > button > div.RSFImage-root-143.RSFImage-contain-146.RSFImage-fill-147 > img'
      )
    )
    .getAttribute('alt')

  let class2 = await driver
    .findElement(
      By.css(
        '#item-0 > div > div.makeStyles-info-142 > div.RSFProductOptionSelector-root-148 > div:nth-child(3) > div > button > div.RSFSwatchProductOption-disabled-161.RSFImage-root-143.RSFImage-contain-146.RSFImage-fill-147 > img'
      )
    )
    .getAttribute('alt')
  assert.equal(class1, class2)
  await driver.findElement(By.css('#item-0 > div > div:nth-child(1) > a > div > img')).click()
  await driver.sleep(15000)
  await driver
    .findElement(
      By.css(
        '#__next > main > div > form > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4 > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-7 > div > div:nth-child(1) > div.RSFProductOptionSelector-root-148 > div:nth-child(3) > div > button > div.RSFSwatchProductOption-strikeThrough-162.RSFSwatchProductOption-defaultStrikeThrough-163'
      )
    )
    .isDisplayed()
})

When('I select a specific size', async () => {
  await driver
    .findElement(
      By.css(
        '#__next > main > div > div.makeStyles-root-87 > div.PrivateHiddenCss-xsDown-31 > div > div > div.RSFFilter-facetGroups-165 > div:nth-child(2) > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > button:nth-child(4)'
      )
    )
    .click()
  await driver.sleep(12000)
})

Then('It shall show me products of that size only', async () => {
  await driver.findElement(By.css('#item-0 > div > div:nth-child(1) > a > div > img')).click()
  await driver.sleep(15000)
  await driver
    .findElement(
      By.css(
        '#__next > main > div > form > div.MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-4 > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-6.MuiGrid-grid-md-7 > div > div:nth-child(2) > div.RSFProductOptionSelector-root-149 > div:nth-child(4) > div'
      )
    )
    .isDisplayed()
})

When('I check old checkbox', async () => {
  await driver
    .findElement(
      By.css(
        '#__next > main > div > div.makeStyles-root-87 > div.PrivateHiddenCss-xsDown-31 > div > div > div.RSFFilter-facetGroups-165 > div:nth-child(3) > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > label:nth-child(2) > span.MuiButtonBase-root.MuiIconButton-root.PrivateSwitchBase-root-192.MuiCheckbox-root.MuiCheckbox-colorPrimary.MuiIconButton-colorPrimary > span.MuiIconButton-label > input'
      )
    )
    .click()
  await driver.sleep(12000)
})

Then('It shall show me old products only', async () => {
  let num1 = parseInt(
    await driver
      .findElement(
        By.css(
          '#__next > main > div > div.makeStyles-root-87 > div.PrivateHiddenCss-xsDown-31 > div > div > div.RSFFilter-facetGroups-165 > div:nth-child(3) > div.MuiCollapse-container.MuiCollapse-entered > div > div > div > div > div > label:nth-child(2) > span.MuiTypography-root.MuiFormControlLabel-label.MuiTypography-body1 > div > span.MuiTypography-root.RSFCheckboxFilterGroup-matches-190.MuiTypography-caption'
        )
      )
      .getText()
  )

  let num2 = parseInt(
    await driver
      .findElement(
        By.css(
          '#__next > main > div > div.makeStyles-root-87 > div.MuiGrid-root.MuiGrid-container > div:nth-child(6) > span > span'
        )
      )
      .getText()
  )
  assert.notEqual(num1, num2)
})

When('I press the Cart Icon', async () => {
  await driver
    .findElement(
      By.css(
        '#__next > header > div > div > a.MuiButtonBase-root.MuiIconButton-root.RSFCartButton-link-24.MuiIconButton-colorInherit'
      )
    )
    .click()
  await driver.sleep(12000)
})

Then('I am redirected to the cart’s page', async () => {
  await driver.findElement(By.css('#__next > main > div > div:nth-child(1) > h6')).isDisplayed()
})

Given('I add a product to cart', async () => {
  await driver.get('http://localhost:3000/s/1')
  await driver.sleep(12000)
  await driver.findElement(By.id('item-0')).click()
  await driver.sleep(12000)
  await driver.findElement(By.css('.makeStyles-noShadow-207')).click()
  await driver.sleep(12000)
})

When('I am on cart page', async () => {
  await driver.get('http://localhost:3000/cart')
  await driver
    .manage()
    .window()
    .maximize()
  await driver.sleep(12000)
})

Then(
  'I am shown the specific product\\(s) price\\(s) and the Total cost on the cart page',
  async () => {
    await driver
      .findElement(
        By.css(
          '#__next > main > div > div:nth-child(2) > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-8 > div:nth-child(1) > div > div:nth-child(2) > p'
        )
      )
      .isDisplayed()
    await driver
      .findElement(
        By.css(
          '#__next > main > div > div:nth-child(2) > div > div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-12.MuiGrid-grid-sm-4 > div > div.makeStyles-root-119 > h6'
        )
      )
      .isDisplayed()
  }
)
