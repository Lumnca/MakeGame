//======================================================================
//按钮精灵类
//======================================================================
function Button() {
    this.init.apply(this, arguments);
}

Button.prototype = Object.create(PIXI.Sprite.prototype);
Button.prototype.constructor = Button;

Button.prototype.init = function (x,y,w,h) {
    PIXI.Sprite.call(this);
   
    this.interactive = true;
    this.buttonMode = true;
    //点击时候的图片
    this._orginFrame =  Loader.resources['images/keyword.png'].texture.setFrame(x*32,y*32,w||32,h||32);
    this._clickFrame =  Loader.resources['images/keyword.png'].texture.setFrame(x*32,(y+1)*32,w||32,h||32);
    this.texture = this._orginFrame;
    this._isClick = false;
    this._clickDisabled = true;
    this.scale.set(2);
}

Button.prototype.setClickFrame = function (url) {
    if (url instanceof String) {
        this._clickFrame = PIXI.Texture.from(url);
    }
    else {
        this._clickFrame = url;
    }
}

Button.prototype.pointertap = function(){
    this.mousedown();
  
} 
Button.prototype.pointerup = function(){
    
}
Button.prototype.mousedown = function () {
    this.texture = this._clickFrame;
    this._isClick = true;
    this.click();
}

Button.prototype.mouseup = function () {
    this.texture = this._orginFrame;
    this._isClick = false;
}

Button.prototype.click = function () {
   
}

function MenuSprite() {
    this.init.apply(this, arguments);
}

MenuSprite.prototype = Object.create(Sprite.prototype);

MenuSprite.prototype.constructor = MenuSprite;

MenuSprite.prototype.init = function () {
    Sprite.call(this);
    this.texture = Loader.resources['images/menu.gif'].texture;
    this.y = Stage._height;
    this.create();
    this.keydownEvent();
}

MenuSprite.prototype.update = function () {
    if (this.y > 0) {
        this.y -= 4;
    }
}

MenuSprite.prototype.create = function () {
    this._selectFlag = new PIXI.Graphics();
    this._selectFlag.beginFill(0xeeeeee)
    this._selectFlag.drawCircle(0, 0, 6)
    this._selectFlag.endFill()
    this.addChild(this._selectFlag)
    this._selectFlag.x = 161;
    this._selectFlag.y = 263;


}

MenuSprite.prototype.keydownEvent = function () {
    KeyWord['ArrowUp'] = () => {
        this._selectFlag.y = 294 ? 263 : 294;
    }
    KeyWord['ArrowDown'] = () => {
        this._selectFlag.y = 294 ? 294 : 263;
    }
}
//=======================================================================================================
//MapTile地图格子类
//=======================================================================================================
function MapTile() {
    this.init.apply(this, arguments);
}

MapTile.prototype = Object.create(Sprite.prototype);

MapTile.prototype.constructor = MapTile;

MapTile.prototype.init = function (type, i, j) {
    Sprite.call(this);
    this._x = i;
    this._y = j;
    this._exist = true;
    this.name = "tile";
    this._type = type;
    if (type === 9) {
        this.texture = Loader.resources['images/tankAll.gif'].texture.setFrame(8 * 32, 0, 32, 32);
    }
    else {
        this.texture = Loader.resources['images/tankAll.gif'].texture.setFrame(16 * (type - 1), 96, 16, 16);
    }

}

MapTile.prototype.update = function () {
    if (Stage._map[this._x][this._y] === 0 && this._exist) {
        this.texture = PIXI.Texture.EMPTY;
        this._exist = false;
    }
    if (this._type === 9 && GameData.gameOver) {
        this.texture = Loader.resources['images/tankAll.gif'].texture.setFrame(9 * 32, 0, 32, 32);
    }
    if (Stage._map[this._x][this._y] < 0) {
        this.changeTile(Stage._map[this._x][this._y]);
    }
}

MapTile.prototype.changeTile = function (type) {
    this._type = Math.abs(type);
    Stage._map[this._x][this._y] = Math.abs(type);
    this.texture = Loader.resources['images/tankAll.gif'].texture.setFrame(16 * (this._type - 1), 96, 16, 16);
}

//=======================================================================================================
//TankSprite坦克精灵类
//=======================================================================================================

function TankSprite() {
    this.init.apply(this, arguments);
}

TankSprite.prototype = Object.create(Sprite.prototype);

