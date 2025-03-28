export default class Building {
  constructor(sqft) {
    if (typeof Object.getPrototypeOf(this).evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    if (this.constructor === Building) {
      throw new TypeError('cannot instantiate abstract class');
    }

    this.sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = value;
  }
}
