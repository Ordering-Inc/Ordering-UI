"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PaginationButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _MdKeyboardArrowLeft = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowLeft"));
var _MdKeyboardArrowRight = _interopRequireDefault(require("@meronex/icons/md/MdKeyboardArrowRight"));
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PaginationButton = function PaginationButton(_ref) {
  var pageSize = _ref.pageSize,
    total = _ref.total,
    currentPage = _ref.currentPage,
    totalPages = _ref.totalPages,
    prevPaginate = _ref.prevPaginate,
    nextPaginate = _ref.nextPaginate;
  var indexOfLastOrders = currentPage * pageSize < total ? currentPage * pageSize : total;
  var indexOfFirstOrders = (currentPage - 1) * pageSize + 1;
  return /*#__PURE__*/_react.default.createElement(_styles.WrapperPagination, null, /*#__PURE__*/_react.default.createElement(_styles.WrapperPageState, null, indexOfFirstOrders, "-", indexOfLastOrders, " of ", total), /*#__PURE__*/_react.default.createElement(_styles.PageButton, {
    disabled: currentPage === 1,
    onClick: function onClick() {
      return prevPaginate();
    }
  }, /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowLeft.default, null)), /*#__PURE__*/_react.default.createElement(_styles.PageButton, {
    onClick: function onClick() {
      return nextPaginate();
    },
    disabled: currentPage === totalPages || totalPages === 1
  }, /*#__PURE__*/_react.default.createElement(_MdKeyboardArrowRight.default, null)));
};
exports.PaginationButton = PaginationButton;