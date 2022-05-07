"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperSubOption = exports.WrapperIngredients = exports.WrapperImage = exports.WeightUnitSwitch = exports.WeightUnitItem = exports.VideoGalleryWrapper = exports.SwiperWrapper = exports.SkuContent = exports.SkeletonBlock = exports.SectionTitle = exports.Properties = exports.ProductTagsListContainer = exports.ProductTagWrapper = exports.ProductTabContainer = exports.ProductShareWrapper = exports.ProductName = exports.ProductMeta = exports.ProductInfo = exports.ProductFormTitle = exports.ProductEdition = exports.ProductDescription = exports.ProductContainer = exports.ProductComment = exports.ProductActions = exports.PriceContent = exports.EstimatedPersons = exports.Divider = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14, _templateObject15, _templateObject16, _templateObject17, _templateObject18, _templateObject19, _templateObject20, _templateObject21, _templateObject22, _templateObject23, _templateObject24, _templateObject25, _templateObject26, _templateObject27, _templateObject28, _templateObject29, _templateObject30, _templateObject31, _templateObject32, _templateObject33, _templateObject34, _templateObject35;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ProductContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  max-height: 100vh;\n  position: relative;\n  padding: 50px 20px 20px;\n\n  @media (min-width: 768px) {\n    height: 100%;\n  }\n\n  @media (min-width: 769px) {\n    padding: 20px;\n  }\n\n  @media (min-width: 1200px) {\n    flex-wrap: nowrap;\n    max-height: 70vh;\n    padding-bottom: 0;\n  }\n"])));

exports.ProductContainer = ProductContainer;

var WrapperImage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  margin-left: -20px;\n  margin-top: 20px;\n  width: calc(100% + 40px);\n  position: relative;\n"])));

exports.WrapperImage = WrapperImage;

