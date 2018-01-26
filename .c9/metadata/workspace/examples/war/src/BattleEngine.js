{"filter":false,"title":"BattleEngine.js","tooltip":"/examples/war/src/BattleEngine.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":144,"column":8},"end":{"row":144,"column":9},"action":"insert","lines":["r"],"id":0}],[{"start":{"row":144,"column":9},"end":{"row":144,"column":10},"action":"insert","lines":["e"],"id":1}],[{"start":{"row":144,"column":10},"end":{"row":144,"column":11},"action":"insert","lines":["t"],"id":2}],[{"start":{"row":144,"column":11},"end":{"row":144,"column":12},"action":"insert","lines":["u"],"id":3}],[{"start":{"row":144,"column":12},"end":{"row":144,"column":13},"action":"insert","lines":["r"],"id":4}],[{"start":{"row":144,"column":13},"end":{"row":144,"column":14},"action":"insert","lines":["n"],"id":5}],[{"start":{"row":144,"column":14},"end":{"row":144,"column":15},"action":"insert","lines":[";"],"id":6}],[{"start":{"row":17,"column":43},"end":{"row":17,"column":44},"action":"remove","lines":["5"],"id":7},{"start":{"row":17,"column":43},"end":{"row":17,"column":44},"action":"insert","lines":["2"]}],[{"start":{"row":17,"column":44},"end":{"row":17,"column":45},"action":"insert","lines":["5"],"id":8}],[{"start":{"row":17,"column":49},"end":{"row":17,"column":50},"action":"remove","lines":["5"],"id":9}],[{"start":{"row":17,"column":49},"end":{"row":17,"column":50},"action":"insert","lines":["2"],"id":10}],[{"start":{"row":17,"column":50},"end":{"row":17,"column":51},"action":"insert","lines":["5"],"id":11}],[{"start":{"row":108,"column":4},"end":{"row":108,"column":5},"action":"remove","lines":["/"],"id":12}],[{"start":{"row":108,"column":4},"end":{"row":108,"column":5},"action":"remove","lines":["/"],"id":13}],[{"start":{"row":108,"column":41},"end":{"row":108,"column":42},"action":"remove","lines":["1"],"id":14}],[{"start":{"row":108,"column":41},"end":{"row":108,"column":42},"action":"insert","lines":["0"],"id":15}],[{"start":{"row":108,"column":42},"end":{"row":108,"column":43},"action":"insert","lines":["."],"id":16}],[{"start":{"row":108,"column":43},"end":{"row":108,"column":44},"action":"insert","lines":["5"],"id":17}],[{"start":{"row":108,"column":45},"end":{"row":108,"column":46},"action":"remove","lines":["1"],"id":18}],[{"start":{"row":108,"column":45},"end":{"row":108,"column":46},"action":"insert","lines":["0"],"id":19}],[{"start":{"row":108,"column":46},"end":{"row":108,"column":47},"action":"insert","lines":["."],"id":20}],[{"start":{"row":108,"column":47},"end":{"row":108,"column":48},"action":"insert","lines":["5"],"id":21}],[{"start":{"row":64,"column":21},"end":{"row":64,"column":22},"action":"remove","lines":["8"],"id":22},{"start":{"row":64,"column":21},"end":{"row":64,"column":22},"action":"insert","lines":["5"]}],[{"start":{"row":68,"column":21},"end":{"row":68,"column":22},"action":"remove","lines":["8"],"id":23}],[{"start":{"row":68,"column":21},"end":{"row":68,"column":22},"action":"insert","lines":["5"],"id":24}],[{"start":{"row":145,"column":5},"end":{"row":146,"column":0},"action":"insert","lines":["",""],"id":25},{"start":{"row":146,"column":0},"end":{"row":146,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":146,"column":4},"end":{"row":147,"column":0},"action":"insert","lines":["",""],"id":26},{"start":{"row":147,"column":0},"end":{"row":147,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":147,"column":0},"end":{"row":147,"column":4},"action":"remove","lines":["    "],"id":27}],[{"start":{"row":146,"column":4},"end":{"row":147,"column":0},"action":"remove","lines":["",""],"id":28}],[{"start":{"row":146,"column":0},"end":{"row":146,"column":4},"action":"remove","lines":["    "],"id":29}],[{"start":{"row":145,"column":5},"end":{"row":146,"column":0},"action":"remove","lines":["",""],"id":30}],[{"start":{"row":146,"column":17},"end":{"row":147,"column":0},"action":"insert","lines":["",""],"id":31},{"start":{"row":147,"column":0},"end":{"row":147,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":147,"column":4},"end":{"row":148,"column":0},"action":"insert","lines":["",""],"id":32},{"start":{"row":148,"column":0},"end":{"row":148,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":147,"column":4},"end":{"row":149,"column":73},"action":"insert","lines":["utils.drawBar(this.healthbar, xbar, ybar, function(pct){","            return utils.rgbToHex((pct > 0.5 ? 1 - 2 * (pct - 0.5) : 1.0) * 255, (pct > 0.5 ? 1.0 : 2 * pct) * 255, 0);","        }, widthbar, 5, this.sprite.health, constants.PLAYER_MAX_HEALTH);"],"id":33}],[{"start":{"row":151,"column":4},"end":{"row":152,"column":59},"action":"remove","lines":["var xbar = this.sprite.x - this.sprite.width / 2;","    var ybar = this.sprite.y - this.sprite.height / 2 - 15;"],"id":34}],[{"start":{"row":147,"column":4},"end":{"row":148,"column":0},"action":"insert","lines":["",""],"id":35},{"start":{"row":148,"column":0},"end":{"row":148,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":147,"column":4},"end":{"row":148,"column":59},"action":"insert","lines":["var xbar = this.sprite.x - this.sprite.width / 2;","    var ybar = this.sprite.y - this.sprite.height / 2 - 15;"],"id":36}],[{"start":{"row":151,"column":73},"end":{"row":167,"column":28},"action":"remove","lines":["","    ","    ","    if (this._lasthp !== this.sprite.health) {","        this.healthbar.clear();","        var x = (this.sprite.health / this._maxhealth) * 100;","        var colour = utils.rgbToHex((x > 50 ? 1-2*(x-50)/100.0 : 1.0) * 255, (x > 50 ? 1.0 : 2*x/100.0) * 255, 0);","","        this.healthbar.beginFill(colour);","        this.healthbar.lineStyle(8, colour, 1);","","        this.healthbar.moveTo(0, 0);","        this.healthbar.lineTo((this.sprite.width * this.sprite.health / this._maxhealth), 0);","        this.healthbar.endFill();","    }","    this.healthbar.x = xbar;","    this.healthbar.y = ybar;"],"id":37}],[{"start":{"row":151,"column":11},"end":{"row":151,"column":19},"action":"remove","lines":["widthbar"],"id":38},{"start":{"row":151,"column":11},"end":{"row":151,"column":28},"action":"insert","lines":["this.sprite.width"]}],[{"start":{"row":151,"column":53},"end":{"row":151,"column":80},"action":"remove","lines":["constants.PLAYER_MAX_HEALTH"],"id":39},{"start":{"row":151,"column":53},"end":{"row":151,"column":54},"action":"insert","lines":["t"]}],[{"start":{"row":151,"column":54},"end":{"row":151,"column":55},"action":"insert","lines":["h"],"id":40}],[{"start":{"row":151,"column":55},"end":{"row":151,"column":56},"action":"insert","lines":["i"],"id":41}],[{"start":{"row":151,"column":56},"end":{"row":151,"column":57},"action":"insert","lines":["s"],"id":42}],[{"start":{"row":151,"column":57},"end":{"row":151,"column":58},"action":"insert","lines":["."],"id":43}],[{"start":{"row":151,"column":58},"end":{"row":151,"column":59},"action":"insert","lines":["_"],"id":44}],[{"start":{"row":151,"column":58},"end":{"row":151,"column":59},"action":"remove","lines":["_"],"id":45},{"start":{"row":151,"column":58},"end":{"row":151,"column":68},"action":"insert","lines":["_maxhealth"]}],[{"start":{"row":24,"column":22},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":46},{"start":{"row":25,"column":0},"end":{"row":25,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":25,"column":4},"end":{"row":25,"column":5},"action":"insert","lines":["t"],"id":47}],[{"start":{"row":25,"column":5},"end":{"row":25,"column":6},"action":"insert","lines":["h"],"id":48}],[{"start":{"row":25,"column":6},"end":{"row":25,"column":7},"action":"insert","lines":["i"],"id":49}],[{"start":{"row":25,"column":7},"end":{"row":25,"column":8},"action":"insert","lines":["s"],"id":50}],[{"start":{"row":25,"column":8},"end":{"row":25,"column":9},"action":"insert","lines":["."],"id":51}],[{"start":{"row":25,"column":9},"end":{"row":25,"column":10},"action":"insert","lines":["f"],"id":52}],[{"start":{"row":25,"column":10},"end":{"row":25,"column":11},"action":"insert","lines":["e"],"id":53}],[{"start":{"row":25,"column":11},"end":{"row":25,"column":12},"action":"insert","lines":["v"],"id":54}],[{"start":{"row":25,"column":12},"end":{"row":25,"column":13},"action":"insert","lines":["e"],"id":55}],[{"start":{"row":25,"column":13},"end":{"row":25,"column":14},"action":"insert","lines":["r"],"id":56}],[{"start":{"row":25,"column":14},"end":{"row":25,"column":15},"action":"insert","lines":[" "],"id":57}],[{"start":{"row":25,"column":15},"end":{"row":25,"column":16},"action":"insert","lines":["="],"id":58}],[{"start":{"row":25,"column":16},"end":{"row":25,"column":17},"action":"insert","lines":[" "],"id":59}],[{"start":{"row":25,"column":17},"end":{"row":25,"column":18},"action":"insert","lines":["1"],"id":60}],[{"start":{"row":25,"column":18},"end":{"row":25,"column":19},"action":"insert","lines":["0"],"id":61}],[{"start":{"row":25,"column":19},"end":{"row":25,"column":20},"action":"insert","lines":[";"],"id":62}],[{"start":{"row":24,"column":22},"end":{"row":25,"column":20},"action":"remove","lines":["","    this.fever = 10;"],"id":63}],[{"start":{"row":175,"column":37},"end":{"row":176,"column":0},"action":"insert","lines":["",""],"id":64},{"start":{"row":176,"column":0},"end":{"row":176,"column":12},"action":"insert","lines":["            "]}],[{"start":{"row":176,"column":12},"end":{"row":176,"column":13},"action":"insert","lines":["t"],"id":65}],[{"start":{"row":176,"column":13},"end":{"row":176,"column":14},"action":"insert","lines":["h"],"id":66}],[{"start":{"row":176,"column":14},"end":{"row":176,"column":15},"action":"insert","lines":["i"],"id":67}],[{"start":{"row":176,"column":15},"end":{"row":176,"column":16},"action":"insert","lines":["s"],"id":68}],[{"start":{"row":176,"column":16},"end":{"row":176,"column":17},"action":"insert","lines":["."],"id":69}],[{"start":{"row":176,"column":17},"end":{"row":176,"column":18},"action":"insert","lines":["u"],"id":70}],[{"start":{"row":176,"column":18},"end":{"row":176,"column":19},"action":"insert","lines":["p"],"id":71}],[{"start":{"row":176,"column":19},"end":{"row":176,"column":20},"action":"insert","lines":["g"],"id":72}],[{"start":{"row":176,"column":20},"end":{"row":176,"column":21},"action":"insert","lines":["r"],"id":73}],[{"start":{"row":176,"column":21},"end":{"row":176,"column":22},"action":"insert","lines":["a"],"id":74}],[{"start":{"row":176,"column":22},"end":{"row":176,"column":23},"action":"insert","lines":["d"],"id":75}],[{"start":{"row":176,"column":23},"end":{"row":176,"column":24},"action":"insert","lines":["e"],"id":76}],[{"start":{"row":176,"column":24},"end":{"row":176,"column":26},"action":"insert","lines":["()"],"id":77}],[{"start":{"row":176,"column":25},"end":{"row":176,"column":25},"action":"insert","lines":[""],"id":78}],[{"start":{"row":176,"column":26},"end":{"row":176,"column":27},"action":"insert","lines":[";"],"id":79}],[{"start":{"row":120,"column":4},"end":{"row":120,"column":5},"action":"insert","lines":["/"],"id":80}],[{"start":{"row":120,"column":5},"end":{"row":120,"column":6},"action":"insert","lines":["/"],"id":81}],[{"start":{"row":17,"column":43},"end":{"row":17,"column":45},"action":"remove","lines":["25"],"id":82},{"start":{"row":17,"column":43},"end":{"row":17,"column":44},"action":"insert","lines":["5"]}],[{"start":{"row":17,"column":48},"end":{"row":17,"column":49},"action":"remove","lines":["2"],"id":83}],[{"start":{"row":108,"column":41},"end":{"row":108,"column":44},"action":"remove","lines":["0.5"],"id":84},{"start":{"row":108,"column":41},"end":{"row":108,"column":42},"action":"insert","lines":["1"]}],[{"start":{"row":108,"column":43},"end":{"row":108,"column":46},"action":"remove","lines":["0.5"],"id":85},{"start":{"row":108,"column":43},"end":{"row":108,"column":44},"action":"insert","lines":["1"]}],[{"start":{"row":87,"column":48},"end":{"row":87,"column":49},"action":"remove","lines":["2"],"id":86},{"start":{"row":87,"column":48},"end":{"row":87,"column":49},"action":"insert","lines":["4"]}],[{"start":{"row":96,"column":61},"end":{"row":96,"column":62},"action":"remove","lines":["2"],"id":87},{"start":{"row":96,"column":61},"end":{"row":96,"column":62},"action":"insert","lines":["1"]}],[{"start":{"row":96,"column":25},"end":{"row":96,"column":42},"action":"insert","lines":["game.rnd.between("],"id":88}],[{"start":{"row":96,"column":64},"end":{"row":96,"column":72},"action":"remove","lines":[" * (1 + "],"id":89}],[{"start":{"row":96,"column":64},"end":{"row":96,"column":69},"action":"remove","lines":["level"],"id":90}],[{"start":{"row":96,"column":64},"end":{"row":96,"column":65},"action":"remove","lines":["/"],"id":91}],[{"start":{"row":96,"column":64},"end":{"row":96,"column":65},"action":"remove","lines":["1"],"id":92}],[{"start":{"row":96,"column":64},"end":{"row":96,"column":65},"action":"remove","lines":["0"],"id":93}],[{"start":{"row":96,"column":42},"end":{"row":96,"column":47},"action":"insert","lines":["level"],"id":94}],[{"start":{"row":96,"column":47},"end":{"row":96,"column":48},"action":"insert","lines":[","],"id":95}],[{"start":{"row":96,"column":48},"end":{"row":96,"column":49},"action":"insert","lines":[" "],"id":96}],[{"start":{"row":96,"column":71},"end":{"row":96,"column":72},"action":"insert","lines":[" "],"id":97}],[{"start":{"row":96,"column":72},"end":{"row":96,"column":73},"action":"insert","lines":["*"],"id":98}],[{"start":{"row":96,"column":73},"end":{"row":96,"column":74},"action":"insert","lines":[" "],"id":99}],[{"start":{"row":96,"column":74},"end":{"row":96,"column":79},"action":"insert","lines":["level"],"id":100}]]},"ace":{"folds":[],"scrolltop":1844.6669921875,"scrollleft":2,"selection":{"start":{"row":99,"column":0},"end":{"row":99,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":3,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1416960685000,"hash":"61f2322c34737a485d31321696ccdb9b8aa8e21d"}