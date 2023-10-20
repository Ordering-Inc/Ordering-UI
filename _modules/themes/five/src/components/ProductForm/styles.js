"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSubOption = exports.WrapperIngredients = exports.WrapperImage = exports.WeightUnitSwitch = exports.WeightUnitItem = exports.VideoGalleryWrapper = exports.TitleWrapper = exports.SwiperWrapper = exports.SkuContent = exports.SkeletonBlock = exports.SectionTitle = exports.Properties = exports.ProductTagsListContainer = exports.ProductTagWrapper = exports.ProductTabContainer = exports.ProductShareWrapper = exports.ProductName = exports.ProductMeta = exports.ProductInfo = exports.ProductFormTitle = exports.ProductEdition = exports.ProductDescription = exports.ProductContainer = exports.ProductComment = exports.ProductActions = exports.PriceContent = exports.LoadingWrapper = exports.GuestUserLink = exports.EstimatedPersons = exports.Divider = void 0;
var _styledComponents = _interopRequireWildcard(require("styled-components"));
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35, _templateObject36, _templateObject37, _templateObject38, _templateObject39, _templateObject40, _templateObject41, _templateObject42, _templateObject43, _templateObject44, _templateObject45, _templateObject46, _templateObject47, _templateObject48, _templateObject49;
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ProductContainer = exports.ProductContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-height: 100vh;\n  position: relative;\n  padding: 50px 20px 20px;\n\n  @media (min-width: 768px) {\n    height: 100%;\n  }\n\n  @media (min-width: 769px) {\n    padding: 20px;\n  }\n\n  @media (min-width: 1200px) {\n    flex-wrap: nowrap;\n    ", "\n    padding-bottom: 0;\n  }\n"])), function (props) {
  return !props.useKioskApp && (0, _styledComponents.css)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      max-height: 70vh;\n    "])));
});
var TitleWrapper = exports.TitleWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-top: 20px;\n .favorite {\n  cursor: pointer;\n    svg {\n      color: ", ";\n      display: flex;\n      font-size: 20px;\n    }\n  }\n"])), function (props) {
  return props.theme.colors.danger500;
});
var WrapperImage = exports.WrapperImage = _styledComponents.default.div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin-left: -20px;\n  margin-top: 20px;\n  width: calc(100% + 40px);\n  position: relative;\n"])));
var SwiperWrapper = exports.SwiperWrapper = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n\n  img{\n    ", "\n  }\n  .mySwiper2 {\n    height: 250px;\n    width: 100%;\n    ", "\n    .swiper-slide-active {\n      border-radius: 0px;\n      img {\n        border-radius: 0px;\n      }\n    }\n\n    @media (min-width: 480px){\n      ", "\n    }\n\n    @media (min-width: 576px) {\n      height: 320px;\n      ", "\n    }\n      ", "\n  }\n  \n\n  .swiper {\n    width: 100%;\n    height: 500px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .swiper-slide {\n    background-size: cover;\n    background-position: center;\n    .active-img {\n      ", "\n    }\n  }\n\n  .product-thumb {\n    box-sizing: border-box;\n    padding: 30px 0px;\n    margin: 0px 20px;\n\n    .swiper-slide {\n      display: flex;\n      opacity: 0.8;\n      border-radius: 7.6px;\n      height: auto;\n      cursor: pointer;\n      overflow: hidden;\n\n      img {\n        border-radius: 7.6px;\n        max-height: 70px;\n        ", "\n      }\n    }\n\n    .swiper-slide-thumb-active {\n      opacity: 1;\n    }\n  }\n\n  .swiper-slide img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    ", "\n  }\n\n  .active-img {\n    ", "\n  }\n\n  .swiper-button-next {\n    background-image: url(", ");\n    background-color: #d1d0d04d;\n    background-repeat: no-repeat;\n    background-position: 55% center;\n    width: 32px;\n    height: 32px;\n    box-shadow: rgb(0 0 0 / 7%) 0px 4px 10px;\n    border-radius: 50%;\n    transition: all 0.2s ease;\n\n    &:hover {\n      transform: scale(1.05);\n    }\n  }\n\n  .swiper-button-prev {\n    background-image: url(", ");\n    background-color: #d1d0d04d;\n    background-repeat: no-repeat;\n    background-position: 45% center;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    box-shadow: rgb(0 0 0 / 7%) 0px 4px 10px;\n    transition: all 0.2s ease;\n\n    &:hover {\n      transform: scale(1.05);\n    }\n  }\n\n  .swiper-button-next::after, .swiper-button-prev::after {\n    display: none;\n  }\n"])), function (props) {
  return props.isSoldOut && (0, _styledComponents.css)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n        filter: grayscale(1);\n    "])));
}, function (_ref) {
  var _theme$business_view;
  var theme = _ref.theme;
  return (theme === null || theme === void 0 || (_theme$business_view = theme.business_view) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.products) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.components) === null || _theme$business_view === void 0 || (_theme$business_view = _theme$business_view.layout) === null || _theme$business_view === void 0 ? void 0 : _theme$business_view.type) === 'starbucks' && (0, _styledComponents.css)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      height: 290px;\n    "])));
}, function (_ref2) {
  var _theme$business_view2;
  var theme = _ref2.theme;
  return (theme === null || theme === void 0 || (_theme$business_view2 = theme.business_view) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.components) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.products) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.components) === null || _theme$business_view2 === void 0 || (_theme$business_view2 = _theme$business_view2.layout) === null || _theme$business_view2 === void 0 ? void 0 : _theme$business_view2.type) === 'starbucks' && (0, _styledComponents.css)(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n        height: 340px;\n      "])));
}, function (_ref3) {
  var _theme$business_view3;
  var theme = _ref3.theme;
  return (theme === null || theme === void 0 || (_theme$business_view3 = theme.business_view) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.components) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.products) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.components) === null || _theme$business_view3 === void 0 || (_theme$business_view3 = _theme$business_view3.layout) === null || _theme$business_view3 === void 0 ? void 0 : _theme$business_view3.type) === 'starbucks' && (0, _styledComponents.css)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n        height: 60vw;\n      "])));
}, function (_ref4) {
  var _theme$business_view4;
  var theme = _ref4.theme;
  return (theme === null || theme === void 0 || (_theme$business_view4 = theme.business_view) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.components) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.products) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.components) === null || _theme$business_view4 === void 0 || (_theme$business_view4 = _theme$business_view4.layout) === null || _theme$business_view4 === void 0 ? void 0 : _theme$business_view4.type) === 'starbucks' && (0, _styledComponents.css)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n      @media (min-width: 768px) {\n        height: 40vw;\n      }\n      @media (min-width: 993px) {\n        height: 30vw;\n      }\n      @media (min-width: 1024px){\n        height: 350px !important;\n      }\n      @media (min-width: 1200px) {\n        height: 300px !important;\n        width: 300px !important;\n      }\n    "])));
}, function (_ref5) {
  var _theme$business_view5;
  var theme = _ref5.theme;
  return (theme === null || theme === void 0 || (_theme$business_view5 = theme.business_view) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.components) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.products) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.components) === null || _theme$business_view5 === void 0 || (_theme$business_view5 = _theme$business_view5.layout) === null || _theme$business_view5 === void 0 ? void 0 : _theme$business_view5.type) === 'starbucks' && (0, _styledComponents.css)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n      "])));
}, function (_ref6) {
  var _theme$business_view6;
  var theme = _ref6.theme;
  return (theme === null || theme === void 0 || (_theme$business_view6 = theme.business_view) === null || _theme$business_view6 === void 0 || (_theme$business_view6 = _theme$business_view6.components) === null || _theme$business_view6 === void 0 || (_theme$business_view6 = _theme$business_view6.products) === null || _theme$business_view6 === void 0 || (_theme$business_view6 = _theme$business_view6.components) === null || _theme$business_view6 === void 0 || (_theme$business_view6 = _theme$business_view6.layout) === null || _theme$business_view6 === void 0 ? void 0 : _theme$business_view6.type) === 'starbucks' && (0, _styledComponents.css)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n          max-width: 80px;\n          max-height: 80px;\n        "])));
}, function (_ref7) {
  var _theme$business_view7;
  var theme = _ref7.theme;
  return (theme === null || theme === void 0 || (_theme$business_view7 = theme.business_view) === null || _theme$business_view7 === void 0 || (_theme$business_view7 = _theme$business_view7.components) === null || _theme$business_view7 === void 0 || (_theme$business_view7 = _theme$business_view7.products) === null || _theme$business_view7 === void 0 || (_theme$business_view7 = _theme$business_view7.components) === null || _theme$business_view7 === void 0 || (_theme$business_view7 = _theme$business_view7.layout) === null || _theme$business_view7 === void 0 ? void 0 : _theme$business_view7.type) === 'starbucks' && (0, _styledComponents.css)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n      border-radius: 50% !important;\n    "])));
}, function (_ref8) {
  var _theme$business_view8;
  var theme = _ref8.theme;
  return (theme === null || theme === void 0 || (_theme$business_view8 = theme.business_view) === null || _theme$business_view8 === void 0 || (_theme$business_view8 = _theme$business_view8.components) === null || _theme$business_view8 === void 0 || (_theme$business_view8 = _theme$business_view8.products) === null || _theme$business_view8 === void 0 || (_theme$business_view8 = _theme$business_view8.components) === null || _theme$business_view8 === void 0 || (_theme$business_view8 = _theme$business_view8.layout) === null || _theme$business_view8 === void 0 ? void 0 : _theme$business_view8.type) === 'starbucks' && (0, _styledComponents.css)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n      height: 60vw !important;\n      width: 60vw !important;\n      margin: 0 auto;\n      @media (min-width: 768px) {\n        height: 40vw !important;\n        width: 40vw !important;\n      }\n      @media (min-width: 993px) {\n        height: 30vw !important;\n        width: 30vw !important;\n      }\n      @media (min-width: 1024px) {\n        height: 350px !important;\n        width: 350px !important;\n      }\n      @media (min-width: 1200px) {\n        height: 300px !important;\n        width: 300px !important;\n      }\n    "])));
}, function (props) {
  return props.theme.images.general.rightArrow;
}, function (props) {
  return props.theme.images.general.leftArrow;
});
var ProductInfo = exports.ProductInfo = _styledComponents.default.div(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0px;\n  /* position: relative; */\n"])));
var ProductFormTitle = exports.ProductFormTitle = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  overflow-wrap: break-word;\n\n  .price-discount {\n    text-decoration: line-through;\n  }\n"])));
var ProductEdition = exports.ProductEdition = _styledComponents.default.div(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n"])));
var SectionTitle = exports.SectionTitle = _styledComponents.default.h3(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  padding: 7px 0px;\n  margin-bottom: 0px;\n  margin-top: 15px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.headingColor;
});
var ProductComment = exports.ProductComment = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 130px;\n\n  textarea {\n    margin-top: 8px;\n  }\n\n  p {\n    font-weight: 300;\n    margin-bottom: 5px;\n  }\n\n  @media (min-width: 577px) {\n    margin-bottom: 62px;\n  }\n\n  @media (min-width: 769px) {\n    margin-bottom: 0px;\n    padding-bottom: 10px;\n  }\n"])));
var ProductActions = exports.ProductActions = _styledComponents.default.div(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 0px;\n  width: 100%;\n  z-index: 9999997;\n\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  background-color: ", ";\n\n  div.price {\n    padding-top: 10px;\n    color: ", ";\n    h4 {\n      margin: 0;\n      font-weight: 600;\n      font-size: 20px;\n      line-height: 20px;\n    }\n    span {\n      font-size: 13px;\n      color: #D83520;\n      line-height: 15px;\n    }\n  }\n\n  div.incdec-control {\n    width: 130px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    position: relative;\n\n    svg {\n      width: 25px;\n      height: 25px;\n      cursor: pointer;\n    }\n\n    @media (min-width: 577px) {\n      width: 195px;\n    }\n  }\n\n  div.price-amount-block {\n    display: flex;\n    justify-content: space-between;\n    width: 80%\n  }\n\n  svg {\n    color: ", ";\n  }\n\n  svg.disabled {\n    pointer-events: none;\n    color: #CED4DA;\n  }\n\n  button:disabled,\n  button.disabled {\n    background: #E9ECEF;\n    border: 1px solid #E9ECEF;\n    color: #B1BCCC;\n  }\n\n  button.add {\n    width: 90%;\n    padding: 5px 10px;\n    margin-top: 10px;\n    position: relative;\n\n    &.soldout {\n      width: 100%;\n      pointer-events: none;\n    }\n  }\n  .qty {\n    flex: 1;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    height: 38px;\n    min-width: 60px;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0 10px;\n  }\n\n  #address_control {\n    button.add {\n      width: calc(100% - 20px) !important;\n      margin: 10px 10px 0 10px;\n    }\n  }\n  \n  div#address_list {\n    padding: 0;\n  }\n\n  @media (min-width: 577px) {\n    position: sticky;\n  }\n\n  @media (min-width: 1200px) {\n    bottom: 0px;\n    flex-direction: row;\n    justify-content: space-between;\n    border-top: 1px solid #E9ECEF;\n    width: calc(100% + 40px);\n    transform: translateX(-20px);\n    padding: 10px 20px;\n    box-sizing: border-box;\n\n    ", "\n\n    div.price {\n      width: 25%;\n    }\n\n    button.add {\n      width: 35%;\n      margin-top: 0;\n    }\n\n    div.incdec-control {\n      margin-right: 18%;\n      &.show-weight-unit{\n        width: 40%;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme;
  return (_props$theme = props.theme) === null || _props$theme === void 0 || (_props$theme = _props$theme.colors) === null || _props$theme === void 0 ? void 0 : _props$theme.backgroundPage;
}, function (props) {
  var _props$theme2;
  return (_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.colors.darkTextColor;
}, function (props) {
  return props.theme.colors.primary;
}, function (_ref9) {
  var isColumn = _ref9.isColumn;
  return isColumn && (0, _styledComponents.css)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n      flex-direction: column;\n      div.price-amount-block {\n        margin-bottom: 15px;\n      }\n    "])));
});
var SkeletonBlock = exports.SkeletonBlock = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin: auto;\n\n  span {\n    margin-bottom: 10px;\n  }\n"])), function (_ref10) {
  var width = _ref10.width;
  return width && "".concat(width, "%");
});
var WrapperSubOption = exports.WrapperSubOption = _styledComponents.default.div(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  border-radius: 10px;\n\n  &.soldout {\n    pointer-events: none;\n    background-color: hsl(0, 0%, 72%);\n  }\n"])));
var SkuContent = exports.SkuContent = _styledComponents.default.div(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var WrapperIngredients = exports.WrapperIngredients = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref11) {
  var isProductSoldout = _ref11.isProductSoldout;
  return isProductSoldout && (0, _styledComponents.css)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n    border-radius: 10px;\n    pointer-events: none;\n    background: hsl(0, 0%, 72%);\n  "])));
});
var ProductTabContainer = exports.ProductTabContainer = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #E9ECEF;\n  position: sticky;\n  top: 0px;\n  background: white;\n  z-index: 9999996;\n  overflow: scroll hidden;\n  width: 100%;\n  ::-webkit-scrollbar {\n    height: 0px;\n  }\n\n  #optionList {\n    > div {\n      white-space: nowrap;\n      max-width: 200px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      padding: 10px 0px;\n      margin-right: 25px;\n      ", "\n    }\n  }\n"])), function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n        margin-right: 0px;\n        margin-left: 25px;\n      "])));
});
var Divider = exports.Divider = _styledComponents.default.div(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n  height: 8px;\n  width: calc(100% + 40px);\n  margin-left: -20px;\n  background: #F8F9FA;\n"])));
var ProductShareWrapper = exports.ProductShareWrapper = _styledComponents.default.div(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 20px;\n  ", "\n\n  > div {\n    > svg {\n      margin: 0px !important;\n    }\n  }\n\n  @media (max-width: 768px) {\n    > div {\n      right: 16px;\n      top: 25px;\n      left: auto;\n    }\n  }\n\n"])), function (props) {
  var _props$theme3;
  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n    padding-left: 20px;\n    padding-right: 0;\n  "])));
});
var ProductName = exports.ProductName = _styledComponents.default.h1(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n  font-size: 20px;\n  line-height: 30px;\n  color: #344050;\n  display: flex;\n  justify-content: space-between;\n  margin: 0;\n  .calories {\n    font-size: 16px;\n    font-weight: 100;\n    color: #909BA9;\n    white-space: nowrap;\n    display: flex;\n    align-items: flex-end;\n  }\n  @media (min-width: 768px) {\n    font-size: 22px;\n    line-height: 34px;\n  }\n"])));
var Properties = exports.Properties = _styledComponents.default.div(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 20px;\n"])));
var ProductDescription = exports.ProductDescription = _styledComponents.default.p(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n  margin-top: 0px;\n  white-space: pre-wrap;\n  color: #909BA9;\n"])));
var PriceContent = exports.PriceContent = _styledComponents.default.div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  > p {\n    font-size: 18px;\n    line-height: 27px;\n    color: #344050;\n    margin: 0;\n  }\n  .offer-price {\n    text-decoration: line-through;\n    font-size: 16px;\n    color: #909BA9;\n  }\n"])));
var ProductMeta = exports.ProductMeta = _styledComponents.default.div(_templateObject36 || (_templateObject36 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  span {\n    font-size: 16px;\n    line-height: 24px;\n    color: #909BA9;\n  }\n"])));
var EstimatedPersons = exports.EstimatedPersons = _styledComponents.default.div(_templateObject37 || (_templateObject37 = _taggedTemplateLiteral(["\n  display: flex;\n"])));
var ProductTagsListContainer = exports.ProductTagsListContainer = _styledComponents.default.div(_templateObject38 || (_templateObject38 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n"])));
var ProductTagWrapper = exports.ProductTagWrapper = _styledComponents.default.div(_templateObject39 || (_templateObject39 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n\n  img {\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  }\n\n  span {\n    font-size: 14px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme4;
  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject40 || (_templateObject40 = _taggedTemplateLiteral(["\n      margin: 0 10px 0 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject41 || (_templateObject41 = _taggedTemplateLiteral(["\n      margin: 0 20px 0 10px;\n    "])));
});
var WeightUnitSwitch = exports.WeightUnitSwitch = _styledComponents.default.div(_templateObject42 || (_templateObject42 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: auto;\n  margin-left: 10px;\n  \n  ", "\n"])), function (props) {
  var _props$theme5;
  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject43 || (_templateObject43 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0;\n "])));
});
var WeightUnitItem = exports.WeightUnitItem = _styledComponents.default.span(_templateObject44 || (_templateObject44 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  width: fit-content;\n  min-width: unset !important;\n  font-size: 12px;\n  line-height: 18px;\n  padding: 2px 6px;\n  cursor: pointer;\n  \n  ", "\n"])), function (_ref12) {
  var active = _ref12.active;
  return active && (0, _styledComponents.css)(_templateObject45 || (_templateObject45 = _taggedTemplateLiteral(["\n    background-color: ", "15;\n    border-radius: 3px;\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
});
var VideoGalleryWrapper = exports.VideoGalleryWrapper = _styledComponents.default.div(_templateObject46 || (_templateObject46 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  svg {\n    position: absolute;\n    fill: #fff;\n    font-size: 28px;\n  }\n"])));
var GuestUserLink = exports.GuestUserLink = _styledComponents.default.div(_templateObject47 || (_templateObject47 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: ", ";\n  text-align: center;\n  cursor: pointer;\n  margin: 15px 0;\n  white-space: nowrap;\n  &:hover {\n    text-decoration: underline;\n  }\n  margin-left: 10px;\n  ", "\n"])), function (props) {
  return props.theme.colors.primary;
}, function (props) {
  return props.theme.rtl && (0, _styledComponents.css)(_templateObject48 || (_templateObject48 = _taggedTemplateLiteral(["\n    margin-left: 0;\n    margin-right: 10px;\n  "])));
});
var LoadingWrapper = exports.LoadingWrapper = _styledComponents.default.div(_templateObject49 || (_templateObject49 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"])));