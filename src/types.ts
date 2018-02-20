type IContext = string[]

export interface IOptions {
  context: IContext
  name?: string
  prefix?: string
}

export interface IContextOptions {
  context: IContext
  providerName?: string
  connectName?: string
  prefix?: string
}