TankSprite.prototype.constructor = TankSprite;

TankSprite.prototype.init = function (type, power) {
    Sprite.call(this);
    this.name = "tank";
    let row = Math.floor(type / 2);
    let col = Math.floor(type % 2);
    this.texture = Loader.resources['images/tankAll.gif'].texture.setFrame(col * 32 * 4, row * 32, 32, 32);
    this._row = col * 32 * 4;
    this._col = row * 32;
    this._state = 0;
    this._id = type;
    this._reward = (this._id === 4 || this._id === 5) ? true : false;
    if (type === 6) {
        this.texture = Loader.resources['images/tankAll.gif'].texture.setFrame(8 * 32, 64, 32, 32);
        this._row = 8 * 32
        this._col = 2 * 32;
    }
    this.initData(power || 0);
}
TankSprite.prototype.initData = function (power) {
    this._speed = GameData.tankSpeed[this._id];
    this._hp = GameData.tankHP[this._id];
    this._dir = DIR_TOP;
    this._level = 1;
    this._bL = 0;
    this._power = 0 || power;
    this._pd = 16;
    this._x = 0;
    this._y = 0;
    this._goalX = 0;
    this._goalY = 0;
    this._dirCount = 100;
    this._moving = false;
    this._exist = true;
    this.removeChildren(0);
    this._anim = new AnimSprite();
    this._stateCount = -1;
    this.addChild(this._anim);
    if (this._power) {
        this.startAnim();
    }
    else {
        this.defAnim();
    }
}

TankSprite.prototype.changeTankType = function (type) {
    let row = Math.floor(type / 2);
    let col = Math.floor(type % 2);
    this.texture = Loader.resources['images/tankAll.gif'].texture.setFrame(col * 32 * 4, row * 32, 32, 32);
    this._row = col * 32 * 4;
    this._col = row * 32;
    this._state = 0;
    this._id = type;
    if (type === 6) {
        this.texture = Loader.resources['images/tankAll.gif'].texture.setFrame(8 * 32, 64, 32, 32);
        this._row = 8 * 32
        this._col = 2 * 32;
    }
}

TankSprite.prototype.startAnim = function () {
    this.hide();
    this._anim.start(6, 8 * 32, 32, 15, false, 32);
    this._anim.end = () => {
        this.show();
    }
}

TankSprite.prototype.dieAnim = function () {
    this._anim.start(3, 10 * 32, 0, 10, false, 32);
    this._anim.end = () => {
        this.hide();
        this.destroy();
    }
}

TankSprite.prototype.defAnim = function () {
    this._state = 1;
    this._stateCount = 300;
    this._anim.start(1, 5 * 32, 96, 10, true, 32, 15);
}

TankSprite.prototype.update = function () {
    if (!this._exist) return;
    this.updateState();
    this.updatePosition();
    this.updateDir();
    this.updateHP();
    if (this._power !== 0) {
        this.enemyMove();
    }
}

TankSprite.prototype.updateHP = function () {
    if (this._hp <= 0) {
        this._hp = 0;
        this._exist = false
        this.texture.frame = new PIXI.Rectangle(0, 0, 0, 0);
        this.dieAnim();
        if (this._power !== 0) GameData.enemyCount--;
        if (this._power === 0) {
            Stage.playVideo('audio/playerCrack.mp3');
        }
        else {
            Stage.playVideo('audio/tankCrack.mp3');
        }
    }
    else if (this._hp == 2 && this._id == 5) {
        this.changeTankType(4);
    }
    else if (this._hp == 1 && (this._id == 4 || this._id == 5)) {
        this.changeTankType(6);
    }

}

TankSprite.prototype.updateState = function () {

    if (this._stateCount >= 0 && this._state > 0) this._stateCount--;
    else if (this._stateCount < 0 && this._state > 0) {
        this._anim.clear();
        this._state = 0;
    }
    else if (this._stateCount >= 0 && this._state === 0) {
        this._anim.clear();
        this._stateCount = -1;
    }


}

