"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlaceSpot = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Select = require("../../styles/Select");

var _orderingComponents = require("ordering-components");

var _styles = require("./styles");

var _reactLoadingSkeleton = _interopRequireDefault(require("react-loading-skeleton"));

var _NotFoundSource = require("../NotFoundSource");

var _Buttons = require("../../styles/Buttons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PlaceSpotUI = function PlaceSpotUI(props) {
  var _placesState$placeGro2, _placesState$placeGro3, _placesState$places3, _placesState$places4;

  var cart = props.cart,
      placesState = props.placesState,
      handleChangePlace = props.handleChangePlace,
      onClose = props.onClose;

  var _useLanguage = (0, _orderingComponents.useLanguage)(),
      _useLanguage2 = _slicedToArray(_useLanguage, 2),
      t = _useLanguage2[1];

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      placeGroupSelected = _useState2[0],
      setPlaceGroupSelected = _useState2[1];

  var getPlacesGroups = function getPlacesGroups() {
    var _placesState$placeGro;

    var groups = (_placesState$placeGro = placesState.placeGroups) === null || _placesState$placeGro === void 0 ? void 0 : _placesState$placeGro.filter(function (group) {
      var _placesState$places;

      return (group === null || group === void 0 ? void 0 : group.enabled) && (placesState === null || placesState === void 0 ? void 0 : (_placesState$places = placesState.places) === null || _placesState$places === void 0 ? void 0 : _placesState$places.find(function (place) {
        return (place === null || place === void 0 ? void 0 : place.enabled) && (place === null || place === void 0 ? void 0 : place.place_group_id) === (group === null || group === void 0 ? void 0 : group.id);
      }));
    });
    return groups.map(function (group) {
      return {
        value: group,
        content: group === null || group === void 0 ? void 0 : group.name,
        showOnSelected: group === null || group === void 0 ? void 0 : group.name
      };
    });
  };

  var getPlaces = function getPlaces() {
    var _placesState$places2;

    var places = placeGroupSelected && (placesState === null || placesState === void 0 ? void 0 : (_placesState$places2 = placesState.places) === null || _placesState$places2 === void 0 ? void 0 : _placesState$places2.filter(function (place) {
      return (place === null || place === void 0 ? void 0 : place.enabled) && (place === null || place === void 0 ? void 0 : place.place_group_id) === (placeGroupSelected === null || placeGroupSelected === void 0 ? void 0 : placeGroupSelected.id);
    }));
    return places.map(function (place) {
      return {
        value: place,
        content: place.name,
        showOnSelected: place.name
      };
    });
  };

  (0, _react.useEffect)(function () {
    if (!(placesState !== null && placesState !== void 0 && placesState.loading)) {
      var placeGroupOnCart = placesState === null || placesState === void 0 ? void 0 : placesState.placeGroups.find(function (group) {
        var _cart$place;

        return (group === null || group === void 0 ? void 0 : group.id) === (cart === null || cart === void 0 ? void 0 : (_cart$place = cart.place) === null || _cart$place === void 0 ? void 0 : _cart$place.place_group_id);
      });
      setPlaceGroupSelected(placeGroupOnCart);
    }
  }, [placesState]);
  return /*#__PURE__*/_react.default.createElement(_styles.PlaceSpotContainer, null, (placesState.error || (placesState === null || placesState === void 0 ? void 0 : (_placesState$placeGro2 = placesState.placeGroups) === null || _placesState$placeGro2 === void 0 ? void 0 : _placesState$placeGro2.length) === 0) && !(placesState !== null && placesState !== void 0 && placesState.loading) && /*#__PURE__*/_react.default.createElement(_NotFoundSource.NotFoundSource, {
    content: t('NO_PLACES_THIS_BUSINESS', 'There are not places for this business')
  }), (placesState === null || placesState === void 0 ? void 0 : placesState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.PlaceGroupContainer, null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 100,
    height: 25,
    className: "title"
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30
  })), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    width: 120,
    height: 25,
    className: "title"
  }), /*#__PURE__*/_react.default.createElement(_reactLoadingSkeleton.default, {
    height: 30
  }))), !(placesState.error || (placesState === null || placesState === void 0 ? void 0 : (_placesState$placeGro3 = placesState.placeGroups) === null || _placesState$placeGro3 === void 0 ? void 0 : _placesState$placeGro3.length) === 0) && !(placesState !== null && placesState !== void 0 && placesState.loading) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.PlaceGroupContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('PLACE_GROUP', 'Place group')), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    placeholder: t('PLACE_GROUP', 'Place group'),
    options: getPlacesGroups(),
    onChange: function onChange(group) {
      return setPlaceGroupSelected(group);
    },
    defaultValue: placeGroupSelected !== null && placeGroupSelected !== void 0 ? placeGroupSelected : cart === null || cart === void 0 ? void 0 : cart.place,
    disableOneOption: true
  })), placeGroupSelected && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_styles.Title, null, t('SELECT_YOUR_SPOT', 'Select your spot')), /*#__PURE__*/_react.default.createElement(_Select.Select, {
    onChange: function onChange(place) {
      return handleChangePlace(place);
    },
    placeholder: t('SELECT_YOUR_SPOT', 'Select your spot'),
    options: getPlaces(),
    defaultValue: placesState === null || placesState === void 0 ? void 0 : (_placesState$places3 = placesState.places) === null || _placesState$places3 === void 0 ? void 0 : _placesState$places3.find(function (place) {
      return (place === null || place === void 0 ? void 0 : place.id) === (cart === null || cart === void 0 ? void 0 : cart.place_id);
    }),
    disableOneOption: true
  }))), placeGroupSelected && (placesState === null || placesState === void 0 ? void 0 : (_placesState$places4 = placesState.places) === null || _placesState$places4 === void 0 ? void 0 : _placesState$places4.find(function (place) {
    return (place === null || place === void 0 ? void 0 : place.id) === (cart === null || cart === void 0 ? void 0 : cart.place_id);
  })) && /*#__PURE__*/_react.default.createElement(_styles.ButtonWrapper, null, /*#__PURE__*/_react.default.createElement(_Buttons.Button, {
    color: placesState !== null && placesState !== void 0 && placesState.loading ? 'secondary' : 'primary',
    disabled: placesState === null || placesState === void 0 ? void 0 : placesState.loading,
    onClick: function onClick() {
      return onClose && onClose();
    }
  }, t('CONTINUE', 'Continue'))));
};

var PlaceSpot = function PlaceSpot(props) {
  var placeSpotProps = _objectSpread(_objectSpread({}, props), {}, {
    UIComponent: PlaceSpotUI
  });

  return /*#__PURE__*/_react.default.createElement(_orderingComponents.PlaceSpot, placeSpotProps);
};

exports.PlaceSpot = PlaceSpot;