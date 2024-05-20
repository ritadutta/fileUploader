import AllureReporter from '@wdio/allure-reporter'
import exp from 'constants';
import { Key } from 'webdriverio';
const axios = require("axios");

class APIRequests {

   public async GET(url: string, accessToken: string) {
  try {
    const res = await axios.get(url, {
      headers: {
        'accept': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error('Error occurred:', error);
    throw error; // re-throw the error to handle it outside of this function if needed
  }
}

}
export default new APIRequests()
