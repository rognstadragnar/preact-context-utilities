import * as Preact from 'preact'
import { IOptions } from './types'

function createConnect({ name, context }: IOptions) {
  return wrappedComponent => {
    class Connect extends Preact.Component<{}, {}> {
      public static displayName = `connect(${wrappedComponent.displayName ||
        wrappedComponent.name ||
        'Component'})`
      public render() {
        return Preact.h(wrappedComponent, { ...this.context, ...this.props })
      }
    }
    return Connect
  }
}

export { createConnect }
