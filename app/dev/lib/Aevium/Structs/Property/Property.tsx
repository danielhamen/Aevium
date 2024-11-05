import Struct from "../Struct/Struct";

export interface PropertyConfig {
  /**
   * Value cannot be changed when frozen.
   */
  isFrozen?: boolean;

  /**
   * The datatype of the value must always be `T`.
   */
  fixedType?: boolean;

  /**
   * Same functionality as frozen, except `isConstant` is READONLY and inital setting.
   */
  isConstant?: boolean;
}

class Property<T> extends Struct {
  _wrappedValue: T;
  _isFrozen: boolean;
  _fixedType: boolean;
  _isConstant: boolean;

  constructor(wrappedValue: T, config?: PropertyConfig) {
    super();
    this._wrappedValue = wrappedValue;
    this._isFrozen = config?.isFrozen ?? false;
    this._fixedType = config?.fixedType ?? false;
    this._isConstant = config?.isConstant ?? false;
  }

  set frozen(t: boolean) {
    this._isFrozen = t;
  }

  get frozen(): boolean {
    return this._isFrozen;
  }

  set value(v: T) {
    this._wrappedValue = v;
  }

  get value(): T {
    return this._wrappedValue;
  }
}

export function useProperty<T>(
  wrappedValue: T,
  config?: PropertyConfig,
): Property<T> {
  const p = new Property<T>(wrappedValue, config);
  return p;
}

export default Property;
