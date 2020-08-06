# usekeyboard

This hook enables to get if the device keyboard is open or not.

## Usage

```javascript
// app.js

import useKeyboard from 'usekeyboard';

const LoginForm = (props: any) => {

    // Returns true/false
    let keyboardOpen = useKeyboard();
    return (
        ...
    );
};
```
