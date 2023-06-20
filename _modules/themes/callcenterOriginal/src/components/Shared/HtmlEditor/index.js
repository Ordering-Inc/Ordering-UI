"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HtmlEditor = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _jquery = _interopRequireDefault(require("jquery"));
var _reactSummernote = _interopRequireDefault(require("react-summernote"));
require("react-summernote/dist/react-summernote.css");
require("bootstrap/js/dist/modal");
require("bootstrap/js/dist/dropdown");
require("bootstrap/js/dist/tooltip");
require("bootstrap/dist/css/bootstrap.css");
var _styles = require("./styles");
var _InsertLink = require("./InsertLink");
var _InsertVideo = require("./InsertVideo");
var _InsertImage = require("./InsertImage");
var _Modal = require("../Modal");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var HtmlEditorUI = function HtmlEditorUI(props) {
  var body = props.body,
    handleChangeBody = props.handleChangeBody,
    imageListState = props.imageListState,
    insertImageState = props.insertImageState,
    handleInsertImage = props.handleInsertImage,
    handleDeleteImage = props.handleDeleteImage,
    selectedImageUrl = props.selectedImageUrl,
    setSelectedImageUrl = props.setSelectedImageUrl;
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    openModal = _useState2[0],
    setOpenModal = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    editorContext = _useState4[0],
    setEditorContext = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    pageContent = _useState6[0],
    setPageContent = _useState6[1];
  var insertLink = function insertLink(context) {
    var ui = _jquery.default.summernote.ui;
    var button = ui.button({
      contents: '<i class="note-icon-link"/>',
      tooltip: 'link',
      class: 'note-btn',
      click: function click() {
        setEditorContext(context);
        context.invoke('editor.saveRange');
        setOpenModal('link');
      }
    });
    return button.render();
  };
  var handleRestoreEditor = function handleRestoreEditor() {
    return editorContext.invoke('restoreRange');
  };
  var insertImage = function insertImage(context) {
    var ui = _jquery.default.summernote.ui;
    var button = ui.button({
      contents: '<i class="note-icon-picture"/>',
      tooltip: 'picture',
      class: 'note-btn',
      click: function click() {
        setEditorContext(context);
        context.invoke('editor.saveRange');
        setOpenModal('image');
      }
    });
    return button.render();
  };
  var insertVideo = function insertVideo(context) {
    var ui = _jquery.default.summernote.ui;
    var button = ui.button({
      contents: '<i class="note-icon-video"/>',
      tooltip: 'video',
      class: 'note-btn',
      click: function click() {
        setEditorContext(context);
        context.invoke('editor.saveRange');
        setOpenModal('video');
      }
    });
    return button.render();
  };
  var handleCloseModal = function handleCloseModal() {
    setOpenModal(false);
    setEditorContext(null);
  };
  (0, _react.useEffect)(function () {
    if (!pageContent) return;
    handleChangeBody(pageContent);
  }, [pageContent]);
  var onInit = function onInit(note) {
    if (body) {
      note.reset();
      note.replace(body);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperEditor, null, /*#__PURE__*/_react.default.createElement(_reactSummernote.default, {
    onInit: onInit,
    options: {
      height: 350,
      fontNames: ['Arial', 'Arial Black', 'Comic Sans MS', 'Courier New'],
      toolbar: [['style', ['style']], ['font', ['bold', 'italic', 'underline', 'clear']], ['fontsize', ['fontsize']], ['color', ['color']], ['para', ['ul', 'paragraph']], ['table', ['table']], ['insert', ['insertLink', 'insertImage', 'insertVideo']], ['codeview', ['codeview']]],
      buttons: {
        insertLink: insertLink,
        insertImage: insertImage,
        insertVideo: insertVideo
      }
    },
    onChange: function onChange(content) {
      return setPageContent(content);
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "60%",
    open: openModal === 'link',
    onClose: function onClose() {
      return setOpenModal(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_InsertLink.InsertLink, {
    editorContext: editorContext,
    handleRestoreEditor: handleRestoreEditor,
    onClose: function onClose() {
      return handleCloseModal();
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "60%",
    open: openModal === 'video',
    onClose: function onClose() {
      return setOpenModal(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_InsertVideo.InsertVideo, {
    editorContext: editorContext,
    handleRestoreEditor: handleRestoreEditor,
    onClose: function onClose() {
      return handleCloseModal();
    }
  })), /*#__PURE__*/_react.default.createElement(_Modal.Modal, {
    width: "60%",
    open: openModal === 'image',
    onClose: function onClose() {
      return setOpenModal(null);
    }
  }, /*#__PURE__*/_react.default.createElement(_InsertImage.InsertImage, {
    imageListState: imageListState,
    editorContext: editorContext,
    handleRestoreEditor: handleRestoreEditor,
    onClose: function onClose() {
      return handleCloseModal();
    },
    insertImageState: insertImageState,
    handleInsertImage: handleInsertImage,
    handleDeleteImage: handleDeleteImage,
    selectedImageUrl: selectedImageUrl,
    setSelectedImageUrl: setSelectedImageUrl
  })));
};
var HtmlEditor = function HtmlEditor(props) {
  var htmlEditorProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: HtmlEditorUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.HtmlEditor, htmlEditorProps);
};
exports.HtmlEditor = HtmlEditor;