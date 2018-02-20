function genUniqueId(): string {
  return Math.random()
    .toString(36)
    .substr(7)
}

export { genUniqueId }
