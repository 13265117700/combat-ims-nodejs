const Base = require('./base.js');

class Essay extends Base {
  constructor(props = 'essay'){
    super(props);
  }
}

module.exports = new Essay();