TankSprite.prototype.updatePosition = function () {
    this.getPoint();
    if (this._state === 2) return;
    if (this.x !== this._goalX * this._pd) {
        this.x += (Math.sign(this._goalX - this._x) * this._speed);
    }
    else if (this.y !== this._goalY * this._pd) {
        this.y += (Math.sign(this._goalY - this._y) * this._speed);
    }
    else if (this.x === this._goalX * this._pd && this.y === this._goalY * this._pd) {
        if (this._power !== 0) {
            let dirs = this.canPassDir();
            dirs.remove(this._dir);
            dirs.remove(Stage.reDir(this._dir));
            if (dirs.length > 0 && this._dirCount < 50) {
                this.move(dirs[Math.rand(0, dirs.length)]);
            }
            else {
                this.move(this._dir);
            }
            this.move(this._dir);
        }
    }
}
TankSprite.prototype.updateDir = function () {
    this.texture.frame = new PIXI.Rectangle(this._row + this._dir * 32, this._col, 32, 32);
}
TankSprite.prototype.pos = function (x, y) {
    this.x = x * this._pd;
    this.y = y * this._pd;
    this._x = x;
    this._y = y;
    this._goalX = x;
    this._goalY = y;
}
TankSprite.prototype.getPoint = function () {
    if (this._dir === DIR_LEFT) {
        this._x = Math.ceil(this.x / this._pd)
    }
    else if (this._dir === DIR_RIGHT) {
        this._x = Math.floor(this.x / this._pd)
    }
    else if (this._dir === DIR_TOP) {
        this._y = Math.ceil(this.y / this._pd)
    }
    else if (this._dir === DIR_DOWN) {
        this._y = Math.floor(this.y / this._pd)
    }
    else {
        this._y = Math.floor(this.y / this._pd)
    }
}


TankSprite.prototype.canMove = function () {
    return Stage.canPass(this._goalY, this._goalX);
}

TankSprite.prototype.move = function (dir) {
    if (this._dir !== dir) {
        this._dir = dir;
        return;
    }
    if (dir === DIR_RIGHT) {
        this._goalY = this._y;
        this._goalX = this._x + 1;
    }
    else if (dir === DIR_LEFT) {
        this._goalY = this._y;
        this._goalX = this._x - 1;
    }
    else if (dir === DIR_TOP) {
        this._goalY = this._y - 1;
        this._goalX = this._x;
    }
    else if (dir === DIR_DOWN) {
        this._goalY = this._y + 1;
        this._goalX = this._x;
    }
    else {

    }

    if (!this.canMove()) {
        this._goalX = this._x;
        this._goalY = this._y;
        if (this._power !== 0) {
            let dirs = this.canPassDir();
            if (dirs.length > 0) {
                this.move(dirs[Math.rand(0, dirs.length)]);
            }
        }
    }
}

TankSprite.prototype.moveCheck = function () {
    if (Math.abs(this.x - this._goalX * this._pd) <= 2) {
        this.x = this._goalX * this._pd
        this._x = this._goalX;
    }
    if (Math.abs(this.y - this._goalY * this._pd) <= 2) {
        this.y = this._goalY * this._pd
        this._y = this._goalY;
    }
}

TankSprite.prototype.isLineDir = function (dir) {
    return this._dir === dir || Stage.reDir(this._dir) === dir;
}

TankSprite.prototype.canPassDir = function () {
    let dirs = [];
    if (Stage.canPass(this._goalY + 1, this._goalX)) {
        dirs.push(DIR_DOWN);
    }
    if (Stage.canPass(this._goalY - 1, this._goalX)) {
        dirs.push(DIR_TOP);
    }
    if (Stage.canPass(this._goalY, this._goalX + 1)) {
        dirs.push(DIR_RIGHT);
    }
    if (Stage.canPass(this._goalY, this._goalX - 1)) {
        dirs.push(DIR_LEFT);
    }
    return dirs;

}

TankSprite.prototype.enemyMove = function () {
    this._dirCount--;
    if (this._dirCount < 0) {
        this.shoot();
        this._dirCount = 200;
    }

}

TankSprite.prototype.shoot = function () {
    if (this._exist && this._state !== 2) {
        if (!this._bullet) {
            this._bullet = new BulletSprite(this._dir, this._power, this._level);
            this._bullet.pos(this.x + 16, this.y + 16);
            this.parent.addChild(this._bullet);
        }
        else {
            //禁止多发
            if (!this._bullet._exist) {
                this._bullet._dir = this._dir;
                this._bullet._level = (this._bL > 1 ? 2 : 1);
                this._bullet._speed = GameData.bullet[this._bL];
                this._bullet.createTexture();
                this._bullet.pos(this.x + 16, this.y + 16);
            }
        }
    }
}

