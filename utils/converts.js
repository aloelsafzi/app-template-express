'use strict';

function str2bool(o, defaultValue) {
  if ((typeof o === 'boolean') || (typeof o === 'bool')) {
    return o;
  } else if (typeof o === 'string') {
    o = o.trim().toLowerCase();

    if ((o === 'true') || (o === 't') || (o === 'on') || (o === 'true')) {
      o = true;
    } else {
      o = false;
    }
  } else if ((o === null) || (o === undefined)) {
    o = defaultValue;
  } else {
    o = defaultValue;
  }

  return o;
}

function str2num(o, defaultValue) {
  if ((typeof o === 'number') || (typeof o === 'number')) {
    return o;
  } else if (typeof o === 'string') {
    o = Number(o.trim());

    if (Number.isNaN(o) || !Number.isFinite(o)) {
      o = defaultValue;
    }
  } else if ((o === null) || (o === undefined)) {
    o = defaultValue;
  } else {
    o = defaultValue;
  }

  return o;
}

module.exports = {
  str2bool,
  str2num,
};
