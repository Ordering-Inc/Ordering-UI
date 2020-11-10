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
      container = _ref.container,
      modal = _ref.modal,
      loading = _ref.loading;

  var _useWindowSize = (0, _useWindowSize2.useWindowSize)(),
      width = _useWindowSize.width;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      categoriesElement = _useState2[0],
      setCategoriesElement = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      containerElement = _useState4[0],
      setContainerElement = _useState4[1];

  var _useTheme = (0, _ThemeContext.useTheme)(),
      _useTheme2 = _slicedToArray(_useTheme, 1),
      theme = _useTheme2[0];

  (0, _react.useEffect)(function () {
    var _document, _document$getElementB, _document2, _document3;

    var containerElementListener = (_document = document) === null || _document === void 0 ? void 0 : (_document$getElementB = _document.getElementById(container)) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.addEventListener('scroll', handleScroll);
    var containerElement = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.getElementById(container);
    var element = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.getElementById(categories);

    if (!loading) {
      setCategoriesElement(element);
      setContainerElement(containerElement);
    }

    return function () {
      document.removeEventListener(containerElementListener);
    };
  });
  (0, _react.useEffect)(function () {
    handleScroll();
  }, [containerElement === null || containerElement === void 0 ? void 0 : containerElement.scrollLeft, categoriesElement === null || categoriesElement === void 0 ? void 0 : categoriesElement.scrollLeft, width, theme === null || theme === void 0 ? void 0 : theme.rtl]);

  var handleScroll = function handleScroll() {
    var botonRight = document.getElementById('right-autoscroll');
    var botonLeft = document.getElementById('left-autoscroll');

    if (botonLeft || botonRight) {
      if (theme === null || theme === void 0 ? void 0 : theme.rtl) {
        if ((containerElement === null || containerElement === void 0 ? void 0 : containerElement.scrollLeft) * -1 < 40) {
          botonRight.classList.add('hidden');
        } else {
          botonRight.classList.remove('hidden');
        }

        if ((containerElement === null || containerElement === void 0 ? void 0 : containerElement.scrollLeft) * -1 > (categoriesElement === null || categoriesElement === void 0 ? void 0 : categoriesElement.scrollWidth) - (containerElement === null || containerElement === void 0 ? void 0 : containerElement.offsetWidth) - 20) {
          botonLeft.classList.add('hidden');
        } else {
          botonLeft.classList.remove('hidden');
        }
      } else {
        if ((containerElement === null || containerElement === void 0 ? void 0 : containerElement.scrollLeft) < 40) {
          botonLeft.classList.add('hidden');
        } else {
          botonLeft.classList.remove('hidden');
        }

        if ((containerElement === null || containerElement === void 0 ? void 0 : containerElement.scrollLeft) > (categoriesElement === null || categoriesElement === void 0 ? void 0 : categoriesElement.scrollWidth) - (containerElement === null || containerElement === void 0 ? void 0 : containerElement.offsetWidth) - 20) {
          botonRight.classList.add('hidden');
        } else {
          botonRight.classList.remove('hidden');
        }
      }
    }
  };

  var scrolling = function scrolling(left) {
    if (left) {
      containerElement.scrollBy({
        top: 0,
        left: -categoriesElement.offsetWidth / 12 > -200 ? -200 : -categoriesElement.offsetWidth / 12,
        behavior: 'smooth'
      });
    } else {
      containerElement.scrollBy({
        top: 0,
        left: +categoriesElement.offsetWidth / 12 < 200 ? 200 : +categoriesElement.offsetWidth / 12,
        behavior: 'smooth'
      });
    }
  };

  return /*#__PURE__*/_react.default.createElement(_styles.DivContainer, {
    modal: modal
  }, width < categoriesElement.offsetWidth + 50 ? /*#__PURE__*/_react.default.createElement(_IosArrowBack.default, {
    id: "left-autoscroll",
    onMouseDown: function onMouseDown() {
      return scrolling(true);
    }
  }) : '', children, width < categoriesElement.offsetWidth + 50 ? /*#__PURE__*/_react.default.createElement(_IosArrowForward.default, {
    id: "right-autoscroll",
    onMouseDown: function onMouseDown() {
      return scrolling();
    }
  }) : '');
};

exports.AutoScroll = AutoScroll;