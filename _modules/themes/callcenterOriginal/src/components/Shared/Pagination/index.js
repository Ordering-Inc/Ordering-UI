"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _DashboardSelect = require("../../../styles/Select/DashboardSelect");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Pagination = function Pagination(props) {
  var currentPage = props.currentPage,
    totalPages = props.totalPages,
    handleChangePage = props.handleChangePage,
    defaultPageSize = props.defaultPageSize,
    handleChangePageSize = props.handleChangePageSize,
    isHidePagecontrol = props.isHidePagecontrol,
    paginationSize = props.paginationSize;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var pageSizeOptions = [{
    value: 10,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "10")
  }, {
    value: 25,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "25")
  }, {
    value: 50,
    content: /*#__PURE__*/_react.default.createElement(_styles.Option, null, "50")
  }];
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    visiblePages = _useState2[0],
    setVisiblePages = _useState2[1];
  var _useState3 = (0, _react.useState)(currentPage),
    _useState4 = _slicedToArray(_useState3, 2),
    activePage = _useState4[0],
    setActivePage = _useState4[1];
  var filterPages = function filterPages(visiblePages, totalPages) {
    return visiblePages.filter(function (page) {
      return page <= totalPages;
    });
  };
  var getVisiblePages = function getVisiblePages(page, total) {
    if (total < 7) {
      return filterPages([1, 2, 3, 4, 5, 6], total);
    } else {
      if (page % 5 >= 0 && page > 4 && page + 2 < total) {
        return [1, page - 1, page, page + 1, total];
      } else if (page % 5 >= 0 && page > 4 && page + 2 >= total) {
        return [1, total - 3, total - 2, total - 1, total];
      } else {
        return [1, 2, 3, 4, 5, total];
      }
    }
  };
  var changePage = function changePage(page) {
    if (page === activePage) {
      return;
    }
    setActivePage(page);
    var _visiblePages = getVisiblePages(page, totalPages);
    setVisiblePages(filterPages(_visiblePages, totalPages));
    handleChangePage(page);
  };
  (0, _react.useEffect)(function () {
    if (!totalPages) return;
    setVisiblePages(getVisiblePages(null, totalPages));
  }, [totalPages]);
  (0, _react.useEffect)(function () {
    setActivePage(currentPage);
    var _visiblePages = getVisiblePages(currentPage, totalPages);
    setVisiblePages(filterPages(_visiblePages, totalPages));
  }, [currentPage]);
  return /*#__PURE__*/_react.default.createElement(_styles.PaginationContainer, null, /*#__PURE__*/_react.default.createElement(_styles.PaginationButtonContainer, null, /*#__PURE__*/_react.default.createElement(_styles.PageButton, {
    disabled: activePage === 1,
    onClick: function onClick() {
      return activePage !== 1 && changePage(activePage - 1);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronLeft, null)), visiblePages.map(function (page, index, array) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: page
    }, array[index - 1] + 2 <= page ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.PageButton, {
      noEffect: true
    }, "..."), /*#__PURE__*/_react.default.createElement(_styles.PageButton, {
      active: activePage === page,
      onClick: function onClick() {
        return changePage(page);
      }
    }, page)) : /*#__PURE__*/_react.default.createElement(_styles.PageButton, {
      active: activePage === page,
      onClick: function onClick() {
        return changePage(page);
      }
    }, page));
  }), /*#__PURE__*/_react.default.createElement(_styles.PageButton, {
    disabled: activePage === totalPages,
    onClick: function onClick() {
      return activePage !== totalPages && changePage(activePage + 1);
    }
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.ChevronRight, null))), !isHidePagecontrol && /*#__PURE__*/_react.default.createElement(_styles.PageSizeContainer, null, /*#__PURE__*/_react.default.createElement(_styles.PageSizeTitle, null, t('ITEMS_PER_PAGE', 'Items per page')), /*#__PURE__*/_react.default.createElement(_DashboardSelect.Select, {
    isSecondIcon: true,
    notAsync: true,
    minWidth: "70px",
    defaultValue: defaultPageSize || paginationSize,
    options: pageSizeOptions,
    onChange: function onChange(size) {
      return handleChangePageSize(size);
    }
  })));
};
exports.Pagination = Pagination;