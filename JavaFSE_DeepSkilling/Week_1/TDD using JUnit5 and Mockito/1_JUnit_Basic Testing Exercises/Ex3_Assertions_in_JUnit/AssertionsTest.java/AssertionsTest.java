package com.example;

import org.junit.Test;
import static org.junit.Assert.*;

public class AssertionsTest {

    @Test
    public void testAssertions() {

        // assertEquals -> checks if two values are equal
        assertEquals(5, 2 + 3);

        // assertTrue -> checks if a condition is true
        assertTrue(5 > 3);

        // assertFalse -> checks if a condition is false
        assertFalse(5 < 3);

        // assertNull -> checks if a value is null
        assertNull(null);

        // assertNotNull -> checks if a value is NOT null
        assertNotNull(new Object());

        // assertSame -> checks if two references point to the SAME object
        String str1 = "hello";
        String str2 = str1;
        assertSame(str1, str2);

        // assertNotSame -> checks if two references point to DIFFERENT objects
        String str3 = new String("hello");
        assertNotSame(str1, str3);

        // assertArrayEquals -> checks if two arrays have the same contents
        int[] expectedArray = {1, 2, 3};
        int[] actualArray = {1, 2, 3};
        assertArrayEquals(expectedArray, actualArray);
    }
}
