
var Secret = function(title, rawContent) {

  var _this = this;

  _this.title     = title;
  _this.content   = rawContent;
  _this.fields    = [];

  _this.populateFields();
  
};

Secret.prototype.populateFields = function() {

  var _this = this;

  try {
    var content   = JSON.parse(_this.content);

    _this.version = 1;
    _this.fields  = content.fields;
  }
  catch(e) {
    // Secret content is not JSON : legacy version
    _this.version = 0;
    _this.fields  = null;
  }

};