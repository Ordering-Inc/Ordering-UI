"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionDropdown = void 0;

var _react = _interopRequireDefault(require("react"));

var _BiCaretUp = _interopRequireDefault(require("@meronex/icons/bi/BiCaretUp"));

var _styles = require("./styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccordionDropdown = function AccordionDropdown(props) {
  var item = props.item,
      spaceTab = props.spaceTab,
      isOpen = props.isOpen,
      isSelected = props.isSelected,
      handleClickItem = props.handleClickItem,
      IterateCategories = props.IterateCategories;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion-item"
  }, /*#__PURE__*/_react.default.createElement(_styles.CategoryTab, {
    active: isSelected,
    className: "accordion-title",
    categorySpace: spaceTab,
    onClick: function onClick() {
      return handleClickItem();
    },
    isOpen: isOpen
  }, /*#__PURE__*/_react.default.createElement(_BiCaretUp.default, {
    className: "accordion__icon ".concat(isOpen ? 'rotate' : '')
  }), /*#__PURE__*/_react.default.createElement("span", null, item.name)), isOpen && /*#__PURE__*/_react.default.createElement("div", {
    className: "accordion-content"
  }, /*#__PURE__*/_react.default.createElement(IterateCategories, {
    list: item.subcategories,
    isSub: true,
    currentCat: item
  })));
};

exports.AccordionDropdown = AccordionDropdown;