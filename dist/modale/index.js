"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modale;
var _react = _interopRequireDefault(require("react"));
require("./index.css");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function Modale(_ref) {
  var _ref$fullName = _ref.fullName,
    fullName = _ref$fullName === void 0 ? '' : _ref$fullName,
    onClose = _ref.onClose,
    backgroundColor = _ref.backgroundColor,
    textColor = _ref.textColor;
  var modaleStyles = {
    backgroundColor: backgroundColor || '#fff',
    color: textColor || '#000'
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modale",
    style: modaleStyles
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modale-content"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "close-button",
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faTimes,
    className: "iconCross"
  })), /*#__PURE__*/_react.default.createElement("p", {
    style: {
      color: textColor
    }
  }, "L'employ\xE9 ", fullName, " a bien \xE9t\xE9 cr\xE9\xE9!")));
}