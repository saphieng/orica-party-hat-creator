# orica-party-hat-creator
 This software builds party hat USB sticks for LOADPlus deployment

## To build for development

- **in a terminal window** -> npm start

Voila! You can use your Angular + Electron app in a local development environment with hot reload !

The application code is managed by `main.ts`. In this sample, the app runs with a simple Angular App (http://localhost:4200) and an Electron window.
The Angular component contains an example of Electron and NodeJS native lib import.
You can disable "Developer Tools" by commenting `win.webContents.openDevTools();` in `main.ts`.

## Included Commands

|Command|Description|
|--|--|
|`npm run ng:serve:web`| Execute the app in the browser |
|`npm run build`| Build the app. Your built files are in the /dist folder. |
|`npm run build:prod`| Build the app with Angular aot. Your built files are in the /dist folder. |
|`npm run electron:local`| Builds your application and start electron
|`npm run electron:linux`| Builds your application and creates an app consumable on linux system |
|`npm run electron:windows`| On a Windows OS, builds your application and creates an app consumable in windows 32/64 bit systems |
|`npm run electron:mac`|  On a MAC OS, builds your application and generates a `.app` file of your application that can be run on Mac |

## DiskPart Commands
These are the steps in the dikpart sequence that will setup up the drive with the right partitions:
1. `select disk n` where n is the disk number of the target media
2. `clean`
3. `create partition primary size=1000` creates the Acronis side with 1000mb size
4. `create partition primary` creates the second parition for the image and it will consume the rest of the disk
5. `select partition 1`
6. `format fs=fat32 label=Acronis`
7. `select partition 2`
8. `format fs=ntfs quick label=IMAGES`
9. `exit`

