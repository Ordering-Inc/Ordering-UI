"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BusinessProductsCategories = exports.ActiveMarker = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));
var _orderingComponents = require("ordering-components");
var _styles = require("./styles");
var _Tabs = require("../../styles/Tabs");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var BusinessProductsCategoriesUI = function BusinessProductsCategoriesUI(props) {
  var _props$beforeElements, _props$beforeComponen, _props$afterComponent, _props$afterElements;
  var isSkeleton = props.isSkeleton,
    categories = props.categories,
    handlerClickCategory = props.handlerClickCategory,
    categorySelected = props.categorySelected,
    featured = props.featured,
    isVerticalList = props.isVerticalList;
  var updatedCategories = [];
  if (categories.length > 0) {
    categories.forEach(function (item, i) {
      if (item.name.indexOf('/') > -1) {
        var categoryName = item.name.split('/')[0];
        var name = item.name.split('/')[1];
        var existIndex = updatedCategories.findIndex(function (c) {
          return c.categoryName === categoryName;
        });
        if (existIndex > -1) {
          updatedCategories[existIndex].data.push(_objectSpread(_objectSpread({}, item), {}, {
            name: name
          }));
        } else {
          updatedCategories.push({
            _id: i,
            categoryName: categoryName,
            data: [_objectSpread(_objectSpread({}, item), {}, {
              name: name
            })],
            subCategory: true,
            listOpen: false
          });
        }
      } else {
        updatedCategories.push({
          _id: i,
          categoryName: item.name,
          data: [item],
          subCategory: false
        });
      }
    });
  }
  var CategoryAccordion = function CategoryAccordion(props) {
    var category = props.category;
    var handleChnageCategory = function handleChnageCategory(category) {
      handlerClickCategory(category === null || category === void 0 ? void 0 : category.data[0]);
    };
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Accordion, {
      className: "accordion",
      onClick: function onClick(e) {
        return handleChnageCategory(category);
      }
    }, category === null || category === void 0 ? void 0 : category.categoryName), (category === null || category === void 0 ? void 0 : category.subCategory) && /*#__PURE__*/_react.default.createElement(_styles.AccordionPanel, {
      className: "accordion-content"
    }, /*#__PURE__*/_react.default.createElement("ul", null, category === null || category === void 0 ? void 0 : category.data.map(function (item) {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: item === null || item === void 0 ? void 0 : item.id,
        className: (categorySelected === null || categorySelected === void 0 ? void 0 : categorySelected.id) === item.id ? 'active' : '',
        onClick: function onClick() {
          return handlerClickCategory(item);
        }
      }, item.name);
    }))), categorySelected && /*#__PURE__*/_react.default.createElement(ActiveMarker, null));
  };
  var ProductCategories = function ProductCategories() {
    var getActive = function getActive(category) {
      var _className = '';
      if (categorySelected) {
        var existIndex = category.data.findIndex(function (c) {
          return c.id === categorySelected.id;
        });
        if (existIndex > -1) {
          _className = 'active';
        }
      }
      return _className;
    };
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, categories && updatedCategories.length > 0 && updatedCategories.map(function (category, i) {
      var _category$data$;
      return /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
        key: category === null || category === void 0 ? void 0 : category.categoryName,
        className: "category ".concat(getActive(category), " ").concat((category === null || category === void 0 || (_category$data$ = category.data[0]) === null || _category$data$ === void 0 ? void 0 : _category$data$.id) === 'featured' ? 'special' : ''),
        isVerticalList: isVerticalList
      }, /*#__PURE__*/_react.default.createElement(CategoryAccordion, {
        category: category
      }));
    }), /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
      className: "category",
      style: {
        borderBottom: 'none'
      }
    }));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (_props$beforeElements = props.beforeElements) === null || _props$beforeElements === void 0 ? void 0 : _props$beforeElements.map(function (BeforeElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, BeforeElement);
  }), (_props$beforeComponen = props.beforeComponents) === null || _props$beforeComponen === void 0 ? void 0 : _props$beforeComponen.map(function (BeforeComponent, i) {
    return /*#__PURE__*/_react.default.createElement(BeforeComponent, _extends({
      key: i
    }, props));
  }), /*#__PURE__*/_react.default.createElement(_styles.CategoriesContainer, {
    featured: featured,
    isVerticalList: isVerticalList
  }, !isSkeleton ? /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    isVerticalList: isVerticalList
  }, /*#__PURE__*/_react.default.createElement(ProductCategories, null)) : /*#__PURE__*/_react.default.createElement(_Tabs.Tabs, {
    variant: "primary",
    isVerticalList: isVerticalList
  }, _toConsumableArray(Array(7).keys()).map(function (i) {
    return /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
      key: i,
      isVerticalList: isVerticalList
    }, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
      width: 150,
      style: {
        padding: '5px',
        marginBottom: '7px'
      }
    }));
  }), /*#__PURE__*/_react.default.createElement(_Tabs.Tab, {
    className: "category",
    style: {
      borderBottom: 'none'
    }
  }))), (_props$afterComponent = props.afterComponents) === null || _props$afterComponent === void 0 ? void 0 : _props$afterComponent.map(function (AfterComponent, i) {
    return /*#__PURE__*/_react.default.createElement(AfterComponent, _extends({
      key: i
    }, props));
  }), (_props$afterElements = props.afterElements) === null || _props$afterElements === void 0 ? void 0 : _props$afterElements.map(function (AfterElement, i) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: i
    }, AfterElement);
  }));
};
var BusinessProductsCategories = exports.BusinessProductsCategories = function BusinessProductsCategories(props) {
  var businessProductsCategoriesProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductsCategoriesUI
  });
  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessProductsCategories, businessProductsCategoriesProps);
};
var ActiveMarker = exports.ActiveMarker = function ActiveMarker() {
  return /*#__PURE__*/_react.default.createElement("svg", {
    width: 12,
    height: 40,
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("path", {
    d: "m0,490l240,0l10,20.12l-10,19.88l-240,0l0,-40z",
    id: "a"
  }), /*#__PURE__*/_react.default.createElement("clipPath", {
    id: "b"
  }, /*#__PURE__*/_react.default.createElement("use", {
    id: "svg_1",
    x: "2.857142",
    y: "-442.65308",
    xlinkHref: "#a",
    fill: "#fff"
  }))), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("title", null, "background"), /*#__PURE__*/_react.default.createElement("rect", {
    fill: "none",
    id: "canvas_background",
    height: 42,
    width: 12,
    y: -1,
    x: -1
  })), /*#__PURE__*/_react.default.createElement("g", null, /*#__PURE__*/_react.default.createElement("title", null, "Layer 1"), /*#__PURE__*/_react.default.createElement("g", {
    stroke: "null",
    id: "svg_2"
  }, /*#__PURE__*/_react.default.createElement("use", {
    stroke: "#DD0031",
    id: "svg_3",
    x: "-239.999995",
    y: "-490.000015",
    xlinkHref: "#a",
    fill: "#fff"
  }))));
};