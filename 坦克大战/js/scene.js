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
    reload();
    Stage.playVideo('audio/start.mp3')
    PIXI.Container.call(this);
    this.create();
    this._active = true;
    this._isNext = false;
}

GameScene.prototype.create = function(){
    Stage._map = GameData.gameMaps[GameData.level].clone();
    this._gameSprite = new MapSprite();
    this.addChild(this._gameSprite);
    this._uiSprite = new UISprite();
    this.addChild(this._uiSprite);
    this._uiSprite.x = Stage._width - 64;
}

GameScene.prototype.next = function(){
    this._isNext = true;
}


GameScene.prototype.clear = function(){
    this.removeChildren(0);
}

GameScene.prototype.nextLevel = function(){
    this.clear();
    next();
    this.create();
    Stage.playVideo('audio/start.mp3')
}

GameScene.prototype.update = function(){
    if(this._isNext){
        this.alpha-=0.03;
        if(this.alpha<=0){
            this._isNext = false;
            this.nextLevel();
        }
    }
    else{
        if(this.alpha<1){
            this.alpha+= 0.03;
        }
    }
}