TankSprite.prototype.hide = function () {
    this.texture.frame = new PIXI.Rectangle(0, 0, 0, 0);
    this._exist = false;
}

TankSprite.prototype.show = function () {
    this.updateDir();
    this._exist = true;
    this._hp = GameData.tankHP[this._id];
}


TankSprite.prototype.destroy = function () {
    if (this._power === 0) {

        GameData.live--;
        if (GameData.live < 0) {
            GameData.gameOver = true;
        }
        this.initData(0);
        this.pos(9, 24);
        this.show();
    }
    else {
        if (this._reward) {
            GameData.tool = true;
        }
        GameData.score += this._id * 10;
        GameData.enemys.remove(this);
        this.parent.children.remove(this);
    }

}

TankSprite.prototype.stop = function () {
    this._state = 2;
    this._stateCount = 600;
}

TankSprite.prototype.hitEvent = function (obj) {
    if (this._state === 1) {
        this._state = 0;
        return;
    }
    if (obj.name === 'tank' && obj._power !== this._power) {
        obj._hp--;
        this._hp--;
    }
    if (obj.name === 'bullet' && this._power !== obj._power) {
        this._hp--;
    }
}
//========================================================================================================
// 子弹对象精灵类
//========================================================================================================
function BulletSprite() {
    this.init.apply(this, arguments);
}

BulletSprite.prototype = Object.create(Sprite.prototype);

BulletSprite.prototype.constructor = BulletSprite;

BulletSprite.prototype.init = function (dir, type, level) {
    Sprite.call(this);
    this.name = "bullet";
    this._dir = dir;
    this._power = type;
    this._x = 0;
    this._y = 0;
    this._pd = 16;
    this._exist = true;
    this._level = level;
    this._speed = GameData.bullet[level - 1];
    this.anchor.set(0.5);
    this.createTexture();
}
BulletSprite.prototype.createTexture = function () {
    switch (this._dir) {
        case DIR_TOP:
            this.texture = Loader.resources['images/tankAll.gif'].texture.setFrame(80, 96, 5, 8); break;
        case DIR_DOWN:
            this.texture = Loader.resources['images/tankAll.gif'].texture.setFrame(86, 96, 5, 8); break;
        case DIR_LEFT:
            this.texture = Loader.resources['images/tankAll.gif'].texture.setFrame(92, 96, 6, 5); break;
        case DIR_RIGHT:
            this.texture = Loader.resources['images/tankAll.gif'].texture.setFrame(99, 96, 6, 5); break;
    }
}

BulletSprite.prototype.pos = function (x, y) {
    this.alpha = 1;
    this._exist = true;
    this.x = x;
    this.y = y;
    this.point();
    if (this._power === 0) Stage.playVideo('audio/attack.mp3');
}

BulletSprite.prototype.update = function () {
    if (this._exist) {
        this.updatePosition();
        this.point()
        this.hitTile();
    }
    else {
        this.alpha = 0;
    }
}

BulletSprite.prototype.updatePosition = function () {
    if (this._dir === DIR_DOWN) {
        this.y += this._speed;
    }
    else if (this._dir === DIR_TOP) {
        this.y -= this._speed;
    }
    else if (this._dir === DIR_LEFT) {
        this.x -= this._speed;
    }
    else if (this._dir === DIR_RIGHT) {
        this.x += this._speed;
    }
}

BulletSprite.prototype.point = function () {

    this._x = Math.floor(this.x / this._pd)
    this._y = Math.floor(this.y / this._pd)
    return [this._x, this._y];
}

