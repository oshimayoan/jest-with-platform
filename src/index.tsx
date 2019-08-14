import {Platform} from 'react-native';

type OS = 'ios' | 'android' | 'windows' | 'macos' | 'web';

export const withPlatform = (
  platform: OS,
  testFunction: () => void,
  // NOTE: Callback below is just for testing purpose
  callback?: (platform: OS) => void | undefined,
) => {
  const originalOS = Platform.OS;
  Platform.OS = platform;
  try {
    testFunction();
    callback && callback(Platform.OS);
  } finally {
    Platform.OS = originalOS;
  }
};
