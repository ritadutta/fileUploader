import LoginPage from '../../pageobjects/Stv_Pages/login_page';
import logout from '../../pageobjects/Stv_Pages/logout_page';
import datasource from '../../pageobjects/Stv_Pages/dataSource_page';
import fileupload from '../../pageobjects/Stv_Pages/fileUpload_page';
import homePage from '../../pageobjects/Stv_Pages/homePage';

describe('Login User Flow', () => {
    beforeEach(async () => {
        await browser.url("/");
        await browser.maximizeWindow();
    });

    it('Verify SignIn Functionality', async () => {
        await LoginPage.loginPage();
        await logout.logoutPage();
    })

    it('Verify Home Page Functionality', async () => {
        await LoginPage.loginPage();
        await homePage.homePageValidation();
        await logout.logoutPage(); 
    })

    it('Verify user is able to upload a file', async () => {
        await LoginPage.loginPage();
        await datasource.dataSourcePageVisitBloomington();
        // await fileupload.invalidFileUpload();
        await fileupload.fileUploadPageVisitBloomigton();
        await logout.logoutPage();
    });   

    it('Verify upload another data set button',async () =>{
        await LoginPage.loginPage();
        await datasource.dataSourcePageVisitBloomington();
        await fileupload.fileUploadPageVisitBloomigton();
        await fileupload.anotherdatasetButton();
        await datasource.dataSourcePageCharlotteRegional();
        await fileupload.fileUploadPageCharlotteRegional();
        await logout.logoutPage();
    });

    it('Verify Back Button functionality', async () => {
        await LoginPage.loginPage();
        await homePage.backButtonFunctionality();
        await logout.logoutPage();
    })

    it('Verify by uploading invalid file format', async () =>{
        await LoginPage.loginPage();
        await datasource.dataSourcePageVisitBloomington();
        await fileupload.invalidFileUpload();
        await logout.logoutPage();
    })

    it('Validating of closing File Uploader Page', async () => {
        await LoginPage.loginPage();
        await homePage.gotoMyZartico();

    })


    afterEach(async () => {
            await browser.pause(2000)
            // await browser.reloadSession();
        });
})