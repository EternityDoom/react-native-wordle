/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      '$0': 'jest',
      config: 'e2e/jest.config.js'
    },
    jest: {
      setupTimeout: 120000
    }
  },
  apps: {
    'ios.debug': {
      type: 'ios.app',
      build: "xcodebuild -workspace ios/reactnativewordle.xcworkspace -scheme reactnativewordle -configuration Debug -sdk iphonesimulator -arch x86_64 -derivedDataPath ios/build",
      binaryPath: "ios/build/Build/Products/Debug-iphonesimulator/reactnativewordle.app"
    },
    'ios.release': {
      type: 'ios.app',
      build: "xcodebuild -workspace ios/reactnativewordle.xcworkspace -scheme reactnativewordle -configuration Release -sdk iphonesimulator -arch x86_64 -derivedDataPath ios/build",
      binaryPath: "ios/build/Build/Products/Release-iphonesimulator/reactnativewordle.app"
    },
    'android.debug': {
      type: 'android.apk',
      build: "cd android && ./gradlew :app:assembleDebug :app:assembleAndroidTest -DtestBuildType=debug && cd ..",
      binaryPath: "android/app/build/outputs/apk/debug/app-debug.apk",
      reversePorts: [
        8081
      ]
    },
    'android.release': {
      type: 'android.apk',
      build: "cd android && ./gradlew :app:assembleRelease :app:assembleAndroidTest -DtestBuildType=release && cd ..",
      binaryPath: "android/app/build/outputs/apk/release/app-release.apk"
    }
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 14'
      }
    },
    attached: {
      type: 'android.attached',
      device: {
        adbName: '.*'
      }
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'pixel_4'
      }
    }
  },
  configurations: {
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug'
    },
    'ios.sim.release': {
      device: 'simulator',
      app: 'ios.release'
    },
    'android.att.debug': {
      device: 'attached',
      app: 'android.debug'
    },
    'android.att.release': {
      device: 'attached',
      app: 'android.release'
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug'
    },
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release'
    }
  }
};
