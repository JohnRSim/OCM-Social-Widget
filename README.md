![social](https://user-images.githubusercontent.com/364208/189951479-f75433ad-52b8-4ade-89d5-8a50e932c3eb.png)

# OCM-Social-Widget - In Progress

Free Custom Component built with Svelte for searching and connecting with users in OCM - WIP....

# Check the blog for the latest updates

https://bitmapbytes.com/free-oracle-content-management-social-widget/

# Guide
Authentication currently uses OAuth2 against IDCS you will need to setup an IDCS application first - Please use this guide
https://docs.oracle.com/en/cloud/paas/content-cloud/solutions/integrate-oracle-content-management-using-oauth.html#GUID-49F31EE7-D7C0-4EE4-A9E8-B610A7E816B1

# Cors 
If you are runnng localhost you will need to disable CORS I use the following flag with chrome and create a custom user dir "ChromeFiles" without this --disable-web-security will not work.
```
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --allow-running-insecure-content --disable-web-security --user-data-dir=C:\ChromeFiles
```
If you have this running on a domain you can update your CORS settings on OCM 
System >> Security
And add the front and backchannel with your domain.

# Configuration
Coming soon where to add your IDCS and app details to enable authentication.

# Deploy Headless
In the dist folder insert script into the html head tag or import and then reference the custom element.

Props info coming soon..

```
<ocm-social-widget></ocm-social-widget>
```

# Deploy OCM Sites
In the component folder download the zipped package and upload into OCM as a new component.

# Notes
- Draft UI in place
- Auth Complete
- working on returning followers and following from OCM

![auth](https://user-images.githubusercontent.com/364208/190133726-8b038ebf-26ae-4443-a925-69f4b9183a7b.png)
