"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsCategories = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _AccordionDropdown = require("../../../AccordionDropdown");
var _styles = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var SPACE_CONTANT = 20;
var categorySpace = {
  1: 0 * SPACE_CONTANT,
  2: 1 * SPACE_CONTANT,
  3: 2 * SPACE_CONTANT,
  4: 3 * SPACE_CONTANT,
  5: 4 * SPACE_CONTANT
};
var BusinessProductsCategoriesUI = function BusinessProductsCategoriesUI(props) {
  var isSkeleton = props.isSkeleton,
    categories = props.categories,
    handlerClickCategory = props.handlerClickCategory,
    categorySelected = props.categorySelected,
    featured = props.featured,
    openCategories = props.openCategories;
  var IterateCategories = function IterateCategories(_ref) {
    var _category$level4, _category;
    var list = _ref.list,
      isSub = _ref.isSub,
      currentCat = _ref.currentCat;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (list === null || list === void 0 ? void 0 : list.length) && (list === null || list === void 0 ? void 0 : list.map(function (category) {
      var _category$id, _category$subcategori, _category$subcategori2, _category$level, _category$subcategori3, _category$level2, _category$level3;
      return /*#__PURE__*/_react.default.createElement("div", {
        key: (_category$id = category === null || category === void 0 ? void 0 : category.id) !== null && _category$id !== void 0 ? _category$id : category === null || category === void 0 ? void 0 : category.name
      }, (category === null || category === void 0 ? void 0 : (_category$subcategori = category.subcategories) === null || _category$subcategori === void 0 ? void 0 : _category$subcategori.length) > 0 || isSub ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (category === null || category === void 0 ? void 0 : (_category$subcategori2 = category.subcategories) === null || _category$subcategori2 === void 0 ? void 0 : _category$subcategori2.length) > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "accordion"
      }, /*#__PURE__*/_react.default.createElement(_AccordionDropdown.AccordionDropdown, {
        item: category,
        isSelected: (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) === category.id,
        isOpen: openCategories === null || openCategories === void 0 ? void 0 : openCategories.includes(category.id),
        spaceTab: categorySpace[(_category$level = category === null || category === void 0 ? void 0 : category.level) !== null && _category$level !== void 0 ? _category$level : 1],
        handleClickItem: function handleClickItem() {
          return handlerClickCategory(category);
        },
        IterateCategories: IterateCategories
      }))), isSub && !(category !== null && category !== void 0 && (_category$subcategori3 = category.subcategories) !== null && _category$subcategori3 !== void 0 && _category$subcategori3.length) && /*#__PURE__*/_react.default.createElement(_styles.CategoryTab, {
        active: (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) === category.id,
        className: "".concat(category.id === 'featured' ? 'special' : ''),
        categorySpace: categorySpace[(_category$level2 = category === null || category === void 0 ? void 0 : category.level) !== null && _category$level2 !== void 0 ? _category$level2 : 1],
        onClick: function onClick() {
          return handlerClickCategory(category);
        }
      }, /*#__PURE__*/_react.default.createElement("span", null, category.name))) : /*#__PURE__*/_react.default.createElement(_styles.CategoryTab, {
        active: (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) === category.id,
        className: "".concat(category.id === 'featured' ? 'special' : ''),
        categorySpace: categorySpace[(_category$level3 = category === null || category === void 0 ? void 0 : category.level) !== null && _category$level3 !== void 0 ? _category$level3 : 1],
        onClick: function onClick() {
          return handlerClickCategory(category);
        }
      }, /*#__PURE__*/_react.default.createElement("span", null, category.name)));
    })), list && (list === null || list === void 0 ? void 0 : list.length) === 0 && isSub && /*#__PURE__*/_react.default.createElement(_styles.CategoryTab, {
      active: (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) === category.id,
      className: "".concat(category.id === 'featured' ? 'special' : ''),
      categorySpace: categorySpace[(_category$level4 = (_category = category) === null || _category === void 0 ? void 0 : _category.level) !== null && _category$level4 !== void 0 ? _category$level4 : 1],
      onClick: function onClick() {
        return handlerClickCategory(category);
      }
    }, /*#__PURE__*/_react.default.createElement("span", null, currentCat.name)));
  };
  return /*#__PURE__*/_react.default.createElement(_styles.CategoriesContainer, {
    className: "category-lists",
    featured: featured
  }, !isSkeleton ? /*#__PURE__*/_react.default.createElement(_styles.CategoriesWrap, {
    variant: "primary"
  }, (categories === null || categories === void 0 ? void 0 : categories.length) && /*#__PURE__*/_react.default.createElement(IterateCategories, {
    list: categories
  })) : /*#__PURE__*/_react.default.createElement(_styles.CategoriesWrap, {
    variant: "primary"
  }, _toConsumableArray(Array(4).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement("div", {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 100
    }));
  })));
};
var BusinessProductsCategories = function BusinessProductsCategories(props) {
  var businessProductsCategoriesProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductsCategoriesUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessProductsCategories, businessProductsCategoriesProps);
};
exports.BusinessProductsCategories = BusinessProductsCategories;