var SwiperWrapper = _styledComponents.default.div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 100%;\n\n  img{\n    ", "\n  }\n  .mySwiper2 {\n    height: 250px;\n    width: 100%;\n\n    .swiper-slide-active {\n      border-radius: 0px;\n      img {\n        border-radius: 0px;\n      }\n    }\n\n    @media (min-width: 576px) {\n      height: 320px;\n    }\n  }\n\n\n  .swiper {\n    width: 100%;\n    height: 500px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .swiper-slide {\n    background-size: cover;\n    background-position: center;\n  }\n\n  .product-thumb {\n    box-sizing: border-box;\n    padding: 30px 0px;\n    margin: 0px 20px;\n\n    .swiper-slide {\n      display: flex;\n      opacity: 0.8;\n      border-radius: 7.6px;\n      height: auto;\n      cursor: pointer;\n      overflow: hidden;\n\n      img {\n        border-radius: 7.6px;\n        max-height: 70px;\n      }\n    }\n\n    .swiper-slide-thumb-active {\n      opacity: 1;\n    }\n  }\n\n  .swiper-slide img {\n    display: block;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .swiper-button-next {\n    background-image: url(", ");\n    background-color: #d1d0d04d;\n    background-repeat: no-repeat;\n    background-position: 55% center;\n    width: 32px;\n    height: 32px;\n    box-shadow: rgb(0 0 0 / 7%) 0px 4px 10px;\n    border-radius: 50%;\n    transition: all 0.2s ease;\n\n    &:hover {\n      transform: scale(1.05);\n    }\n  }\n\n  .swiper-button-prev {\n    background-image: url(", ");\n    background-color: #d1d0d04d;\n    background-repeat: no-repeat;\n    background-position: 45% center;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    box-shadow: rgb(0 0 0 / 7%) 0px 4px 10px;\n    transition: all 0.2s ease;\n\n    &:hover {\n      transform: scale(1.05);\n    }\n  }\n\n  .swiper-button-next::after, .swiper-button-prev::after {\n    display: none;\n  }\n"])), function (props) {
  return props.isSoldOut && (0, _styledComponents.css)(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n        filter: grayscale(1);\n    "])));
}, function (props) {
  return props.theme.images.general.rightArrow;
}, function (props) {
  return props.theme.images.general.leftArrow;
});

exports.SwiperWrapper = SwiperWrapper;

var ProductInfo = _styledComponents.default.div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  padding: 0px;\n  /* position: relative; */\n"])));

exports.ProductInfo = ProductInfo;

var ProductFormTitle = _styledComponents.default.div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  overflow-wrap: break-word;\n\n  .price-discount {\n    text-decoration: line-through;\n  }\n"])));

exports.ProductFormTitle = ProductFormTitle;

var ProductEdition = _styledComponents.default.div(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  margin-top: 20px;\n"])));

exports.ProductEdition = ProductEdition;

var SectionTitle = _styledComponents.default.h3(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  padding: 7px 0px;\n  margin-bottom: 0px;\n  margin-top: 15px;\n  color: ", ";\n"])), function (props) {
  return props.theme.colors.headingColor;
});

exports.SectionTitle = SectionTitle;

var ProductComment = _styledComponents.default.div(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 130px;\n\n  textarea {\n    margin-top: 8px;\n  }\n\n  p {\n    font-weight: 300;\n    margin-bottom: 5px;\n  }\n\n  @media (min-width: 577px) {\n    margin-bottom: 62px;\n  }\n\n  @media (min-width: 769px) {\n    margin-bottom: 0px;\n    padding-bottom: 10px;\n  }\n"])));

exports.ProductComment = ProductComment;

var ProductActions = _styledComponents.default.div(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 0px;\n  width: 100%;\n  z-index: 999;\n\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  background-color: #FFF;\n\n  div.price {\n    padding-top: 10px;\n    color: ", ";\n    h4 {\n      margin: 0;\n      font-weight: 600;\n      font-size: 20px;\n      line-height: 20px;\n    }\n    span {\n      font-size: 13px;\n      color: #D83520;\n      line-height: 15px;\n    }\n  }\n\n  div.incdec-control {\n    width: 135px;\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n    position: relative;\n\n    svg {\n      width: 25px;\n      height: 25px;\n      cursor: pointer;\n    }\n  }\n\n  div.price-amount-block {\n    display: flex;\n    justify-content: space-between;\n    width: 80%\n  }\n  /* div:last-child {\n    width: 100%;\n    display: flex;\n    align-items: center;\n  } */\n\n  svg {\n    color: ", ";\n  }\n\n  svg.disabled {\n    pointer-events: none;\n    color: #CED4DA;\n  }\n\n  button:disabled,\n  button.disabled {\n    background: #E9ECEF;\n    border: 1px solid #E9ECEF;\n    color: #B1BCCC;\n  }\n\n  button.add {\n    width: 90%;\n    padding: 5px 10px;\n    margin-top: 10px;\n    position: relative;\n\n    &.soldout {\n      width: 100%;\n      pointer-events: none;\n    }\n  }\n  .qty {\n    flex: 1;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    height: 38px;\n    min-width: 60px;\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0 10px;\n  }\n\n  @media (min-width: 577px) {\n    position: sticky;\n  }\n\n  @media (min-width: 1200px) {\n    bottom: 0px;\n    flex-direction: row;\n    justify-content: space-between;\n    border-top: 1px solid #E9ECEF;\n    width: calc(100% + 40px);\n    transform: translateX(-20px);\n    padding: 10px 20px;\n    box-sizing: border-box;\n\n    div.price {\n      width: 25%;\n    }\n\n    button.add {\n      width: 35%;\n      margin-top: 0;\n    }\n\n    div.incdec-control {\n      padding-right: 18%;\n      &.show-weight-unit{\n        width: 30%;\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme;

  return (_props$theme = props.theme) === null || _props$theme === void 0 ? void 0 : _props$theme.colors.darkTextColor;
}, function (props) {
  return props.theme.colors.primary;
});

exports.ProductActions = ProductActions;

var SkeletonBlock = _styledComponents.default.div(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  width: ", ";\n  border-radius: 16px;\n  margin: auto;\n\n  span {\n    margin-bottom: 10px;\n  }\n"])), function (_ref) {
  var width = _ref.width;
  return width && "".concat(width, "%");
});

exports.SkeletonBlock = SkeletonBlock;

var WrapperSubOption = _styledComponents.default.div(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  border-radius: 10px;\n\n  &.soldout {\n    pointer-events: none;\n    background-color: hsl(0, 0%, 72%);\n  }\n"])));

exports.WrapperSubOption = WrapperSubOption;

var SkuContent = _styledComponents.default.div(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  display: flex;\n"])));

exports.SkuContent = SkuContent;

var WrapperIngredients = _styledComponents.default.div(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  ", "\n"])), function (_ref2) {
  var isProductSoldout = _ref2.isProductSoldout;
  return isProductSoldout && (0, _styledComponents.css)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n    border-radius: 10px;\n    pointer-events: none;\n    background: hsl(0, 0%, 72%);\n  "])));
});

exports.WrapperIngredients = WrapperIngredients;

var ProductTabContainer = _styledComponents.default.div(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #E9ECEF;\n  position: sticky;\n  top: 0px;\n  background: white;\n  z-index: 900;\n\n  > div {\n    div {\n      padding: 9px 15px;\n      &:first-child {\n        padding-left: 0px;\n        ", "\n      }\n    }\n  }\n"])), function (props) {
  var _props$theme2;

  return ((_props$theme2 = props.theme) === null || _props$theme2 === void 0 ? void 0 : _props$theme2.rtl) && (0, _styledComponents.css)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n          padding-right: 0px;\n          padding-left: 15px;\n        "])));
});

exports.ProductTabContainer = ProductTabContainer;

var Divider = _styledComponents.default.div(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  height: 8px;\n  width: calc(100% + 40px);\n  margin-left: -20px;\n  background: #F8F9FA;\n"])));

exports.Divider = Divider;

var ProductShareWrapper = _styledComponents.default.div(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 20px;\n  ", "\n\n  > div {\n    > svg {\n      margin: 0px !important;\n    }\n  }\n\n  @media (max-width: 768px) {\n    > div {\n      right: 16px;\n      top: 25px;\n      left: auto;\n    }\n  }\n\n"])), function (props) {
  var _props$theme3;

  return ((_props$theme3 = props.theme) === null || _props$theme3 === void 0 ? void 0 : _props$theme3.rtl) && (0, _styledComponents.css)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    padding-left: 20px;\n    padding-right: 0;\n  "])));
});

exports.ProductShareWrapper = ProductShareWrapper;

var ProductName = _styledComponents.default.h1(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  font-size: 20px;\n  line-height: 30px;\n  color: #344050;\n  margin-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n  .calories {\n    font-size: 16px;\n    font-weight: 100;\n    color: #909BA9;\n    white-space: nowrap;\n    display: flex;\n    align-items: flex-end;\n  } \n  @media (min-width: 768px) {\n    font-size: 22px;\n    line-height: 34px;\n  }\n"])));

exports.ProductName = ProductName;

var Properties = _styledComponents.default.div(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n"])));

exports.Properties = Properties;

var ProductDescription = _styledComponents.default.p(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  margin-top: 0px;\n  white-space: pre-wrap;\n"])));

exports.ProductDescription = ProductDescription;

var PriceContent = _styledComponents.default.p(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  font-size: 18px;\n  line-height: 27px;\n  color: #344050;\n  margin: 0;\n  margin-bottom: 10px;\n  .offer-price {\n    text-decoration: line-through;\n    font-size: 16px;\n    color: #909BA9;\n  }\n"])));

exports.PriceContent = PriceContent;

var ProductMeta = _styledComponents.default.div(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  span {\n    font-size: 16px;\n    line-height: 24px;\n    color: #909BA9;\n    margin-bottom: 10px;\n  }\n"])));

exports.ProductMeta = ProductMeta;

var EstimatedPersons = _styledComponents.default.div(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  display: flex;\n"])));

exports.EstimatedPersons = EstimatedPersons;

var ProductTagsListContainer = _styledComponents.default.div(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n"])));

exports.ProductTagsListContainer = ProductTagsListContainer;

var ProductTagWrapper = _styledComponents.default.div(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin: 5px 0;\n\n  img {\n    width: 32px;\n    height: 32px;\n    border-radius: 8px;\n    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);\n  }\n\n  span {\n    font-size: 14px;\n    ", "\n  }\n"])), function (props) {
  var _props$theme4;

  return (_props$theme4 = props.theme) !== null && _props$theme4 !== void 0 && _props$theme4.rtl ? (0, _styledComponents.css)(_templateObject29 || (_templateObject29 = _taggedTemplateLiteral(["\n      margin: 0 10px 0 20px;\n    "]))) : (0, _styledComponents.css)(_templateObject30 || (_templateObject30 = _taggedTemplateLiteral(["\n      margin: 0 20px 0 10px;\n    "])));
});

exports.ProductTagWrapper = ProductTagWrapper;

var WeightUnitSwitch = _styledComponents.default.div(_templateObject31 || (_templateObject31 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: auto;\n  margin-left: 10px;\n  \n  ", "\n"])), function (props) {
  var _props$theme5;

  return ((_props$theme5 = props.theme) === null || _props$theme5 === void 0 ? void 0 : _props$theme5.rtl) && (0, _styledComponents.css)(_templateObject32 || (_templateObject32 = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-left: 0;\n "])));
});

exports.WeightUnitSwitch = WeightUnitSwitch;

var WeightUnitItem = _styledComponents.default.span(_templateObject33 || (_templateObject33 = _taggedTemplateLiteral(["\n  display: inline-flex;\n  width: fit-content;\n  min-width: unset !important;\n  font-size: 12px;\n  line-height: 18px;\n  padding: 2px 6px;\n  cursor: pointer;\n  \n  ", "\n"])), function (_ref3) {
  var active = _ref3.active;
  return active && (0, _styledComponents.css)(_templateObject34 || (_templateObject34 = _taggedTemplateLiteral(["\n    background-color: ", "15;\n    border-radius: 3px;\n    color: ", ";\n  "])), function (props) {
    return props.theme.colors.primary;
  }, function (props) {
    return props.theme.colors.primary;
  });
});

exports.WeightUnitItem = WeightUnitItem;

var VideoGalleryWrapper = _styledComponents.default.div(_templateObject35 || (_templateObject35 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n\n  svg {\n    position: absolute;\n    fill: #fff;\n    font-size: 28px;\n  }\n"])));

exports.VideoGalleryWrapper = VideoGalleryWrapper;