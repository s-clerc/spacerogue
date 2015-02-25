"use strict"
define ["Phaser"], (Phaser) ->
  exports = {}
  exports.BootState = class BootState extends Phaser.State
    preload: ->
      @game.load.image "progressBar", "assets/progressBar.png"
      return
    create: ->
      # Set a background color and the physics system
      @game.stage.backgroundColor = "#222"
      @game.physics.startSystem Phaser.Physics.NINJA
      @game.state.start "load"
      return
  return exports