BulletSprite.prototype.hitTile = function () {
    //出界
    if (this._y < 0 || this._x < 0 || this._y >= Stage._map.length || this._x >= Stage._map[0].length - 1) {
        this._exist = false;
        return;
    }

    if (this._dir === DIR_DOWN || this._dir === DIR_TOP) {
        //拆砖墙
        if ((Stage._map[this._y][this._x] === 1 && Stage._map[this._y][this._x] <= this._level) ||
            (Stage._map[this._y][this._x - 1] === 1 && Stage._map[this._y][this._x - 1] <= this._level)) {
            Stage._map[this._y][this._x] = Stage._map[this._y][this._x] <= this._level ? 0 : Stage._map[this._y][this._x];
            Stage._map[this._y][this._x - 1] = Stage._map[this._y][this._x - 1] <= this._level ? 0 : Stage._map[this._y][this._x - 1];
            this._exist = false;
            if (this._power === 0) Stage.playVideo('audio/bulletCrack.mp3');

        }
        //能否拆石墙
        else if ((Stage._map[this._y][this._x] === 2) ||
            (Stage._map[this._y][this._x - 1] === 2)) {
            this._exist = false;
            Stage._map[this._y][this._x] = Stage._map[this._y][this._x] <= this._level ? 0 : Stage._map[this._y][this._x];
            Stage._map[this._y][this._x - 1] = Stage._map[this._y][this._x - 1] <= this._level ? 0 : Stage._map[this._y][this._x - 1];
            if (this._power === 0) Stage.playVideo('audio/bulletCrack.mp3');
        }
        //拆家
        else if (Stage._map[this._y][this._x] === 8 || Stage._map[this._y][this._x] === 9) {
            this._exist = false;
            Stage._map[this._y][this._x] = -1;
            Stage.playVideo('audio/playerCrack.mp3');
            GameData.gameOver = true;
        }
    }
    else {
        //拆砖墙
        if ((Stage._map[this._y][this._x] === 1 && Stage._map[this._y][this._x] <= this._level) ||
            (Stage._map[this._y - 1][this._x] === 1 && Stage._map[this._y - 1][this._x] <= this._level)) {
            Stage._map[this._y][this._x] = Stage._map[this._y][this._x] <= this._level ? 0 : Stage._map[this._y][this._x];
            Stage._map[this._y - 1][this._x] = Stage._map[this._y - 1][this._x] <= this._level ? 0 : Stage._map[this._y - 1][this._x];
            this._exist = false;
            if (this._power === 0) Stage.playVideo('audio/bulletCrack.mp3');
        }
        //能否拆石墙
        else if ((Stage._map[this._y][this._x] === 2) ||
            (Stage._map[this._y - 1][this._x] === 2)) {
            this._exist = false;
            Stage._map[this._y][this._x] = Stage._map[this._y][this._x] <= this._level ? 0 : Stage._map[this._y][this._x];
            Stage._map[this._y - 1][this._x] = Stage._map[this._y - 1][this._x] <= this._level ? 0 : Stage._map[this._y - 1][this._x];
            if (this._power === 0) Stage.playVideo('audio/bulletCrack.mp3');
        }
        else if (Stage._map[this._y][this._x] === 8 || Stage._map[this._y][this._x] === 9) {
            this._exist = false;
            Stage._map[this._y][this._x] = -1;
            Stage.playVideo('audio/playerCrack.mp3');
            GameData.gameOver = true;
        }
    }

}

BulletSprite.prototype.hitEvent = function (obj) {
    if (obj._power !== this._power) {
        this._exist = false;
        this.texture.frame = new PIXI.Rectangle(0, 0, 0, 0);
        if (obj._hp > 0) {
            Stage.playVideo('audio/bulletCrack.mp3');
        }
    }
}


//========================================================================================================
// MapSprite地图精灵对象
//========================================================================================================
function MapSprite() {
    this.init.apply(this, arguments);
}

MapSprite.prototype = Object.create(Sprite.prototype);

MapSprite.prototype.constructor = MapSprite;

MapSprite.prototype.init = function () {
    Sprite.call(this);
    this._enemyTanks = GameData.enemys;
    this.create();
    this.createMapLayer();
    this.createTool();
}

MapSprite.prototype.create = function () {
    this._lowerLayer = new PIXI.Container();
    this._middleLayer = new PIXI.Container();
    this._upLayer = new PIXI.Container();
    this.addChild(this._lowerLayer);
    this.addChild(this._middleLayer);
    this.addChild(this._upLayer);
    this._gameOverSprite = new GameOverSprite();
    this.addChild(this._gameOverSprite);
}

MapSprite.prototype.createMapLayer = function () {
    this.loadMapData();
    this.createPlayer();
}

MapSprite.prototype.loadMapData = function () {
    const map = Stage._map;
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            this.createTile(map[i][j], i, j);
        }
    }
}

