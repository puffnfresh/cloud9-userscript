define(function(require, exports, module) {

var ext = require("core/ext");
var dock = require("ext/dockpanel/dockpanel");

var markup = require("text!ext/userscript/userscript.xml");
        
module.exports = ext.register("ext/userscript/userscript", {
    name     : "UserScript",
    dev      : "Brian McKenna",
    alone    : true,
    type     : ext.GENERAL,
    markup   : markup,
    
    storeKey : "userscript.script",

    getStoredCode: function() {
        return localStorage[this.storeKey];
    },
    
    runCode: function(code) {
        apf.include(null, null, null, code);
    },
    
    keyupHandler: function(event) {
        if(!event.ctrlKey || event.keyCode != 69) return;
        
        localStorage[this.storeKey] = txtUserScript.getValue();
        this.runCode(txtUserScript.getValue());
    },
    
    init : function(amlNode){
    },
    
    hook : function(){
        var _self = this;
        
        var name = "ext/userscript/userscript";
        
        dock.addDockable({
            hidden  : false,
            buttons : [
                { caption: "UserScript", ext : [name, "dbUserScript"] }
            ]
        });
        
        dock.register(name, "dbUserScript", {
            menu : "UserScript",
            primary : {
                backgroundImage: "/static/style/images/debugicons.png",
                defaultState: { x: -7, y: -310 },
                activeState: { x: -7, y: -310 }
            }
        }, function(type) {
            ext.initExtension(_self);

            var loaded = false;
            dbUserScript.addEventListener("prop.visible", function(e) {
                if(loaded) return;

                loaded = true;
                txtUserScript.setValue(_self.getStoredCode());
            });

            return dbUserScript;
        });

        this.runCode(localStorage[this.storeKey]);
    },

    enable : function(){
        ext.initExtension(this);
    },

    disable : function(){
    },

    destroy : function(){
    }
});

});