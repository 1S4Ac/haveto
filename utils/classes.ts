function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ")
  }

export {
    classNames
}