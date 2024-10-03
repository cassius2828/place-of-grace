# Place of Grace Inc Website

## Stack
### Frontend: 
- React (Vite)
- Styles (Sass)
### Backend:
- Netlify Serverless Functions

## Host
- Netlify (Current)

## Domain Register
- Network Solutions

## APIs
- Outlook Mail API (Azure)

## Post-processors
- brotli compression (may not be needed with netlify CDN)
- autoprefixer
- postcss


## Previous Site Info
- Cockpit CMS (admin panel can be accessed through domain/cockpit)
- GoDaddy Host 

## Future Developers / Maintainers

- To work on the contact form functionality you need to be able to have adequate permissions in the Azure Portal and work on the configurations within the app registration and users. The variables used in the functions code are stored safely in the netlify account created for placeofgrace. Note, that the secret must be regenerated, as it is not able to be seen in the App Registration after you navigate from the screen in creation. You must recreate the secret if you are unable to get the value for the current one. There has not been a refresh token set up yet, although upon each request to the outlook api it generates a new token, so it is not clear if a refresh token must be configured. 
- No extensive utlitty classes have been created and only the necessary bootstrap styles were imported for use of the accordian. Most styles are done in a modular fashion using sass @use and @forwards
