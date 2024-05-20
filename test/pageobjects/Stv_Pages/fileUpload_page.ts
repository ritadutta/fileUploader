import Utils from '@test/Utils/assertions'
import cred from '@test/testdata/UserCredential.json'
import { parseJSON } from 'date-fns';
import { th } from 'date-fns/locale';
import fs from "fs";
import path from 'path';

class FileUploadPage {
 
  public get selectAFileHeading() {
    return $('//div[@class="SelectFile"]/child::h3');
  }

  public get fileInput(){
    return $('//*[@id="fileInput"]');
  }

  public get submitButton() {
    return $('//button[text()="Submit"]');
  }

  public get heading() {
    return $('//h1');
  }

  public get errorMsg(){
    return $('//div[contains(@class,"css-1xsto0d")]');
  }
  
  public get uploadAnotherDataSet(){
    return $('//button[contains(@class,"css-5gg78w") and text()="Upload Another Data Set"]');
  }
  /****************************************
     * User is able to login successfully through cookies banner using valid credentials
     * @param username
     * @param password
     * @param type
     * ***************************************
     */
  public async fileUploadPageVisitBloomigton() {
    await browser.pause(1000);
    await Utils.isDisplayedGeneric(this.selectAFileHeading,"Select a File Heading");
    const heading = await (await this.selectAFileHeading).getText();
    await Utils.toEqualAssertionTitle(heading,"Select a File info");
    await browser.pause(1000);
    const filePath = './test/testdata/BLOOMINGTON_TEST.xls';
    const remoteFilePath = await browser.uploadFile(filePath);
    await (await this.fileInput).addValue(remoteFilePath);
    await browser.pause(3000);
    await Utils.genericClick(this.submitButton,"Submit button");
    await browser.pause(2000);
    const title = await (await this.heading).getText();
    console.log("File uploaded successfully",title);
    //await Utils.toEqualAssertionTitle(title,"Upload Complete");
    (await this.uploadAnotherDataSet).isDisplayed();
  }

  public async fileUploadPageCharlotteRegional() {
    await browser.pause(1000);
    const filePath = './test/testdata/CHARLOTTE_REGIONAL_TEST.xls';
    const remoteFilePath = await browser.uploadFile(filePath);
    await (await this.fileInput).addValue(remoteFilePath);
    await browser.pause(3000);
    await Utils.genericClick(this.submitButton,"Submit button");
    await browser.pause(2000);
    const title = await (await this.heading).getText();
    console.log("File uploaded successfully",title);
    //await Utils.toEqualAssertionTitle(title,"Upload Complete");
    //await Utils.isDisplayedGeneric(this.uploadAnotherDataSet,"Upload Another dataset button");
 }

  public async invalidFileUpload(){
    await browser.pause(1000);
    const filePath = './test/testdata/test.txt';
    const remoteFilePath = await browser.uploadFile(filePath);
    await (await this.fileInput).addValue(remoteFilePath);
    await browser.pause(2000);
    const errmsg = await (await this.errorMsg).getText();
    await Utils.toEqualAssertionTitle(errmsg,"File type not allowed. Please only add .csv, .xlsx, .xls, .doc, .zip, .pdf");
    await browser.pause(1000);
  }

}
export default new FileUploadPage();