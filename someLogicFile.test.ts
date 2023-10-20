import { assertEquals } from 'https://deno.land/std@0.204.0/assert/mod.ts';

import { calculateRectangleArea } from './someLogicFile.ts'

Deno.test('rectangle area outputs correct area', () => {
    const length = 5;
    const width = 5;
    const expectedArea = 25;

    const actualArea = calculateRectangleArea(length, width);

    assertEquals(actualArea, expectedArea)
})