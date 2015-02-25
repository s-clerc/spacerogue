// Generated by CoffeeScript 1.9.1
(function() {
  "use strict";
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  define(["Phaser"], function(Phaser) {
    var BootState, exports;
    exports = {};
    exports.BootState = BootState = (function(superClass) {
      extend(BootState, superClass);

      function BootState() {
        return BootState.__super__.constructor.apply(this, arguments);
      }

      BootState.prototype.preload = function() {
        this.game.load.image("progressBar", "assets/progressBar.png");
      };

      BootState.prototype.create = function() {
        this.game.stage.backgroundColor = "#222";
        this.game.physics.startSystem(Phaser.Physics.NINJA);
        this.game.state.start("load");
      };

      return BootState;

    })(Phaser.State);
    return exports;
  });

}).call(this);

//# sourceMappingURL=boot.js.map