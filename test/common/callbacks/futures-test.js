/*** Generated by streamline 0.10.7 (callbacks) - DO NOT EDIT ***/ var __rt=require('streamline/lib/callbacks/runtime').runtime(__filename, false),__func=__rt.__func,__cb=__rt.__cb; QUnit.module(module.id);
var flows = require("streamline/lib/util/flows");

function delay(millis, val, _) { var __frame = { name: "delay", line: 4 }; return __func(_, this, arguments, delay, 2, __frame, function __$delay() {
    return setTimeout(__cb(_, __frame, 1, 1, function __$delay() {
      return _(null, val); }, true), millis); });};


asyncTest("no timeout", 1, function __1(_) { var f; var __frame = { name: "__1", line: 9 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() {
    f = delay(1, "a", false);
    return f(__cb(_, __frame, 2, 8, function ___(__0, __1) { equals(__1, "a", "no timeout");
      start(); _(); }, true)); });});