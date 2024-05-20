import Utils from '@test/Utils/assertions'
import { parseJSON } from 'date-fns';
import * as fs from 'fs';
import partner from '@test/testdata/partner.json'

class DataSourcePage {

  public get selectPartnerNameDropdown() {
    return $('//button[contains(@class , "css-1xfrg50")]');
  }

  public get searchPartner() {
    return $('//input[contains(@type,"text")]');
  }

  public get closeButton() {
    return $('//*[text()="close"]');
  }

  public get partner() {
    return $('//ul[contains(@id,"autocomplete-list")]');
  }

  public get datasourceDropdown() {
    return $('//div[contains(@class , "css-qiwgdb")]');
  }

  public get nextButton(){
    return $('//button[contains(@class,"css-xp34na")]');
  }

  public get strMonthlyDatasource() {
    return $('//li[contains(@data-value,"str_parser.STRMonthlyParser")]');
  }

  public get strWeeklyDatasource() {
    return $('//li[contains(@data-value,"str_parser.STRWeeklyParser")]');
  }

  public get title() {
    return $('//div[@class="SelectFile"]/child::h1');
  }

  public get infoIcon(){
    return $('//*[contains(@class,"toolTip")]');
  }

  public get dataSourceinfo(){
    return $('//*[contains(@class,"css-1otzavh")]');
  }
  /****************************************
     * User is able to login successfully through cookies banner using valid credentials
     * @param username
     * @param password
     * @param type
     * ***************************************
     */
  public async dataSourcePageVisitBloomington() {
    await browser.pause(2000);
    await Utils.isDisplayedGeneric(this.infoIcon,"Info icon");
    await this.infoIcon.moveTo();
    await browser.pause(1000);
    await (await this.dataSourceinfo).isDisplayed();
    if((await this.selectPartnerNameDropdown).isDisplayed()){
    await Utils.genericClick(this.selectPartnerNameDropdown,"Partner name dropdown arrow");
    await browser.pause(1000);
    await Utils.isDisplayedGeneric(this.searchPartner,"Search Bar");
    await Utils.genericSetvalue(this.searchPartner,partner.clientName1,"Search bar");
    await browser.pause(1000);
    await Utils.isDisplayedGeneric(this.partner,"Partner name");
    await Utils.genericClick(this.partner,"Visit Bloomington partner");
    await browser.pause(2000);
    await Utils.genericClick(this.selectPartnerNameDropdown,"Partner name dropdown arrow");
    await Utils.isDisplayedGeneric(this.closeButton,"Close icon");
    await Utils.genericClick(this.closeButton,"close icon");
    await Utils.genericDisabled(this.nextButton);
    await Utils.genericClick(this.datasourceDropdown,"Data Source dropdown");
    await Utils.isDisplayedGeneric(this.strMonthlyDatasource,"STR - Monthly Data Source");
    await Utils.genericClick(this.strMonthlyDatasource,"STR - Monthly Data Source");
    await Utils.genericClick(this.nextButton,"Next Button");
    await browser.pause(5000);
    const title= await (await this.title).getText();
    console.log("**********title",title);
    await Utils.toEqualAssertionTitle(title,"Upload your STR - Monthly File");
    }
  }

  public async dataSourcePageCharlotteRegional() {
    await browser.pause(2000);
    if((await this.selectPartnerNameDropdown).isDisplayed()){
    await Utils.genericClick(this.selectPartnerNameDropdown,"Partner name dropdown arrow");
    await browser.pause(1000);
    await Utils.isDisplayedGeneric(this.searchPartner,"Search Bar");
    await Utils.genericSetvalue(this.searchPartner,partner.clientName2,"Search bar");
    await browser.pause(1000);
    await Utils.isDisplayedGeneric(this.partner,"Partner name");
    await Utils.genericClick(this.partner,"Charlotte Regional Visitor Authority");
    await browser.pause(2000);
    await Utils.genericDisabled(this.nextButton);
    await Utils.genericClick(this.datasourceDropdown,"Data Source dropdown");
    await Utils.isDisplayedGeneric(this.strWeeklyDatasource,"STR - Weekly Data Source");
    await Utils.genericClick(this.strWeeklyDatasource,"STR - Weekly Data Source");
    await Utils.genericClick(this.nextButton,"Next Button");
    await browser.pause(5000);
    }
  }

}
export default new DataSourcePage();