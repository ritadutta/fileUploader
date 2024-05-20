import {ChainablePromiseElement} from "webdriverio";

declare global {
  namespace WebdriverIO {
    interface Browser {
      findByTextContains: (partialText) => Promise<string>;
      logUtil: (status: string, message: any) => Promise<void>;
      //verifyElementPresentThenClick: (elem :ChainablePromiseElement<Promise<WebdriverIO.Element>>, validationText) => Promise<void>;
    }
    interface Element {
      isDisplayedGeneric: (nameOfTheElement) => Promise<string>;
      genericClick: (validationText) => Promise<void>;
      verifyElementPresentThenClick: (validationText) => Promise<void>;
      genericSetvalue: (inputString, fieldName) => Promise<void>;
      logUtil: (status: string, message: string) => Promise<void>;
      swipeUntilElemetDisplayed: (direction: string) => Promise<void>;
      severityOfTC: (severityLevel: string) => Promise<void>;
    }

  }
}

export {};