MapSprite.prototype.createTile = function (type, i, j) {
    const s = new MapTile(type, i, j);
    s.x = j * 16;
    s.y = i * 16;
    //砖墙和石墙
    if (type === 1 || type === 2) {
        this._middleLayer.addChild(s);
    }
    //树林
    else if (type === 3) {
        this._upLayer.addChild(s);
    }
    //河流
    else if (type === 4) {
        this._lowerLayer.addChild(s);
    }
    //冰
    else if (type === 5) {
        this._lowerLayer.addChild(s);
    }
    //家
    else if (type === 9) {
        this._middleLayer.addChild(s);
    }
}

MapSprite.prototype.update = function () {
    this.cretaeEnemyTank();
    this.hitEnemy();
	if(this._playerSprite&&!isPC()){
		let offX = this._playerSprite.x-9*16;
		offX = offX < 0? 0:offX;
		Stage.stage.x = -offX;

	}
}

MapSprite.prototype.createPlayer = function () {
    this._playerSprite = new TankSprite(0, 0);
    this._playerSprite.pos(9, 24);
    this._middleLayer.addChild(this._playerSprite);
    KeyWord['ArrowUp'] = () => {
        this._playerSprite.move(DIR_TOP);
    }
    KeyWord['ArrowDown'] = () => {
        this._playerSprite.move(DIR_DOWN);
    }
    KeyWord['ArrowRight'] = () => {
        this._playerSprite.move(DIR_RIGHT);
    }
    KeyWord['ArrowLeft'] = () => {
        this._playerSprite.move(DIR_LEFT);
    }
    KeyWord['Space'] = () => {
        this._playerSprite.shoot();
    }
}

MapSprite.prototype.cretaeEnemyTank = function () {
    //生成敌人
    if (GameData.maxTank > this._enemyTanks.length) {
        let tank = new TankSprite(Math.rand(2, 7), 1);
        tank.pos(GameData.point[Math.rand(0, 3)], 0);
        this._enemyTanks.push(tank);
        this._middleLayer.addChild(tank);
        this._numSprite = new NumberSprite();
        this._middleLayer.addChild(this._numSprite);
        this._middleLayer.addChild(tank);
    }
}



MapSprite.prototype.createTool = function () {
    this._toolSprite = new ToolSprite();
    this._middleLayer.addChild(this._toolSprite);
}

MapSprite.prototype.hitEnemy = function () {
    let chs = this._middleLayer.children.filter((e) => { return e.name === 'tank' || e.name === 'bullet' || e.name === 'tool' });
    for (let i = 0; i < chs.length - 1; i++) {
        for (let j = i + 1; j < chs.length; j++) {
            if (chs[i]._exist && chs[j]._exist) {
                if (Stage.hit(chs[i], chs[j])) {
                    chs[i].hitEvent(chs[j]);
                    chs[j].hitEvent(chs[i]);
                }
            }
        }
    }
}
//=============================================================================================
//动画对象
//============================================================================================
function AnimSprite() {
    this.init.apply(this, arguments);
}

AnimSprite.prototype = Object.create(Sprite.prototype);

AnimSprite.prototype.constructor = AnimSprite;

AnimSprite.prototype.init = function () {
    Sprite.call(this);
    this.texture = Loader.resources['images/tankAll.gif'].texture.clone();
    this.clear();
}

AnimSprite.prototype.start = function (frame, sx, sy, speed, loop, pd, bz) {
    this._frame = frame;
    this._loop = loop || false;
    this._pd = pd || 32;
    this._sx = sx;
    this._sy = sy;
    this._speed = speed;
    this._playing = true;
    this._bz = bz || 1;
}

AnimSprite.prototype.update = function () {
    if (this._playing) {
        this._timer--;
        if (this._timer < 0) {
            if (this._curFarme > this._frame) {
                if (this._loop) {
                    this._curFarme = 0;
                }
                else {
                    this.end();
                    this.clear();
                }
                return;
            }
            if (this._bz > 1) {
                this.texture.frame = new PIXI.Rectangle(this._sx, this._sy + this._curFarme * this._pd, this._pd, this._pd);
            }
            else {
                this.texture.frame = new PIXI.Rectangle(this._sx + this._curFarme * this._pd, this._sy, this._pd, this._pd);
            }
            this._timer = this._speed;
            this._curFarme++;
        }

    }
}

AnimSprite.prototype.clear = function () {
    this._timer = 20;
    this._frame = 0;
    this._loop = false;
    this._pd = 32;
    this._sx = 0;
    this._sy = 0;
    this._playing = false;
    this._curFarme = 0;
    this.texture.frame = new PIXI.Rectangle(0, 0, 0, 0);
}

