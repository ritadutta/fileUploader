import LoginPage from '../../pageobjects/Stv_Pages/login_page';
import logout from '../../pageobjects/Stv_Pages/logout_page';
import datasource from '../../pageobjects/Stv_Pages/dataSource_page';
import fileupload from '../../pageobjects/Stv_Pages/fileUpload_page';

describe('Login User Flow', () => {
    beforeEach(async () => {
        await browser.url("/");
        await browser.maximizeWindow();
    });

     it('Verify user is able to upload a file', async () => {
     await LoginPage.loginPage();
     await datasource.dataSourcePageVisitBloomington();
     //await datasource.dataSourcePageCharlotteRegional();
     await fileupload.invalidFileUpload();
     await fileupload.fileUploadPageVisitBloomigton();
     //await fileupload.fileUploadPageCharlotteRegional();
     await logout.logoutPage();
    });   
     
    afterEach(async () => {
            await browser.pause(2000)
            // await browser.reloadSession();
        });
})