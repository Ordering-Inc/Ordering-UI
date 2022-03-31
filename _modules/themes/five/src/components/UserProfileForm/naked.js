"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserFormDetails = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _orderingComponents = require("ordering-components");

var _excluded = ["photo"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Component to manage user form details behavior without UI component
 */
var UserFormDetails = function UserFormDetails(props) {
  var UIComponent = props.UIComponent,
      useSessionUser = props.useSessionUser,
      refreshSessionUser = props.refreshSessionUser,
      useDefualtSessionManager = props.useDefualtSessionManager,
      userId = props.userId,
      user = props.user,
      useValidationFields = props.useValidationFields,
      handleButtonUpdateClick = props.handleButtonUpdateClick,
      handleSuccessUpdate = props.handleSuccessUpdate,
      isCustomerMode = props.isCustomerMode;

  var _useApi = (0, _orderingComponents.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];

  var _useToast = (0, _orderingComponents.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useSession = (0, _orderingComponents.useSession)(),
      _useSession2 = _slicedToArray(_useSession, 2),
      session = _useSession2[0],
      changeUser = _useSession2[1].changeUser;

  var _useCustomer = (0, _orderingComponents.useCustomer)(),
      _useCustomer2 = _slicedToArray(_useCustomer, 2),
      customer = _useCustomer2[0],
      setUserCustomer = _useCustomer2[1].setUserCustomer;

  var _useValidationsFields = (0, _orderingComponents.useValidationFields)(),
      _useValidationsFields2 = _slicedToArray(_useValidationsFields, 1),
      validationFields = _useValidationsFields2[0];

  var _useState = (0, _react.useState)(!!(props !== null && props !== void 0 && props.isEdit)),
      _useState2 = _slicedToArray(_useState, 2),
      isEdit = _useState2[0],
      setIsEdit = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isVerifiedPhone = _useState4[0],
      setIsVerifiedPhone = _useState4[1];

  var _useState5 = (0, _react.useState)({
    loading: false,
    loadingDriver: false,
    result: {
      error: false
    }
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      userState = _useState6[0],
      setUserState = _useState6[1];

  var _useState7 = (0, _react.useState)({
    loading: false,
    changes: {},
    result: {
      error: false
    }
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      formState = _useState8[0],
      setFormState = _useState8[1];

  var _useState9 = (0, _react.useState)({
    loading: false,
    result: {
      error: false
    }
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      verifyPhoneState = _useState10[0],
      setVerifyPhoneState = _useState10[1];

  var _useState11 = (0, _react.useState)({
    loading: false,
    result: {
      error: false
    }
  }),
      _useState12 = _slicedToArray(_useState11, 2),
      checkPhoneCodeState = _useState12[0],
      setCheckPhoneCodeState = _useState12[1];

  var requestsState = {};
  var accessToken = useDefualtSessionManager ? session.token : props.accessToken;
  (0, _react.useEffect)(function () {
    if ((userId || useSessionUser && refreshSessionUser) && !session.loading && !props.userData) {
      setUserState(_objectSpread(_objectSpread({}, userState), {}, {
        loading: true
      }));
      var source = {};
      requestsState.user = source;
      ordering.setAccessToken(accessToken).users(useSessionUser && refreshSessionUser ? session.user.id : userId).get({
        cancelToken: source
      }).then(function (response) {
        setUserState({
          loading: false,
          result: response.content
        });

        if (response.content.result) {
          if (!isCustomerMode) {
            changeUser(_objectSpread(_objectSpread({}, session.user), response.content.result));
          } else {
            setUserCustomer(_objectSpread(_objectSpread({}, customer.user), response.content.result), true);
          }
        }
      }).catch(function (err) {
        if (err.constructor.name !== 'Cancel') {
          setUserState({
            loading: false,
            result: {
              error: true,
              result: err.message
            }
          });
        }
      });
    } else {
      setUserState({
        loading: false,
        result: {
          error: false,
          result: useSessionUser && !refreshSessionUser ? session.user : user
        }
      });
    }

    return function () {
      if (requestsState.user) {
        requestsState.user.cancel();
      }
    };
  }, [session.loading]);
  /**
   * Clean formState
   */

  var cleanFormState = function cleanFormState(values) {
    return setFormState(_objectSpread(_objectSpread({}, formState), values));
  };
  /**
   * Default fuction for user profile workflow
   */


  var handleUpdateClick = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(changes, isImage, image) {
      var response, _props$userData, _formState$changes, photo, _changes, _props$userData2, _changes$setCustomerI;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!handleButtonUpdateClick) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", handleButtonUpdateClick(userState.result.result, formState.changes));

            case 2:
              _context.prev = 2;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                loading: true
              }));

              if (changes) {
                formState.changes = _objectSpread(_objectSpread({}, formState.changes), changes);
              }

              if (!isImage) {
                _context.next = 13;
                break;
              }

              _context.next = 8;
              return ordering.users((props === null || props === void 0 ? void 0 : (_props$userData = props.userData) === null || _props$userData === void 0 ? void 0 : _props$userData.id) || userState.result.result.id).save({
                photo: image || formState.changes.photo
              }, {
                accessToken: accessToken
              });

            case 8:
              response = _context.sent;
              _formState$changes = formState.changes, photo = _formState$changes.photo, _changes = _objectWithoutProperties(_formState$changes, _excluded);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: response.content.error ? formState.changes : _changes,
                result: response.content,
                loading: false
              }));
              _context.next = 17;
              break;

            case 13:
              _context.next = 15;
              return ordering.users((props === null || props === void 0 ? void 0 : (_props$userData2 = props.userData) === null || _props$userData2 === void 0 ? void 0 : _props$userData2.id) || userState.result.result.id).save(formState.changes, {
                accessToken: accessToken
              });

            case 15:
              response = _context.sent;
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                changes: response.content.error ? formState.changes : {},
                result: response.content,
                loading: false
              }));

            case 17:
              if (!response.content.error) {
                setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                  result: _objectSpread(_objectSpread({}, userState.result), response.content)
                }));

                if (!isCustomerMode) {
                  changeUser(_objectSpread(_objectSpread({}, session.user), response.content.result));
                } else {
                  setUserCustomer(_objectSpread(_objectSpread({}, customer.user), response.content.result), (_changes$setCustomerI = changes === null || changes === void 0 ? void 0 : changes.setCustomerInLocal) !== null && _changes$setCustomerI !== void 0 ? _changes$setCustomerI : true);
                }

                if (handleSuccessUpdate) {
                  handleSuccessUpdate(response.content.result);
                }

                if (!image) {
                  setIsEdit(!isEdit);
                }
              }

              _context.next = 23;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](2);
              setFormState(_objectSpread(_objectSpread({}, formState), {}, {
                result: {
                  error: true,
                  result: _context.t0.message
                },
                loading: false
              }));

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 20]]);
    }));

    return function handleUpdateClick(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Update credential data
   * @param {EventTarget} e Related HTML event
   */


  var handleChangeInput = function handleChangeInput(e, isMany) {
    var currentChanges = {};

    if (isMany) {
      Object.values(e).map(function (obj) {
        currentChanges = _objectSpread(_objectSpread({}, currentChanges), {}, _defineProperty({}, obj.name, obj.value));
      });
    } else {
      currentChanges = _defineProperty({}, e.target.name, e.target.value);
    }

    setFormState(_objectSpread(_objectSpread({}, formState), {}, {
      changes: _objectSpread(_objectSpread({}, formState.changes), currentChanges)
    }));
  };
  /**
   * Update user photo data
   * @param {File} file Image to change user photo
   */


  var handlechangeImage = function handlechangeImage(file) {
    var reader = new window.FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
      setFormState(_objectSpread(_objectSpread({}, formState), {}, {
        changes: _objectSpread(_objectSpread({}, formState.changes), {}, {
          photo: reader.result
        })
      }));
    };

    reader.onerror = function (error) {
      return console.log(error);
    };
  };
  /**
   * Check if field should be show
   * @param {string} fieldName Field name
   */


  var showField = function showField(fieldName) {
    var _validationFields$fie, _validationFields$fie2, _validationFields$fie3, _validationFields$fie4, _validationFields$fie5, _validationFields$fie6, _validationFields$fie7;

    return !useValidationFields || !validationFields.loading && !((_validationFields$fie = validationFields.fields) !== null && _validationFields$fie !== void 0 && (_validationFields$fie2 = _validationFields$fie.checkout) !== null && _validationFields$fie2 !== void 0 && _validationFields$fie2[fieldName]) || !validationFields.loading && ((_validationFields$fie3 = validationFields.fields) === null || _validationFields$fie3 === void 0 ? void 0 : (_validationFields$fie4 = _validationFields$fie3.checkout) === null || _validationFields$fie4 === void 0 ? void 0 : _validationFields$fie4[fieldName]) && ((_validationFields$fie5 = validationFields.fields) === null || _validationFields$fie5 === void 0 ? void 0 : (_validationFields$fie6 = _validationFields$fie5.checkout) === null || _validationFields$fie6 === void 0 ? void 0 : (_validationFields$fie7 = _validationFields$fie6[fieldName]) === null || _validationFields$fie7 === void 0 ? void 0 : _validationFields$fie7.enabled);
  };
  /**
   * Check if field is required
   * @param {string} fieldName Field name
   */


  var isRequiredField = function isRequiredField(fieldName) {
    var _validationFields$fie8, _validationFields$fie9, _validationFields$fie10, _validationFields$fie11, _validationFields$fie12, _validationFields$fie13, _validationFields$fie14, _validationFields$fie15;

    return useValidationFields && !validationFields.loading && ((_validationFields$fie8 = validationFields.fields) === null || _validationFields$fie8 === void 0 ? void 0 : (_validationFields$fie9 = _validationFields$fie8.checkout) === null || _validationFields$fie9 === void 0 ? void 0 : _validationFields$fie9[fieldName]) && ((_validationFields$fie10 = validationFields.fields) === null || _validationFields$fie10 === void 0 ? void 0 : (_validationFields$fie11 = _validationFields$fie10.checkout) === null || _validationFields$fie11 === void 0 ? void 0 : (_validationFields$fie12 = _validationFields$fie11[fieldName]) === null || _validationFields$fie12 === void 0 ? void 0 : _validationFields$fie12.enabled) && ((_validationFields$fie13 = validationFields.fields) === null || _validationFields$fie13 === void 0 ? void 0 : (_validationFields$fie14 = _validationFields$fie13.checkout) === null || _validationFields$fie14 === void 0 ? void 0 : (_validationFields$fie15 = _validationFields$fie14[fieldName]) === null || _validationFields$fie15 === void 0 ? void 0 : _validationFields$fie15.required);
  };

  var handleToggleAvalaibleStatusDriver = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(newValue) {
      var _props$userData3, response;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                loadingDriver: true
              }));
              _context2.next = 4;
              return ordering.users((props === null || props === void 0 ? void 0 : (_props$userData3 = props.userData) === null || _props$userData3 === void 0 ? void 0 : _props$userData3.id) || userState.result.result.id).save({
                available: newValue
              }, {
                accessToken: accessToken
              });

            case 4:
              response = _context2.sent;

              if (response.content.error) {
                setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                  loadingDriver: false,
                  result: _objectSpread(_objectSpread({}, userState.result), {}, {
                    error: response.content.result
                  })
                }));
              }

              if (!response.content.error) {
                setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                  loadingDriver: false,
                  result: _objectSpread({}, response.content)
                }));
                changeUser(_objectSpread(_objectSpread({}, session.user), response.content.result));
              }

              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);

              if (_context2.t0.constructor.name !== 'Cancel') {
                setUserState(_objectSpread(_objectSpread({}, userState), {}, {
                  loadingDriver: false,
                  result: {
                    error: true,
                    result: _context2.t0.message
                  }
                }));
              }

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function handleToggleAvalaibleStatusDriver(_x4) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * function to send verify code with twilio
   * @param {Object} values object with cellphone and country code values
   */


  var sendVerifyPhoneCode = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(values) {
      var response, res;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              setIsVerifiedPhone(false);
              _context3.prev = 1;
              setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
                loading: true
              }));
              _context3.next = 5;
              return fetch("".concat(ordering.root, "/auth/sms/twilio/verify"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  cellphone: values.cellphone,
                  country_phone_code: "+".concat(values.country_phone_code)
                })
              });

            case 5:
              response = _context3.sent;
              _context3.next = 8;
              return response.json();

            case 8:
              res = _context3.sent;
              setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
                loading: false,
                result: res
              }));
              _context3.next = 15;
              break;

            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](1);
              setVerifyPhoneState(_objectSpread(_objectSpread({}, verifyPhoneState), {}, {
                loading: false,
                result: {
                  error: _context3.t0.message
                }
              }));

            case 15:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[1, 12]]);
    }));

    return function sendVerifyPhoneCode(_x5) {
      return _ref3.apply(this, arguments);
    };
  }();
  /**
   * function to verify code with endpoint
   * @param {Object} values object with cellphone and country code values
   */


  var checkVerifyPhoneCode = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4(values) {
      var body, _res$result, response, res;

      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              body = _objectSpread({}, values);
              _context4.prev = 1;
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                loading: true
              }));
              _context4.next = 5;
              return fetch("".concat(ordering.root, "/auth/sms/twilio"), {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
              });

            case 5:
              response = _context4.sent;
              _context4.next = 8;
              return response.json();

            case 8:
              res = _context4.sent;

              if (!(res !== null && res !== void 0 && res.error) && res !== null && res !== void 0 && (_res$result = res.result) !== null && _res$result !== void 0 && _res$result.id) {
                setIsVerifiedPhone(true);
                showToast(_orderingComponents.ToastType.Info, t('PHONE_VERIFIED', 'Phone number has been verified!'), 1000);
              }

              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                loading: false,
                result: res
              }));
              _context4.next = 16;
              break;

            case 13:
              _context4.prev = 13;
              _context4.t0 = _context4["catch"](1);
              setCheckPhoneCodeState(_objectSpread(_objectSpread({}, checkPhoneCodeState), {}, {
                loading: false,
                result: {
                  error: _context4.t0.message
                }
              }));

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[1, 13]]);
    }));

    return function checkVerifyPhoneCode(_x6) {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleSetCheckPhoneCodeState = function handleSetCheckPhoneCodeState(data) {
    var values = data || {
      loading: false,
      result: {
        error: false
      }
    };
    setCheckPhoneCodeState(values);
  };

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    isEdit: isEdit,
    cleanFormState: cleanFormState,
    formState: formState,
    userState: userState,
    validationFields: validationFields,
    isVerifiedPhone: isVerifiedPhone,
    showField: showField,
    setFormState: setFormState,
    isRequiredField: isRequiredField,
    handleChangeInput: handleChangeInput,
    handleButtonUpdateClick: handleUpdateClick,
    handlechangeImage: handlechangeImage,
    toggleIsEdit: function toggleIsEdit() {
      return setIsEdit(!isEdit);
    },
    handleToggleAvalaibleStatusDriver: handleToggleAvalaibleStatusDriver,
    handleSendVerifyCode: sendVerifyPhoneCode,
    handleCheckPhoneCode: checkVerifyPhoneCode,
    verifyPhoneState: verifyPhoneState,
    checkPhoneCodeState: checkPhoneCodeState,
    setCheckPhoneCodeState: handleSetCheckPhoneCodeState
  })));
};

