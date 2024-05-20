import AllureReporter from '@wdio/allure-reporter'
import exp from 'constants';
import { Key } from 'webdriverio';

let day, year, month, monthAbbreviation;
class Assertion {

    addLog(log: string) {
        AllureReporter.addStep(`STEP: ${log}`)
        // console.log(`STEP: ${log}`)
    }

    toContain(actual: string, expected: string) {
        expect(actual).toContain(expected)
        // this.addLog(`Assertion >> ${actual} to contain ${expected}`)
        console.log(`assertion >> ${actual} to contain ${expected} `)
    }

    toContainGenericAssertion(actual: string, expected: string) {
        expect(actual).toContain(expected)
        // this.addLog(`Assertion >> ${actual} to contain ${expected}`)
        driver.logUtil("PASS", "assertion >> " + '"' + actual + '"' + " to contain " + '"' + expected + '"' + " are matched")
    }

    toEqualAssertionTitle(actual: string, expected: string){
        expect(actual).toEqual(expected)
        driver.logUtil("PASS", "Title >> " + '"' + actual + '"' + " equal to " + '"' + expected + '"' + " are matched")
    }

    async genericDisabled(element: Promise<WebdriverIO.Element>) {
        const isDisabled = await (await element).getAttribute('disabled');
        expect(isDisabled).toEqual('true');
    }

    async genericEnabled(element: Promise<WebdriverIO.Element>) {
        const isDisabled = await (await element).getAttribute('enabled');
        expect(isDisabled).toEqual('true');
    }

    async genericGetText(element: Promise<WebdriverIO.Element>) {
        if ((await element).isDisplayed) {
            const text = await (await element).getText();
            driver.logUtil("INFO", "Fetched the text : " + text)
        } else {
            driver.logUtil("FAIL", "Element not displayed to fetch text")
        }
    }

    /**
     * Method to check if the element is displayed and clicked
     * @param element 
     * @param validationText 
     */
    public async verifyElementPresentAndClick(element: Promise<WebdriverIO.Element>, validationText) {
        if (await (await (await element).isDisplayed())) {
            await (await element).click();
            await driver.logUtil("PASS", validationText + " is displayed and clicked")
        } else {
            await driver.logUtil("FAIL", validationText + " is not displayed and clicked")
        }
    }

    /**
        * Method to check if the element is displayed
        * @param element 
        * @param validationText 
        */
    public async isDisplayedGeneric(element: Promise<WebdriverIO.Element>, validationText) {
        if (await (await (await element).isDisplayed())) {
            await driver.logUtil("PASS", validationText + " is displayed")
        } else {
            await driver.logUtil("FAIL", validationText + " is not displayed ")
        }
    }
    

    /**
       * Method to check if the element is clicked
       * @param element 
       * @param validationText 
       */
    public async genericClick(element: Promise<WebdriverIO.Element>, validationText) {
        if (await (await (await element).waitForDisplayed())) {
            await (await element).click();
            await driver.logUtil("PASS", validationText + " is clicked")
        } else {
            await driver.logUtil("FAIL", validationText + " is not clicked")
        }
    }



    /**
      * Method to send the keys to an element 
      * @param element 
      * @param validationText 
      */
    public async genericSetvalue(element: Promise<WebdriverIO.Element>, inputString, validationText) {
        if (await (await (await element).isDisplayed())) {
            await (await element).click();
            await (await element).setValue(inputString)
            await driver.logUtil("PASS", "Entered the value " + '"' + inputString + '"' + " into " + validationText)
        } else {
            await driver.logUtil("FAIL", "Entered the value " + '"' + inputString + '"' + " into " + validationText)
        }
    }

}
export default new Assertion()
