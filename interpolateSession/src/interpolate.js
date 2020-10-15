const interpolate = (value, session = {}, options = {}) => {
    if(!value) {
        return;
    }
    Object.keys(session).forEach(key => {
        let interpolateKey = `${options.leftDelimiter}${key}${options.rightDelimiter}`;
        let interpolateValue = session[key] ? session[key] : "";
        value = value.replace(new RegExp(interpolateKey, "gi"), interpolateValue);
    });
    if(options.leftDelimiter && options.rightDelimiter) {
        let interpolateKey = `${options.leftDelimiter}(.*?)${options.rightDelimiter}`;
        value = value.replace(new RegExp(interpolateKey, "gi"), "");
    }
    return value;
};

module.exports = { interpolate };