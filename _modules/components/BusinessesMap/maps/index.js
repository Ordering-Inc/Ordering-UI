"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GoogleMapsMap = exports.GoogleMaps = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _WrapperGoogleMaps = require("../WrapperGoogleMaps");
var _orderingComponents = require("ordering-components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var GoogleMaps = function GoogleMaps(props) {
  var googleReady = props.googleReady,
    locations = props.locations,
    mapControls = props.mapControls,
    setErrors = props.setErrors,
    isSetInputs = props.isSetInputs,
    fixedLocation = props.fixedLocation,
    handleChangeAddressMap = props.handleChangeAddressMap,
    maxLimitLocation = props.maxLimitLocation,
    businessMap = props.businessMap,
    onBusinessClick = props.onBusinessClick,
    setNearBusinessList = props.setNearBusinessList,
    noDistanceValidation = props.noDistanceValidation,
    businessZones = props.businessZones,
    fillStyle = props.fillStyle;
  var _useUtils = (0, _orderingComponents.useUtils)(),
    _useUtils2 = _slicedToArray(_useUtils, 1),
    optimizeImage = _useUtils2[0].optimizeImage;
  var _useEvent = (0, _orderingComponents.useEvent)(),
    _useEvent2 = _slicedToArray(_useEvent, 1),
    events = _useEvent2[0];
  var divRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    googleMap = _useState2[0],
    setGoogleMap = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    markers = _useState4[0],
    setMarkers = _useState4[1];
  var _useState5 = (0, _react.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    googleMapMarker = _useState6[0],
    setGoogleMapMarker = _useState6[1];
  var _useState7 = (0, _react.useState)(null),
    _useState8 = _slicedToArray(_useState7, 2),
    boundMap = _useState8[0],
    setBoundMap = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    userActivity = _useState10[0],
    setUserActivity = _useState10[1];
  var markerRef = (0, _react.useRef)();
  var location = fixedLocation || props.location;
  var center = {
    lat: location === null || location === void 0 ? void 0 : location.lat,
    lng: location === null || location === void 0 ? void 0 : location.lng
  };
  var units = {
    mi: 1609,
    km: 1000
  };

  /**
   * Function to generate multiple markers
   * @param {Google map} map
   */
  var generateMarkers = function generateMarkers(map) {
    var bounds = new window.google.maps.LatLngBounds();
    var businessesNear = 0;
    var locationMarkers = [];
    var _loop = function _loop(i) {
      var _locations$i2, _locations$i3, _locations$i4, _locations$i5;
      var formatUrl = null;
      if (i === 1 || businessMap) {
        var _locations$i;
        formatUrl = optimizeImage((_locations$i = locations[i]) === null || _locations$i === void 0 ? void 0 : _locations$i.icon, 'r_max');
      }
      var marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng((_locations$i2 = locations[i]) === null || _locations$i2 === void 0 ? void 0 : _locations$i2.lat, (_locations$i3 = locations[i]) === null || _locations$i3 === void 0 ? void 0 : _locations$i3.lng),
        map: map,
        title: (_locations$i4 = locations[i]) === null || _locations$i4 === void 0 ? void 0 : _locations$i4.slug,
        icon: (_locations$i5 = locations[i]) !== null && _locations$i5 !== void 0 && _locations$i5.icon ? {
          url: formatUrl || locations[i].icon,
          scaledSize: new window.google.maps.Size(35, 35)
        } : null
      });
      if (businessMap && !noDistanceValidation) {
        var isNear = validateResult(googleMap, marker, marker.getPosition());
        if (isNear) {
          var _locations$;
          if (i === 0 && (_locations$ = locations[0]) !== null && _locations$ !== void 0 && _locations$.markerPopup) {
            var _locations$2;
            var infowindow = new window.google.maps.InfoWindow();
            infowindow.setContent((_locations$2 = locations[0]) === null || _locations$2 === void 0 ? void 0 : _locations$2.markerPopup);
            infowindow.open(map, marker);
            markerRef.current = infowindow;
          }
          marker.addListener('click', function () {
            var _locations$i6;
            if ((_locations$i6 = locations[i]) !== null && _locations$i6 !== void 0 && _locations$i6.markerPopup) {
              var _locations$i7;
              var _infowindow = new window.google.maps.InfoWindow();
              _infowindow.setContent((_locations$i7 = locations[i]) === null || _locations$i7 === void 0 ? void 0 : _locations$i7.markerPopup);
              _infowindow.open(map, marker);
            } else {
              var _locations$i8;
              onBusinessClick((_locations$i8 = locations[i]) === null || _locations$i8 === void 0 ? void 0 : _locations$i8.slug);
            }
          });
          bounds.extend(marker.position);
          locationMarkers.push(marker);
          businessesNear = businessesNear + 1;
        } else {
          marker.setMap(null);
        }
      } else {
        bounds.extend(marker.position);
        locationMarkers.push(marker);
      }
    };
    for (var i = 0; i < locations.length; i++) {
      _loop(i);
    }
    if (locationMarkers.length > 0) {
      setMarkers(locationMarkers);
    }
    if (setNearBusinessList) {
      var franchiseSlugs = [];
      var _iterator = _createForOfIteratorHelper(locationMarkers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var locationMarker = _step.value;
          franchiseSlugs.push(locationMarker === null || locationMarker === void 0 ? void 0 : locationMarker.title);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      setNearBusinessList(franchiseSlugs);
    }
    businessesNear === 0 && setErrors && setErrors('ERROR_NOT_FOUND_BUSINESSES');
    map.fitBounds(bounds);
    setBoundMap(bounds);
  };
  /**
   * function to get all address information with a location
   * @param {google location} pos
   */
  var geocodePosition = function geocodePosition(pos) {
    if (isSetInputs) {
      var geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({
        latLng: pos
      }, function (results) {
        var _results$;
        var zipcode = null;
        if (results && results.length > 0 && results !== null && results !== void 0 && (_results$ = results[0]) !== null && _results$ !== void 0 && _results$.address_components) {
          var _address$location, _address$location2;
          var _iterator2 = _createForOfIteratorHelper(results[0].address_components),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var component = _step2.value;
              var addressType = component.types[0];
              if (addressType === 'postal_code') {
                zipcode = component.short_name;
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          var address = {
            address: results[0].formatted_address,
            location: {
              lat: pos === null || pos === void 0 ? void 0 : pos.lat(),
              lng: pos === null || pos === void 0 ? void 0 : pos.lng()
            }
          };
          if (zipcode) address.zipcode = zipcode;
          handleChangeAddressMap && handleChangeAddressMap(address);
          center.lat = (_address$location = address.location) === null || _address$location === void 0 ? void 0 : _address$location.lat;
          center.lng = (_address$location2 = address.location) === null || _address$location2 === void 0 ? void 0 : _address$location2.lng;
        } else {
          googleMapMarker && googleMapMarker.setPosition(center);
          setErrors && setErrors('ERROR_NOT_FOUND_ADDRESS');
        }
        googleMap && googleMap.panTo(new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng));
      });
    } else {
      var _location = {
        lat: pos === null || pos === void 0 ? void 0 : pos.lat(),
        lng: pos === null || pos === void 0 ? void 0 : pos.lng()
      };
      handleChangeAddressMap && handleChangeAddressMap({
        location: _location
      });
      center.lat = _location === null || _location === void 0 ? void 0 : _location.lat;
      center.lng = _location === null || _location === void 0 ? void 0 : _location.lng;
      googleMap && googleMap.panTo(new window.google.maps.LatLng(_location === null || _location === void 0 ? void 0 : _location.lat, _location === null || _location === void 0 ? void 0 : _location.lng));
    }
  };

  /**
   * Function to return distance between two locations
   * @param {google location} loc1
   * @param {*google location} loc2
   */
  var validateResult = function validateResult(map, marker, curPos) {
    var loc1 = new window.google.maps.LatLng(curPos === null || curPos === void 0 ? void 0 : curPos.lat(), curPos === null || curPos === void 0 ? void 0 : curPos.lng());
    var loc2 = new window.google.maps.LatLng(location === null || location === void 0 ? void 0 : location.lat, location === null || location === void 0 ? void 0 : location.lng);
    var distance = window.google.maps.geometry.spherical.computeDistanceBetween(loc1, loc2);
    if (businessMap) {
      var minimumBusinessDistance = 20000;
      if (distance <= minimumBusinessDistance) return true;
      return false;
    }
    if (!maxLimitLocation) {
      geocodePosition(curPos);
      return;
    }
    if (distance <= maxLimitLocation) {
      geocodePosition(curPos);
    } else {
      marker.setPosition(center);
      map.panTo(new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng));
      setErrors && setErrors('ERROR_MAX_LIMIT_LOCATION');
    }
  };
  (0, _react.useEffect)(function () {
    if (googleReady) {
      var _location$zoom;
      var map = new window.google.maps.Map(divRef.current, {
        zoom: (_location$zoom = location.zoom) !== null && _location$zoom !== void 0 ? _location$zoom : mapControls.defaultZoom,
        center: center,
        zoomControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.zoomControl,
        streetViewControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.streetViewControl,
        fullscreenControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.fullscreenControl,
        mapTypeControl: mapControls === null || mapControls === void 0 ? void 0 : mapControls.mapTypeControl,
        mapTypeId: mapControls === null || mapControls === void 0 ? void 0 : mapControls.mapTypeId,
        mapTypeControlOptions: _objectSpread({
          style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: window.google.maps.ControlPosition.TOP_LEFT
        }, mapControls === null || mapControls === void 0 ? void 0 : mapControls.mapTypeControlOptions)
      });
      var marker = null;
      setGoogleMap(map);
      if (locations) {
        if (locations.length > 0) {
          generateMarkers(map);
        }
        if (businessMap) {
          marker = new window.google.maps.Marker({
            position: new window.google.maps.LatLng(center.lat, center.lng),
            map: map
          });
          map.panTo(new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng));
          // map.fitBounds(boundMap)
        } else {
          marker = new window.google.maps.Marker({
            position: new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng),
            map: map,
            icon: {
              url: locations[0].icon,
              scaledSize: new window.google.maps.Size(35, 35)
            }
          });
        }
        setGoogleMapMarker(marker);
      } else {
        marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng),
          map: map,
          draggable: !!(mapControls !== null && mapControls !== void 0 && mapControls.isMarkerDraggable)
        });
        setGoogleMapMarker(marker);
      }
      if ((businessZones === null || businessZones === void 0 ? void 0 : businessZones.length) > 0) {
        var bounds = new window.google.maps.LatLngBounds();
        var _iterator3 = _createForOfIteratorHelper(businessZones),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _deliveryZone$data, _deliveryZone$data2, _deliveryZone$data3;
            var deliveryZone = _step3.value;
            if (deliveryZone.type === 1 && deliveryZone !== null && deliveryZone !== void 0 && (_deliveryZone$data = deliveryZone.data) !== null && _deliveryZone$data !== void 0 && _deliveryZone$data.center && deliveryZone !== null && deliveryZone !== void 0 && (_deliveryZone$data2 = deliveryZone.data) !== null && _deliveryZone$data2 !== void 0 && _deliveryZone$data2.radio) {
              var newCircleZone = new window.google.maps.Circle(_objectSpread(_objectSpread({}, fillStyle), {}, {
                editable: false,
                center: deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data.center,
                radius: (deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data.radio) * 1000
              }));
              newCircleZone.setMap(map);
              bounds.union(newCircleZone.getBounds());
              map.fitBounds(bounds);
            }
            if (deliveryZone.type === 5 && deliveryZone !== null && deliveryZone !== void 0 && (_deliveryZone$data3 = deliveryZone.data) !== null && _deliveryZone$data3 !== void 0 && _deliveryZone$data3.distance) {
              var _deliveryZone$data4;
              var _newCircleZone = new window.google.maps.Circle(_objectSpread(_objectSpread({}, fillStyle), {}, {
                editable: false,
                center: center,
                radius: (deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data.distance) * units[deliveryZone === null || deliveryZone === void 0 ? void 0 : (_deliveryZone$data4 = deliveryZone.data) === null || _deliveryZone$data4 === void 0 ? void 0 : _deliveryZone$data4.unit]
              }));
              _newCircleZone.setMap(map);
              bounds.union(_newCircleZone.getBounds());
              map.fitBounds(bounds);
            }
            if ((deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.type) === 2 && Array.isArray(deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data)) {
              var newPolygonZone = new window.google.maps.Polygon(_objectSpread(_objectSpread({}, fillStyle), {}, {
                editable: false,
                paths: deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data
              }));
              newPolygonZone.setMap(map);
              if (Array.isArray(deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data)) {
                var _iterator4 = _createForOfIteratorHelper(deliveryZone === null || deliveryZone === void 0 ? void 0 : deliveryZone.data),
                  _step4;
                try {
                  for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var position = _step4.value;
                    bounds.extend(position);
                  }
                } catch (err) {
                  _iterator4.e(err);
                } finally {
                  _iterator4.f();
                }
                map.fitBounds(bounds);
              }
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    }
  }, [googleReady]);
  (0, _react.useEffect)(function () {
    if (!businessMap) {
      if (googleReady && googleMap && googleMapMarker) {
        window.google.maps.event.addListener(googleMapMarker, 'dragend', function () {
          validateResult(googleMap, googleMapMarker, googleMapMarker.getPosition());
        });
        window.google.maps.event.addListener(googleMapMarker, 'drag', function () {
          events.emit('map_is_dragging', true);
        });
        if (mapControls !== null && mapControls !== void 0 && mapControls.isMarkerDraggable) {
          window.google.maps.event.addListener(googleMap, 'drag', function () {
            googleMapMarker.setPosition(googleMap.getCenter());
            events.emit('map_is_dragging', true);
          });
          window.google.maps.event.addListener(googleMap, 'dragend', function () {
            googleMapMarker.setPosition(googleMap.getCenter());
            validateResult(googleMap, googleMapMarker, googleMap.getCenter());
          });
        }
        return function () {
          window.google.maps.event.clearListeners(googleMapMarker, 'dragend');
          window.google.maps.event.clearListeners(googleMap, 'drag');
          window.google.maps.event.clearListeners(googleMap, 'dragend');
        };
      }
    }
  }, [googleMapMarker, googleMap, location]);
  (0, _react.useEffect)(function () {
    if (googleReady && location) {
      if (businessMap && googleMap) {
        if (markerRef !== null && markerRef !== void 0 && markerRef.current) {
          var _markerRef$current;
          (markerRef === null || markerRef === void 0 ? void 0 : (_markerRef$current = markerRef.current) === null || _markerRef$current === void 0 ? void 0 : _markerRef$current.close) && markerRef.current.close();
        }
        markers.forEach(function (marker) {
          marker.setMap(null);
        });
        generateMarkers(googleMap);
      }
      center.lat = location === null || location === void 0 ? void 0 : location.lat;
      center.lng = location === null || location === void 0 ? void 0 : location.lng;
      var newPos = new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng);
      googleMapMarker && googleMapMarker.setPosition(newPos);
      (markers === null || markers === void 0 ? void 0 : markers[0]) && markers[0].setPosition(newPos);
      googleMap && googleMap.panTo(new window.google.maps.LatLng(center === null || center === void 0 ? void 0 : center.lat, center === null || center === void 0 ? void 0 : center.lng));
    }
  }, [location, locations]);
  (0, _react.useEffect)(function () {
    if (!businessMap) {
      var interval = setInterval(function () {
        if (googleReady && !userActivity) {
          var driverLocation = locations === null || locations === void 0 ? void 0 : locations[0];
          if (driverLocation) {
            var newLocation = new window.google.maps.LatLng(driverLocation === null || driverLocation === void 0 ? void 0 : driverLocation.lat, driverLocation === null || driverLocation === void 0 ? void 0 : driverLocation.lng);
            (markers === null || markers === void 0 ? void 0 : markers[0]) && markers[0].setPosition(newLocation);
            (markers === null || markers === void 0 ? void 0 : markers.length) > 0 && markers.forEach(function (marker) {
              return boundMap.extend(marker.position);
            });
            googleMap.fitBounds(boundMap);
          }
        }
        setUserActivity(false);
      }, 5000);
      return function () {
        return clearInterval(interval);
      };
    }
  }, [locations, userActivity]);
  (0, _react.useEffect)(function () {
    if (boundMap && businessMap) {
      boundMap.extend(center);
      googleMap.fitBounds(boundMap);
    }
  }, [boundMap]);
  return googleReady && /*#__PURE__*/_react.default.createElement("div", {
    onMouseOver: function onMouseOver() {
      return setUserActivity(true);
    },
    id: "map",
    ref: divRef,
    style: {
      width: '70%',
      height: '50%',
      position: 'absolute'
    }
  });
};
exports.GoogleMaps = GoogleMaps;
GoogleMaps.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,
  /**
   * maxLimitLocation, max value to set position
   */
  maxLimitLocation: _propTypes.default.number,
  /**
   * handleChangeAddressMap, function to set address when pin is moved
   */
  handleChangeAddressMap: _propTypes.default.func,
  /**
   * Components types before [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  beforeComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Components types after [PUT HERE COMPONENT NAME]
   * Array of type components, the parent props will pass to these components
   */
  afterComponents: _propTypes.default.arrayOf(_propTypes.default.elementType),
  /**
   * Elements before [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  beforeElements: _propTypes.default.arrayOf(_propTypes.default.element),
  /**
   * Elements after [PUT HERE COMPONENT NAME]
   * Array of HTML/Components elements, these components will not get the parent props
   */
  afterElements: _propTypes.default.arrayOf(_propTypes.default.element)
};
GoogleMaps.defaultProps = {
  beforeComponents: [],
  afterComponents: [],
  beforeElements: [],
  afterElements: []
};
var GoogleMapsMap = (0, _WrapperGoogleMaps.WrapperGoogleMaps)(GoogleMaps);
exports.GoogleMapsMap = GoogleMapsMap;
GoogleMapsMap.propTypes = {
  /**
   * You Google Maps api key
   * @see apiKey What is Api Key ? https://developers.google.com/maps/gmp-get-started
   */
  apiKey: _propTypes.default.string.isRequired,
  /**
   * Function to get address from GPS
   * @param {object} address New address
   */
  onAddress: _propTypes.default.func,
  /**
   * Function to get error from GPS
   * @param {object} address New address
   */
  onError: _propTypes.default.func
};