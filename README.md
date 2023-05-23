# Creating context in TypeScript and React Memoization

1] Create the context with createContext. Then specify type for the context.

And specify the type inside the generic <> and set it to null
const AwesomeContext = React.createContext<null | AwesomeContextType>(null);

2] Provide the context to the react tree with the Provider property

# React Memo

-   You don't memoize at the root of the application, only desired components should be targeted
-   It is a good practice to memoize context values
