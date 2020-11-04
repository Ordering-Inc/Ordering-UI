"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoScroll = void 0;

var _react = _interopRequireWildcard(require("react"));

var _useWindowSize2 = require("../../hooks/useWindowSize");

var _IosArrowForward = _interopRequireDefault(require("@meronex/icons/ios/IosArrowForward"));

var _IosArrowBack = _interopRequireDefault(require("@meronex/icons/ios/IosArrowBack"));

var _styles = require("./styles");

var _ThemeContext = require("../../contexts/ThemeContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AutoScroll = function AutoScroll(_ref) {
  var children = _ref.children,
      categories = _ref.categories,
      container = _ref.container;

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      categoriesElement = _useState2[0],
      setCategoriesElement = _useState2[1];

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme2 = _slicedToArray(_useTheme, 1),
      theme = _useTheme2[0];

  (0, _react.useEffect)(function () {
    var containerElement = document.getElementById(container).addEventListener('scroll', handleScroll);
    return function () {
      removeEventListener(containerElement);
    };
  });
  (0, _react.useEffect)(function () {
    var element = document.getElementById(categories);
    setCategoriesElement(element);
    handleScroll();
  }, [categoriesElement, width, theme === null || theme === void 0 ? void 0 : theme.rtl]);

  var handleScroll = function handleScroll() {
    var containerElement = document.getElementById(container);
    var categoriesElement = document.getElementById(categories);
    var botonRight = document.getElementsByClassName('right')[0];
    var botonLeft = document.getElementsByClassName('left')[0];

    if (botonLeft || botonRight) {
      if (theme === null || theme === void 0 ? void 0 : theme.rtl) {
        if (containerElement.scrollLeft * -1 < 40) {
          botonRight.classList.add('hidden');
        } else {
          botonRight.classList.remove('hidden');
        }

        if (containerElement.scrollLeft * -1 > (categoriesElement === null || categoriesElement === void 0 ? void 0 : categoriesElement.scrollWidth) - containerElement.offsetWidth - 10) {
          botonLeft.classList.add('hidden');
        } else {
          botonLeft.classList.remove('hidden');
        }
      } else {
        if (containerElement.scrollLeft < 40) {
          botonLeft.classList.add('hidden');
        } else {
          botonLeft.classList.remove('hidden');
        }

        if (containerElement.scrollLeft > (categoriesElement === null || categoriesElement === void 0 ? void 0 : categoriesElement.scrollWidth) - containerElement.offsetWidth - 10) {
          botonRight.classList.add('hidden');
        } else {
          botonRight.classList.remove('hidden');
        }
      }
    }
  };

  var scrolling = function scrolling(left) {
    var elementContainer = document.getElementById(container);

    if (left) {
      elementContainer.scrollBy({
        top: 0,
        left: -200,
        behavior: 'smooth'
      });
    } else {
      elementContainer.scrollBy({
        top: 0,
        left: +200,
        behavior: 'smooth'
      });
    }
  };

  return /*#__PURE__*/_react.default.createElement(_styles.DivContainer, null, width < categoriesElement.offsetWidth + 50 ? /*#__PURE__*/_react.default.createElement(_IosArrowBack.default, {
    className: "left",
    onClick: function onClick() {
      return scrolling('left');
    }
  }) : '', children, width < categoriesElement.offsetWidth + 50 ? /*#__PURE__*/_react.default.createElement(_IosArrowForward.default, {
    className: "right",
    onClick: function onClick() {
      return scrolling();
    }
  }) : '');
};

exports.AutoScroll = AutoScroll;