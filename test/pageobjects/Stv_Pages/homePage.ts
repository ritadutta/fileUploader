import Utils from '@test/Utils/assertions'
import { parseJSON } from 'date-fns';
import * as fs from 'fs';
import partner from '@test/testdata/partner.json'

class HomePage {
    public get zarticoIcon(){
        return $('//*[@alt="Zartico Logo Horizontal"]');
    }

    public get signOutButton() {
        return $('//button[contains(@class,"css-5gg78w")]');
    }

    public get selectPartnerNameDropdown() {
        return $('//button[contains(@class , "css-1xfrg50")]');
    }

    public get uploadDataSetHeading(){
        return $('//h2');
    }

    public get selectAdataSourceStep(){
        return $('(//span[contains(@class,"css-h2cmlr")])[1]');
    }

    public get uploadYourFileStep(){
        return $('(//span[contains(@class,"css-h2cmlr")])[2]');
    }

    public get completeStep(){
        return $('(//span[contains(@class,"css-h2cmlr")])[3]');
    }

    public get rightSideHeading(){
        return $('//h1');
    }

    public get selectDataSourceHeading(){
        return $('//h3');
    }

    public get infoIcon(){
        return $('//*[contains(@class,"toolTip")]');
    }

    public get dataSourceinfo(){
        return $('//*[contains(@class,"css-1otzavh")]');
    }

    public get datasourceDropdown() {
        return $('//div[contains(@class , "css-qiwgdb")]');
    }

    public get nextButton(){
        return $('//button[contains(@class,"css-xp34na")]');
    }

    public get searchPartner() {
        return $('//input[contains(@type,"text")]');
    }

    public get strMonthlyDatasource() {
        return $('//li[contains(@data-value,"str_parser.STRMonthlyParser")]');
    }

    public get backButton() {
        return $('(//button[contains(@class,"css-5gg78w")])[2]');
    }

    public get gotoMyZarticoHyperlink() {
        return $('//a[contains(@class,"css-5gg78w")]');
    }

    public async homePageValidation(){
        await browser.pause(1000);
        Utils.isDisplayedGeneric(this.zarticoIcon,"Zartico Icon");
        Utils.isDisplayedGeneric(this.signOutButton,"Sign Out button");
        Utils.isDisplayedGeneric(this.selectPartnerNameDropdown,"Patner Name dropdown");
        Utils.isDisplayedGeneric(this.uploadDataSetHeading,"Upload Data set heading in left side");
        Utils.isDisplayedGeneric(this.selectAdataSourceStep,"Selecting data soure step 1");
        Utils.isDisplayedGeneric(this.uploadYourFileStep,"Upload your file step 2");
        Utils.isDisplayedGeneric(this.completeStep,"Complete step 3");
        Utils.isDisplayedGeneric(this.rightSideHeading,"What do you want to add to your ZDOS? tile");
        Utils.isDisplayedGeneric(this.selectDataSourceHeading,"Select a Data Source sub title with information icon");
        Utils.isDisplayedGeneric(this.infoIcon,"Information Icon");
        await this.infoIcon.moveTo();
        await browser.pause(1000);
        await (await this.dataSourceinfo).isDisplayed();
        await Utils.genericDisabled(this.nextButton);
        await browser.pause(1000);
    }

    public async backButtonFunctionality(){
        await Utils.genericClick(this.datasourceDropdown,"Data Source dropdown");
        await Utils.genericClick(this.strMonthlyDatasource,"STR - Monthly Data Source");
        await Utils.genericClick(this.nextButton,"Next Button");
        await browser.pause(5000);
        await Utils.genericClick(this.backButton,"Back button")
        await Utils.isDisplayedGeneric(this.datasourceDropdown,"Data Source dropdown");
    }

    public async gotoMyZartico(){
        (await this.gotoMyZarticoHyperlink).isDisplayed();
        await Utils.genericClick(this.gotoMyZarticoHyperlink,"Go to My Zartico link");
    }
    
}

export default new HomePage();