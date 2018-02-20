import * as Preact from 'preact'
import { extractContext } from './helpers/extract-context'
import { IOptions } from './types'

/* 
context.reduce(
          (pv, cv) => ({
            ...pv,
            [cv]: this.props[cv]
          }),
          {}
        )
*/

function createProvider({ prefix, name, context }: IOptions) {
  class Provider extends Preact.Component<{}, {}> {
    public getChildContext() {
      return prefix
        ? {
            [prefix]: extractContext(context, this.props)
          }
        : extractContext(context, this.props)
    }
    public render() {
      return this.props.children[0]
    }
  }
  Provider.displayName = name || 'Provider'
  return Provider
}

export { createProvider }
