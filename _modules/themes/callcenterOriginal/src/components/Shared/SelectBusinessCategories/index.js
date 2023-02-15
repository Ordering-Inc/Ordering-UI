"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectBusinessCategories = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _GoTriangleDown = _interopRequireDefault(require("@meronex/icons/go/GoTriangleDown"));
var _styles = require("../../../styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CategoryTreeNode = function CategoryTreeNode(props) {
  var _category$subcategori2;
  var category = props.category,
    index = props.index,
    selectedCategoryIds = props.selectedCategoryIds,
    setSelectedCategoryIds = props.setSelectedCategoryIds,
    include = props.include;
  var content = (0, _react.useRef)(null);
  var checkboxRef = (0, _react.useRef)(null);
  var categoryRef = (0, _react.useRef)(null);
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    setActive = _useState2[0],
    setActiveState = _useState2[1];
  var _useState3 = (0, _react.useState)('accordion__icon'),
    _useState4 = _slicedToArray(_useState3, 2),
    setRotate = _useState4[0],
    setRotateState = _useState4[1];
  var toggleAccordion = function toggleAccordion(e) {
    var _categoryRef$current, _checkboxRef$current;
    var isActionsClick = ((_categoryRef$current = categoryRef.current) === null || _categoryRef$current === void 0 ? void 0 : _categoryRef$current.contains(e.target)) || ((_checkboxRef$current = checkboxRef.current) === null || _checkboxRef$current === void 0 ? void 0 : _checkboxRef$current.contains(e.target));
    if (isActionsClick) return;
    setActiveState(setActive === '' ? 'active' : '');
    setRotateState(setActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
  };
  var handleChangeSelectCategory = function handleChangeSelectCategory(include) {
    var _category$subcategori;
    var categoryIds = [];
    if ((category === null || category === void 0 ? void 0 : (_category$subcategori = category.subcategories) === null || _category$subcategori === void 0 ? void 0 : _category$subcategori.length) > 0) {
      category.subcategories.forEach(function iterate(category) {
        categoryIds = [].concat(_toConsumableArray(categoryIds), [category.id]);
        Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
      });
    }
    var _selectedCaetegoryIds = {};
    if (selectedCategoryIds[category.id] && selectedCategoryIds[category.id].include === include) {
      _selectedCaetegoryIds = _objectSpread({}, selectedCategoryIds);
      delete _selectedCaetegoryIds[category.id];
    } else {
      _selectedCaetegoryIds = _objectSpread({}, selectedCategoryIds);
      _selectedCaetegoryIds[category.id] = {
        id: category.id,
        include: include
      };
      categoryIds.forEach(function (id) {
        _selectedCaetegoryIds[id] = {
          id: id,
          include: include
        };
      });
    }
    setSelectedCategoryIds(_selectedCaetegoryIds);
  };
  return /*#__PURE__*/_react.default.createElement(_styles2.AccordionSection, null, /*#__PURE__*/_react.default.createElement(_styles2.Accordion, {
    onClick: function onClick(e) {
      return toggleAccordion(e, category.id);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.AccordionItem, {
    margin: 20 * index
  }, /*#__PURE__*/_react.default.createElement(_GoTriangleDown.default, {
    className: setRotate
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    ref: categoryRef,
    checked: !!selectedCategoryIds[category.id] && selectedCategoryIds[category.id].include === include,
    onChange: function onChange(e) {
      return handleChangeSelectCategory(include);
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, category.name)))), /*#__PURE__*/_react.default.createElement(_styles2.AccordionContent, {
    ref: content,
    style: {
      maxHeight: !setActive && '0px'
    }
  }, (category === null || category === void 0 ? void 0 : category.subcategories) && (category === null || category === void 0 ? void 0 : (_category$subcategori2 = category.subcategories) === null || _category$subcategori2 === void 0 ? void 0 : _category$subcategori2.length) > 0 && category.subcategories.map(function (subCategory) {
    return /*#__PURE__*/_react.default.createElement(CategoryTreeNode, _extends({}, props, {
      key: subCategory.id,
      category: subCategory,
      index: index + 1
    }));
  })));
};
var SelectBusinessCategoriesUI = function SelectBusinessCategoriesUI(props) {
  var _businessState$busine;
  var businessState = props.businessState,
    selectedCategoryIds = props.selectedCategoryIds,
    setSelectedCategoryIds = props.setSelectedCategoryIds,
    include = props.include;
  return /*#__PURE__*/_react.default.createElement(_styles2.Container, null, businessState !== null && businessState !== void 0 && businessState.loading ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _toConsumableArray(Array(10).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_styles2.SkeletonWrapper, {
      key: i
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 16,
      height: 16
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 16,
      height: 16
    }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 120,
      height: 20
    }));
  })) : (_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.categories.sort(function (a, b) {
    return a.rank - b.rank;
  }).map(function (category) {
    return /*#__PURE__*/_react.default.createElement(CategoryTreeNode, {
      key: category.id,
      index: 0,
      category: category,
      selectedCategoryIds: selectedCategoryIds,
      setSelectedCategoryIds: setSelectedCategoryIds,
      include: include
    });
  }));
};
var SelectBusinessCategories = function SelectBusinessCategories(props) {
  var _useApi = (0, _orderingComponents.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isInitialRender = _useState6[0],
    setIsInitialRender = _useState6[1];
  var businessProductslistingProps = _objectSpread(_objectSpread({}, props), {}, {
    ordering: ordering,
    UIComponent: SelectBusinessCategoriesUI,
    isInitialRender: isInitialRender,
    isAllCategoryProducts: true,
    isSearchByName: true,
    isSearchByDescription: true,
    handleUpdateInitialRender: function handleUpdateInitialRender(val) {
      return setIsInitialRender(val);
    }
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessProductsListing, businessProductslistingProps);
};
exports.SelectBusinessCategories = SelectBusinessCategories;