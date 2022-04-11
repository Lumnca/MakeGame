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
//MapTile
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

}

//=======================================================================================================
//TankSprite
//=======================================================================================================

function TankSprite() {
    this.init.apply(this, arguments);
}

TankSprite.prototype = Object.create(Sprite.prototype);

TankSprite.prototype.constructor = TankSprite;

TankSprite.prototype.init = function (type) {
    Sprite.call(this);
    this.name = "tank";
    let row = Math.floor(type / 2);
    let col = Math.floor(type % 2);
    this.texture = Loader.resources['images/tankAll.gif'].texture.setFrame(col * 32 * 4, row * 32, 32, 32);
    this._row = col * 32 * 4;
    this._col = row * 32;
    this.initData();
}
TankSprite.prototype.initData = function () {
    this._speed = 1;
    this._dir = DIR_TOP;
    this._bulletSpeet = 2;
    this._power = 0;
    this._pd = 16;
    this._x = 0;
    this._y = 0;
    this._goalX = 0;
    this._goalY = 0;
    this._dirCount = 100;
    this._moving = false;
    this._exist = true;
}

TankSprite.prototype.createAnim = function () {
    if (!this._anim) {
        this._anim = new AnimSprite();
        this._anim.end = () => {
            this.removeChildren(0);
            this._anim = null;
        }
        this.addChild(this._anim);

    }
}
TankSprite.prototype.update = function () {
    if (!this._exist) return;
    this.updatePosition();
    this.updateDir();
    if (this._power !== 0) {
        this.enemyMove();
    }
}

TankSprite.prototype.updatePosition = function () {
    this.getPoint();
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
    if (this._exist) {


        if (this._power === 0) Stage.playVideo('audio/attack.mp3');
        if (!this._bullet) {
            this._bullet = new BulletSprite(this._dir, this._power);
            this._bullet.pos(this.x + 16, this.y + 16);
            this.parent.addChild(this._bullet);
        }
        else {
            this._bullet._dir = this._dir;
            this._bullet.createTexture();
            this._bullet.pos(this.x + 16, this.y + 16);
        }
    }
}

TankSprite.prototype.hide = function () {
    this.texture.frame = new PIXI.Rectangle(0, 0, 0, 0);
    this.alpha = 0;
    this._exist = false;
}

TankSprite.prototype.show = function () {
    this.updateDir();
    this._exist = true;
    this.alpha = 1;
}

TankSprite.prototype.hitEvent = function (obj) {
    if (obj.name === 'tank' && this._power === 0) {
        this._exist = false;
        this.texture.frame = new PIXI.Rectangle(0, 0, 0, 0);
        this.createAnim();
        Stage.playVideo('audio/playerCrack.mp3');
        this._anim.start(3, 10 * 32, 0, 10, false, 32);
    }
    if (obj.name === 'bullet' && this._power !== obj._power) {
        this._exist = false;
        this.texture.frame = new PIXI.Rectangle(0, 0, 0, 0);
        this.createAnim();
        this._anim.start(3, 10 * 32, 0, 10, false, 32);
        if (this._power !== 0) Stage.playVideo('audio/tankCrack.mp3');
        else Stage.playVideo('audio/playerCrack.mp3');
    }
}
//========================================================================================================
// 子弹对象
//========================================================================================================
function BulletSprite() {
    this.init.apply(this, arguments);
}

BulletSprite.prototype = Object.create(Sprite.prototype);

BulletSprite.prototype.constructor = BulletSprite;

BulletSprite.prototype.init = function (dir, type) {
    Sprite.call(this);
    this.name = "bullet";
    this._dir = dir;
    this._power = type;
    this._speed = 3;
    this._x = 0;
    this._y = 0;
    this._pd = 16;
    this._exist = true;
    this._level = 1;
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
            if(this._power===0) Stage.playVideo('audio/bulletCrack.mp3');
           
        }
        //能否拆石墙
        else if ((Stage._map[this._y][this._x] === 2 && Stage._map[this._y][this._x] > this._level) ||
            (Stage._map[this._y][this._x - 1] === 2 && Stage._map[this._y][this._x - 1] > this._level)) {
            this._exist = false;
            if(this._power===0) Stage.playVideo('audio/bulletCrack.mp3');
        }
        else if (Stage._map[this._y][this._x] === 8 || Stage._map[this._y][this._x] === 9) {
            this._exist = false;
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
            if(this._power===0) Stage.playVideo('audio/bulletCrack.mp3');
        }
        //能否拆石墙
        else if ((Stage._map[this._y][this._x] === 2 && Stage._map[this._y][this._x] > this._level) ||
            (Stage._map[this._y - 1][this._x] === 2 && Stage._map[this._y - 1][this._x] > this._level)) {
            this._exist = false;
            if(this._power===0) Stage.playVideo('audio/bulletCrack.mp3');
        }
        else if (Stage._map[this._y][this._x] === 8 || Stage._map[this._y][this._x] === 9) {
            this._exist = false;
            Stage.playVideo('audio/playerCrack.mp3');
            GameData.gameOver = true;
        }
    }

}

BulletSprite.prototype.hitEvent = function (obj) {
    if (obj._power !== this._power) {
        this._exist = false;
        this.texture.frame = new PIXI.Rectangle(0, 0, 0, 0);
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
    this._maxTankCount = 5;
    this._enemyTanks = [];
    this.create();
    this.createMapLayer();
    window.tanks = this._enemyTanks;
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
}

MapSprite.prototype.createPlayer = function () {
    this._playerSprite = new TankSprite(5);
    this._playerSprite.pos(9, 24);
    this._playerSprite._speed = 2;
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
    if (this._maxTankCount > this._enemyTanks.length) {
        let tank = new TankSprite(this._enemyTanks.length);
        tank.pos(Math.rand(0, Stage._map[0].length), 0);
        tank._power = 1;
        this._enemyTanks.push(tank);
        this._middleLayer.addChild(tank);
    }
}

MapSprite.prototype.hitEnemy = function () {
    let chs = this._middleLayer.children.filter((e) => { return e.name === 'tank' || e.name === 'bullet' });
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
    this.texture = Loader.resources['images/tankAll.gif'].texture;
    this.clear();
}

AnimSprite.prototype.start = function (frame, sx, sy, speed, loop, pd) {
    this._frame = frame;
    this._loop = loop || false;
    this._pd = pd || 32;
    this._sx = sx;
    this._sy = sy;
    this._speed = speed;
    this._playing = true;
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

            this.texture.frame = new PIXI.Rectangle(this._sx + this._curFarme * this._pd, this._sy, this._pd, this._pd);
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
//游戏结束
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