Here’s a comprehensive list of **truthy** and **falsy** values in JavaScript:

---

### **Falsy Values in JavaScript**
Falsy values are values that evaluate to `false` when converted to a Boolean context. These are:

| **Value**           | **Description**                                     |
|---------------------|---------------------------------------------------|
| `false`             | The Boolean value `false`.                         |
| `0`                 | The number zero.                                   |
| `-0`                | Negative zero (treated the same as `0`).           |
| `0n`                | BigInt zero.                                       |
| `""`                | An empty string (`''` or `""`).                    |
| `null`              | Represents no value.                               |
| `undefined`         | Represents an uninitialized or absent value.       |
| `NaN`               | Represents "Not-a-Number".                         |

---

### **Truthy Values in JavaScript**
Everything not in the falsy list is considered **truthy**. Common examples include:

| **Value**           | **Description**                                    |
|---------------------|--------------------------------------------------|
| `true`              | The Boolean value `true`.                         |
| Non-zero numbers    | Any number other than `0` or `-0` (e.g., `42`, `-1`). |
| Non-empty strings   | Any string with at least one character (`"hello"`, `" "`). |
| Objects             | Any object, even an empty one (`{}`).             |
| Arrays              | Any array, even an empty one (`[]`).              |
| Functions           | Any function.                                     |
| `Infinity`          | Positive infinity.                                |
| `-Infinity`         | Negative infinity.                                |
| Symbol              | Any `Symbol`.                                     |
| BigInt              | Any non-zero `BigInt` value (e.g., `1n`, `-1n`).  |

---

### **Examples in Code**
#### Falsy Values:
```javascript
if (!false) console.log("Falsy");     // Outputs: Falsy
if (!0) console.log("Falsy");         // Outputs: Falsy
if (!"") console.log("Falsy");        // Outputs: Falsy
if (!null) console.log("Falsy");      // Outputs: Falsy
if (!undefined) console.log("Falsy"); // Outputs: Falsy
if (!NaN) console.log("Falsy");       // Outputs: Falsy
```

#### Truthy Values:
```javascript
if ("hello") console.log("Truthy");   // Outputs: Truthy
if (42) console.log("Truthy");        // Outputs: Truthy
if ({}) console.log("Truthy");        // Outputs: Truthy
if ([]) console.log("Truthy");        // Outputs: Truthy
if (function() {}) console.log("Truthy"); // Outputs: Truthy
if (Infinity) console.log("Truthy");  // Outputs: Truthy
```

---

### **Key Notes**
1. **Objects and Arrays**:
   - Even empty objects (`{}`) and arrays (`[]`) are **truthy**.
2. **Strings**:
   - Non-empty strings (e.g., `" "`) are truthy, but empty strings (`""`) are falsy.
3. **Numbers**:
   - `0` and `-0` are falsy, but all other numbers (including negative ones) are truthy.
4. **Special Cases**:
   - `NaN` (Not-a-Number) is falsy.
   - `undefined` and `null` are falsy.

Understanding these values is essential for conditional statements, short-circuit evaluation, and logical operators in JavaScript.