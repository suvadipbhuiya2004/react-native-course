# React Native Course

This project is part of my journey to learning **React Native**, a powerful framework for building cross-platform mobile applications using JavaScript and React. React Native enables developers to create natively rendered mobile apps for iOS and Android with a single codebase, making app development faster and more efficient.

## What is React Native?

React Native is a popular open-source framework developed by Facebook for building mobile applications. It allows developers to:
- Write apps using JavaScript and React while still delivering a **native app experience**.
- Share a significant portion of code between iOS and Android platforms.
- Leverage **hot reloading** for faster development cycles.
- Access a wide range of plugins and APIs to interact with native device features like GPS, camera, and more.

## How to Run the Code

Follow these steps to run a React Native project on your local machine:

### Prerequisites
1. Install **Node.js** and **npm** (or **Yarn**).  
   [Download Node.js](https://nodejs.org/).
2. Install the React Native CLI globally.

### Set up your Development Environment

#### For Android:
1. **Install Android Studio**:  
   - Download and install Android Studio from the [official website](https://developer.android.com/studio).
   - During installation, ensure that the **Android SDK**, **SDK Platform Tools**, and an **Android Virtual Device (AVD)** are installed.

2. **Set up an Emulator or Connect a Physical Device**:
   - **Using an Emulator**:  
     - Open Android Studio.
     - Go to **Tools > Device Manager**.
     - Create and launch an Android Virtual Device (AVD).
   - **Using a Physical Device**:  
     - Enable **Developer Options** and **USB Debugging** on your Android device.
     - Connect your device to the computer using a USB cable.

3. **Configure the `ANDROID_HOME` Environment Variable**:  
   - Find the Android SDK path in Android Studio:
     - Go to **Preferences > Appearance & Behavior > System Settings > Android SDK**.
     - Note the path to the Android SDK (e.g., `/Users/your-username/Library/Android/sdk` on macOS or `C:\Users\your-username\AppData\Local\Android\Sdk` on Windows).
   - Add the path to the `ANDROID_HOME` environment variable:
     - **On macOS/Linux**:  
       Add this to your `~/.bashrc`, `~/.zshrc`, or `~/.bash_profile` file:
       ```bash
       export ANDROID_HOME=/path/to/android/sdk
       export PATH=$PATH:$ANDROID_HOME/emulator
       export PATH=$PATH:$ANDROID_HOME/tools
       export PATH=$PATH:$ANDROID_HOME/platform-tools
       ```
       Save the file and run `source ~/.zshrc` or `source ~/.bashrc`.

     - **On Windows**:  
       - Open **System Properties > Environment Variables**.
       - Under **System Variables**, click **New** and add:
         - Variable Name: `ANDROID_HOME`
         - Variable Value: Path to your Android SDK (e.g., `C:\Users\your-username\AppData\Local\Android\Sdk`).
       - Edit the `Path` variable and add the following paths:
         ```
         %ANDROID_HOME%\emulator
         %ANDROID_HOME%\tools
         %ANDROID_HOME%\platform-tools
         ```
       - Save the changes.

#### For iOS:
1. **Install Xcode**:  
   - Download and install Xcode from the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835).

2. **Set up a Simulator or Connect a Physical Device**:
   - **Using a Simulator**:
     - Open Xcode.
     - Go to **Xcode > Open Developer Tools > Simulator**.
     - Choose the desired iPhone model to launch the simulator.
   - **Using a Physical Device**:
     - Connect your iPhone to the computer via USB.
     - Trust the computer on your device and configure your Apple Developer Account in Xcode.

Once these steps are complete, you can run your React Native app on Android and iOS!

### Steps to Run the App

1. **Clone the project repository**:  
   ```bash
   git clone https://github.com/suvadipbhuiya2004/react-native-course
   cd react-native-course/[any app]
2. **Install dependencies**:  
   ```bash
   npm install
   # or
   yarn install
3. **Run the app**:  

   - **For Android**:  
     ```bash
     npx react-native run-android
     ```

   - **For iOS**:  
     ```bash
     npx react-native run-ios
     ```
4. **Start the Metro Bundler**:  
   If the bundler doesn’t start automatically, run:  
   ```bash
   npx react-native start
5. **View the app**:  
   - **Android**: Open the emulator or connect your Android device (ensure USB debugging is enabled).  
   - **iOS**: Use the iPhone Simulator in Xcode or a connected iPhone.

---

With React Native, I learned how to create reusable components, manage states, and handle navigation. This course has been a significant step toward building professional-grade cross-platform applications. 🚀

