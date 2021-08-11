"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleLoginButton = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _orderingComponents = require("ordering-components");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var GoogleLoginButton = function GoogleLoginButton(props) {
  var UIComponent = props.UIComponent,
      onSuccess = props.onSuccess,
      onFailure = props.onFailure,
      onRequest = props.onRequest,
      responseType = props.responseType,
      handleSuccessGoogleLogin = props.handleSuccessGoogleLogin,
      handleSuccessGoogleLogout = props.handleSuccessGoogleLogout,
      initParams = props.initParams,
      buttonStyle = props.buttonStyle,
      handleGoogleLoginClick = props.handleGoogleLoginClick;

  var _useApi = (0, _orderingComponents.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useState = (0, _react.useState)({
    loading: false,
    result: {
      error: false
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formState = _useState2[0],
      setFormState = _useState2[1];

  var _useState3 = (0, _react.useState)({
    loaded: false,
    logged: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      googleStatus = _useState4[0],
      setGoogleStatus = _useState4[1];

  var wasUnmounted = false;
  (0, _react.useEffect)(function () {
    var element = document.getElementById('google-login');

    if (element) {
      element.parentNode.removeChild(element);
    }

    insertGapiScript();
    return function () {
      wasUnmounted = true;
    };
  }, []);
  /**
   * loading script for the google's api
   */

  var insertGapiScript = function insertGapiScript() {
    var js = window.document.createElement('script');
    js.id = 'google-login';
    js.src = 'https://apis.google.com/js/api.js';
    js.async = true;
    js.defer = true;

    js.onload = function () {
      initializeGoogleSignIn();
    };

    window.document.body.appendChild(js);
  };
  /**
   * Start Login google
   */


  var initializeGoogleSignIn = function initializeGoogleSignIn() {
    window.gapi.load('auth2', function () {
      setGoogleStatus(_objectSpread(_objectSpread({}, googleStatus), {}, {
        loaded: true
      }));
      var GoogleAuth = window.gapi.auth2.getAuthInstance();

      if (!GoogleAuth) {
        window.gapi.auth2.init(initParams).then( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(res) {
            var signedIn;
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!wasUnmounted) {
                      signedIn = res.isSignedIn.get();

                      if (signedIn) {
                        handleSigninSuccess(res.currentUser.get());
                      }
                    }

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()).catch(function () {});
      } else if (GoogleAuth.isSignedIn.get()) {
        if (!wasUnmounted) {
          handleSigninSuccess(GoogleAuth.currentUser.get());
        }
      }
    });

    if (buttonStyle) {
      window.gapi.load('signin2', function () {
        if (!wasUnmounted) {
          window.gapi.signin2.render('my-signin2', _objectSpread(_objectSpread({}, buttonStyle), {}, {
            onsuccess: onSuccess,
            onfailure: onFailure
          }));
        }
      });
    }
  };
  /**
   * handling response of google
   * @param {EventTarget} e Click button event
   */


  var signIn = function signIn(e) {
    if (e) {
      e.preventDefault(); // to prevent submit if used within form
    }

    if (googleStatus.loaded) {
      var GoogleAuth = window.gapi.auth2.getAuthInstance();

      if (onRequest) {
        onRequest();
      }

      if (responseType === 'code') {
        GoogleAuth.grantOfflineAccess(initParams).then(function (res) {
          return onSuccess(res);
        }, function (err) {
          return onFailure(err);
        });
      } else {
        GoogleAuth.signIn(initParams).then(function (res) {
          setFormState({
            loading: false,
            result: {
              error: false
            }
          });
          setGoogleStatus(_objectSpread(_objectSpread({}, googleStatus), {}, {
            logged: true
          }));
          handleSigninSuccess(res);
        }, function (err) {
          setFormState({
            loading: false,
            result: {
              error: true,
              result: 'Error login with Google'
            }
          });

          if (onFailure) {
            onFailure(err);
          }
        });
      }
    }
  };

  var signOut = function signOut(e) {
    if (e) {
      e.preventDefault(); // to prevent submit if used within form
    }

    if (googleStatus.loaded) {
      var GoogleAuth = window.gapi.auth2.getAuthInstance();
      GoogleAuth.signOut().then(GoogleAuth.disconnect().then(function () {
        setFormState({
          loading: false,
          result: {
            error: false
          }
        });
        setGoogleStatus(_objectSpread(_objectSpread({}, googleStatus), {}, {
          logged: false
        }));

        if (handleSuccessGoogleLogout) {
          handleSuccessGoogleLogout();
        }
      }));
    }
  };
  /**
   * Function that return token of the user
   * @param {object} res from Google
   */


  var handleSigninSuccess = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(res) {
      var authResponse, response;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!handleGoogleLoginClick) {
                _context2.next = 3;
                break;
              }

              handleGoogleLoginClick(res);
              return _context2.abrupt("return");

            case 3:
              authResponse = res.getAuthResponse(); // login with backend

              _context2.prev = 4;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));
              _context2.next = 8;
              return ordering.users().authGoogle({
                access_token: authResponse === null || authResponse === void 0 ? void 0 : authResponse.id_token
              });

            case 8:
              response = _context2.sent;
              setFormState({
                result: response.content,
                loading: false
              });

              if (!response.content.error) {
                if (handleSuccessGoogleLogin) {
                  handleSuccessGoogleLogin(response.content.result);
                }

                if (onSuccess) {
                  onSuccess(response);
                }
              } else {
                signOut();
              }

              _context2.next = 17;
              break;

            case 13:
              _context2.prev = 13;
              _context2.t0 = _context2["catch"](4);
              setFormState({
                result: {
                  error: true,
                  result: _context2.t0.message
                },
                loading: false
              });
              signOut();

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 13]]);
    }));

    return function handleSigninSuccess(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    formState: formState,
    googleStatus: googleStatus,
    signIn: signIn,
    signOut: signOut
  })));
};

exports.GoogleLoginButton = GoogleLoginButton;
GoogleLoginButton.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
    * property to get response code if type "code"
    */
  responseType: _propTypes.default.string,

  /**
     * Function to get login with google success event
     * @param {object} user User logged
     */
  handleSuccessGoogleLogin: _propTypes.default.func,

  /**
     * handling response of google
     * @param {Object} result google response when the result is success
     */
  onSuccess: _propTypes.default.func,

  /**
     * handling response of google
     * @param {Object} result google response when the result is error
     */
  onFailure: _propTypes.default.func,

  /**
     * handling response of google
     * google response when the user is logging
     */
  onRequest: _propTypes.default.func,

  /**
   * loading script for the google's api
   */
  insertGapiScript: _propTypes.default.func,

  /**
   * Start Login google
   */
  initializeGoogleSignIn: _propTypes.default.func,

  /**
   * handling response of google
   */
  signIn: _propTypes.default.func,

  /**
   * Function that return token of the user
   */
  handleSigninSuccess: _propTypes.default.func,

  /**
   * @param {google_response} res
   * handleCustomClick, function to get click event and return google response without default behavior
   */
  handleGoogleLoginClick: _propTypes.default.func,

  /**
   * Components types before Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after Facebook login button
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after Facebook login button
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
GoogleLoginButton.defaultProps = {
  responseType: '',
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};