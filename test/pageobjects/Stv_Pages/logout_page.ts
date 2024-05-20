import Utils from '@test/Utils/assertions'
import cred from '@test/testdata/UserCredential.json'


class LogoutPage {
 
  public get signOutButton() {
    return $('//button[contains(@class,"css-5gg78w")]');
  }

  
  /****************************************
     * User is able to login successfully through cookies banner using valid credentials
     * @param username
     * @param password
     * @param type
     * ***************************************
     */
  public async logoutPage() {
    (await this.signOutButton).click();
    await browser.pause(10000);
  }

}
export default new LogoutPage();