# Preact-context-utilities

## Motivation

Eventhough `context` in Preact should be used sparingly, there are very real use cases where `context` makes sense.

The `react-redux` and `preact-redux` pattern with `Provider`-`connect` relationships is clean and something people are familiar with – even if they have never heard of `context` in `preact`/`react`.

Setting up `Providers` and `connect` functions can be a bit foreign. More so than I think it has to be. Enter `preact-context-utilities`.

## Usage

```Javascript
npm i preact-context-utilities // soon™
```

### Initializing

Creating a `provider` and a `connect` function is straight-forward.

Both the `createProvider` and the `createConnect` functions expects an options `Object` with a `context` property that is an `array` of `strings`. Every item in the array will be available to use as `context`. The options object can also contain an optional `name` property. The `name` property is used for naming but has sane defaults.

```Javascript
import { createContext } from 'preact-context-utilities'


const context = ['something'];
const { Provider, connect } = createContext({ context });

export { Provider, connect }
```

Or alternatively

```Javascript
import { createProvider, createConnect } from 'preact-context-utilities'

const context = ['something']

const Provider = createProvider({ context })

const connect = createConnect({ context })

export { Provider, connect }
```

### Consuming

```Javascript
import { h, render } from 'preact'
import { Provider, connect } from './somewhere'

const Button = ({ something }) => {
  return (
    <button onClick={something}>
      Track me
    </button>
  )
}

const App = connect(Button)

render(
  <Provider something={console.log}>
      <App />
  </Provider>,
  document.getElementById('root')
)
```

## License

[MIT](LICENSE).
