"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunknot_sliding_puzzle_www"] = self["webpackChunknot_sliding_puzzle_www"] || []).push([["reqproof_js"],{

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HTTP_API_URL: () => (/* binding */ HTTP_API_URL),\n/* harmony export */   WS_API_URL: () => (/* binding */ WS_API_URL)\n/* harmony export */ });\n\n\nconst HTTP_API_URL =  'https://proxy.corsfix.com/?http://129.153.12.18';\nconst WS_API_URL = 'ws://129.153.12.18';\n\n\n//# sourceURL=webpack://not-sliding-puzzle-www/./constants.js?");

/***/ }),

/***/ "./reqproof.js":
/*!*********************!*\
  !*** ./reqproof.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   submitProof: () => (/* binding */ submitProof)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./constants.js\");\n\n\nasync function submitProof(actionLog, moveCount, print) {\n    try {\n        if (!moveCount || actionLog.length === 0) {\n            alert('Invalid proof data');\n            return;\n        }\n\n        const jobID = await requestProof(actionLog, moveCount);\n        if (!jobID) {\n            return;\n        }\n        const result = await getProofResult(jobID, print);\n        console.log(result);\n        return result;\n    } catch (error) {\n        console.error('Error creating proof:', error);\n    }\n}\n\n\nasync function requestProof(actionLog, moveCount) {\n    try {\n        const inputData = JSON.stringify({\n            action_log: actionLog,\n            move_count : moveCount\n        });\n        const response = await fetch(`${_constants__WEBPACK_IMPORTED_MODULE_0__.HTTP_API_URL}/prove`, {\n            method: 'POST',\n            headers: {\n                'Content-Type': 'application/json',\n            },\n            body: inputData,\n        });\n        const { job_id: jobID } = await response.json();\n        return jobID;\n    } catch (error) {\n        console.error('Error requesting proof:', error);\n    }\n}\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nasync function getProofResult(jobID, print){\n    return new Promise((resolve, reject) => {\n        const wsEndpoint = `${_constants__WEBPACK_IMPORTED_MODULE_0__.WS_API_URL}/proof/${jobID}`;\n        const socket = new WebSocket(wsEndpoint);\n\n        socket.addEventListener('message', (event) => {\n            const data = JSON.parse(event.data);\n            if (data.status === 'processing') {\n                console.log('Proof is being processed...');\n                //print('100', 'Proof is being processed...');\n                print('100', data);\n            } else if (data.status === 'complete') {\n                socket.close();\n                data.host = _constants__WEBPACK_IMPORTED_MODULE_0__.HTTP_API_URL;\n                print('200', data);\n                resolve(data);\n            } else if (data.status === 'failed' || data.status === 'not_found') {\n                //print('400', data.status);\n                print('400', data);\n                reject(new Error('Proof generation failed'));\n            }\n        });\n\n        socket.addEventListener('error', (error) => {\n            console.error('WebSocket error:', error);\n            socket.close();\n            reject(error);\n        });\n\n        setTimeout(() => {\n            socket.close();\n            reject(new Error('WebSocket connection timed out'));\n        }, 5 * 60000); // 5 min timeout\n    });\n}\n\nwindow.submitProof = submitProof;\n\n//# sourceURL=webpack://not-sliding-puzzle-www/./reqproof.js?");

/***/ })

}]);