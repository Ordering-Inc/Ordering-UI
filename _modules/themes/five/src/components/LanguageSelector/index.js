"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LanguageSelector = void 0;

var _react = _interopRequireDefault(require("react"));

var _orderingComponents = require("ordering-components");

var _Select = require("../../styles/Select");

var _styles = require("./styles");

var _BisDownArrow = _interopRequireDefault(require("@meronex/icons/bi/BisDownArrow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LanguageSelectorUI = function LanguageSelectorUI(props) {
  var _languagesState$langu;

  var languagesState = props.languagesState,
      currentLanguage = props.currentLanguage,
      handleChangeLanguage = props.handleChangeLanguage,
      notReload = props.notReload,
      defaultLanguages = props.defaultLanguages,
      defaultCurrentLanguage = props.defaultCurrentLanguage;

  var _languages = languagesState === null || languagesState === void 0 ? void 0 : (_languagesState$langu = languagesState.languages) === null || _languagesState$langu === void 0 ? void 0 : _languagesState$langu.map(function (language) {
    return {
      value: language === null || language === void 0 ? void 0 : language.code,
      content: language === null || language === void 0 ? void 0 : language.name,
      showOnSelected: ''
    };
  });

  _languages && _languages.sort(function (a, b) {
    return a.content > b.content ? 1 : b.content > a.content ? -1 : 0;
  });

  var transformLanguageToCountry = function transformLanguageToCountry(currentLanguage) {
    var _currentLanguage$slic;

    var language = (_currentLanguage$slic = currentLanguage.slice(0, 2)) === null || _currentLanguage$slic === void 0 ? void 0 : _currentLanguage$slic.toUpperCase();
    if (language === 'EN') return 'US';
    if (language === 'AR') return 'AE';
    if (language === 'CA') return 'ES';
    if (language === 'DA') return 'DK';
    if (language === 'ZH') return 'CN';
    return language;
  };

  return _languages && _languages.length > 1 ? /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement("img", {
    alt: currentLanguage,
    src: "http://purecatamphetamine.github.io/country-flag-icons/3x2/".concat(transformLanguageToCountry(currentLanguage), ".svg")
  }), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    isHomeStyle: true,
    options: languagesState !== null && languagesState !== void 0 && languagesState.loading ? defaultLanguages : _languages,
    defaultValue: languagesState !== null && languagesState !== void 0 && languagesState.loading ? defaultCurrentLanguage : currentLanguage,
    onChange: function onChange(languageId) {
      return handleChangeLanguage(languageId);
    },
    notReload: notReload,
    placeholder: "",
    CustomArrow: _BisDownArrow.default
  })) : null;
};

var LanguageSelector = function LanguageSelector(props) {
  var DefaultChangeLanguage = function DefaultChangeLanguage() {};

  var langProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: LanguageSelectorUI,
    onChangeLanguage: props.onChangeLanguage || DefaultChangeLanguage,
    defaultLanguages: [{
      content: 'English',
      showOnSelected: 'EN',
      value: 'en'
    }],
    defaultCurrentLanguage: 'en'
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.LanguageSelector, langProps);
};

exports.LanguageSelector = LanguageSelector;