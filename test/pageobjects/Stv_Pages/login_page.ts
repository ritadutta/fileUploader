import assertions from '@test/Utils/assertions';
import Utils from '@test/Utils/assertions'
import cred from '@test/testdata/UserCredential.json'
import { assert } from 'console';
import { addSeconds } from 'date-fns';
import * as fs from 'fs';
import { expect } from 'chai';

export var accessToken;
class LoginPage {
  public get signINButton() {
    return $('//button[contains(@class, "css-xp34na")]');
  }

  public get emailIDField() {
    return $('#input28');
  }
  
  public get passwordField(){
    return $('#input36');
  }

  public get signInZarticoButton(){
    return $('//*[@type="submit"]');
  }

  public get oktaPushButton(){
    return $('//*[@aria-label="Select to get a push notification to the Okta Verify app."]');
  }

  public get title(){
    return $('//div[@class="actionSection"]/child::h1');
  }

  public get errorForInvalidCred(){
    return $('//*[@class="okta-form-infobox-error infobox infobox-error"]/child::p');
  }

  public get errorForEmptyEmail(){
    return $('//*[contains(@class,"o-form-input o-form-has-errors")]/child::p');
  }

  public get errorForEmptyPassword(){
    return $('//*[contains(@class,"o-form-input o-form-has-errors")]/child::p');
  }


  /****************************************
     * User is able to login successfully through cookies banner using valid credentials
     * @param username
     * @param password
     * @param type
     * ***************************************
     */
  public async loginPage() {
    await Utils.isDisplayedGeneric(this.signINButton,"File Uploader Sign In Button");
    await Utils.genericClick(this.signINButton,"File Uploader Sign In button");
    await browser.pause(1000);
    (await this.emailIDField).setValue(cred.valid.email);
    (await this.passwordField).setValue(cred.valid.Password);
    await browser.pause(1000);
    await Utils.genericClick(this.signInZarticoButton,"Zartico Sign In Button");
    await browser.pause(3000);
    const title= await (await this.title).getText();
    await Utils.toEqualAssertionTitle(title,"What do you want to add to your ZDOS?");
    // (await this.oktaPushButton).click();
     await browser.pause(5000);
    
  }

  
  public async getAllKeysFromApplicationTab(){
    const localStorageValues = browser.execute(() => {
        // Access local storage
        const localStorage = window.localStorage;
        
        // Retrieve all keys and values
        const keys = Object.keys(localStorage);
        const values = {};
        keys.forEach(key => {
            values[key] = localStorage.getItem(key);    
        });
        
        // Return key-value pairs
        // type valuesType= typeof values;
        // console.log("*************** Type is",typeof valuesType);
       
        return values;
    });

    return localStorageValues;
  }

  public async getAccessToken(){
    console.log("Access token ******");
    const jsonValue = await this.getAllKeysFromApplicationTab();

    // Check if jsonValue is not empty or undefined
    if (jsonValue !== null && jsonValue !== undefined) {
    //     // Parse the JSON string into an object
        const jsonValueObject = JSON.parse(jsonValue['okta-token-storage']);

    // Access the accessToken property of the accessToken object
    accessToken = jsonValueObject.accessToken.accessToken;
    // Store the access token in a file
    fs.writeFileSync('accessToken.txt', accessToken, 'utf-8');
          return accessToken;
    // } else {
    //     // Handle the case where jsonValue is empty or undefined
    //     console.error("No JSON value returned from getAllKeysFromApplication");
    //     return null; // or throw an error, depending on your error handling strategy
    }
    
  }

}
export default new LoginPage();