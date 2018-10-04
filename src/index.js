/** Represents a Class that process x and y */
class SimpleSDK {
  /**
   *
   * @param {*} args
   *   @param {number} args.x - A number of x.
   *   @param {number} args.y - A number of y.
   */
  constructor(args) {
    this.x = args.x
    this.y = args.y
  }

  /**
   * @function
   * @description Add x and y.
   * @returns {number} A number of x+y.
   */
  add() {
    return this.x + this.y
  }

  /**
   * @function
   * @description Multiply x and y.
   * @returns {number} A number of x*y.
   */
  multiple() {
    return this.x * this.y
  }
}

export default SimpleSDK
