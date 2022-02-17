# Astorogram

This app displays pictures from [Astronomy Picture of the Day](https://apod.nasa.gov/apod/astropix.html) provided by [NASA API](https://api.nasa.gov/).

The app consists of the following pages

- Sign-in: the landing page
- Master List: displaying all pictures from API
- Detail: displaying one picture that is selected in the master list page

## Installation and Setup Instructions

Clone down `main` repository. You will need `npm` and `node` installed grobally on your local machine.

Get your API key and set it up:

1. Generate API key in [NASA API portal](https://api.nasa.gov/).

2. Set up the directory named `environment` in `src` directory.</br>
   Create `environment.prod.ts` and `environment.ts` files in `environment` directory.</br>
   Write the following code in the files created above.

```ts
export const environment = {
  production: false,
  apiKey: "<YOUR_API_KEY>",
};

// replace <YOUR_API_KEY> with your api key from NASA API portal.
```

Installation:

`npm install`

To start a server:

`ng serve`

To visit the app:

Enter `http://localhost:4200` on the browser you like.

## Technology

- ionic
- Angular
- SCSS
