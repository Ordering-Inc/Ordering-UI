"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageSelector = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _Select = require("../../styles/Select");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var LanguageSelectorUI = function LanguageSelectorUI(props) {
  var _languagesState$langu;
  var languagesState = props.languagesState,
    currentLanguage = props.currentLanguage,
    handleChangeLanguage = props.handleChangeLanguage,
    notReload = props.notReload;
  var _languages = languagesState === null || languagesState === void 0 || (_languagesState$langu = languagesState.languages) === null || _languagesState$langu === void 0 ? void 0 : _languagesState$langu.map(function (language) {
    var _language$code;
    return {
      value: language === null || language === void 0 ? void 0 : language.code,
      content: language === null || language === void 0 ? void 0 : language.name,
      showOnSelected: (_language$code = language.code) === null || _language$code === void 0 ? void 0 : _language$code.toUpperCase()
    };
  });
  _languages && _languages.sort(function (a, b) {
    return a.content > b.content ? 1 : b.content > a.content ? -1 : 0;
  });
  return /*#__PURE__*/_react.default.createElement(_Select.Select, {
    options: _languages,
    defaultValue: currentLanguage,
    onChange: function onChange(languageId) {
      return handleChangeLanguage(languageId);
    },
    notReload: notReload
  });
};
var LanguageSelector = exports.LanguageSelector = function LanguageSelector(props) {
  var DefaultChangeLanguage = function DefaultChangeLanguage() {};
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.LanguageSelector, _extends({}, props, {
    UIComponent: LanguageSelectorUI,
    onChangeLanguage: props.onChangeLanguage || DefaultChangeLanguage
  }));
};