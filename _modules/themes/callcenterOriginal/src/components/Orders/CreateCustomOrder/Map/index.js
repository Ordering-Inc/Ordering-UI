"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Map = void 0;
var _react = _interopRequireWildcard(require("react"));
var _orderingComponents = require("ordering-components");
var _googleMapReact = _interopRequireWildcard(require("google-map-react"));
var _InterActOrderMarker = require("../../InterActOrderMarker");
var _styles = require("./styles");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Map = function Map(props) {
  var _configs$location_def, _configs$location_def2, _business$location, _business$location2;
  var business = props.business,
    customer = props.customer,
    customerLocation = props.customerLocation;
  var _useConfig = (0, _orderingComponents.useConfig)(),
    _useConfig2 = _slicedToArray(_useConfig, 1),
    configs = _useConfig2[0].configs;
  var mapRef = (0, _react.useRef)(null);
  var googleMapsApiKey = (0, _react.useMemo)(function () {
    var _configs$google_maps_;
    return configs === null || configs === void 0 || (_configs$google_maps_ = configs.google_maps_api_key) === null || _configs$google_maps_ === void 0 ? void 0 : _configs$google_maps_.value;
  }, [configs]);
  var defaultLatitude = Number(configs === null || configs === void 0 || (_configs$location_def = configs.location_default_latitude) === null || _configs$location_def === void 0 ? void 0 : _configs$location_def.value);
  var defaultLongitude = Number(configs === null || configs === void 0 || (_configs$location_def2 = configs.location_default_longitude) === null || _configs$location_def2 === void 0 ? void 0 : _configs$location_def2.value);
  var isInvalidDefaultLocation = isNaN(defaultLatitude) || isNaN(defaultLongitude);
  var defaultCenter = {
    lat: !isInvalidDefaultLocation ? defaultLatitude : 40.7744146,
    lng: !isInvalidDefaultLocation ? defaultLongitude : -73.9678064
  };
  var defaultZoom = 10;
  var _useState = (0, _react.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    mapLoaded = _useState2[0],
    setMapLoaded = _useState2[1];
  var _useState3 = (0, _react.useState)(defaultCenter),
    _useState4 = _slicedToArray(_useState3, 2),
    mapCenter = _useState4[0],
    setMapCenter = _useState4[1];
  var _useState5 = (0, _react.useState)(10),
    _useState6 = _slicedToArray(_useState5, 2),
    mapZoom = _useState6[0],
    setMapZoom = _useState6[1];
  var handleMapChange = function handleMapChange(data) {
    if (!(data !== null && data !== void 0 && data.zoom)) return;
    setMapZoom(data === null || data === void 0 ? void 0 : data.zoom);
  };
  var mapFit = function mapFit() {
    var _bounds$getNorthEast, _bounds$getNorthEast$, _bounds$getNorthEast2, _bounds$getNorthEast3, _bounds$getSouthWest, _bounds$getSouthWest$, _bounds$getSouthWest2, _bounds$getSouthWest3;
    var bounds = new window.google.maps.LatLngBounds();
    if (!(business !== null && business !== void 0 && business.location)) {
      setMapCenter(customerLocation);
      setMapZoom(defaultZoom);
      return;
    }
    var marker, newPoint;
    marker = business === null || business === void 0 ? void 0 : business.location;
    newPoint = new window.google.maps.LatLng(marker.lat, marker.lng);
    bounds.extend(newPoint);
    marker = customerLocation;
    newPoint = new window.google.maps.LatLng(marker.lat, marker.lng);
    bounds.extend(newPoint);
    var newBounds = {
      ne: {
        lat: (_bounds$getNorthEast = bounds.getNorthEast()) === null || _bounds$getNorthEast === void 0 || (_bounds$getNorthEast$ = _bounds$getNorthEast.lat) === null || _bounds$getNorthEast$ === void 0 ? void 0 : _bounds$getNorthEast$.call(_bounds$getNorthEast),
        lng: (_bounds$getNorthEast2 = bounds.getNorthEast()) === null || _bounds$getNorthEast2 === void 0 || (_bounds$getNorthEast3 = _bounds$getNorthEast2.lng) === null || _bounds$getNorthEast3 === void 0 ? void 0 : _bounds$getNorthEast3.call(_bounds$getNorthEast2)
      },
      sw: {
        lat: (_bounds$getSouthWest = bounds.getSouthWest()) === null || _bounds$getSouthWest === void 0 || (_bounds$getSouthWest$ = _bounds$getSouthWest.lat) === null || _bounds$getSouthWest$ === void 0 ? void 0 : _bounds$getSouthWest$.call(_bounds$getSouthWest),
        lng: (_bounds$getSouthWest2 = bounds.getSouthWest()) === null || _bounds$getSouthWest2 === void 0 || (_bounds$getSouthWest3 = _bounds$getSouthWest2.lng) === null || _bounds$getSouthWest3 === void 0 ? void 0 : _bounds$getSouthWest3.call(_bounds$getSouthWest2)
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
  };
  (0, _react.useEffect)(function () {
    if (mapLoaded) return;
    mapFit();
  }, [customerLocation, business === null || business === void 0 ? void 0 : business.location, mapLoaded]);
  return /*#__PURE__*/_react.default.createElement(_styles.Container, {
    ref: mapRef
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
  }, (business === null || business === void 0 ? void 0 : business.location) && /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    business: business,
    lat: business === null || business === void 0 || (_business$location = business.location) === null || _business$location === void 0 ? void 0 : _business$location.lat,
    lng: business === null || business === void 0 || (_business$location2 = business.location) === null || _business$location2 === void 0 ? void 0 : _business$location2.lng,
    image: business === null || business === void 0 ? void 0 : business.logo
  }), /*#__PURE__*/_react.default.createElement(_InterActOrderMarker.InterActOrderMarker, {
    customer: customer,
    lat: customerLocation === null || customerLocation === void 0 ? void 0 : customerLocation.lat,
    lng: customerLocation === null || customerLocation === void 0 ? void 0 : customerLocation.lng,
    image: customer === null || customer === void 0 ? void 0 : customer.photo
  })));
};
exports.Map = Map;