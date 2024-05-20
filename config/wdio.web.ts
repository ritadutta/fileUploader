import { config } from "./wdio.conf";


config.specs = [

   
    "../test/specs/Sanity/FileUploadUserFlow.ts"
];

// config.suites ={
  // "../test/specs/Sanity",
// }


config.capabilities = [
   {
     browserName: "chrome",
     browserVersion: "latest",
     acceptInsecureCerts: true,
    'goog:chromeOptions': {
          args: ["--headless", "user-agent=...","--disable-gpu","--window-size=1440,735"]
    }
   },
   
  //    {
  //     browserName: "edge",
  //     browserVersion: "latest",
  //  },
  // {
  //   browserName: "firefox",
  //   // browserVersion: "latest",
  // }
];


exports.config = config;
