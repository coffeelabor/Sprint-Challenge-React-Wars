# Answers

1.  What is React JS and what problems does it try and solve?

    React is a one of the more popular libraries that make scaling a web application more effective. When using react you can write and deploy software quick enough to keep up with current tech and make sure your application is up to date

1.  What does it mean to _think_ in react?

    thinking in react is the approach of making everything into components. If the components get larger than they can be broken down into smaller components as much as needed. Ideally, each component should be responsible for one thing.

1.  Describe state.

    State is a data object that a react component has access to

1.  Describe props.

    Props are the vehicle that state uses to move to other components

1.  What are side effects, and how do you sync effects in a React component to state or prop changes?

    Side effects are anything that is affected outside of the scope of a function. The opposite of a side effect is a pure component. In order to manage the output that may be affecting state outside of scope you can use an effect hook (useEffect()). useEffect can be passed a dependency array as a second argument, with the first being a callback function, and only fires when the dependency's state is changed. Therefore you are using the side effect (use + side+ effect = useEffect) in a way that is synced with you state or props.
