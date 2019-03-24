---
title: React Hooks - Test custom hooks with Enzyme
published: true
description: A simple approach to test the behaviour of custom React hooks
tags: #react #javascript #tutorial #webdev
date: '2019-03-23'
---

**TL;DR** - Wrap your custom hook in a component and shallow render it to test implementation details.

# What you will learn
- React test strategies
    - **user observable behaviour**
    - **implementation details**
- Testing custom hooks with Enzyme

## Test Strategies

There are broadly two strategies to test our React codebase.

1. Testing user observable behaviour
2. Testing implementation details

### Testing user observable behaviour

Testing user observable behaviour means writing tests against components that test

- how the component is rendered
- how the component is re-rendered when user interacts with the DOM
- how props/state control what is rendered

Consider the following component - `Greet`

```jsx
function Greet({ user = 'User' }) {
  const [name, setName] = React.useState(user);

  return <div onClick={() => setName('Pinocchio')}>Hello, {name}!</div>;
}
```

Testing the user observable behaviour in `Greet` would mean

- test if `Greet` is rendered without crashing
- test if `Hello, User!` is rendered when user prop is not passed
- test if `Hello, Bruce!` is rendered when `Bruce` is passed as value to `user` prop
- test if the text changes to `Hello, Pinocchio!` when the user clicks on the element

### Testing implementation details

Testing implementation details means writing tests against state logic that test

- how the state is initialized with default/prop values
- how the state changes when handlers are invoked

Consider the same component - `Greet`

```jsx
function Greet({ user = 'User' }) {
  const [name, setName] = React.useState(user);

  return <div onClick={() => setName('Pinocchio')}>Hello, {name}!</div>;
}
```

Testing implementation details in `Greet` would mean

- test if `name` is set to default value `User` when user prop is not passed to `Greet`
- test if `name` is set to prop value when user prop is passed to `Greet`
- test if `name` is updated when `setName` is invoked


## Testing custom hooks with Enzyme

_Note: Please make sure your React version is `^16.8.5`. Hooks won't re-render components with enzyme shallow render in previous versions and the React team fixed it in this release. If your React version is below that, you might have to use enzyme mount and `.update()` your wrapper after each change to test the re-render._

Testing implementation details might seem unnecessary and might even be considered as a bad practice when you are writing tests against components that contains presentational (UI) logic and render elements to the DOM. But **custom hooks** contain only **state logic** and it is imperative that we test the implementation details thoroughly so we know exactly how our custom hook will behave within a component.

Let's write a custom hook to update and validate a form field.

```js
/* useFormField.js */

import React from 'react';

function useFormField(initialVal = '') {
  const [val, setVal] = React.useState(initialVal);
  const [isValid, setValid] = React.useState(true);

  function onChange(e) {
    setVal(e.target.value);

    if (!e.target.value) {
      setValid(false);
    } else if (!isValid) setValid(true);
  }

  return [val, onChange, isValid];
}

export default useFormField;
```

**As great as custom hooks are in abstracting away re-usable logic in our code, they do have one limitation. Even though they are just JavaScript functions they will work only inside React components. You cannot just invoke them and write tests against what a hook returns. You have to wrap them inside a React component and test the values that it returns.**

- custom hooks cannot be tested like JavaScript functions
- custom hooks should be wrapped inside a React component to test its behaviour

Thanks to the composibility of hooks, we could pass a hook as a prop to a component and everything will work exactly as how it's supposed to work. We can write a wrapper component to render and test our hook.

```jsx
/* useFormField.test.js */

function HookWrapper(props) {
  const hook = props.hook ? props.hook() : undefined;
  return <div hook={hook} />;
}
```

Now we can access the hook like a JavaScript object and test its behaviour.

```jsx
/* useFormField.test.js */

import React from 'react';
import { shallow } from 'enzyme';
import useFormField from './useFormField';

function HookWrapper(props) {
  const hook = props.hook ? props.hook() : undefined;
  return <div hook={hook} />;
}

it('should set init value', () => {
  let wrapper = shallow(<HookWrapper hook={() => useFormField('')} />);

  let { hook } = wrapper.find('div').props();
  let [val, onChange, isValid] = hook;
  expect(val).toEqual('');

  wrapper = shallow(<HookWrapper hook={() => useFormField('marco')} />);

  // destructuring objects - {} should be inside brackets - () to avoid syntax error
  ({ hook } = wrapper.find('div').props());
  [val, onChange, isValid] = hook;
  expect(val).toEqual('marco');
});
```

The full test suite for `useFormField` custom hook will look like this.

```jsx
/* useFormField.test.js */

import React from 'react';
import { shallow } from 'enzyme';
import useFormField from './useFormField';

function HookWrapper(props) {
  const hook = props.hook ? props.hook() : undefined;
  return <div hook={hook} />;
}

describe('useFormField', () => {
  it('should render', () => {
    let wrapper = shallow(<HookWrapper />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('should set init value', () => {
    let wrapper = shallow(<HookWrapper hook={() => useFormField('')} />);

    let { hook } = wrapper.find('div').props();
    let [val, onChange, isValid] = hook;
    expect(val).toEqual('');

    wrapper = shallow(<HookWrapper hook={() => useFormField('marco')} />);

    // destructuring objects - {} should be inside brackets - () to avoid syntax error
    ({ hook } = wrapper.find('div').props());
    [val, onChange, isValid] = hook;
    expect(val).toEqual('marco');
  });

  it('should set the right val value', () => {
    let wrapper = shallow(<HookWrapper hook={() => useFormField('marco')} />);

    let { hook } = wrapper.find('div').props();
    let [val, onChange, isValid] = hook;
    expect(val).toEqual('marco');

    onChange({ target: { value: 'polo' } });

    ({ hook } = wrapper.find('div').props());
    [val, onChange, isValid] = hook;
    expect(val).toEqual('polo');
  });

  it('should set the right isValid value', () => {
    let wrapper = shallow(<HookWrapper hook={() => useFormField('marco')} />);

    let { hook } = wrapper.find('div').props();
    let [val, onChange, isValid] = hook;
    expect(val).toEqual('marco');
    expect(isValid).toEqual(true);

    onChange({ target: { value: 'polo' } });

    ({ hook } = wrapper.find('div').props());
    [val, onChange, isValid] = hook;
    expect(val).toEqual('polo');
    expect(isValid).toEqual(true);

    onChange({ target: { value: '' } });

    ({ hook } = wrapper.find('div').props());
    [val, onChange, isValid] = hook;
    expect(val).toEqual('');
    expect(isValid).toEqual(false);
  });
});
```

Rendering the custom hook and accessing it as a prop should give us full access to its return values.

If you're using `useEffect` hook in your custom hook, make sure you wrap the `shallow` or `mount` call with [ReactTestUtils.act()](https://reactjs.org/docs/test-utils.html#act) to have the effects flushed out before assertions. Enzyme might support this internally soon but for now, this is required. More info on this here - [hooks-faq](https://reactjs.org/docs/hooks-faq.html#how-to-test-components-that-use-hooks).

```js
act(() => {
  wrapper = shallow(<HookWrapper />);
});
```

All code snippets in this post can be found in the repo - [testing-hooks](https://github.com/flexdinesh/testing-hooks) with a working example.

Happy testing! 🎉