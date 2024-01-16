"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SkeletonText = exports.SkeletonReorder = exports.SkeletonOrder = exports.SkeletonInformation = exports.SkeletonContent = exports.SkeletonCard = exports.SkeletonButton = exports.OrdersContainer = exports.OptionTitle = exports.ImageNotFound = exports.BusinessInformation = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var OptionTitle = exports.OptionTitle = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  margin: ", ";\n  padding: ", ";\n\n  h1{\n    text-transform: capitalize;\n    font-size: 18px;\n    margin: 18px 0;\n  }\n\n  @media (min-width: 768px){\n    padding: 0;\n    width: 100%;\n  }\n"])), function (_ref) {
  var isBusinessesPage = _ref.isBusinessesPage;
  return isBusinessesPage ? '10px 20px 0' : '0 auto';
}, function (_ref2) {
  var isBusinessesPage = _ref2.isBusinessesPage;
  return !isBusinessesPage && '0 15px';
});
var OrdersContainer = exports.OrdersContainer = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  ", "\n\n  ", "\n"])), function (_ref3) {
  var activeOrders = _ref3.activeOrders;
  return activeOrders && (0, _styledComponents.css)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    padding: 0 10px;\n    text-align: center;\n    display: flex;\n    overflow-x: auto;\n    overflow-y: hidden;\n    justify-content: ", ";\n    width: 100%;\n    margin: auto 0px auto auto;\n    box-sizing: border-box;\n    ", "\n    ::-webkit-scrollbar {\n      width: 0px;\n      height: 0px;\n    }\n\n    ", "\n    \n    @media (min-width: 768px) {\n      width: 100%;\n      justify-content: flex-start;\n      ", "\n  "])), function (_ref4) {
    var ordersLength = _ref4.ordersLength;
    return !ordersLength ? 'flex-start' : 'center';
  }, function (props) {
    var _props$theme;
    return ((_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.rtl) && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n      margin: auto auto auto 0px;\n    "])));
  }, function (_ref5) {
    var isSkeleton = _ref5.isSkeleton;
    return !isSkeleton && (0, _styledComponents.css)(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["   \n      ::-webkit-scrollbar {\n      width: 6px;\n      height: 6px;\n      }\n      ", "\n    "])), function (_ref6) {
      var ordersLength = _ref6.ordersLength,
        isBusinessesPage = _ref6.isBusinessesPage;
      return !ordersLength && !isBusinessesPage && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        > div {\n          margin-left: -10px;\n          ", "\n        }\n        > div:first-child{\n          margin-left: -15px;\n          ", "\n        }\n      "])), function (props) {
        var _props$theme2;
        return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n            margin-left: 0;\n            margin-right: -10px;\n          "])));
      }, function (props) {
        var _props$theme3;
        return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n            margin-left: 0;\n            margin-right: -15px;\n          "])));
      });
    });
  }, function (_ref7) {
    var isSkeleton = _ref7.isSkeleton,
      ordersLength = _ref7.ordersLength;
    return !isSkeleton && !ordersLength && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n      > div:first-child{\n        ", "\n      }\n      "])), function (_ref8) {
      var isBusinessesPage = _ref8.isBusinessesPage;
      return !isBusinessesPage && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n          margin-left: -10px;\n          ", "\n        "])), function (props) {
        var _props$theme4;
        return ((_props$theme4 = props.theme) === null || _props$theme4 === void 0 ? void 0 : _props$theme4.rtl) && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n            margin-left: 0;\n            margin-right: -10px;\n          "])));
      });
    });
  });
}, function (_ref9) {
  var activeOrders = _ref9.activeOrders;
  return !activeOrders && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n    width: 100%;\n    display: flex;\n    flex-direction: column-reverse;\n    margin: 0 auto;\n\n    p{\n      margin-block-end: 0;\n      margin-block-start: 0;\n      color: #9A9A9A\n    }\n\n    @media(min-width: 480px){\n      width: 100%;\n      padding: 0;\n      div:last-child {\n        border-top: none;\n      }\n    }\n  "])));
});
var SkeletonOrder = exports.SkeletonOrder = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n\n  ", "\n\n  ", "\n"])), function (_ref10) {
  var activeOrders = _ref10.activeOrders;
  return activeOrders && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n    width: auto;\n    text-align: center;\n    margin-left: 10px;\n\n    ", "\n  "])), function (props) {
    var _props$theme5;
    return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n      margin-right: 10px;\n      margin-left: 0;\n    "])));
  });
}, function (_ref11) {
  var activeOrders = _ref11.activeOrders;
  return !activeOrders && (0, _styledComponents.css)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n    width: 100%;\n    flex-direction: column;\n    margin: 10px 0;\n    > * {\n      margin: 20px 0;\n    }\n  "])));
});
var SkeletonCard = exports.SkeletonCard = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  margin: 10px 5px 10px 5px;\n"])));
var SkeletonContent = exports.SkeletonContent = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n\n  ", "\n\n  ", "\n"])), function (_ref12) {
  var activeOrders = _ref12.activeOrders;
  return activeOrders && (0, _styledComponents.css)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n    > * {\n      margin: 5px;\n    }\n  "])));
}, function (_ref13) {
  var activeOrders = _ref13.activeOrders;
  return !activeOrders && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    justify-content: space-between;\n  "])));
});
var SkeletonText = exports.SkeletonText = _styledComponents.default.div(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n\n  ", "\n"])), function (props) {
  var _props$theme6;
  return ((_props$theme6 = props.theme) === null || _props$theme6 === void 0 ? void 0 : _props$theme6.rtl) && (0, _styledComponents.css)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n    text-align: right;\n  "])));
});
var SkeletonButton = exports.SkeletonButton = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n    span{\n      border-radius: 24px;\n      width: 270px;\n      height: 36px;\n    }\n  @media(min-width: 480px){\n    span{\n      width: 360px;\n    }\n  }\n"])));
var SkeletonInformation = exports.SkeletonInformation = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n\n  > *{\n    margin: 5px;\n  }\n"])));
var SkeletonReorder = exports.SkeletonReorder = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  text-align: center;\n  align-items: center;\n  margin-right: 25px;\n\n  ", "\n\n  span:first-child span{\n    width: 40px;\n  }\n\n  span:last-child{\n    width: 75px;\n    height: 30px;\n  }\n\n  @media(min-width: 480px){\n    ", "\n    span:first-child span{\n      width: 80px;\n    }\n    span:last-child{\n      width: 150px;\n    }\n  }\n"])), function (props) {
  var _props$theme7;
  return ((_props$theme7 = props.theme) === null || _props$theme7 === void 0 ? void 0 : _props$theme7.rtl) && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    margin-left: 25px;\n    margin-right: 0;\n  "])));
}, function (props) {
  var _props$theme8;
  return (_props$theme8 = props.theme) !== null && _props$theme8 !== void 0 && _props$theme8.rtl ? (0, _styledComponents.css)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n      margin-left: 0;\n    "]))) : (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n      margin-right: 0;\n    "])));
});
var ImageNotFound = exports.ImageNotFound = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  \n  margin: 0 auto;\n  img{\n    width: 100%\n  }\n"])));
var BusinessInformation = exports.BusinessInformation = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  flex-direction: column;\n  flex: 1;\n  padding-left: 10px;\n  font-size: 0.9em;\n  ", "\n  ", "\n  .orders-detail {\n    display: flex;\n    align-items: center;\n\n    svg {\n      background: transparent;\n      border: none;\n      opacity: 1;\n      color: #909BA9;\n      width: 15px;\n      min-width: 15px;\n    }\n  }\n  h2 {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    font-size: 14px;\n    margin-block-end: 0;\n    margin-block-start: 0;\n  }\n  p {\n    margin-block-end: 0.1em;\n    margin-block-start: 0.1em;\n    color : #9A9A9A;\n    white-space: nowrap;\n    font-size: 0.9em;\n    ", "\n  }\n\n  .order-status {\n    color: #03459E;\n    width: 170px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  p[name='view_order'] {\n    color: ", ";\n    cursor: pointer;\n    text-decoration: none;\n    width: fit-content;\n  }\n\n  @media (min-width: 480px){\n    h2 {\n    font-size: 16px;\n    margin-block-end: 0.1em;\n    margin-block-start: 0.1em;\n    }\n    p{\n      ", "\n    }\n  }\n\n  @media (min-width: 768px){\n    font-size: 0.9em;\n    p {\n      font-size: 14px;\n    }\n  }\n"])), function (_ref14) {
  var activeOrders = _ref14.activeOrders;
  return activeOrders && (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n      width: 30%;\n  "])));
}, function (props) {
  var _props$theme9;
  return ((_props$theme9 = props.theme) === null || _props$theme9 === void 0 ? void 0 : _props$theme9.rtl) && (0, _styledComponents.css)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n    padding-right: 10px;\n    padding-left: 0;\n  "])));
}, function (_ref15) {
  var activeOrders = _ref15.activeOrders;
  return activeOrders && (0, _styledComponents.css)(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n      font-size: 0.8em;\n    "])));
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref16) {
  var activeOrders = _ref16.activeOrders;
  return activeOrders && (0, _styledComponents.css)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n        font-size: 0.9em;\n      "])));
});