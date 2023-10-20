"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./index.css");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function Modale(_ref) {
  var _ref$fullName = _ref.fullName,
    fullName = _ref$fullName === void 0 ? '' : _ref$fullName,
    onClose = _ref.onClose;
  return /*#__PURE__*/React.createElement("div", {
    className: "modale"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modale-content"
  }, /*#__PURE__*/React.createElement("button", {
    className: "close-button",
    onClick: onClose
  }, /*#__PURE__*/React.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faTimes,
    className: "iconCross"
  })), /*#__PURE__*/React.createElement("p", null, "L'employ\xE9 ", fullName, " a bien \xE9t\xE9 cr\xE9\xE9!")));
}
var _default = exports.default = Modale;