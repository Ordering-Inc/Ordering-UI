"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleLoginButtonUI = exports.GoogleIdentityButton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GoogleLoginButtonUI = function GoogleLoginButtonUI(props) {
  var initParams = props.initParams,
      handleSigninSuccess = props.handleSigninSuccess;
  (0, _react.useEffect)(function () {
    window.handleCredentialResponse = function (response) {
      handleSigninSuccess(response.credential);
    };

    var GoogleButton = document.getElementById('g_id_onload');
    GoogleButton.setAttribute('data-callback', 'handleCredentialResponse');
  });
  return /*#__PURE__*/_react.default.createElement(_styles.GoogleButton, {
    initialIcon: true,
    color: "secondary",
    id: "g_id_onload",
    "data-client_id": initParams.client_id,
    "data-auto_prompt": "false"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "g_id_signin",
    "data-size": "medium",
    "data-shape": "pill",
    "data-text": "signin_with",
    "data-locale": "en"
  }));
};

exports.GoogleLoginButtonUI = GoogleLoginButtonUI;

var GoogleIdentityButton = function GoogleIdentityButton(props) {
  var googleLoginProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: GoogleLoginButtonUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.GoogleIdentityButton, googleLoginProps);
};

exports.GoogleIdentityButton = GoogleIdentityButton;