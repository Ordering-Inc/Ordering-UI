"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CalendarHeader = void 0;
var _react = _interopRequireDefault(require("react"));
var _orderingComponents = require("ordering-components");
var _constants = require("react-big-calendar/lib/utils/constants");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _MdcViewWeekOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcViewWeekOutline"));
var _MdcViewWeek = _interopRequireDefault(require("@meronex/icons/mdc/MdcViewWeek"));
var _MdcViewAgendaOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcViewAgendaOutline"));
var _MdcViewDayOutline = _interopRequireDefault(require("@meronex/icons/mdc/MdcViewDayOutline"));
var _reactBootstrap = require("react-bootstrap");
var _styles = require("../../../styles");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CalendarHeader = function CalendarHeader(props) {
  var label = props.label,
    view = props.view,
    views = props.views,
    onView = props.onView,
    onNavigate = props.onNavigate;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var viewsList = {
    month: {
      title: t('MONTH', 'Month'),
      icon: /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.Grid3x2, null)
    },
    week: {
      title: t('WEEK', 'Week'),
      icon: /*#__PURE__*/_react.default.createElement(_MdcViewWeekOutline.default, null)
    },
    work_week: {
      title: t('WORK_WEEK', 'Work week'),
      icon: /*#__PURE__*/_react.default.createElement(_MdcViewWeek.default, null)
    },
    day: {
      title: t('DAY', 'Day'),
      icon: /*#__PURE__*/_react.default.createElement(_MdcViewDayOutline.default, null)
    },
    agenda: {
      title: t('AGENDA', 'Agenda'),
      icon: /*#__PURE__*/_react.default.createElement(_MdcViewAgendaOutline.default, null)
    }
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.CalendarHeaderContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.CalendarLabelContainer, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return onNavigate(_constants.navigate.PREVIOUS);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronLeft, null)), /*#__PURE__*/_react.default.createElement("span", {
    className: "label"
  }, label), /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    color: "black",
    onClick: function onClick() {
      return onNavigate(_constants.navigate.NEXT);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null))), /*#__PURE__*/_react.default.createElement(_styles2.ViewButtonsWrapper, null, views.map(function (name, i) {
    return /*#__PURE__*/_react.default.createElement(_reactBootstrap.OverlayTrigger, {
      key: i,
      placement: "bottom",
      overlay: /*#__PURE__*/_react.default.createElement(_reactBootstrap.Tooltip, null, viewsList[name].title)
    }, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
      color: view === name ? 'primary' : 'black',
      onClick: function onClick() {
        return onView(name);
      }
    }, viewsList[name].icon));
  })));
};
exports.CalendarHeader = CalendarHeader;