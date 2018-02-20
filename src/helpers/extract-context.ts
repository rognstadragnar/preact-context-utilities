function extractContext(contextKeys: string[], context: object): object {
  return contextKeys.reduce(
    (pv, cv) => ({
      ...pv,
      [cv]: context[cv]
    }),
    {}
  )
}

export { extractContext }
