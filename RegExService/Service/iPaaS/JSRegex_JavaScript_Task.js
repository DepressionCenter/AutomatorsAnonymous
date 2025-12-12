// This file is part of RegEx Service
// Run RegEx flow - JSRegEx JavaScript task
// Author(s): Gabriel Mongefranco.
// Created: 2025-12-09
// Summary: This JavaScript task validates input parameters and executes the requested regular expression.
// Notes: See README file for documentation and full license information.
// 
// Copyright © 2025 The Regents of the University of Michigan
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
// GNU General Public License for more details.
// You should have received a copy of the GNU General Public License along
// with this program. If not, see <https://www.gnu.org/licenses/>.

// Note: All code must be compatible with ECMAScript 11.0 (2020) to run in a TDX iPaaS Script task.

// Return variable required by iPaaS
var result = {};

// Result placeholder
var resultValue;
var resultCode = 200;

// Get input values and set defaults
var text = (InputParameters.Text ? InputParameters.Text : "");
var pattern = (InputParameters.Pattern ? InputParameters.Pattern : "");
var flags = (InputParameters.Flags ? InputParameters.Flags : "").replaceAll("/","").trim().toLowerCase();
var method = (InputParameters.Method ? InputParameters.Method : "match").trim();
var replacement = (InputParameters.Replacement ? InputParameters.Replacement : undefined);

var regex = new RegExp(pattern, flags);

try {
    // Validate string length and pattern length
    if (text.length > 20000) throw "Input text too long (maximum allowed is 20,000 characters).";
    if (pattern.length > 200) throw "Pattern too long (maximum allowed is 200 characters).";

    // Allow only supported regex flags
    var allowedFlags = "gimsuy";
    var flags = (InputParameters.Flags ? InputParameters.Flags : "").trim().toLowerCase().split('').filter(f => allowedFlags.includes(f)).join('');

	// Set default values
    var method = (InputParameters.Method ? InputParameters.Method : "match").trim().toLowerCase();
    var replacement = (InputParameters.Replacement ? InputParameters.Replacement : undefined);
    var resultValue = [""];
    var resultCode = 200;

    let regex;
    try {
        // Regex construction may throw for malformed patterns
        regex = new RegExp(pattern, flags);
    } catch (e) {
        return {"ResultValue": "Error: Invalid regex pattern.", "ResultCode": 400};
    }

    switch(method) {
        case "match":
            resultValue = text.match(regex);
            break;
        case "matchall":
            resultValue = Array.from(text.matchAll(regex));
            break;
        case "replace":
            if (replacement !== undefined) {
                resultValue = text.replace(regex, replacement);
            } else {
                resultValue = "Error: Replacement string not specified.";
                resultCode = 400;
            }
            break;
        case "replaceall":
			if (replacement !== undefined) {
				// Work around for replaceAll compatibility with ECMAScript 11, used by iPaaS
				let replaceAllFlags = flags.includes('g') ? flags : flags + 'g';
				let regexGlobal = new RegExp(pattern, replaceAllFlags);
				resultValue = text.replace(regexGlobal, replacement);
			} else {
				resultValue = "Error: Replacement string not specified.";
				resultCode = 400;
			}
			break;
        case "search":
            resultValue = text.search(regex);
            break;
        case "split":
            resultValue = text.split(regex);
            break;
        default:
            resultValue = "Error: Unknown method '" + method + "'. Method must be one of the following: match, matchAll, replace, replaceAll, search, split.";
            resultCode = 400;
    }

    // Limit result size
    if (Array.isArray(resultValue) && resultValue.length > 20000)
        resultValue = "Error: Too many results. Refine your pattern.";

    result = {"ResultValue": resultValue, "ResultCode": resultCode};

} catch (error) {
    result = {"ResultValue": "Error: " + error.toString(), "ResultCode": 500};
}

// Return result
return result;
