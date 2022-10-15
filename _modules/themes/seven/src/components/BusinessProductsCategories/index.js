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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
        className: "category ".concat(getActive(category), " ").concat((category === null || category === void 0 ? void 0 : (_category$data$ = category.data[0]) === null || _category$data$ === void 0 ? void 0 : _category$data$.id) === 'featured' ? 'special' : ''),
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

var BusinessProductsCategories = function BusinessProductsCategories(props) {
  var businessProductsCategoriesProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: BusinessProductsCategoriesUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.BusinessProductsCategories, businessProductsCategoriesProps);
};

exports.BusinessProductsCategories = BusinessProductsCategories;

var ActiveMarker = function ActiveMarker() {
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

exports.ActiveMarker = ActiveMarker;