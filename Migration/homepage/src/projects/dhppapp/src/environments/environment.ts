// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseDataUrl: 'https://kfngoe.github.io/homepage-data/dynamicData/',
  pdfDataUrl: 'https://github.com/KfNGOe/lfs-data/raw/main/homepage/pdf/',
  editorNames: {
    aktuelles: 'aktuelles',
    mitgliederVorstand: 'mitglieder-vorstand',
    mitglieder: 'mitglieder',
    projekteLaufend: 'projekte-laufend',
    projekteAssoziierte: 'projekte-assoziierte',
    projekteAbgeschlossen: 'projekte-abgeschlossene',
    veroeffentlichungen: 'veroeffentlichungen'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
