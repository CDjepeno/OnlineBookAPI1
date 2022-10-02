import { SRC_PATH, src, lambdaFiles, getLambdasFromPath } from "../../../lib/Online-book-stack"

describe('Stack', () => { 
  xit('',() => {
    expect(SRC_PATH).toBe(2)
  })

  xit('',() => {
    expect(src).toBe(2)
  })

  xit('',() => {
    expect(lambdaFiles).toBe(2)
  })

  it('',() => {
    return getLambdasFromPath().then((result ) => {
      expect(result).toBe(2)
    })
  })

 })