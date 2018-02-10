class Preload extends Phaser.State {
  preload() {
    /* Preload required assets */
    //this.game.load.image('myImage', 'assets/my-image.png');
    //this.game.load.audio('myAudio', 'assets/my-audio.wav');
    //this.game.load.atlas('myAtlas', 'assets/my-atlas.png', 'assets/my-atlas.json');
    //show loading screen
    this.splash = this.add.sprite(
      this.game.world.centerX,
      this.game.world.centerY,
      "logo"
    );
    this.splash.anchor.setTo(0.5);

    this.preloadBar = this.add.sprite(
      this.game.world.centerX,
      this.game.world.centerY + 128,
      "preloadbar"
    );
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    this.load.image("space", "assets/images/space.png");
    this.load.image("rock", "assets/images/rock.png");
    this.load.spritesheet("playership", "assets/images/player.png", 12, 12);
    this.load.spritesheet("power", "assets/images/power.png", 12, 12);
    this.load.image("playerParticle", "assets/images/player-particle.png");
    this.load.audio("collect", "assets/audio/collect.ogg");
    this.load.audio("explosion", "assets/audio/explosion.ogg");
  }

  create() {
    //NOTE: Change to GameTitle if required
    this.game.state.start("Main");
  }
}

export default Preload;