AnimSprite.prototype.end = function () {

}
//=============================================================================================
//数字精灵类
//============================================================================================
function NumberSprite() {
    this.init.apply(this, arguments);
}

NumberSprite.prototype = Object.create(PIXI.Container.prototype);

NumberSprite.prototype.constructor = NumberSprite;

NumberSprite.prototype.init = function () {
    Sprite.call(this);
    this._num = 0;
    this._nums = [];
    this._texture = Loader.resources['images/tankAll.gif'].texture.setFrame(8 * 32, 96, 14, 14);
}
NumberSprite.prototype.showNum = function () {
    let num = this._num;
    this._nums = [];
    if (num === 0) this._nums.push(0);
    let i = 0;
    while (num !== 0) {
        let n = num % 10;
        this._nums.push(n);
        num = Math.floor(num / 10);
        i++;
    }
}
NumberSprite.prototype.createTexture = function (length) {
    let count = 0;
    length = length || this._nums.length;
    this.removeChildren(0);
    for (let i = length - 1; i >= 0; i--) {
        if (this._nums[i] === undefined) this._nums[i] = 0;
        let ns = new Sprite(this._texture.setFrame(256 + this._nums[i] * 14, 96, 14, 14));
        ns.x = 14 * count;
        count++;
        this.addChild(ns);
    }
}
NumberSprite.prototype.changeNum = function (num, length) {
    if (this._num === num || num < 0) return;
    this._num = num;
    this.showNum();
    this.createTexture(length);
}
//=============================================================================================
//道具精灵类
//=============================================================================================
function ToolSprite() {
    this.init.apply(this, arguments);
}

ToolSprite.prototype = Object.create(Sprite.prototype);

ToolSprite.prototype.constructor = ToolSprite;

ToolSprite.prototype.init = function () {
    Sprite.call(this);
    this.name = "tool";
    this._exist = true;
    this.texture = Loader.resources['images/tankAll.gif'].texture.setFrame(8 * 32, 32 * 3 + 14, 30 * 6, 30);
    this._timer = 0;
    this._exist = false;
}

ToolSprite.prototype.pos = function (x, y) {
    this.x = x * 16 + 1;
    this.y = y * 16 + 1;
    this._x = x;
    this._y = y;
}

ToolSprite.prototype.update = function () {
    if (GameData.tool) {
        GameData.tool = false;
        this.createTool(Math.rand(0, 6), Math.rand(0, 21), Math.rand(0, 21));
    }
    if (this._exist) {
        this.alpha = 1;
    }
    else {
        this.alpha = 0;
    }
    if (this._timer > 0) {
        if (this._timer < 120 && this._timer % 24 === 0) {

            Stage._map[23][11] = -1;
            Stage._map[23][12] = -1;
            Stage._map[23][13] = -1;
            Stage._map[23][14] = -1;
            Stage._map[24][11] = -1;
            Stage._map[25][11] = -1;
            Stage._map[24][14] = -1;
            Stage._map[25][14] = -1;

        }
        this._timer--;
    }
    else {
        this._timer = 0;
    }
}

ToolSprite.prototype.createTool = function (type, x, y) {
    this._exist = true;
    this._type = type;
    this.texture.frame = new PIXI.Rectangle(8 * 32 + 30 * type, 110, 30, 30);
    this.pos(x, y);
}

ToolSprite.prototype.hitEvent = function (obj) {

    if (obj.name === "tank" && obj._power === 0) {
        this._player = obj;
        this.toolEffect(this._type);
        this._exist = false;

    }
}

ToolSprite.prototype.toolEffect = function (type) {

    //+生命
    if (type === 0) {
        GameData.live++;
        Stage.playVideo('audio/prop.mp3');
    }
    //敌人停止
    else if (type === 1) {
        if (GameData.enemys) {
            GameData.enemys.forEach(t => {
                t.stop();
            });
        }
        Stage.playVideo('audio/prop.mp3');
    }
    else if (type === 2) {
        this._timer = 600;
        Stage._map[23][11] = -2;
        Stage._map[23][12] = -2;
        Stage._map[23][13] = -2;
        Stage._map[23][14] = -2;
        Stage._map[24][11] = -2;
        Stage._map[25][11] = -2;
        Stage._map[24][14] = -2;
        Stage._map[25][14] = -2;
        Stage.playVideo('audio/prop.mp3');
    }
    else if (type === 3) {
        if (GameData.enemys) {
            GameData.enemys.forEach(t => {
                t._hp = 0;
            });
        }
    }
    else if (type === 4) {
        if (this._player) {
            this._player._bL++;
            if (this._player._bL > 5) {
                this._player._bL = 5;
            }
            else if (this._player._bL > 3) {
                this._player._hp = 2;
            }
        }
        Stage.playVideo('audio/prop.mp3');
    }
    else if (type === 5) {
        if (this._player) {
            this._player.defAnim();
        }
        Stage.playVideo('audio/prop.mp3');
    }
    else {

    }
}



