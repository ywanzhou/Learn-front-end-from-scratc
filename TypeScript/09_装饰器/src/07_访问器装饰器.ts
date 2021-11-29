function enumerable(bool: boolean) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor,
  ) {
    descriptor.enumerable = bool
  }
}
class Info {
  private _name: string
  constructor(name: string) {
    this._name = name
  }
  @enumerable(false)
  get name() {
    return this._name
  }
  set name(name) {
    this._name = name
  }
}
export {}
