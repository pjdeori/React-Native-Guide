# React Native Guide
## Overview
A concise guide for setting up the React Native development environment and project, including solutions for common issues.

## Environment Versions:
*These versions were used and tested during the development of this guide.*

- windows 11 x64
- node-v25.2.1-x64
- jdk-17.0.12_windows-x64
- android-studio-2025.2.2.8-windows
- android sdk versions: 
    - 36.1.0
    - 36.0.0
    - 35.0.0
- ndk (side-by-side):
    - 27.1.12297006

## Environment Setup 
### 1. Install [Node.js](https://nodejs.org/en/download/current)

### 2. Install [JDK 17.0.12](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)

### 3. Install [Android Studio](https://developer.android.com/studio)

#### Configure the ANDROID_HOME environment variable:
1. Open `Control Panel`.
2. Click on `User Accounts`, then click `User Accounts` again.
3. Click on `Change my environment variables`.
4. Click on `New...` 
5. Create a new `ANDROID_HOME` user variable that points to `Android SDK`:  
``` 
%LOCALAPPDATA%\Android\Sdk 
```
#### Add platform-tools to Path:
1. Open `Control Panel`.
2. Click on `User Accounts`, then click `User Accounts` again.
3. Click on `Change my environment variables`.
4. Select `Path` variable.
5. Click `Edit`.
6. Click `New`.
7. Add to list the path to `platform-tools`:
```
%LOCALAPPDATA%\Android\Sdk\platform-tools
```

## Version Checks
*Reboot before checking to update registry*  
Git bash CLI commands for version checking:

```bash
node -v
```
```bash
npm -v
```
```bash
java -version
```
```bash
javac -version
```
```bash
echo $ANDROID_HOME
```
If all CLI commands return a version or path, the installations and environment variables are correctly set.


## Setup React Native Project
Remove previously installed global react-native-cli package(known to cause unexpected issues):
```bash
npm uninstall -g react-native-cli @react-native-community/cli
```

Create new Project
```bash
npx @react-native-community/cli@latest init quicksend
```

Run Project
```bash
npm run android
```
**Important**
- First run downloads dependencies, including NDK.
- Connection drops may cause errors.
- Rebuild errors can occur due to corrupted caches, particularly during the installation of NDK.  


### NDK(Side by side) Manual Install:
If errors such as
- 'NDK at did not have a source.properties file'
- 'An error occurred while preparing SDK package NDK (Side by side) 27.1.12297006: Not in GZIP format.'  

Clear corrupt caches by deleting these folder in their respective paths:  

- `.downloadIntermediates`
```
%LOCALAPPDATA%\Android\Sdk\.downloadIntermediates
```
- `.temp`
```
%LOCALAPPDATA%\Android\Sdk\.temp
```
- `27.1.12297006`
```
%LOCALAPPDATA%\Local\Android\Sdk\ndk\27.1.12297006
```

After clearing caches, open `Android Studio`.
1. On `Welcome to Android Studio` screen, click lower left settings icon.
2. In sub-menu, click `Settings`
3. Goto `Language & Frameworks`>`Android SDK`
4. Click on `SDK Tools` tab.
5. Scroll to NDK(Side by side).
6. Install the check the version of NDK that was present in the directory:
```
%LOCALAPPDATA%\Local\Android\Sdk\ndk\
```
7. Click `Ok`, which will proceed to installation.

*Repeat Steps 1 to 7 if installation fails due to 'Connection Reset'*

## Wireless ADB
### Requirements
- Android 11 or higher
- Phone and computer on the same Wi-Fi network

### Enable Developer Options
1. Open `Settings`
2. Go to `About phone`
3. Tap `Build numbe`r 7 times
4. Toast notification will appear 'You are now a developer'

### Enable Wireless Debugging
1. Go to Settings → Developer options
2. Turn on Wireless debugging
3. Tap Wireless debugging

### Pair the Device
1. Tap `Pair device with pairing code`
2. A popup will show:
    - IP address
    - Pairing port
    - Pairing code
3. On computer, run:
```bash
adb pair <phone-ip>:<pairing-port>
```

### Connect via ADB
After pairing, the phone will show an ADB port.  
Note: `adb-port` is not the same as `pairing-port` 
```bash
adb connect <phone-ip>:<adb-port>
```
Verify connection:
```bash
adb devices
```


## Getting Started
<!-- ### Project Structure -->
<!-- ### Components -->
<!-- ### Styling -->
<!-- ### Screens -->
### Navigation
Install:
```bash
npm install @react-navigation/native @react-navigation/native-stack
```
```bash
npm install react-native-screens react-native-safe-area-context
```
Usage:
```tsx
// App.tsx
import * as React from 'react';
import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screen imports
import screenOne from './src/screens/screenOne';
import screenTwo from './src/screens/screenTwo';

const RootStack = createNativeStackNavigator({
  screens: {
    screenOne: {
      screen: screenOne,
    },
    screenTwo: {
      screen: screenTwo,
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <Navigation/>
  );
}
```

