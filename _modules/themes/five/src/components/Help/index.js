"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Help = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _HiOutlineChevronRight = _interopRequireDefault(require("@meronex/icons/hi/HiOutlineChevronRight"));

var _styles = require("./styles");

var _LastOrders = require("../LastOrders");

var _HelpStaticPage = require("../HelpStaticPage");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Help = function Help(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      selectedPage = _useState2[0],
      setSelectedPage = _useState2[1];

  var menuList = [{
    id: 1,
    title: t('HELP_WITH_AN_ORDER', 'Help with an order')
  }, {
    id: 2,
    title: t('ACCOUNT_AND_PAYMENT_OPTIONS', 'Account and Payment Options')
  }, {
    id: 3,
    title: t('GUIDE_TO_ORDERING', 'Guide to Ordering')
  }];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.HelpContainer, null, selectedPage && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.BreadCrumbContainer, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "deactive",
    onClick: function onClick() {
      return setSelectedPage(null);
    }
  }, t('HELP', 'Help')), /*#__PURE__*/_react.default.createElement(_HiOutlineChevronRight.default, null), /*#__PURE__*/_react.default.createElement("span", null, selectedPage === null || selectedPage === void 0 ? void 0 : selectedPage.title)), /*#__PURE__*/_react.default.createElement(_styles.SubTitle, null, selectedPage === null || selectedPage === void 0 ? void 0 : selectedPage.title)), !selectedPage && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('HELP', 'Help')), /*#__PURE__*/_react.default.createElement(_styles.HelpContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.SubPageList, null, menuList && menuList.map(function (page, i) {
    return /*#__PURE__*/_react.default.createElement(_styles.SubPage, {
      key: i
    }, /*#__PURE__*/_react.default.createElement("span", {
      onClick: function onClick() {
        return setSelectedPage(page);
      }
    }, page === null || page === void 0 ? void 0 : page.title));
  })), /*#__PURE__*/_react.default.createElement(_styles.LastOrdersListWrapper, null, /*#__PURE__*/_react.default.createElement("h2", null, t('LAST_ORDER', 'Last order')), /*#__PURE__*/_react.default.createElement(_LastOrders.LastOrders, props)))), (selectedPage === null || selectedPage === void 0 ? void 0 : selectedPage.id) === 1 && /*#__PURE__*/_react.default.createElement(_HelpStaticPage.HelpStaticPage, {
    slug: "helpOrder"
  }), (selectedPage === null || selectedPage === void 0 ? void 0 : selectedPage.id) === 2 && /*#__PURE__*/_react.default.createElement(_HelpStaticPage.HelpStaticPage, {
    slug: "helpAccountAndPayment"
  }), (selectedPage === null || selectedPage === void 0 ? void 0 : selectedPage.id) === 3 && /*#__PURE__*/_react.default.createElement(_HelpStaticPage.HelpStaticPage, {
    slug: "helpOrderingGuide"
  })), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};

exports.Help = Help;