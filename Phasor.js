const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
      preload: preload,
      create: create,
      update: update,
    },
  };
  
  const game = new Phaser.Game(config);
  
  function preload() {
    this.load.image('rocket', 'rocket.png');
  }
  
  function create() {
    this.rocket = this.add.sprite(400, 500, 'rocket');
    this.cursors = this.input.keyboard.createCursorKeys();
  }
  
  function update() {
    if (this.cursors.left.isDown) {
      this.rocket.x -= 5;
    } else if (this.cursors.right.isDown) {
      this.rocket.x += 5;
    }
  }