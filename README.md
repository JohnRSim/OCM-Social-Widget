![social](https://user-images.githubusercontent.com/364208/189951479-f75433ad-52b8-4ade-89d5-8a50e932c3eb.png)

# OCM-Social-Widget - In Progress

Free Custom Component built with Svelte for searching and connecting with users in OCM - WIP....

# Check the blog for the latest updates

https://bitmapbytes.com/free-oracle-content-management-social-widget/

# Guide
Authentication currently uses OAuth2 against IDCS you will need to setup an IDCS application first - Please use this guide
https://docs.oracle.com/en/cloud/paas/content-cloud/solutions/integrate-oracle-content-management-using-oauth.html#GUID-49F31EE7-D7C0-4EE4-A9E8-B610A7E816B1

# CORS
If you are runnng localhost you will need to disable CORS I use the following flag with chrome and create a custom user dir "ChromeFiles" without this --disable-web-security will not work.
```
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --allow-running-insecure-content --disable-web-security --user-data-dir=C:\ChromeFiles
```
If you have this running on a domain you can update your CORS settings on OCM 

_System >> Security_

And add the front and backchannel with your domain.

![image](https://user-images.githubusercontent.com/364208/190382422-750d662a-03c1-49de-b765-a31260e14326.png)


# Configuration
Custom Configurations for the build you will need to update.

### /src/lib/config/oce.json
```
{
    "contentServer": "https://<OCMInstance>.cec.ocp.oraclecloud.com"
}
```

### /src/lib/config/idcs.json
```
{
    "idcsUrl": "https://<IDCSInstance>.identity.oraclecloud.com",
    "clientId": "<IDCS_APP_CLIENTID>",
    "clientSecret": "<IDCS_APP_SECRETKEY>",
    "oauthScopeUrl": "<IDCS_APP_SCOPE>"
}
```

# Build
Once you have the configuration files updated run the build script this will build the webcomponents into the dist folder
```
npm run build
```

# Deploy Headless
In the dist folder insert script into the html head tag or import and then reference the custom element.

Props info coming soon..

```
<ocm-social-widget></ocm-social-widget>
```

# Deploy OCM Sites
In the component folder download the zipped package and upload into OCM as a new component. (Coming Soon)...

# Notes
- App UI & Headless integration (Complete)
- OCM Sites Component Sample (WIP)

## SVG Social Widget Logo
The logo relies on the Nunito font you will need to define that in your CSS or use the prop to define a custom image.
https://fonts.google.com/specimen/Nunito


![auth](https://user-images.githubusercontent.com/364208/190133726-8b038ebf-26ae-4443-a925-69f4b9183a7b.png)
