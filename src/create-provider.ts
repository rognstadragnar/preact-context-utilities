import * as Preact from 'preact'
import { IOptions } from './types'

function createProvider({ name, context }: IOptions) {
  class Provider extends Preact.Component<{}, {}> {
    public getChildContext() {
      const ctx = {}
      context.forEach(key => {
        ctx[key] = this.props[key]
      })
      return ctx
    }
    public render() {
      return this.props.children[0]
    }
  }
  Provider.displayName = name || 'Provider'
  return Provider
}

export { createProvider }
