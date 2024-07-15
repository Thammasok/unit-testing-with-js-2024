/* eslint-disable max-len */
describe('number', () => {
  test('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);

    // กรณีที่เป็น Object
    // toBe: ใช้สำหรับเปรียบเทียบการอ้างอิงของ object โดยตรง เหมาะสำหรับการตรวจสอบว่าวัตถุสองตัวเป็น object เดียวกันในหน่วยความจำ
    // toEqual: ใช้สำหรับเปรียบเทียบค่าของ object โดยละเอียด เหมาะสำหรับการตรวจสอบว่า object สองตัวมีค่าเหมือนกัน
    // const a = { name: 'John', age: 30 };
    // const b = { name: 'John', age: 30 };
    // expect(a).toBe(b); // ผิดพลาด เพราะว่า a และ b เป็นวัตถุที่แยกต่างหาก
    // expect(a).toEqual(b); // ถูกต้อง เพราะว่า a และ b มีค่าเหมือนกัน
  });

  test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3); // This won't work because of rounding error
    // expect(value).toEqual(0.3);
    expect(value).toBeCloseTo(0.3); // This works.
  });
});
