"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeliveriesLocation = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _googleMapReact = _interopRequireWildcard(require("google-map-react"));
var _DriverMapMarkerAndInfo = require("../DriverMapMarkerAndInfo");
var _InterActOrderMarker = require("../InterActOrderMarker");
var _Shared = require("../../Shared");
var _styledComponents = require("styled-components");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var DeliveriesLocation = function DeliveriesLocation(props) {
  var _configState$configs, _configState$configs$, _configState$configs2, _configState$configs3, _configState$configs4, _configState$configs5, _interActionMapOrder$7, _interActionMapOrder$8, _interActionMapOrder$9, _interActionMapOrder$10, _interActionMapOrder$11, _interActionMapOrder$12, _interActionMapOrder$13, _interActionMapOrder$14, _interActionMapOrder$15, _interActionMapOrder$16, _interActionMapOrder$17, _interActionMapOrder$18, _interActionMapOrder$19, _interActionMapOrder$20, _interActionMapOrder$21;
  var driversList = props.driversList,
    interActionMapOrder = props.interActionMapOrder;
  var theme = (0, _styledComponents.useTheme)();
  var _useLanguage = (0, _orderingComponents.useLanguage)(),
    _useLanguage2 = _slicedToArray(_useLanguage, 2),
    t = _useLanguage2[1];
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configState = _useConfig2[0];
  var googleMapsApiKey = configState === null || configState === void 0 ? void 0 : (_configState$configs = configState.configs) === null || _configState$configs === void 0 ? void 0 : (_configState$configs$ = _configState$configs.google_maps_api_key) === null || _configState$configs$ === void 0 ? void 0 : _configState$configs$.value;
  var defaultLatitude = Number(configState === null || configState === void 0 ? void 0 : (_configState$configs2 = configState.configs) === null || _configState$configs2 === void 0 ? void 0 : (_configState$configs3 = _configState$configs2.location_default_latitude) === null || _configState$configs3 === void 0 ? void 0 : _configState$configs3.value);
  var defaultLongitude = Number(configState === null || configState === void 0 ? void 0 : (_configState$configs4 = configState.configs) === null || _configState$configs4 === void 0 ? void 0 : (_configState$configs5 = _configState$configs4.location_default_longitude) === null || _configState$configs5 === void 0 ? void 0 : _configState$configs5.value);
  var isInvalidDefaultLocation = isNaN(defaultLatitude) || isNaN(defaultLongitude);
  var defaultCenter = {
    lat: !isInvalidDefaultLocation ? defaultLatitude : 40.7744146,
    lng: !isInvalidDefaultLocation ? defaultLongitude : -73.9678064
  };
  var _useState = (0, _react.useState)(defaultCenter),
    _useState2 = _slicedToArray(_useState, 2),
    mapCenter = _useState2[0],
    setMapCenter = _useState2[1];
  var _useState3 = (0, _react.useState)(10),
    _useState4 = _slicedToArray(_useState3, 2),
    mapZoom = _useState4[0],
    setMapZoom = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    activeDrivers = _useState6[0],
    setActiveDrivers = _useState6[1];
  var _useState7 = (0, _react.useState)(true),
    _useState8 = _slicedToArray(_useState7, 2),
    mapLoaded = _useState8[0],
    setMapLoaded = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    mapFitted = _useState10[0],
    setMapFitted = _useState10[1];
  var _useState11 = (0, _react.useState)(null),
    _useState12 = _slicedToArray(_useState11, 2),
    interActionOrderDriverLocation = _useState12[0],
    setInterActionOrderDriverLocation = _useState12[1];
  var defaultZoom = 10;
  var mapRef = (0, _react.useRef)(null);
  var mapFit = function mapFit() {
    var _bounds$getNorthEast, _bounds$getNorthEast$, _bounds$getNorthEast2, _bounds$getNorthEast3, _bounds$getSouthWest, _bounds$getSouthWest$, _bounds$getSouthWest2, _bounds$getSouthWest3;
    var _onlineDrivers = driversList.drivers.filter(function (driver) {
      return driver.enabled && driver.available && !driver.busy;
    });
    setActiveDrivers(_onlineDrivers);
    var bounds = new window.google.maps.LatLngBounds();
    if (interActionMapOrder === null) {
      if (driversList.drivers.length === 1) {
        var _driversList$drivers$, _driversList$drivers$2, _driversList$drivers$3, _driversList$drivers$4, _driversList$drivers$5, _driversList$drivers$6;
        setMapCenter(driversList.drivers[0].location !== null && _typeof(driversList.drivers[0].location) === 'object' && (_driversList$drivers$ = driversList.drivers[0].location) !== null && _driversList$drivers$ !== void 0 && _driversList$drivers$.lat && (_driversList$drivers$2 = driversList.drivers[0].location) !== null && _driversList$drivers$2 !== void 0 && _driversList$drivers$2.lng ? driversList.drivers[0].location : typeof driversList.drivers[0].location === 'string' ? {
          lat: parseFloat((_driversList$drivers$3 = driversList.drivers[0]) === null || _driversList$drivers$3 === void 0 ? void 0 : (_driversList$drivers$4 = _driversList$drivers$3.location) === null || _driversList$drivers$4 === void 0 ? void 0 : _driversList$drivers$4.split(',')[0].replace(/[^-.0-9]/g, '')),
          lng: parseFloat((_driversList$drivers$5 = driversList.drivers[0]) === null || _driversList$drivers$5 === void 0 ? void 0 : (_driversList$drivers$6 = _driversList$drivers$5.location) === null || _driversList$drivers$6 === void 0 ? void 0 : _driversList$drivers$6.split(',')[1].replace(/[^-.0-9]/g, ''))
        } : defaultCenter);
        setMapZoom(defaultZoom);
        return;
      }
      var _iterator = _createForOfIteratorHelper(driversList.drivers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _driver$location, _driver$location2, _driver$location3, _driver$location4;
          var driver = _step.value;
          var marker = driver.location !== null && _typeof(driver.location) === 'object' && (_driver$location = driver.location) !== null && _driver$location !== void 0 && _driver$location.lat && (_driver$location2 = driver.location) !== null && _driver$location2 !== void 0 && _driver$location2.lng ? driver.location : typeof (driver === null || driver === void 0 ? void 0 : driver.location) === 'string' ? {
            lat: parseFloat(driver === null || driver === void 0 ? void 0 : (_driver$location3 = driver.location) === null || _driver$location3 === void 0 ? void 0 : _driver$location3.split(',')[0].replace(/[^-.0-9]/g, '')),
            lng: parseFloat(driver === null || driver === void 0 ? void 0 : (_driver$location4 = driver.location) === null || _driver$location4 === void 0 ? void 0 : _driver$location4.split(',')[1].replace(/[^-.0-9]/g, ''))
          } : defaultCenter;
          var newPoint = new window.google.maps.LatLng(marker.lat, marker.lng);
          bounds.extend(newPoint);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
    if (interActionMapOrder !== null) {
      var _interActionMapOrder$, _interActionMapOrder$2, _interActionMapOrder$3, _interActionMapOrder$4, _interActionMapOrder$5;
      var _marker, _newPoint;
      _marker = (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$ = interActionMapOrder.business) === null || _interActionMapOrder$ === void 0 ? void 0 : _interActionMapOrder$.location) !== null ? interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$2 = interActionMapOrder.business) === null || _interActionMapOrder$2 === void 0 ? void 0 : _interActionMapOrder$2.location : defaultCenter;
      _newPoint = new window.google.maps.LatLng(_marker.lat, _marker.lng);
      bounds.extend(_newPoint);
      _marker = (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$3 = interActionMapOrder.customer) === null || _interActionMapOrder$3 === void 0 ? void 0 : _interActionMapOrder$3.location) !== null && interActionMapOrder !== null && interActionMapOrder !== void 0 && (_interActionMapOrder$4 = interActionMapOrder.customer) !== null && _interActionMapOrder$4 !== void 0 && (_interActionMapOrder$5 = _interActionMapOrder$4.location) !== null && _interActionMapOrder$5 !== void 0 && _interActionMapOrder$5.lat ? interActionMapOrder.customer.location : defaultCenter;
      _newPoint = new window.google.maps.LatLng(_marker.lat, _marker.lng);
      bounds.extend(_newPoint);
      if (interActionMapOrder.driver !== null) {
        _marker = interActionOrderDriverLocation !== null && _typeof(interActionOrderDriverLocation) === 'object' && interActionOrderDriverLocation !== null && interActionOrderDriverLocation !== void 0 && interActionOrderDriverLocation.lat && interActionOrderDriverLocation !== null && interActionOrderDriverLocation !== void 0 && interActionOrderDriverLocation.lng ? interActionOrderDriverLocation : defaultCenter;
        _newPoint = new window.google.maps.LatLng(_marker.lat, _marker.lng);
        bounds.extend(_newPoint);
      } else {
        var _iterator2 = _createForOfIteratorHelper(activeDrivers),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var _activeDriver$locatio, _activeDriver$locatio2;
            var activeDriver = _step2.value;
            var _marker2 = activeDriver.location !== null && _typeof(activeDriver.location) === 'object' && (_activeDriver$locatio = activeDriver.location) !== null && _activeDriver$locatio !== void 0 && _activeDriver$locatio.lat && (_activeDriver$locatio2 = activeDriver.location) !== null && _activeDriver$locatio2 !== void 0 && _activeDriver$locatio2.lng ? activeDriver.location : defaultCenter;
            var _newPoint2 = new window.google.maps.LatLng(_marker2.lat, _marker2.lng);
            bounds.extend(_newPoint2);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
      }
    }
    var newBounds = {
      ne: {
        lat: (_bounds$getNorthEast = bounds.getNorthEast()) === null || _bounds$getNorthEast === void 0 ? void 0 : (_bounds$getNorthEast$ = _bounds$getNorthEast.lat) === null || _bounds$getNorthEast$ === void 0 ? void 0 : _bounds$getNorthEast$.call(_bounds$getNorthEast),
        lng: (_bounds$getNorthEast2 = bounds.getNorthEast()) === null || _bounds$getNorthEast2 === void 0 ? void 0 : (_bounds$getNorthEast3 = _bounds$getNorthEast2.lng) === null || _bounds$getNorthEast3 === void 0 ? void 0 : _bounds$getNorthEast3.call(_bounds$getNorthEast2)
      },
      sw: {
        lat: (_bounds$getSouthWest = bounds.getSouthWest()) === null || _bounds$getSouthWest === void 0 ? void 0 : (_bounds$getSouthWest$ = _bounds$getSouthWest.lat) === null || _bounds$getSouthWest$ === void 0 ? void 0 : _bounds$getSouthWest$.call(_bounds$getSouthWest),
        lng: (_bounds$getSouthWest2 = bounds.getSouthWest()) === null || _bounds$getSouthWest2 === void 0 ? void 0 : (_bounds$getSouthWest3 = _bounds$getSouthWest2.lng) === null || _bounds$getSouthWest3 === void 0 ? void 0 : _bounds$getSouthWest3.call(_bounds$getSouthWest2)
      }
    };
    var mapSize = {
      width: mapRef.current.clientWidth,
      height: mapRef.current.clientHeight
    };
    var _fitBounds = (0, _googleMapReact.fitBounds)(newBounds, mapSize),
      center = _fitBounds.center,
      zoom = _fitBounds.zoom;
    setMapZoom(zoom);
    setMapCenter(center);
    setMapFitted(true);
  };

  // Fit bounds on mount, and when the markers change
  (0, _react.useEffect)(function () {
    if (driversList.loading || driversList.drivers.length === 0 || mapLoaded) return;
    if (interActionMapOrder !== null) {
      var _iterator3 = _createForOfIteratorHelper(driversList.drivers),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _interActionMapOrder$6;
          var driver = _step3.value;
          if (driver.id === (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$6 = interActionMapOrder.driver) === null || _interActionMapOrder$6 === void 0 ? void 0 : _interActionMapOrder$6.id)) {
            setInterActionOrderDriverLocation(driver.location);
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
    if (!mapFitted) {
      mapFit();
    }
  }, [interActionMapOrder, mapLoaded, driversList, mapFitted]);
  (0, _react.useEffect)(function () {
    setMapFitted(false);
  }, [interActionMapOrder]);
  var handleMapChange = function handleMapChange(data) {
    setMapZoom(data === null || data === void 0 ? void 0 : data.zoom);
  };
  return /*#__PURE__*/_react.default.createElement(_styles.WrapperMap, {
    ref: mapRef,
    className: "drivers-location"
  }, googleMapsApiKey && /*#__PURE__*/_react.default.createElement(_googleMapReact.default, {
    bootstrapURLKeys: {
      key: window.document.getElementById('__googleMapsScriptId') ? null : googleMapsApiKey,
      libraries: ['places', 'geometry', 'drawing', 'visualization']
    },
    onGoogleApiLoaded: function onGoogleApiLoaded() {
      return setMapLoaded(false);
    },
    defaultCenter: defaultCenter,
    center: mapCenter,
    defaultZoom: defaultZoom,
    zoom: mapZoom,
    options: {
      fullscreenControl: true
    },
    className: "map",
    onChange: function onChange(data) {
      return handleMapChange(data);
    },
    yesIWantToUseGoogleMapApiInternals: true
  }, interActionMapOrder === null && driversList.drivers.length !== 0 && driversList.drivers.filter(function (driver) {
    return driver === null || driver === void 0 ? void 0 : driver.enabled;
  }).map(function (driver) {
    var _driver$location5, _driver$location6, _driver$location7, _driver$location8;
    return /*#__PURE__*/_react.default.createElement(_DriverMapMarkerAndInfo.DriverMapMarkerAndInfo, {
      key: driver.id,
      driver: driver,
      lat: driver.location !== null && _typeof(driver.location) === 'object' && (_driver$location5 = driver.location) !== null && _driver$location5 !== void 0 && _driver$location5.lat ? driver.location.lat : typeof driver.location === 'string' ? parseFloat(driver === null || driver === void 0 ? void 0 : (_driver$location6 = driver.location) === null || _driver$location6 === void 0 ? void 0 : _driver$location6.split(',')[0].replace(/[^-.0-9]/g, '')) : defaultCenter.lat,
      lng: driver.location !== null && _typeof(driver.location) === 'object' && (_driver$location7 = driver.location) !== null && _driver$location7 !== void 0 && _driver$location7.lng ? driver.location.lng : typeof driver.location === 'string' ? parseFloat(driver === null || driver === void 0 ? void 0 : (_driver$location8 = driver.location) === null || _driver$location8 === void 0 ? void 0 : _driver$location8.split(',')[1].replace(/[^-.0-9]/g, '')) : defaultCenter.lng
    });
  }), interActionMapOrder !== null && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    business: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.business,
    lat: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$7 = interActionMapOrder.business) === null || _interActionMapOrder$7 === void 0 ? void 0 : (_interActionMapOrder$8 = _interActionMapOrder$7.location) === null || _interActionMapOrder$8 === void 0 ? void 0 : _interActionMapOrder$8.lat,
    lng: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$9 = interActionMapOrder.business) === null || _interActionMapOrder$9 === void 0 ? void 0 : (_interActionMapOrder$10 = _interActionMapOrder$9.location) === null || _interActionMapOrder$10 === void 0 ? void 0 : _interActionMapOrder$10.lng,
    image: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$11 = interActionMapOrder.business) === null || _interActionMapOrder$11 === void 0 ? void 0 : _interActionMapOrder$11.logo
  }), interActionMapOrder !== null && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    customer: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.customer,
    lat: interActionMapOrder !== null && interActionMapOrder !== void 0 && (_interActionMapOrder$12 = interActionMapOrder.customer) !== null && _interActionMapOrder$12 !== void 0 && (_interActionMapOrder$13 = _interActionMapOrder$12.location) !== null && _interActionMapOrder$13 !== void 0 && _interActionMapOrder$13.lat ? interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$14 = interActionMapOrder.customer) === null || _interActionMapOrder$14 === void 0 ? void 0 : (_interActionMapOrder$15 = _interActionMapOrder$14.location) === null || _interActionMapOrder$15 === void 0 ? void 0 : _interActionMapOrder$15.lat : defaultCenter.lat,
    lng: interActionMapOrder !== null && interActionMapOrder !== void 0 && (_interActionMapOrder$16 = interActionMapOrder.customer) !== null && _interActionMapOrder$16 !== void 0 && (_interActionMapOrder$17 = _interActionMapOrder$16.location) !== null && _interActionMapOrder$17 !== void 0 && _interActionMapOrder$17.lng ? interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$18 = interActionMapOrder.customer) === null || _interActionMapOrder$18 === void 0 ? void 0 : (_interActionMapOrder$19 = _interActionMapOrder$18.location) === null || _interActionMapOrder$19 === void 0 ? void 0 : _interActionMapOrder$19.lng : defaultCenter.lng,
    image: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$20 = interActionMapOrder.customer) === null || _interActionMapOrder$20 === void 0 ? void 0 : _interActionMapOrder$20.photo
  }), interActionMapOrder !== null && (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver) !== null && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    driver: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver,
    lat: interActionOrderDriverLocation !== null && _typeof(interActionOrderDriverLocation) === 'object' && interActionOrderDriverLocation !== null && interActionOrderDriverLocation !== void 0 && interActionOrderDriverLocation.lat ? interActionOrderDriverLocation.lat : typeof interActionOrderDriverLocation === 'string' ? parseFloat(interActionOrderDriverLocation === null || interActionOrderDriverLocation === void 0 ? void 0 : interActionOrderDriverLocation.split(',')[0].replace(/[^-.0-9]/g, '')) : defaultCenter.lat,
    lng: interActionOrderDriverLocation !== null && _typeof(interActionOrderDriverLocation) === 'object' && interActionOrderDriverLocation !== null && interActionOrderDriverLocation !== void 0 && interActionOrderDriverLocation.lng ? interActionOrderDriverLocation.lng : typeof interActionOrderDriverLocation === 'string' ? parseFloat(interActionOrderDriverLocation === null || interActionOrderDriverLocation === void 0 ? void 0 : interActionOrderDriverLocation.split(',')[1].replace(/[^-.0-9]/g, '')) : defaultCenter.lng,
    image: interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : (_interActionMapOrder$21 = interActionMapOrder.driver) === null || _interActionMapOrder$21 === void 0 ? void 0 : _interActionMapOrder$21.photo
  }), interActionMapOrder !== null && (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver) === null && activeDrivers.length > 0 && activeDrivers.map(function (driver) {
    var _driver$location9, _driver$location10, _driver$location11, _driver$location12;
    return /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
      key: driver.id,
      driver: driver,
      lat: driver.location !== null && _typeof(driver.location) === 'object' && (_driver$location9 = driver.location) !== null && _driver$location9 !== void 0 && _driver$location9.lat ? driver.location.lat : typeof driver.location === 'string' ? parseFloat(driver === null || driver === void 0 ? void 0 : (_driver$location10 = driver.location) === null || _driver$location10 === void 0 ? void 0 : _driver$location10.split(',')[0].replace(/[^-.0-9]/g, '')) : defaultCenter.lat,
      lng: driver.location !== null && _typeof(driver.location) === 'object' && (_driver$location11 = driver.location) !== null && _driver$location11 !== void 0 && _driver$location11.lng ? driver.location.lng : typeof driver.location === 'string' ? parseFloat(driver === null || driver === void 0 ? void 0 : (_driver$location12 = driver.location) === null || _driver$location12 === void 0 ? void 0 : _driver$location12.split(',')[1].replace(/[^-.0-9]/g, '')) : defaultCenter.lng,
      image: driver === null || driver === void 0 ? void 0 : driver.photo
    });
  })), interActionMapOrder !== null && (interActionMapOrder === null || interActionMapOrder === void 0 ? void 0 : interActionMapOrder.driver) === null && activeDrivers.length > 0 && /*#__PURE__*/_react.default.createElement(_styles.WrapperOnlineDrivers, null, /*#__PURE__*/_react.default.createElement("p", null, t('ACTIVE_DRIVERS', 'Drivers online')), /*#__PURE__*/_react.default.createElement(_styles.OnlineDrivers, null, /*#__PURE__*/_react.default.createElement(_Shared.AutoScroll, {
    innerScroll: true
  }, activeDrivers.length > 0 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, activeDrivers.map(function (driver) {
    var _theme$images, _theme$images$icons;
    return /*#__PURE__*/_react.default.createElement(_styles.WrapDriverInfo, {
      key: driver.id
    }, /*#__PURE__*/_react.default.createElement(_styles.WrapperDriverImage, null, /*#__PURE__*/_react.default.createElement(_styles.DriverImage, {
      bgimage: (driver === null || driver === void 0 ? void 0 : driver.photo) || (theme === null || theme === void 0 ? void 0 : (_theme$images = theme.images) === null || _theme$images === void 0 ? void 0 : (_theme$images$icons = _theme$images.icons) === null || _theme$images$icons === void 0 ? void 0 : _theme$images$icons.noDriver)
    })), /*#__PURE__*/_react.default.createElement(_styles.DriverInfo, null, /*#__PURE__*/_react.default.createElement("p", null, driver.name, " ", driver.lastname), /*#__PURE__*/_react.default.createElement("p", null, t('DRIVER', 'Driver'))));
  }))))));
};
exports.DeliveriesLocation = DeliveriesLocation;