//=============================================================================================
//右侧UI栏精灵类
//============================================================================================
function UISprite() {
    this.init.apply(this, arguments);
}

UISprite.prototype = Object.create(PIXI.Container.prototype);

UISprite.prototype.constructor = UISprite;

UISprite.prototype.init = function () {
    PIXI.Container.call(this);
    this._texture = Loader.resources['images/tankAll.gif'].texture.clone();
    this.createBg();
    this.createPlayerLive();
    this.createLevel();
    this.createEnemyTankFlag();
    this.createSocre();
}

UISprite.prototype.createBg = function () {
    this._bg = new PIXI.Graphics();
    this._bg.beginFill(0x777777)
    this._bg.drawRect(0, 0, 64, Stage._height);
    this._bg.endFill();
    this.addChild(this._bg);
}

UISprite.prototype.createLevel = function () {
    this._gameLevel = new Sprite(this._texture.setFrame(60, 112, 30, 30));
    this._gameLevel.y = Stage._height - this._playerLive.height * 6;
    this.addChild(this._gameLevel);

    this._levelNum = new NumberSprite();

    this._levelNum.y = this._gameLevel.y + 17;
    this._levelNum.x = this._gameLevel.x + 30;
    this.addChild(this._levelNum);
}

UISprite.prototype.createEnemyTankFlag = function () {
    this._enemysSprite = [];
    for (let i = 0; i < GameData.enemyCount; i++) {
        let enemy = new Sprite(this._texture.setFrame(92, 112, 15, 15));
        enemy.y = 2 + (Math.floor(i / 2)) * 15;
        enemy.x = 20 + (i % 2) * 15;
        this._enemysSprite.push(enemy);
        this.addChild(enemy);
    }
}

UISprite.prototype.createPlayerLive = function () {
    this._playerLive = new Sprite(this._texture.setFrame(0, 112, 30, 30));
    this._playerLive.y = Stage._height - this._playerLive.height * 4;
    this.addChild(this._playerLive);
    this._liveNum = new NumberSprite();

    this._liveNum.y = Stage._height - this._playerLive.height * 4 + 15;
    this._liveNum.x = this._playerLive.x + 15;
    this.addChild(this._liveNum);
}

UISprite.prototype.createSocre = function () {
    this._scoreSprte = new NumberSprite();
    this._scoreSprte.y = this._playerLive.y - 16;
    this.addChild(this._scoreSprte);
}

UISprite.prototype.update = function () {
    this._liveNum.changeNum(GameData.live);
    this._levelNum.changeNum(GameData.level + 1);
    this._scoreSprte.changeNum(GameData.score);
    if (this._enemysSprite.length !== GameData.enemyCount) {
        //下一关
        if (GameData.enemyCount <= 0) {
            Stage._scene._isNext = true;
        }
        let e = this._enemysSprite.pop();
        this.children.remove(e);
    }
}
//=============================================================================================
//游戏结束GameOverSprite类
//============================================================================================
function GameOverSprite() {
    this.init.apply(this, arguments);
}

GameOverSprite.prototype = Object.create(Sprite.prototype);

GameOverSprite.prototype.constructor = GameOverSprite;

GameOverSprite.prototype.init = function () {
    Sprite.call(this);
    this.texture = Loader.resources['images/tankAll.gif'].texture.setFrame(12 * 32, 64, 64, 32);
    this.x = 11 * 16;
    this.y = 24 * 16;
    this.alpha = 0;
    this._gameOver = false;
}

GameOverSprite.prototype.update = function () {
    if (GameData.gameOver) {
        if (this.y >= -32) {
            this.alpha = 1;
            this.y -= 3;
        }
        else {
            Stage.scene(MenuScene)
        }
    }
}