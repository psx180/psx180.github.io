"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunknot_sliding_puzzle_www"] = self["webpackChunknot_sliding_puzzle_www"] || []).push([["index_js"],{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var notslidingpuzzleLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! notslidingpuzzleLocal */ \"./node_modules/notslidingpuzzleLocal/notslidingpuzzle.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([notslidingpuzzleLocal__WEBPACK_IMPORTED_MODULE_0__]);\nnotslidingpuzzleLocal__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/*\nimport { HTTP_API_URL, WS_API_URL } from './constants';\n\nexport async function submitProof(actionLog, moveCount) {\n  try {\n    if (!moveCount || actionLog.length === 0) {\n      alert('Invalid proof data');\n      return;\n    }\n\n    const jobID = await requestProof(actionLog, blocksDestroyed, timeElapsed);\n    if (!jobID) {\n      return;\n    }\n    const result = await getProofResult(jobID);\n    console.log(result);\n    return result.proof_data;\n  } catch (error) {\n    console.error('Error creating proof:', error);\n  }\n}\n\n\nasync function requestProof(actionLog, moveCount) {\n  try {\n    const inputData = JSON.stringify({\n      action_log: actionLog,\n      move_count : moveCount\n    });\n    const response = await fetch(`${HTTP_API_URL}/prove`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: inputData,\n    });\n    const { job_id: jobID } = await response.json();\n    return jobID;\n  } catch (error) {\n    console.error('Error requesting proof:', error);\n  }\n}\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nasync function getProofResult(jobID){\n  return new Promise((resolve, reject) => {\n    const wsEndpoint = `${WS_API_URL}/proof/${jobID}`;\n    const socket = new WebSocket(wsEndpoint);\n\n    socket.addEventListener('message', (event) => {\n      const data = JSON.parse(event.data);\n      if (data.status === 'processing') {\n        console.log('Proof is being processed...');\n      } else if (data.status === 'complete') {\n        socket.close();\n        resolve(data);\n      } else if (data.status === 'failed' || data.status === 'not_found') {\n        reject(new Error('Proof generation failed'));\n      }\n    });\n\n    socket.addEventListener('error', (error) => {\n      console.error('WebSocket error:', error);\n      socket.close();\n      reject(error);\n    });\n\n    setTimeout(() => {\n      socket.close();\n      reject(new Error('WebSocket connection timed out'));\n    }, 5 * 60000); // 5 min timeout\n  });\n}\n\nwindow.submitProof = submitProof;\n\n*/\n\n\n\n\n\n\n\nwindow.addEventListener('resize', resizeCanvas, false);\n\nresizeCanvas();\n\nfunction resizeCanvas() {\n  var htmlCanvas = document.getElementById('canvas');\n  htmlCanvas.width = window.innerWidth;\n  htmlCanvas.height = window.innerHeight;\n}\n\ntry {\n  notslidingpuzzleLocal__WEBPACK_IMPORTED_MODULE_0__.program_main();\n} catch (e) {\n  console.error(e);\n}\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://not-sliding-puzzle-www/./index.js?");

/***/ })

}]);