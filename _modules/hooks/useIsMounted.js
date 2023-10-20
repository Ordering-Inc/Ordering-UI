"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIsMounted = void 0;
var _react = require("react");
var useIsMounted = exports.useIsMounted = function useIsMounted() {
  var isMounted = (0, _react.useRef)(false);
  (0, _react.useEffect)(function () {
    isMounted.current = true;
    return function () {
      isMounted.current = false;
    };
  }, []);
  var mounted = (0, _react.useCallback)(function () {
    return isMounted.current;
  }, []);
  return mounted();
};