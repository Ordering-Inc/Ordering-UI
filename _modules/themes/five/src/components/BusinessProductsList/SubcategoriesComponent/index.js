"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubcategoriesComponent = void 0;
var _orderingComponents = require("ordering-components");
var _react = _interopRequireDefault(require("react"));
var _styles = require("../styles");
var _AutoScroll = require("../../AutoScroll");
var _reactBootstrapIcons = require("react-bootstrap-icons");
var _Buttons = require("../../../styles/Buttons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var subcategoriesComponentPropsAreEqual = function subcategoriesComponentPropsAreEqual(prevProps, nextProps) {
  return JSON.stringify(prevProps.category) === JSON.stringify(nextProps.category) && JSON.stringify(prevProps.subcategoriesSelected) === JSON.stringify(nextProps.subcategoriesSelected);
};
var SubcategoriesComponent = exports.SubcategoriesComponent = /*#__PURE__*/_react.default.memo(function (props) {
  var _category$subcategori;
  var category = props.category,
    subcategoriesSelected = props.subcategoriesSelected,
    onClickSubcategory = props.onClickSubcategory;
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var allsubcategorySelected = !(subcategoriesSelected !== null && subcategoriesSelected !== void 0 && subcategoriesSelected.some(function (subcategory) {
    return (category === null || category === void 0 ? void 0 : category.id) === (subcategory === null || subcategory === void 0 ? void 0 : subcategory.parent_category_id);
  }));
  return /*#__PURE__*/_react.default.createElement(_styles.SubCategoriesContainer, null, /*#__PURE__*/_react.default.createElement(_styles.SubCategoriesInnerContainer, null, /*#__PURE__*/_react.default.createElement(_AutoScroll.AutoScroll, {
    scrollId: "scroll_".concat(category === null || category === void 0 ? void 0 : category.id)
  }, /*#__PURE__*/_react.default.createElement(_styles.ContainerButton, {
    isSelected: allsubcategorySelected
  }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    onClick: function onClick() {
      return onClickSubcategory(null, category);
    },
    color: allsubcategorySelected ? 'primary' : 'lightGray'
  }, t('ALL', 'All'))), category === null || category === void 0 || (_category$subcategori = category.subcategories) === null || _category$subcategori === void 0 ? void 0 : _category$subcategori.map(function (subcategory) {
    var isSubcategorySelected = subcategoriesSelected === null || subcategoriesSelected === void 0 ? void 0 : subcategoriesSelected.find(function (_subcategory) {
      return (_subcategory === null || _subcategory === void 0 ? void 0 : _subcategory.id) === (subcategory === null || subcategory === void 0 ? void 0 : subcategory.id);
    });
    return /*#__PURE__*/_react.default.createElement(_styles.ContainerButton, {
      key: subcategory === null || subcategory === void 0 ? void 0 : subcategory.id,
      isSelected: isSubcategorySelected
    }, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
      onClick: function onClick() {
        return onClickSubcategory(subcategory, category);
      },
      color: isSubcategorySelected ? 'primary' : 'lightGray'
    }, subcategory === null || subcategory === void 0 ? void 0 : subcategory.name, " ", isSubcategorySelected && /*#__PURE__*/_react.default.createElement(_reactBootstrapIcons.XLg, null)));
  }))));
}, subcategoriesComponentPropsAreEqual);