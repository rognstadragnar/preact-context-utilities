import * as Preact from 'preact'
import { extractContext } from './helpers/extract-context'
import { IOptions } from './types'

function createConnect({ context, name, prefix }: IOptions) {
  return wrappedComponent => {
    class Connect extends Preact.Component<{}, {}> {
      public static displayName = `${name ||
        'connect'}(${wrappedComponent.displayName ||
        wrappedComponent.name ||
        'Component'})`

      public render() {
        return Preact.h(wrappedComponent, {
          ...extractContext(
            context,
            prefix ? this.context[prefix] : this.context
          ),
          ...this.props
        })
      }
    }
    return Connect
  }
}

export { createConnect }
