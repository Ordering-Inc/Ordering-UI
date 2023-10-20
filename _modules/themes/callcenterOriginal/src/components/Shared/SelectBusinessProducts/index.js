"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectBusinessProducts = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _GoTriangleDown = _interopRequireDefault(require("@meronex/icons/go/GoTriangleDown"));
var _styles = require("../../../styles");
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _styledComponents = require("styled-components");
var _styles2 = require("./styles");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var CategoryTreeNode = function CategoryTreeNode(props) {
  var _subCategoriesList$fi, _category$subcategori;
  var category = props.category,
    index = props.index,
    selectedProductsIds = props.selectedProductsIds,
    setSelectedProductsIds = props.setSelectedProductsIds,
    include = props.include,
    subCategoriesList = props.subCategoriesList;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var theme = (0, _styledComponents.useTheme)();
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
  var isCheckedCategory = function isCheckedCategory() {
    if (category !== null && category !== void 0 && category.products) {
      var _category$products;
      var productsIds = (_category$products = category.products) === null || _category$products === void 0 ? void 0 : _category$products.filter(function (product) {
        return product === null || product === void 0 ? void 0 : product.enabled;
      }).reduce(function (ids, product) {
        return [].concat(_toConsumableArray(ids), [product.id]);
      }, []);
      return productsIds.every(function (id) {
        return !!selectedProductsIds[id] && selectedProductsIds[id].include === include;
      });
    } else {
      return false;
    }
  };
  var handleClickProduct = function handleClickProduct(product, include) {
    if (!!selectedProductsIds[product.id] && selectedProductsIds[product.id].include === include) {
      var _selectedProductsIds = _objectSpread({}, selectedProductsIds);
      delete _selectedProductsIds[product.id];
      setSelectedProductsIds(_selectedProductsIds);
    } else {
      setSelectedProductsIds(_objectSpread(_objectSpread({}, selectedProductsIds), {}, _defineProperty({}, product.id, {
        id: product.id,
        include: include
      })));
    }
  };
  var handleChangeSelectCategory = function handleChangeSelectCategory(include) {
    var _category$products2;
    var productsIds = (_category$products2 = category.products) === null || _category$products2 === void 0 ? void 0 : _category$products2.filter(function (product) {
      return product === null || product === void 0 ? void 0 : product.enabled;
    }).reduce(function (ids, product) {
      return [].concat(_toConsumableArray(ids), [product.id]);
    }, []);
    var everyContain = productsIds.every(function (id) {
      return !!selectedProductsIds[id] && selectedProductsIds[id].include === include;
    });
    var _selectedProductsIds = {};
    _selectedProductsIds = _objectSpread({}, selectedProductsIds);
    if (!everyContain) {
      productsIds.forEach(function (id) {
        _selectedProductsIds[id] = {
          id: id,
          include: include
        };
      });
      setSelectedProductsIds(_selectedProductsIds);
    } else {
      var _Object$keys;
      var _keys = (_Object$keys = Object.keys(selectedProductsIds)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.reduce(function (ids, id) {
        ids.push(parseInt(id));
        return ids;
      }, []);
      var _keysFiltered = _keys.filter(function (id) {
        return productsIds.includes(id);
      });
      _keysFiltered.forEach(function (id) {
        return delete _selectedProductsIds[id];
      });
      setSelectedProductsIds(_selectedProductsIds);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, ((_subCategoriesList$fi = subCategoriesList.find(function (_category) {
    return _category.id === category.id;
  })) === null || _subCategoriesList$fi === void 0 || (_subCategoriesList$fi = _subCategoriesList$fi.productIds) === null || _subCategoriesList$fi === void 0 ? void 0 : _subCategoriesList$fi.length) > 0 && /*#__PURE__*/_react.default.createElement(_styles2.AccordionSection, null, /*#__PURE__*/_react.default.createElement(_styles2.Accordion, {
    onClick: function onClick(e) {
      return toggleAccordion(e, category.id);
    }
  }, /*#__PURE__*/_react.default.createElement(_styles2.AccordionItem, {
    margin: 20 * index
  }, /*#__PURE__*/_react.default.createElement(_GoTriangleDown.default, {
    className: setRotate
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
    ref: categoryRef,
    checked: isCheckedCategory(),
    onChange: function onChange() {
      return handleChangeSelectCategory(include);
    }
  }), /*#__PURE__*/_react.default.createElement("span", null, category.name)))), /*#__PURE__*/_react.default.createElement(_styles2.AccordionContent, {
    ref: content,
    style: {
      maxHeight: !setActive && '0px'
    }
  }, category === null || category === void 0 ? void 0 : category.products.filter(function (product) {
    return product === null || product === void 0 ? void 0 : product.enabled;
  }).map(function (product) {
    var _theme$images;
    return /*#__PURE__*/_react.default.createElement(_styles2.AccordionItem, {
      key: product.id,
      margin: 20 * (index + 1),
      isProduct: true
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Checkbox, {
      ref: checkboxRef,
      checked: !!selectedProductsIds[product.id] && selectedProductsIds[product.id].include === include,
      onChange: function onChange() {
        return handleClickProduct(product, include);
      }
    }), /*#__PURE__*/_react.default.createElement(_styles2.WrapperImage, null, /*#__PURE__*/_react.default.createElement(_styles2.Image, {
      bgimage: optimizeImage((product === null || product === void 0 ? void 0 : product.images) || ((_theme$images = theme.images) === null || _theme$images === void 0 || (_theme$images = _theme$images.dummies) === null || _theme$images === void 0 ? void 0 : _theme$images.product), 'h_50,c_limit')
    })), /*#__PURE__*/_react.default.createElement("span", null, product.name)));
  }), (category === null || category === void 0 ? void 0 : category.subcategories) && (category === null || category === void 0 || (_category$subcategori = category.subcategories) === null || _category$subcategori === void 0 ? void 0 : _category$subcategori.length) > 0 && category.subcategories.map(function (subCategory) {
    return /*#__PURE__*/_react.default.createElement(CategoryTreeNode, _extends({}, props, {
      key: subCategory.id,
      category: subCategory,
      index: index + 1
    }));
  }))));
};
var SelectBusinessProductsUI = function SelectBusinessProductsUI(props) {
  var _businessState$busine2, _businessState$busine3;
  var businessState = props.businessState,
    selectedProductsIds = props.selectedProductsIds,
    setSelectedProductsIds = props.setSelectedProductsIds,
    include = props.include;
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    subCategoriesList = _useState6[0],
    setSubCategoriesList = _useState6[1];
  (0, _react.useEffect)(function () {
    var _businessState$busine;
    if (businessState.loading) return;
    var _subCategoriesList = [];
    var iterateCategories = function iterateCategories(categories) {
      return (categories === null || categories === void 0 ? void 0 : categories.length) > 0 && (categories === null || categories === void 0 ? void 0 : categories.forEach(function (category) {
        var _category$products3, _category$subcategori2;
        var productIds = [];
        var _productIds = (_category$products3 = category.products) === null || _category$products3 === void 0 ? void 0 : _category$products3.reduce(function (ids, product) {
          return [].concat(_toConsumableArray(ids), [product.id]);
        }, []);
        productIds = [].concat(_toConsumableArray(productIds), _toConsumableArray(_productIds));
        if (category !== null && category !== void 0 && (_category$subcategori2 = category.subcategories) !== null && _category$subcategori2 !== void 0 && _category$subcategori2.length) {
          category.subcategories.forEach(function iterate(category) {
            var _category$products4;
            var _productIds = (_category$products4 = category.products) === null || _category$products4 === void 0 ? void 0 : _category$products4.reduce(function (ids, product) {
              return [].concat(_toConsumableArray(ids), [product.id]);
            }, []);
            productIds = [].concat(_toConsumableArray(productIds), _toConsumableArray(_productIds));
            Array.isArray(category === null || category === void 0 ? void 0 : category.subcategories) && category.subcategories.forEach(iterate);
          });
        }
        _subCategoriesList.push({
          id: category.id,
          name: category.name,
          productIds: productIds
        });
        iterateCategories(category.subcategories);
      }));
    };
    iterateCategories((_businessState$busine = businessState.business) === null || _businessState$busine === void 0 ? void 0 : _businessState$busine.categories);
    setSubCategoriesList(_subCategoriesList);
  }, [(_businessState$busine2 = businessState.business) === null || _businessState$busine2 === void 0 ? void 0 : _businessState$busine2.categories]);
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
  })) : (_businessState$busine3 = businessState.business) === null || _businessState$busine3 === void 0 || (_businessState$busine3 = _businessState$busine3.categories) === null || _businessState$busine3 === void 0 ? void 0 : _businessState$busine3.filter(function (category) {
    return category === null || category === void 0 ? void 0 : category.enabled;
  }).sort(function (a, b) {
    return a.rank - b.rank;
  }).map(function (category) {
    return /*#__PURE__*/_react.default.createElement(CategoryTreeNode, {
      subCategoriesList: subCategoriesList,
      key: category.id,
      index: 0,
      category: category,
      selectedProductsIds: selectedProductsIds,
      setSelectedProductsIds: setSelectedProductsIds,
      include: include
    });
  }));
};
var SelectBusinessProducts = exports.SelectBusinessProducts = function SelectBusinessProducts(props) {
  var _useApi = (0, _orderingComponents.useApi)(),
    _useApi2 = _slicedToArray(_useApi, 1),
    ordering = _useApi2[0];
  var _useState7 = (0, _react.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    isInitialRender = _useState8[0],
    setIsInitialRender = _useState8[1];
  var businessProductslistingProps = _objectSpread(_objectSpread({}, props), {}, {
    ordering: ordering,
    UIComponent: SelectBusinessProductsUI,
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