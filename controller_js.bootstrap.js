"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunknot_sliding_puzzle_www"] = self["webpackChunknot_sliding_puzzle_www"] || []).push([["controller_js"],{

/***/ "./controller.js":
/*!***********************!*\
  !*** ./controller.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameOver: () => (/* binding */ gameOver)\n/* harmony export */ });\n\n\nfunction showAccordion(n) {\n\n    const el = document.querySelectorAll(`a[data-target]`)[n];\n    if (el.className.includes('collapsed')) {\n        el.click();\n    }\n}\n\nlet MOVES = null, SCORE= null;\n\nfunction gameOver(moves, score) {\n    moves = moves.map(wasmEl => {\n        return {\n            x : wasmEl.x,\n            y : wasmEl.y\n        }\n    });\n\n    MOVES = moves;\n    SCORE = score;\n    window.moves = moves;\n    window.score = score;\n    const proofInput = {\n        action_log: moves,\n        move_count: score\n    };\n    const s = JSON.stringify(proofInput);\n    alert(\"You won. \\nMove count: \" + score + \"\\nMove list: \" + s);\n    document.getElementById('proofInput').setAttribute('value', s);\n    document.getElementById('proofButton').click();\n    showAccordion(1);\n    //game.showOverlay();\n}\n\n//# sourceURL=webpack://not-sliding-puzzle-www/./controller.js?");

/***/ })

}]);