# Go demo app
My frist ReactNative app that I build to learn how ReactNative works. 
I was in Miami that time and looked at the glitchy Miami Go app and asked myself, how hard to build app like that for a public transit.

**Disclaimer**: do not use this as a ticket, QR code content is invalid. This is just for a demo purposes.

![](assets/Logo.jpg)

# How to build

1. Install android-studio
2. Export environment
```shell
export JAVA_HOME="/Applications/Android Studio.app/Contents/jbr/Contents/Home/"
export PATH="/Applications/Android Studio.app/Contents/jbr/Contents/Home/bin:$PATH"
export ANDROID_HOME=~/Library/Android/sdk/
export ANDROID_SDK=~/Library/Android/sdk/
```

3. Develop/debug `yarn android`
4. Build `cd android; ./gradlew assembleRelease`
5. Install `adb install ./app/build/outputs/apk/release/app-release.apk`

## Developing

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
