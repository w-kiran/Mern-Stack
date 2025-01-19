"use strict";
// 1. target
// The target option in a tsconfig.json file specifies the ECMAScript target version to which the TypeScript compiler will compile the TypeScript code.
// To try it out, try compiling the following code for target being ES5 and es2020
const greet = (name) => `Hello, ${name}!`;

// 2. rootDir
// Where should the compiler look for .ts files. Good practise is for this to be the src folder

// 3. outDir
// Where should the compiler look for spit out the .js files.

// 4. noImplicitAny
// Try enabling it and see the compilation errors on the following code - 
// const greet = (name) => `Hello, ${name}!`;

// Then try disabling it

// 5. removeComments
// Weather or not to include comments in the final js file