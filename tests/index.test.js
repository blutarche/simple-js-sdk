import SimpleSDK from '../src/index'

test('should create sdk', () => {
  const sdk = new SimpleSDK({
    x: 1,
    y: 2
  })
  expect(sdk).toBeInstanceOf(SimpleSDK)
})
