"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useRecaptcha = void 0;
var _react = require("react");
var _orderingComponents = require("ordering-components");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/**
 * Hook to mangage Recaptcha version
 * @param {boolean} enableRecaptcha
 */
var useRecaptcha = exports.useRecaptcha = function useRecaptcha(enableRecaptcha) {
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
      if ((configs === null || configs === void 0 || (_configs$security_rec = configs.security_recaptcha_type) === null || _configs$security_rec === void 0 ? void 0 : _configs$security_rec.value) === 'v3' && (configs === null || configs === void 0 || (_configs$security_rec2 = configs.security_recaptcha_score_v3) === null || _configs$security_rec2 === void 0 ? void 0 : _configs$security_rec2.value) > 0 && configs !== null && configs !== void 0 && (_configs$security_rec3 = configs.security_recaptcha_site_key_v3) !== null && _configs$security_rec3 !== void 0 && _configs$security_rec3.value) {
        var _configs$security_rec4;
        setRecaptchaConfig({
          version: 'v3',
          siteKey: configs === null || configs === void 0 || (_configs$security_rec4 = configs.security_recaptcha_site_key_v3) === null || _configs$security_rec4 === void 0 ? void 0 : _configs$security_rec4.value,
          error: false
        });
        return;
      }
      if (configs !== null && configs !== void 0 && (_configs$security_rec5 = configs.security_recaptcha_site_key) !== null && _configs$security_rec5 !== void 0 && _configs$security_rec5.value) {
        var _configs$security_rec6;
        setRecaptchaConfig({
          version: 'v2',
          siteKey: configs === null || configs === void 0 || (_configs$security_rec6 = configs.security_recaptcha_site_key) === null || _configs$security_rec6 === void 0 ? void 0 : _configs$security_rec6.value,
          error: false
        });
        return;
      }
      showToast(_orderingComponents.ToastType.Error, t('CONFIG_DOESNOT_RECAPTCHA_KEY', 'the config doesn\'t have recaptcha site key'));
    }
  }, [configs, enableRecaptcha]);
  return [reCaptchaConfig];
};