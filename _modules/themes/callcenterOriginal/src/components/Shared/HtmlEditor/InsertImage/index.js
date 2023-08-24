"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InsertImage = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _styles = require("../../../../styles");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _BiImage = _interopRequireDefault(require("@meronex/icons/bi/BiImage"));
var _utils = require("../../../../../../../utils");
var _Shared = require("../../../Shared");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var InsertImage = function InsertImage(props) {
  var _insertImageState$cha, _insertImageState$cha2, _insertImageState$cha3;
  var imageListState = props.imageListState,
    editorContext = props.editorContext,
    onClose = props.onClose,
    handleRestoreEditor = props.handleRestoreEditor,
    insertImageState = props.insertImageState,
    handleInsertImage = props.handleInsertImage,
    handleDeleteImage = props.handleDeleteImage,
    selectedImageUrl = props.selectedImageUrl,
    setSelectedImageUrl = props.setSelectedImageUrl;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    imageUrl = _useState2[0],
    setImageUrl = _useState2[1];
  var imageInputRef = (0, _react.useRef)(null);
  var _useState3 = (0, _react.useState)({
      open: false,
      content: []
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    alertState = _useState4[0],
    setAlertState = _useState4[1];
  var _useState5 = (0, _react.useState)({
      open: false,
      content: null,
      handleOnAccept: null
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    confirm = _useState6[0],
    setConfirm = _useState6[1];
  var handleInsertClick = function handleInsertClick() {
    handleRestoreEditor();
    editorContext.invoke('editor.insertImage', imageUrl);
    onClose();
  };
  var handleClickImage = function handleClickImage(type) {
    imageInputRef.current.click();
  };
  var handleFiles = function handleFiles(files) {
    if (files.length === 1) {
      var _files$;
      var type = files[0].type.split('/')[0];
      if (type !== 'image') {
        setAlertState({
          open: true,
          content: [t('ERROR_ONLY_IMAGES', 'Only images can be accepted')]
        });
        return;
      }
      if ((0, _utils.bytesConverter)((_files$ = files[0]) === null || _files$ === void 0 ? void 0 : _files$.size) > 2048) {
        setAlertState({
          open: true,
          content: [t('IMAGE_MAXIMUM_SIZE', 'The maximum image size is 2 megabytes')]
        });
        return;
      }
      setConfirm({
        open: true,
        content: t('QUESTION_ADD_GALLERY_IMAGE', 'Are you sure that you want to add this gallery image?'),
        handleOnAccept: function handleOnAccept() {
          setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
            open: false
          }));
          handleInsertImage(files[0]);
        }
      });
    }
  };
  var onDeleteClick = function onDeleteClick(imageId) {
    setConfirm({
      open: true,
      content: t('QUESTION_DELETE_GALLERY_ITEM', 'Are you sure that you want to delete this image?'),
      handleOnAccept: function handleOnAccept() {
        setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
          open: false
        }));
        handleDeleteImage(imageId);
      }
    });
  };
  (0, _react.useEffect)(function () {
    setImageUrl(selectedImageUrl);
  }, [selectedImageUrl]);
  return /*#__PURE__*/_react.default.createElement(_styles2.InsertImageContainer, null, /*#__PURE__*/_react.default.createElement("h1", null, t('INSERT_IMAGE', 'Insert image')), /*#__PURE__*/_react.default.createElement(_styles2.WrapperInput, null, /*#__PURE__*/_react.default.createElement("label", null, t('IMAGE_URL', 'Image URL')), /*#__PURE__*/_react.default.createElement(_styles.Input, {
    value: imageUrl || '',
    onChange: function onChange(e) {
      return setImageUrl(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.Button, {
    borderRadius: "8px",
    color: "primary",
    onClick: function onClick() {
      return handleInsertClick();
    }
  }, t('INSERT', 'Insert')), /*#__PURE__*/_react.default.createElement(_styles2.NewImage, null, /*#__PURE__*/_react.default.createElement(_styles2.Image, {
    onClick: function onClick() {
      return handleClickImage();
    },
    isImage: insertImageState === null || insertImageState === void 0 || (_insertImageState$cha = insertImageState.change) === null || _insertImageState$cha === void 0 ? void 0 : _insertImageState$cha.soucre
  }, /*#__PURE__*/_react.default.createElement(_orderingComponents.ExamineClick, {
    onFiles: handleFiles,
    childRef: function childRef(e) {
      imageInputRef.current = e;
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: insertImageState.loading
  }, /*#__PURE__*/_react.default.createElement(_orderingComponents.DragAndDrop, {
    onDrop: function onDrop(dataTransfer) {
      return handleFiles(dataTransfer.files);
    },
    accept: "image/png, image/jpeg, image/jpg",
    disabled: insertImageState.loading
  }, insertImageState.loading ? /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, null)) : (insertImageState === null || insertImageState === void 0 || (_insertImageState$cha2 = insertImageState.change) === null || _insertImageState$cha2 === void 0 ? void 0 : _insertImageState$cha2.soucre) && /*#__PURE__*/_react.default.createElement("img", {
    src: insertImageState === null || insertImageState === void 0 || (_insertImageState$cha3 = insertImageState.change) === null || _insertImageState$cha3 === void 0 ? void 0 : _insertImageState$cha3.soucre,
    alt: "image",
    loading: "lazy"
  }), /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIconContainer, null, /*#__PURE__*/_react.default.createElement(_styles2.UploadImageIcon, null, /*#__PURE__*/_react.default.createElement(_BiImage.default, null), /*#__PURE__*/_react.default.createElement("span", null, t('DRAG_DROP_IMAGE_HERE', 'Put your image here')))))))), /*#__PURE__*/_react.default.createElement(_styles2.ImageListContainer, null, imageListState.images.map(function (image) {
    return /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, {
      key: image.id,
      onClick: function onClick() {
        return setSelectedImageUrl(image === null || image === void 0 ? void 0 : image.source);
      }
    }, /*#__PURE__*/_react.default.createElement(_styles2.CloseButton, {
      onClick: function onClick() {
        return onDeleteClick(image.id);
      }
    }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)), /*#__PURE__*/_react.default.createElement("img", {
      src: image === null || image === void 0 ? void 0 : image.source,
      alt: ""
    }));
  })), /*#__PURE__*/_react.default.createElement(_Shared.Alert, {
    title: t('WEB_APPNAME', 'ORDERING'),
    content: alertState.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: alertState.open,
    onClose: function onClose() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    onAccept: function onAccept() {
      return setAlertState({
        open: false,
        content: []
      });
    },
    closeOnBackdrop: false
  }), /*#__PURE__*/_react.default.createElement(_Shared.Confirm, {
    title: t('WEB_APPNAME', 'Ordering'),
    content: confirm.content,
    acceptText: t('ACCEPT', 'Accept'),
    open: confirm.open,
    onClose: function onClose() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onCancel: function onCancel() {
      return setConfirm(_objectSpread(_objectSpread({}, confirm), {}, {
        open: false
      }));
    },
    onAccept: confirm.handleOnAccept,
    closeOnBackdrop: false
  }));
};
exports.InsertImage = InsertImage;