exports.UserFormDetails = UserFormDetails;
UserFormDetails.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * Use session user to details
   */
  useSessionUser: function useSessionUser(props, propName) {
    if (props[propName] !== undefined && typeof props[propName] !== 'boolean') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(props[propName]), "` supplied to `UserFormDetails`, expected `boolean`."));
    }

    if (props.user === undefined && props.userId === undefined && !props[propName]) {
      return new Error("Invalid prop `".concat(propName, "` must be true when `user` and `userId` is not present."));
    }

    if (props[propName] && (props.user !== undefined || props.userId !== undefined)) {
      return new Error("Invalid prop `".concat(propName, "` must be without `userId` and `user`."));
    }
  },

  /**
   * Refresh session user data from Ordering API
   */
  refreshSessionUser: _propTypes.default.bool,

  /**
   * User ID
   * If you provide the user id the component get user form Ordering API
   */
  userId: function userId(props, propName) {
    if (props[propName] !== undefined && typeof props[propName] !== 'number') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(props[propName]), "` supplied to `UserFormDetails`, expected `number`."));
    }

    if (props.user === undefined && !props.useSessionUser && !props[propName]) {
      return new Error("Invalid prop `".concat(propName, "` must be true when `user` and `useSessionUser` is not present."));
    }

    if (props[propName] && (props.useSessionUser || props.user !== undefined)) {
      return new Error("Invalid prop `".concat(propName, "` must be without `useSessionUser` and `user`."));
    }
  },

  /**
   * User object
   * If you provide user object the component not get user form Ordering API
   */
  user: function user(props, propName) {
    if (props[propName] !== undefined && _typeof(props[propName]) !== 'object') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(props[propName]), "` supplied to `UserFormDetails`, expected `object`."));
    }

    if (props.userId === undefined && !props.useSessionUser && !props[propName]) {
      return new Error("Invalid prop `".concat(propName, "` must be true when `useSessionUser` and `userId` is not present."));
    }

    if (props[propName] && (props.useSessionUser || props.userId !== undefined)) {
      return new Error("Invalid prop `".concat(propName, "` must be without `useSessionUser` and `userId`."));
    }
  },

  /**
   * Function to change default user details behavior
   * @param {Object} user Current user data
   * @param {Object} changes Current form changes
   */
  handleButtonUpdateClick: _propTypes.default.func,

  /**
   * Function to get user update success event
   * @param {Object} user User with session data
   */
  handleSuccessUpdate: _propTypes.default.func,

  /**
   * Enable to get validation fields to show/hide fields from Ordering API
   */
  useValidationFields: _propTypes.default.bool,

  /**
   * Type of validation field to apply and get from API
   */
  validationFieldsType: _propTypes.default.string,

  /**
   * Enable/Disable default session manager
   * Save user and token with default session manager
   */
  useDefualtSessionManager: _propTypes.default.bool,

  /**
   * Access token to update user
   * Is required when `useDefualtSessionManager` is false
   */
  accessToken: function accessToken(props, propName) {
    if (props[propName] !== undefined && typeof props[propName] !== 'string') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(props[propName]), "` supplied to `UserFormDetails`, expected `object`."));
    }

    if (props[propName] === undefined && !props.useDefualtSessionManager) {
      return new Error("Invalid prop `".concat(propName, "` is required when `useDefualtSessionManager` is false."));
    }
  },

  /**
   * Components types before user details form
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Components types after user details form
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),

  /**
   * Elements before user details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Elements after user details form
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element),

  /**
   * Url to login page
   * Url to create element link to login page
   */
  linkToLogin: _propTypes.default.string,

  /**
   * Element to custom link to login
   * You can provide de link element as react router Link or your custom Anchor to login page
   */
  elementLinkToLogin: _propTypes.default.element
};
UserFormDetails.defaultProps = {
  useValidationFields: false,
  validationFieldsType: 'checkout',
  useDefualtSessionManager: true,
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};