import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

const useKeyboard: () => boolean = (): boolean => {
  const [keyboardOpen, setKeyboardOpen] = useState(false);

  const handleDidShow = () => setKeyboardOpen(true);
  const handleDidHide = () => setKeyboardOpen(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', handleDidShow);
    Keyboard.addListener('keyboardDidHide', handleDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', handleDidShow);
      Keyboard.removeListener('keyboardDidHide', handleDidHide);
    };
  }, []);

  return keyboardOpen;
};

export default useKeyboard;
