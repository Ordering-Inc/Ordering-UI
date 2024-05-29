"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownToggle = exports.DropdownItem = exports.Dropdown = exports.DropDownMenu = void 0;
var _react = _interopRequireWildcard(require("react"));
var _style = require("./style");
var _reactPopper = require("react-popper");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Dropdown = exports.Dropdown = function Dropdown(props) {
  var open = props.open;
  var referenceElement = (0, _react.useRef)();
  var popperElement = (0, _react.useRef)();
  var arrowElement = (0, _react.useRef)();
  // const [open, setOpen] = useState(false)
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    toggle = _useState2[0],
    setToggle = _useState2[1];
  var _useState3 = (0, _react.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    menu = _useState4[0],
    setMenu = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    children = _useState6[0],
    setChildren = _useState6[1];
  var _usePopper = (0, _reactPopper.usePopper)(referenceElement.current, popperElement.current, {
      placement: 'auto',
      modifiers: [{
        name: 'arrow',
        options: {
          element: arrowElement.current
        }
      }, {
        name: 'offset',
        options: {
          offset: [0, 12]
        }
      }]
    }),
    styles = _usePopper.styles,
    attributes = _usePopper.attributes,
    forceUpdate = _usePopper.forceUpdate,
    update = _usePopper.update;
  (0, _react.useEffect)(function () {
    var _children = [];
    _react.default.Children.forEach(props.children, function (child) {
      var _child$type, _child$type2;
      if ((child === null || child === void 0 || (_child$type = child.type) === null || _child$type === void 0 ? void 0 : _child$type.displayName) === 'DropdownToggle') {
        setToggle(child);
      } else if ((child === null || child === void 0 || (_child$type2 = child.type) === null || _child$type2 === void 0 ? void 0 : _child$type2.displayName) === 'DropDownMenu') {
        setMenu(child);
      } else {
        _children.push(child);
      }
    });
    setChildren(_children);
  }, [props.children]);

  // const hanldeOpenMenu = () => {
  //   setOpen(!open)
  // }

  // const closeMenu = (e) => {
  //   if (open) {
  //     if (
  //       !e.target.classList.contains(DropdownToggleStyled.styledComponentId) &&
  //       !e.target.classList.contains(DropdownItemLink.styledComponentId) &&
  //       !e.target.classList.contains(DropdownItemStyled.styledComponentId)
  //     ) {
  //       // setOpen(false)
  //     }
  //   }
  // }

  (0, _react.useEffect)(function () {
    update && update();
    // document.addEventListener('mousedown', closeMenu)
    // return () => document.removeEventListener('mousedown', closeMenu)
  }, [open]);
  return (
    /*#__PURE__*/
    // <DropdownStyled style={props.style} ref={referenceElement} onClick={hanldeOpenMenu}>
    _react.default.createElement(_style.DropdownStyled, {
      style: props.style,
      ref: referenceElement
    }, toggle, menu && /*#__PURE__*/_react.default.cloneElement(menu, _objectSpread({
      ref: popperElement,
      style: _objectSpread(_objectSpread(_objectSpread({}, menu.props.style), styles.popper), {}, {
        visibility: open ? 'visible' : 'hidden'
      })
    }, attributes.popper), [].concat(_toConsumableArray(Array.isArray(menu.props.children) ? menu.props.children : [menu.props.children]), [/*#__PURE__*/_react.default.createElement(_style.Arrow, {
      key: "arrow",
      ref: arrowElement,
      style: styles.arrow
    })])), open && children.map(function (child) {
      return child;
    }))
  );
};
var DropdownToggle = exports.DropdownToggle = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(_style.DropdownToggleStyled, _extends({}, props, {
    ref: ref
  }), props.children);
});
DropdownToggle.displayName = 'DropdownToggle';
var DropDownMenu = exports.DropDownMenu = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(_style.DropdownMenuStyled, _extends({}, props, {
    ref: ref
  }), props.children);
});
DropDownMenu.displayName = 'DropDownMenu';
var DropdownItem = exports.DropdownItem = function DropdownItem(props) {
  return /*#__PURE__*/_react.default.createElement(_style.DropdownItemStyled, props, props.children);
};
DropDownMenu.DropdownItem = 'DropdownItem';