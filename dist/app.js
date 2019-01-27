/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(4);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _helper = __webpack_require__(3);

var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    InspectorControls = _wp$editor.InspectorControls;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    SelectControl = _wp$components.SelectControl;
var Fragment = wp.element.Fragment;


/**
 * Register: Create Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('tx/alert', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('Alert', 'tx'), // Block title.
  icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'tx', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__('alert', 'tx')],
  // Register block styles.
  // styles: Styles,
  attributes: {
    type: {
      type: 'string',
      default: 'primary'
    },
    content: {
      source: 'html',
      selector: '.uk-alert',
      default: __('I am alert component', 'tx')
    }
  },

  edit: function edit(_ref) {
    var className = _ref.className,
        attributes = _ref.attributes,
        setAttributes = _ref.setAttributes,
        isSelected = _ref.isSelected;
    var content = attributes.content,
        type = attributes.type;

    return React.createElement(
      Fragment,
      null,
      React.createElement(
        InspectorControls,
        null,
        React.createElement(
          PanelBody,
          {
            title: __('Options', 'tx'),
            initialOpen: true },
          React.createElement(SelectControl, {
            label: 'Alert Type',
            value: type,
            options: _helper.TYPES,
            onChange: function onChange(type) {
              setAttributes({ type: type });
            }
          })
        )
      ),
      React.createElement(
        'div',
        { className: className + ' uk-alert uk-alert-' + type },
        isSelected ? React.createElement(RichText, {
          placeholder: __('I am placeholder', 'tx'),
          tagName: 'div',
          className: className + ' uk-input',
          value: content,
          onChange: function onChange(content) {
            return setAttributes({ content: content });
          },
          multiline: false
        }) : content
      )
    );
  },


  // The "save" property must be specified and must be a valid function.
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var content = attributes.content,
        type = attributes.type;

    return React.createElement(RichText.Content, { tagName: 'div', className: 'uk-alert uk-alert-' + type, 'uk-alert': true, value: content });
  }
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var __ = wp.i18n.__; // Import __() from wp.i18n

var TYPES = exports.TYPES = [
// Mark style as default.
{
    value: 'primary',
    label: __('Primary')
}, {
    value: 'success',
    label: __('Success')
}, {
    value: 'warning',
    label: __('Warning')
}, {
    value: 'danger',
    label: __('Danger')
}];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType('cgb/block-single-block2', {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __('TX Block 2', 'CGB'), // Block title.
  icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__('create-guten-block2')],

  // The "edit" property must be a valid function.
  edit: function edit(props) {
    // Creates a <p class='wp-block-cgb-block-single-block'></p>.
    return React.createElement(
      'div',
      { className: 'editor ' + props.className },
      React.createElement(
        'p',
        null,
        'This is block 2 in editor'
      )
    );
  },

  // The "save" property must be specified and must be a valid function.
  save: function save(props) {
    return React.createElement(
      'div',
      { className: props.className },
      React.createElement(
        'p',
        null,
        'this is block 2 in fronted'
      )
    );
  }
});

/***/ })
/******/ ]);