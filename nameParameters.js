/*
 * # nameParameters - 1.0.0
 * http://alt-o.net
 *
 * Copyright 2016 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
(function(global) {
    "use strict";

    typeof exports === "object" && typeof module !== "undefined" ? module.exports = nameParameters :
    typeof define === "function" && define.amd ? define(nameParameters) :
    global.nameParameters = nameParameters;

    function nameParameters(js) {

        var args = [],
            comment = "", /*//*/
            bracket = 0, // []
            brace = 0, // {}
            paren = 0, // ()
            quote = "",
            def,
            colon = def = false,
            arg = "",
            char = "",
            prev = "";
        for(var i=0,len=js.length;i<len;i++) {
            prev = char;
            char = js.charAt(i);

            if (quote !== "") {
                if (char === quote && prev !== "\\")
                    quote = "";
                continue;
            }
            if (comment === "") {
                if (char === "*" && prev === "/") {
                    comment = "/*";
                    continue;
                }
                if (char === "/") {
                    if (prev === "/")
                        comment = "//";
                    continue;
                }
            } else if ((
                comment === "/*" && prev === "*" && char === "/")||(
                comment === "//" && (char === "\n"||char ==="\r"))) {
                comment = "";
                continue;
            }

            if (comment!=="")
                continue;

            if (quote === "" && prev !== "\\" && (char === "'" || char === '"')) {
                quote = char;
                continue;
            }

            if (def) { // Default value

                if (char === "," && paren === 1 && bracket === 0 && brace === 0)
                    def = false;
                else if (char === "(")
                    paren++;
                else if (char === ")")
                    paren--;
                else if (char === "[")
                    bracket++;
                else if (char === "]")
                    bracket--;
                else if (char === "{")
                    brace++;
                else if (char === "}")
                    brace--;

                if (paren === 0)
                    break;

                continue;
            
            } else if (char === "=") {
                def = true;

                if (arg !== "")
                    args.push(arg);

                arg = "";
                continue;

            } else if (char === "[" || char === "]")
                continue;

            // Parens
            if (char === "(") {
                paren++;

                continue;

            } else if (paren === 1 && char === ")") {

                if (arg !== "")
                    args.push(arg);

                break;
            }

            if (paren === 0)
                continue;

            // Destructured
            if (char === "," || char === "{")
                colon = false;

            if (char === "{") {
                brace++;
                continue;
            } else if (char === ":") {
                if (brace > 0)
                    colon = true;

                continue;
            } else if (char === "}") {
                brace--;
                continue;
            }
            if (brace > 0 && char !== "," && colon === false)
                continue;

            if (char === ",") {
                if (arg !== "")
                    args.push(arg);

                arg = "";
                continue;
            }

            if (whitespace.test(char) || char === ")")
                continue;

            arg += char;
        }
        return args;
    }
    
    var whitespace = /(\s)|(\r)/;

})(typeof window !== "undefined" ? window : undefined);