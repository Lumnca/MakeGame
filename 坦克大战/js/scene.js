function MenuScene(){
    this.init.apply(this,arguments);
}

MenuScene.prototype = Object.create(PIXI.Container.prototype)

MenuScene.prototype.constructor = MenuScene;

MenuScene.prototype.init = function(){
    PIXI.Container.call(this);
    this.create();
    this._active = true;
}
MenuScene.prototype.create = function(){
    this._menuSprite = new MenuSprite();
    this.addChild(this._menuSprite);
    KeyWord['Enter'] = ()=>{
        this.exit();
    }
}

MenuScene.prototype.update = function(){
    if(!this._active && Stage._scene.alpha>0){
        Stage._scene.alpha -= 0.02;
        if(Stage._scene.alpha<0){
            Stage.scene(GameScene);
        }
    }
}

MenuScene.prototype.exit = function(){
    this._active = false;
}


function GameScene(){
    this.init.apply(this,arguments);
}

GameScene.prototype = Object.create(PIXI.Container.prototype)

GameScene.prototype.constructor =  GameScene;

GameScene.prototype.init = function(){
    GameData.gameOver = false;
    Stage.playVideo('audio/start.mp3')
    PIXI.Container.call(this);
    this.create();
    this._active = true;

}

GameScene.prototype.create = function(){
    Stage._map = map1.clone();
    this.addChild(new MapSprite());
}