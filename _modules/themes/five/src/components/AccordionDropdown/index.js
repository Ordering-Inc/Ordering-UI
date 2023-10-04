"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionDropdown = void 0;
var _react = _interopRequireDefault(require("react"));
var _BiCaretUp = _interopRequireDefault(require("@meronex/icons/bi/BiCaretUp"));
var _AiOutlineCheck = _interopRequireDefault(require("@meronex/icons/ai/AiOutlineCheck"));
var _styles = require("./styles");
var _useWindowSize = require("../../../../../hooks/useWindowSize");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var AccordionDropdown = exports.AccordionDropdown = function AccordionDropdown(props) {
  var item = props.item,
    spaceTab = props.spaceTab,
    isOpen = props.isOpen,
    isSelected = props.isSelected,
    handleClickItem = props.handleClickItem,
    IterateCategories = props.IterateCategories;
  var handleClick = function handleClick(e, isSelectCategory) {
    e.stopPropagation();
    handleClickItem(isSelectCategory);
  };
  var windowSize = (0, _useWindowSize.useWindowSize)();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/_react.default.createElement(_styles.CategoryTab, {
    active: isSelected,
    className: "accordion-title",
    categorySpace: spaceTab,
    onClick: function onClick(e) {
      return handleClick(e, false);
    },
    isOpen: isOpen
  }, /*#__PURE__*/_react.default.createElement("span", null, item.name), /*#__PURE__*/_react.default.createElement("div", null, windowSize.width < 993 && /*#__PURE__*/_react.default.createElement(_styles.SelectCategory, {
    onClick: function onClick(e) {
      return handleClick(e, true);
    }
  }, /*#__PURE__*/_react.default.createElement(_AiOutlineCheck.default, null)), /*#__PURE__*/_react.default.createElement(_BiCaretUp.default, {
    className: "accordion__icon ".concat(isOpen ? 'rotate' : '')
  }))), isOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion-content"
  }, /*#__PURE__*/_react.default.createElement(IterateCategories, {
    list: item.subcategories,
    isSub: true,
    currentCat: item
  })));
};