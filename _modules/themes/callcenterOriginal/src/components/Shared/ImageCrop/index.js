"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageCrop = void 0;
var _react = _interopRequireWildcard(require("react"));
var _cropperjs = _interopRequireDefault(require("cropperjs"));
var _orderingComponents = require("ordering-components");
var _styles = require("../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styledComponents = require("styled-components");
require("cropperjs/dist/cropper.css");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ImageCrop = function ImageCrop(props) {
  var photo = props.photo,
    handleChangePhoto = props.handleChangePhoto,
    onClose = props.onClose;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var theme = (0, _styledComponents.useTheme)();
  var _useState = (0, _react.useState)(),
    _useState2 = _slicedToArray(_useState, 2),
    cropper = _useState2[0],
    setCropper = _useState2[1];
  var _useState3 = (0, _react.useState)(50),
    _useState4 = _slicedToArray(_useState3, 2),
    zoomValue = _useState4[0],
    setZoomValue = _useState4[1];
  var cropperRef = (0, _react.useRef)(null);
  var handleChangeZoom = function handleChangeZoom(evt) {
    var value = evt.target.value;
    cropper.scale(value / 50);
    setZoomValue(value);
  };
  var getCropData = function getCropData() {
    if (typeof cropper !== 'undefined') {
      handleChangePhoto(cropper.getCroppedCanvas({
        imageSmoothingQuality: 'high'
      }).toDataURL());
      onClose && onClose();
    }
  };
  var handleChangeRotate = function handleChangeRotate() {
    if (!photo) return;
    cropper.rotate(45);
  };
  (0, _react.useEffect)(function () {
    if (!cropperRef.current || !photo) return;
    var _cropper = new _cropperjs.default(cropperRef.current, {
      // aspectRatio: 16 / 9,
      dragMode: 'move',
      zoomable: false,
      toggleDragModeOnDblclick: false
    });
    setCropper(_cropper);
  }, [photo]);
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, /*#__PURE__*/_react.default.createElement(_styles2.ImageCropWrapper, null, /*#__PURE__*/_react.default.createElement("img", {
    ref: cropperRef,
    src: photo
  })), /*#__PURE__*/_react.default.createElement(_styles2.ImageCropActionWrapper, null, /*#__PURE__*/_react.default.createElement(_styles2.RangeWrapper, null, /*#__PURE__*/_react.default.createElement("span", {
    className: "title"
  }, t('RESIZE_IMAGE', 'Resize image')), /*#__PURE__*/_react.default.createElement("input", {
    min: "0",
    type: "range",
    step: "0.01",
    value: zoomValue,
    onChange: handleChangeZoom,
    style: {
      backgroundImage: "-webkit-gradient(linear, 0% 0%, ".concat(zoomValue, "% 0%, color-stop(100%, ").concat(theme.colors.primary, "), color-stop(100%, #F6F6FA))")
    }
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: "percent"
  }, parseInt(zoomValue * 2), " %")), /*#__PURE__*/_react.default.createElement(_styles2.ActionContentWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.IconButton, {
    onClick: handleChangeRotate
  }, /*#__PURE__*/_react.default.createElement("span", null, t('ROTATE', 'Rotate')), /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ArrowClockwise, null)))), /*#__PURE__*/_react.default.createElement(_styles2.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "7.6px",
    color: "primary",
    onClick: getCropData
  }, t('CROP', 'Crop'))));
};
exports.ImageCrop = ImageCrop;