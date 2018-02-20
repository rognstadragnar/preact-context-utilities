import { createConnect } from './create-connect'
import { createProvider } from './create-provider'
import { genUniqueId } from './helpers/unique-id'
import { IContextOptions } from './types'

function createContext(opts: IContextOptions) {
  const { prefix = genUniqueId(), providerName, connectName, context } = opts

  return {
    Provider: createProvider({ context, name: providerName, prefix }),
    connect: createConnect({ context, name: connectName, prefix }),
    prefix
  }
}

export { createContext, createConnect, createProvider }
