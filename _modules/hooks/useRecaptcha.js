"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRecaptcha = void 0;

var _react = require("react");

var _orderingComponents = require("ordering-components");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Hook to mangage Recaptcha version
 * @param {boolean} enableRecaptcha
 */
var useRecaptcha = function useRecaptcha(enableRecaptcha) {
  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      configs = _useConfig2[0].configs;

  var _useState = (0, _react.useState)({
    version: 'v3',
    siteKey: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      reCaptchaConfig = _useState2[0],
      setRecaptchaConfig = _useState2[1];

  var _useToast = (0, _orderingComponents.useToast)(),
      _useToast2 = _slicedToArray(_useToast, 2),
      showToast = _useToast2[1].showToast;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  (0, _react.useEffect)(function () {
    if (configs && Object.keys(configs).length > 0 && enableRecaptcha && (reCaptchaConfig === null || reCaptchaConfig === void 0 ? void 0 : reCaptchaConfig.siteKey) === '') {
      var _configs$security_rec, _configs$security_rec2, _configs$security_rec3, _configs$security_rec5;

      if ((configs === null || configs === void 0 ? void 0 : (_configs$security_rec = configs.security_recaptcha_type) === null || _configs$security_rec === void 0 ? void 0 : _configs$security_rec.value) === 'v3' && (configs === null || configs === void 0 ? void 0 : (_configs$security_rec2 = configs.security_recaptcha_score_v3) === null || _configs$security_rec2 === void 0 ? void 0 : _configs$security_rec2.value) > 0 && configs !== null && configs !== void 0 && (_configs$security_rec3 = configs.security_recaptcha_site_key_v3) !== null && _configs$security_rec3 !== void 0 && _configs$security_rec3.value) {
        var _configs$security_rec4;

        setRecaptchaConfig({
          version: 'v3',
          siteKey: configs === null || configs === void 0 ? void 0 : (_configs$security_rec4 = configs.security_recaptcha_site_key_v3) === null || _configs$security_rec4 === void 0 ? void 0 : _configs$security_rec4.value,
          error: false
        });
        return;
      }

      if (configs !== null && configs !== void 0 && (_configs$security_rec5 = configs.security_recaptcha_site_key) !== null && _configs$security_rec5 !== void 0 && _configs$security_rec5.value) {
        var _configs$security_rec6;

        setRecaptchaConfig({
          version: 'v2',
          siteKey: configs === null || configs === void 0 ? void 0 : (_configs$security_rec6 = configs.security_recaptcha_site_key) === null || _configs$security_rec6 === void 0 ? void 0 : _configs$security_rec6.value,
          error: false
        });
        return;
      }

      showToast(_orderingComponents.ToastType.Error, t('CONFIG_DOESNOT_RECAPTCHA_KEY', 'the config doesn\'t have recaptcha site key'));
    }
  }, [configs, enableRecaptcha]);
  return [reCaptchaConfig];
};

exports.useRecaptcha = useRecaptcha;