import { expect,test } from 'vitest'
import { calculateConversion } from '../utils/convert'

test('Calculate conversion from', () => {
  expect(calculateConversion(10,0.9)).toBe(9) // Assuming the conversion rate is 0.85
})


