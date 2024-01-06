# react-crash-course
A react crash course for a beginner

## Create react app using npx (node package executor)
``` npx create-react-app react-basics ```

## Create react app using vite bundler
```
    npm create vite@latest
 
    Scaffolding project in /home/aish/personal-projects/github/react-crash-course/vite-basics...

    Done. Now run:

    cd vite-basics
    npm install
    npm run dev

```

### Vite does not install dependencies or the node_modules folder by default but npx does. Execute ```npm install``` to install the deps

# React Hooks

## useCallBack()
React Hook that lets you cache a function definition between re-renders. Used when any component is expected to have a lot of re-renders

`From React documentation (https://react.dev/reference/react/useCallback)`

<blockquote>React will give you the same function again if the dependencies have not changed since the last render. Otherwise, it will give you the function that you have passed during the current render, and store it in case it can be reused later. React will not call your function. The function is returned to you so you can decide when and whether to call it.</blockquote>

## useEffect()

`From React documentation (https://react.dev/reference/react/useEffect)`
<blockquote>After every re-render of your component where the dependencies have changed:
First, your cleanup code runs with the old props and state.
Then, your setup code runs with the new props and state.</blockquote>

## useRef()

`From React documentation (https://react.dev/reference/react/useRef)`

<blockquote>useRef is a React Hook that lets you reference a value that’s not needed for rendering.</blockquote>

