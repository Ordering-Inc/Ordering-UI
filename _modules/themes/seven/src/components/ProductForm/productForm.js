"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductForm = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _orderingComponents = require("ordering-components");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ProductForm = function ProductForm(props) {
  var _props$productCart, _orderState$carts, _cart$products, _cart$products2, _product$product, _product$product2, _product$product3, _product$product4;

  var UIComponent = props.UIComponent,
      useOrderContext = props.useOrderContext,
      onSave = props.onSave,
      handleCustomSave = props.handleCustomSave,
      isStarbucks = props.isStarbucks;
  var requestsState = {};

  var _useApi = (0, _orderingComponents.useApi)(),
      _useApi2 = _slicedToArray(_useApi, 1),
      ordering = _useApi2[0];
  /**
   * Original product state
   */


  var _useState = (0, _react.useState)({
    product: props.product,
    loading: false,
    error: null
  }),
      _useState2 = _slicedToArray(_useState, 2),
      product = _useState2[0],
      setProduct = _useState2[1];
  /**
   * Product cart state
   */


  var _useState3 = (0, _react.useState)({
    ingredients: {},
    options: {}
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      productCart = _useState4[0],
      setProductCart = _useState4[1];
  /**
   * Errors state
   */


  var _useState5 = (0, _react.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      errors = _useState6[0],
      setErrors = _useState6[1];
  /**
   * Suboption by default when there is only one
   */


  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      defaultSubOptions = _useState8[0],
      setDefaultSubOptions = _useState8[1];
  /**
   * Custom Suboption by default
   */


  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      customDefaultSubOptions = _useState10[0],
      setCustomDefaultSubOptions = _useState10[1];
  /**
   * Edit mode
   */


  var editMode = typeof ((_props$productCart = props.productCart) === null || _props$productCart === void 0 ? void 0 : _props$productCart.code) !== 'undefined';
  /**
   * Order context manager
   */

  var _useOrder = (0, _orderingComponents.useOrder)(),
      _useOrder2 = _slicedToArray(_useOrder, 2),
      orderState = _useOrder2[0],
      _useOrder2$ = _useOrder2[1],
      addProduct = _useOrder2$.addProduct,
      updateProduct = _useOrder2$.updateProduct;
  /**
   * Remove to balances in edit mode
   */


  var removeToBalance = editMode ? props.productCart.quantity : 0;
  /**
   * Current cart
   */

  var cart = (_orderState$carts = orderState.carts) === null || _orderState$carts === void 0 ? void 0 : _orderState$carts["businessId:".concat(props.businessId)];
  /**
   * Product in cart
   */

  var productInCart = product.product && (cart === null || cart === void 0 ? void 0 : (_cart$products = cart.products) === null || _cart$products === void 0 ? void 0 : _cart$products.find(function (prod) {
    return prod.id === product.product.id;
  }));
  /**
   * Total product in cart
   */

  var totalBalance = ((productInCart === null || productInCart === void 0 ? void 0 : productInCart.quantity) || 0) - removeToBalance;
  /**
   * Total the current product in cart
   */

  var productBalance = ((cart === null || cart === void 0 ? void 0 : (_cart$products2 = cart.products) === null || _cart$products2 === void 0 ? void 0 : _cart$products2.reduce(function (sum, _product) {
    return sum + (product.product && _product.id === product.product.id ? _product.quantity : 0);
  }, 0)) || 0) - removeToBalance;
  /**
   * Config context manager
   */

  var _useConfig = (0, _orderingComponents.useConfig)(),
      _useConfig2 = _slicedToArray(_useConfig, 1),
      stateConfig = _useConfig2[0];
  /**
   * Max total product in cart by config
   */


  var maxCartProductConfig = (stateConfig.configs.max_product_amount ? parseInt(stateConfig.configs.max_product_amount) : 100) - totalBalance;
  /**
   * Max total product in cart by config
   */

  var maxCartProductInventory = ((_product$product = product.product) !== null && _product$product !== void 0 && _product$product.inventoried ? (_product$product2 = product.product) === null || _product$product2 === void 0 ? void 0 : _product$product2.quantity : undefined) - productBalance;
  /**
   * True if product is sold out
   */

  var isSoldOut = ((_product$product3 = product.product) === null || _product$product3 === void 0 ? void 0 : _product$product3.inventoried) && ((_product$product4 = product.product) === null || _product$product4 === void 0 ? void 0 : _product$product4.quantity) === 0;
  /**
   * Fix if maxCartProductInventory is not valid
   */

  maxCartProductInventory = !isNaN(maxCartProductInventory) ? maxCartProductInventory : maxCartProductConfig;
  /**
   * Max product quantity
   */

  var maxProductQuantity = Math.min(maxCartProductConfig, maxCartProductInventory);
  /**
   * Init product cart status
   * @param {object} product Product to init product cart status
   */

  var initProductCart = function initProductCart(product) {
    var _props$productCart2, _props$productCart3, _props$productCart4, _props$productCart5;

    var ingredients = {};

    for (var key in product.ingredients) {
      var ingredient = product.ingredients[key];
      ingredients["id:".concat(ingredient.id)] = {
        selected: true
      };
    }

    var defaultProductQuantity = product === null || product === void 0 ? void 0 : product.quantity;

    var newProductCart = _objectSpread(_objectSpread({}, props.productCart), {}, {
      id: product.id,
      price: product.price,
      name: product.name,
      businessId: props.businessId,
      categoryId: product.category_id,
      inventoried: product.inventoried,
      stock: product.quantity,
      ingredients: ((_props$productCart2 = props.productCart) === null || _props$productCart2 === void 0 ? void 0 : _props$productCart2.ingredients) || ingredients,
      options: ((_props$productCart3 = props.productCart) === null || _props$productCart3 === void 0 ? void 0 : _props$productCart3.options) || {},
      comment: ((_props$productCart4 = props.productCart) === null || _props$productCart4 === void 0 ? void 0 : _props$productCart4.comment) || null,
      quantity: defaultProductQuantity || ((_props$productCart5 = props.productCart) === null || _props$productCart5 === void 0 ? void 0 : _props$productCart5.quantity) || 1
    });

    newProductCart.unitTotal = getUnitTotal(newProductCart);
    newProductCart.total = newProductCart.unitTotal * newProductCart.quantity;
    setProductCart(newProductCart);
  };
  /**
   * Get unit total for product cart
   * @param {object} productCart Current product status
   */


  var getUnitTotal = function getUnitTotal(productCart) {
    var _product$product7;

    var subtotal = 0;

    for (var i = 0; i < ((_product$product5 = product.product) === null || _product$product5 === void 0 ? void 0 : (_product$product5$ext = _product$product5.extras) === null || _product$product5$ext === void 0 ? void 0 : _product$product5$ext.length); i++) {
      var _product$product5, _product$product5$ext, _product$product6;

      var extra = (_product$product6 = product.product) === null || _product$product6 === void 0 ? void 0 : _product$product6.extras[i];

      for (var j = 0; j < ((_extra$options = extra.options) === null || _extra$options === void 0 ? void 0 : _extra$options.length); j++) {
        var _extra$options;

        var option = extra.options[j];

        for (var k = 0; k < ((_option$suboptions = option.suboptions) === null || _option$suboptions === void 0 ? void 0 : _option$suboptions.length); k++) {
          var _option$suboptions, _productCart$options$, _productCart$options$2;

          var suboption = option.suboptions[k];

          if ((_productCart$options$ = productCart.options["id:".concat(option.id)]) !== null && _productCart$options$ !== void 0 && (_productCart$options$2 = _productCart$options$.suboptions["id:".concat(suboption.id)]) !== null && _productCart$options$2 !== void 0 && _productCart$options$2.selected) {
            var suboptionState = productCart.options["id:".concat(option.id)].suboptions["id:".concat(suboption.id)];
            var quantity = option.allow_suboption_quantity ? suboptionState.quantity : 1;
            var price = option.with_half_option && suboption.half_price && suboptionState.position !== 'whole' ? suboption.half_price : suboption.price;
            subtotal += price * quantity;
          }
        }
      }
    }

    return ((_product$product7 = product.product) === null || _product$product7 === void 0 ? void 0 : _product$product7.price) + subtotal;
  };
  /**
   * Load product from API
   */


  var loadProductWithOptions = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var source, _yield$ordering$busin, result;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setProduct(_objectSpread(_objectSpread({}, product), {}, {
                loading: true
              }));
              source = {};
              requestsState.product = source;
              _context.next = 6;
              return ordering.businesses(props.businessId).categories(props.categoryId).products(props.productId).get({
                cancelToken: source
              });

            case 6:
              _yield$ordering$busin = _context.sent;
              result = _yield$ordering$busin.content.result;
              setProduct(_objectSpread(_objectSpread({}, product), {}, {
                loading: false,
                product: result
              }));
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](0);
              setProduct(_objectSpread(_objectSpread({}, product), {}, {
                loading: false,
                error: [_context.t0.message]
              }));

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 11]]);
    }));

    return function loadProductWithOptions() {
      return _ref.apply(this, arguments);
    };
  }();
  /**
   * Remove related option by respect_to
   * @param {object} cart Current cart
   * @param {number} suboptionId Suboption id
   */


  var removeRelatedOptions = function removeRelatedOptions(productCart, suboptionId) {
    product.product.extras.forEach(function (_extra) {
      _extra.options.forEach(function (_option) {
        if (_option.respect_to === suboptionId) {
          var _productCart$options$3;

          var suboptions = (_productCart$options$3 = productCart.options["id:".concat(_option.id)]) === null || _productCart$options$3 === void 0 ? void 0 : _productCart$options$3.suboptions;

          if (suboptions) {
            Object.keys(suboptions).map(function (suboptionKey) {
              return removeRelatedOptions(productCart, parseInt(suboptionKey.split(':')[1]));
            });
          }

          if (productCart.options["id:".concat(_option.id)]) {
            productCart.options["id:".concat(_option.id)].suboptions = {};
          }
        }
      });
    });
  };
  /**
   * Get changes for ingredients state
   * @param {object} state Current ingrediente state
   * @param {object} ingredient Current ingredient
   */


  var handleChangeIngredientState = function handleChangeIngredientState(state, ingredient) {
    productCart.ingredients["id:".concat(ingredient.id)] = state;
    setProductCart(_objectSpread(_objectSpread({}, productCart), {}, {
      ingredients: productCart.ingredients
    }));
  };
  /**
   * Change product state with new suboption state
   * @param {object} state New state with changes
   * @param {object} suboption Suboption object
   * @param {objecrt} option Option object
   * @param {object} product Product object
   */


  var handleChangeSuboptionState = function handleChangeSuboptionState(state, suboption, option) {
    var newProductCart = JSON.parse(JSON.stringify(productCart));

    if (!newProductCart.options) {
      newProductCart.options = {};
    }

    if (!newProductCart.options["id:".concat(option.id)]) {
      newProductCart.options["id:".concat(option.id)] = {
        id: option.id,
        name: option.name,
        suboptions: {}
      };
    }

    if (!state.selected) {
      delete newProductCart.options["id:".concat(option.id)].suboptions["id:".concat(suboption.id)];
      removeRelatedOptions(newProductCart, suboption.id);
    } else {
      if (option.min === option.max && option.min === 1) {
        var suboptions = newProductCart.options["id:".concat(option.id)].suboptions;

        if (suboptions) {
          Object.keys(suboptions).map(function (suboptionKey) {
            return removeRelatedOptions(newProductCart, parseInt(suboptionKey.split(':')[1]));
          });
        }

        if (newProductCart.options["id:".concat(option.id)]) {
          newProductCart.options["id:".concat(option.id)].suboptions = {};
        }
      }

      newProductCart.options["id:".concat(option.id)].suboptions["id:".concat(suboption.id)] = state;
    }

    var newBalance = Object.keys(newProductCart.options["id:".concat(option.id)].suboptions).length;

    if (option.limit_suboptions_by_max) {
      newBalance = Object.values(newProductCart.options["id:".concat(option.id)].suboptions).reduce(function (count, suboption) {
        return count + suboption.quantity;
      }, 0);
    }

    if (newBalance <= option.max) {
      newProductCart.options["id:".concat(option.id)].balance = newBalance;
      newProductCart.unitTotal = getUnitTotal(newProductCart);
      newProductCart.total = newProductCart.unitTotal * newProductCart.quantity;
      setProductCart(newProductCart);
    }
  };

  var handleChangeSuboptionDefault = function handleChangeSuboptionDefault(defaultOptions) {
    var newProductCart = JSON.parse(JSON.stringify(productCart));

    if (!newProductCart.options) {
      newProductCart.options = {};
    }

    defaultOptions.map(function (_ref2) {
      var option = _ref2.option,
          state = _ref2.state,
          suboption = _ref2.suboption;

      if (!newProductCart.options["id:".concat(option.id)]) {
        newProductCart.options["id:".concat(option.id)] = {
          id: option.id,
          name: option.name,
          suboptions: {}
        };
      }

      if (!state.selected) {
        delete newProductCart.options["id:".concat(option.id)].suboptions["id:".concat(suboption.id)];
        removeRelatedOptions(newProductCart, suboption.id);
      } else {
        if (option.min === option.max && option.min === 1) {
          var suboptions = newProductCart.options["id:".concat(option.id)].suboptions;

          if (suboptions) {
            Object.keys(suboptions).map(function (suboptionKey) {
              return removeRelatedOptions(newProductCart, parseInt(suboptionKey.split(':')[1]));
            });
          }

          if (newProductCart.options["id:".concat(option.id)]) {
            newProductCart.options["id:".concat(option.id)].suboptions = {};
          }
        }

        newProductCart.options["id:".concat(option.id)].suboptions["id:".concat(suboption.id)] = state;
      }

      var newBalance = Object.keys(newProductCart.options["id:".concat(option.id)].suboptions).length;

      if (option.limit_suboptions_by_max) {
        newBalance = Object.values(newProductCart.options["id:".concat(option.id)].suboptions).reduce(function (count, suboption) {
          return count + suboption.quantity;
        }, 0);
      }

      if (newBalance <= option.max) {
        newProductCart.options["id:".concat(option.id)].balance = newBalance;
        newProductCart.unitTotal = getUnitTotal(newProductCart);
        newProductCart.total = newProductCart.unitTotal * newProductCart.quantity;
      }
    });
    setProductCart(newProductCart);
  };
  /**
   * Change product state with new comment state
   * @param {object} e Product comment
   */


  var handleChangeCommentState = function handleChangeCommentState(e) {
    var comment = e.target.value;
    productCart.comment = comment;
    setProductCart(_objectSpread(_objectSpread({}, productCart), {}, {
      comment: productCart.comment
    }));
  };
  /**
   * Check options to get errors
   */


  var checkErrors = function checkErrors() {
    var errors = {};

    if (!product.product) {
      return errors;
    }

    product.product.extras.forEach(function (extra) {
      extra.options.map(function (option) {
        var _productCart$options$4;

        var suboptions = (_productCart$options$4 = productCart.options["id:".concat(option.id)]) === null || _productCart$options$4 === void 0 ? void 0 : _productCart$options$4.suboptions;
        var quantity = suboptions ? Object.keys(suboptions).length : 0;
        var evaluateRespectTo = false;

        if (option.respect_to && productCart.options) {
          var options = productCart.options;

          for (var key in options) {
            var _option$suboptions$;

            var _option = options[key];

            if ((_option$suboptions$ = _option.suboptions["id:".concat(option.respect_to)]) !== null && _option$suboptions$ !== void 0 && _option$suboptions$.selected) {
              evaluateRespectTo = true;
              break;
            }
          }
        }

        var evaluate = option.respect_to ? evaluateRespectTo : true;

        if (evaluate) {
          if (option.min > quantity) {
            errors["id:".concat(option.id)] = true;
          } else if (option.max < quantity) {
            errors["id:".concat(option.id)] = true;
          }
        }
      });
    });
    setErrors(errors);
    return errors;
  };
  /**
   * Handle when click on save product
   */


  var handleSave = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
      var errors, successful, _props$productCart6, _props$productCart7;

      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (handleCustomSave) {
                handleCustomSave && handleCustomSave();
              }

              errors = checkErrors();

              if (!(Object.keys(errors).length === 0)) {
                _context2.next = 16;
                break;
              }

              successful = true;

              if (!useOrderContext) {
                _context2.next = 15;
                break;
              }

              successful = false;

              if ((_props$productCart6 = props.productCart) !== null && _props$productCart6 !== void 0 && _props$productCart6.code) {
                _context2.next = 12;
                break;
              }

              _context2.next = 9;
              return addProduct(productCart, cart || {
                business_id: props.businessId
              });

            case 9:
              successful = _context2.sent;
              _context2.next = 15;
              break;

            case 12:
              _context2.next = 14;
              return updateProduct(productCart, cart || {
                business_id: props.businessId
              });

            case 14:
              successful = _context2.sent;

            case 15:
              if (successful) {
                onSave(productCart, !((_props$productCart7 = props.productCart) !== null && _props$productCart7 !== void 0 && _props$productCart7.code));
              }

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSave() {
      return _ref3.apply(this, arguments);
    };
  }();

  var increment = function increment() {
    if (maxProductQuantity <= 0 || productCart.quantity >= maxProductQuantity) {
      return;
    }

    productCart.quantity++;
    productCart.unitTotal = getUnitTotal(productCart);
    productCart.total = productCart.unitTotal * productCart.quantity;
    setProductCart(_objectSpread({}, productCart));
  };

  var decrement = function decrement() {
    if (productCart.quantity === 0) {
      return;
    }

    productCart.quantity--;
    productCart.unitTotal = getUnitTotal(productCart);
    productCart.total = productCart.unitTotal * productCart.quantity;
    setProductCart(_objectSpread({}, productCart));
  };
  /**
   * Check if option must show
   * @param {object} option Option to check
   */


  var showOption = function showOption(option) {
    var showOption = true;

    if (option.respect_to) {
      showOption = false;

      if (productCart.options) {
        var options = productCart.options;

        for (var key in options) {
          var _option$suboptions$2;

          var _option = options[key];

          if ((_option$suboptions$2 = _option.suboptions["id:".concat(option.respect_to)]) !== null && _option$suboptions$2 !== void 0 && _option$suboptions$2.selected) {
            showOption = true;
            break;
          }
        }
      }
    }

    return showOption;
  };
  /**
   * Init product cart when product changed
   */


  (0, _react.useEffect)(function () {
    if (product.product) {
      initProductCart(product.product);
    }
  }, [product.product, props.productCart]);
  /**
   * Check error when product state changed
   */

  (0, _react.useEffect)(function () {
    checkErrors();
  }, [productCart]);
  /**
   * Listening product changes
   */

  (0, _react.useEffect)(function () {
    setProduct(_objectSpread(_objectSpread({}, product), {}, {
      product: props.product
    }));
  }, [props.product]);
  /**
   * Check if there is an option required with one suboption
   */

  (0, _react.useEffect)(function () {
    if (product !== null && product !== void 0 && product.product && Object.keys(product === null || product === void 0 ? void 0 : product.product).length) {
      var _ref4, _ref5;

      var options = (_ref4 = []).concat.apply(_ref4, _toConsumableArray(product.product.extras.map(function (extra) {
        return extra.options.filter(function (option) {
          return option.min === 1 && option.max === 1 && option.suboptions.filter(function (suboption) {
            return suboption.enabled;
          }).length === 1;
        });
      })));

      if (!(options !== null && options !== void 0 && options.length)) {
        return;
      }

      var suboptions = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(options.map(function (option) {
        return option.suboptions;
      }))).filter(function (suboption) {
        return suboption.enabled;
      });

      var states = suboptions.map(function (suboption, i) {
        var price = options[i].with_half_option && suboption.half_price && (suboption === null || suboption === void 0 ? void 0 : suboption.position) !== 'whole' ? suboption.half_price : suboption.price;
        return {
          id: suboption.id,
          name: suboption.name,
          position: suboption.position || 'whole',
          price: price,
          quantity: 1,
          selected: true,
          total: price
        };
      });
      var defaultOptions = options.map(function (option, i) {
        return {
          option: option,
          suboption: suboptions[i],
          state: states[i]
        };
      });
      setDefaultSubOptions(defaultOptions);
      setCustomDefaultSubOptions(defaultOptions);
    }
  }, [product.product]);

  if (isStarbucks) {
    (0, _react.useEffect)(function () {
      if (product !== null && product !== void 0 && product.product && Object.keys(product === null || product === void 0 ? void 0 : product.product).length) {
        var _ref6, _ref7;

        var options = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(product.product.extras.map(function (extra) {
          return extra.options.filter(function (option) {
            return option.name === 'Tamaño' && option.suboptions.filter(function (suboption) {
              return suboption.name === 'Grande (16oz - 437ml)';
            }).length === 1;
          });
        })));

        if (!(options !== null && options !== void 0 && options.length)) {
          return;
        }

        var suboptions = (_ref7 = []).concat.apply(_ref7, _toConsumableArray(options.map(function (option) {
          return option.suboptions;
        }))).filter(function (suboption) {
          return suboption.name === 'Grande (16oz - 437ml)';
        });

        var states = suboptions.map(function (suboption, i) {
          var price = options[i].with_half_option && suboption.half_price && (suboption === null || suboption === void 0 ? void 0 : suboption.position) !== 'whole' ? suboption.half_price : suboption.price;
          return {
            id: suboption.id,
            name: suboption.name,
            position: suboption.position || 'whole',
            price: price,
            quantity: 1,
            selected: true,
            total: price
          };
        });
        var defaultOptions = options.map(function (option, i) {
          return {
            option: option,
            suboption: suboptions[i],
            state: states[i]
          };
        });
        setDefaultSubOptions([].concat(_toConsumableArray(customDefaultSubOptions), _toConsumableArray(defaultOptions)));
      }
    }, [customDefaultSubOptions]);
  }
  /**
   * Check if defaultSubOption has content to set product Cart
   */


  (0, _react.useEffect)(function () {
    if (defaultSubOptions !== null && defaultSubOptions !== void 0 && defaultSubOptions.length) {
      handleChangeSuboptionDefault(defaultSubOptions);
    }
  }, [defaultSubOptions]);
  /**
   * Load product on component mounted
   */

  (0, _react.useEffect)(function () {
    if (!props.product && (!props.businessId || !props.categoryId || !props.productId)) {
      throw new Error('`businessId` && `categoryId` && `productId` are required if `product` was not provided.');
    }

    if (!props.product && props.businessId && props.categoryId && props.productId) {
      loadProductWithOptions();
    }

    return function () {
      if (requestsState.product) {
        requestsState.product.cancel();
      }
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, UIComponent && /*#__PURE__*/_react.default.createElement(UIComponent, _extends({}, props, {
    productObject: product,
    productCart: productCart,
    errors: errors,
    editMode: editMode,
    isSoldOut: isSoldOut,
    maxProductQuantity: maxProductQuantity,
    increment: increment,
    decrement: decrement,
    handleSave: handleSave,
    showOption: showOption,
    handleChangeIngredientState: handleChangeIngredientState,
    handleChangeSuboptionState: handleChangeSuboptionState,
    handleChangeCommentState: handleChangeCommentState
  })));
};

exports.ProductForm = ProductForm;
ProductForm.propTypes = {
  /**
   * UI Component, this must be containt all graphic elements and use parent props
   */
  UIComponent: _propTypes.default.elementType,

  /**
   * `businessId`
   */
  businessId: _propTypes.default.number.isRequired,

  /**
   * `categoryId` is required if `product` prop is not present
   */
  categoryId: _propTypes.default.number,

  /**
   * `productId` is required if `product` prop is not present
   */
  productId: _propTypes.default.number,

  /**
   * `product` is required if `businessId`, `categoryId` or `productId` is not present
   */
  product: _propTypes.default.object,

  /**
   * Product from cart
   */
  productCart: _propTypes.default.object,

  /**
   * useOrderContext
   */
  useOrderContext: _propTypes.default.bool,

  /**
   * Function to save event
   */
  onSave: _propTypes.default.func
};
ProductForm.defaultProps = {
  productCart: {},
  useOrderContext: true,
  balance: 0
};