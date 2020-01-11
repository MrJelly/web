
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {};generateEUI.paths['resource/skins/GameOverSkin.exml'] = window.GameOverSkin = (function (_super) {
	__extends(GameOverSkin, _super);
	function GameOverSkin() {
		_super.call(this);
		this.skinParts = ["closeBtn","scoreText"];
		
		this.height = 1206;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this.closeBtn_i(),this.scoreText_i()];
	}
	var _proto = GameOverSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.source = "over_png";
		t.verticalCenter = 0;
		t.width = 535.34;
		return t;
	};
	_proto.closeBtn_i = function () {
		var t = new eui.Image();
		this.closeBtn = t;
		t.horizontalCenter = 0;
		t.source = "clearok_png";
		t.verticalCenter = 112;
		return t;
	};
	_proto.scoreText_i = function () {
		var t = new eui.Label();
		this.scoreText = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 61.433;
		t.horizontalCenter = 0;
		t.size = 50;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xFF0000;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		t.width = 206.987;
		return t;
	};
	return GameOverSkin;
})(eui.Skin);generateEUI.paths['resource/skins/GameSceneSkin.exml'] = window.GameSceneSkin = (function (_super) {
	__extends(GameSceneSkin, _super);
	function GameSceneSkin() {
		_super.call(this);
		this.skinParts = ["yinTextField","jinTextField","timeTextField"];
		
		this.height = 1400;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this.yinTextField_i(),this.jinTextField_i(),this.timeTextField_i(),this._Label1_i()];
	}
	var _proto = GameSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 310;
		t.source = "bg_head_png";
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 1090;
		t.source = "bg_bottom_png";
		t.width = 750;
		t.x = 0;
		t.y = 310;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 172;
		t.source = "ji_png";
		t.width = 206;
		t.x = 272;
		t.y = 170;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 84;
		t.source = "jin_png";
		t.width = 226;
		t.x = 20;
		t.y = 15;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 84;
		t.source = "yin_png";
		t.width = 226;
		t.x = 270;
		t.y = 15;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 84;
		t.source = "time_png";
		t.width = 206;
		t.x = 524;
		t.y = 15;
		return t;
	};
	_proto.yinTextField_i = function () {
		var t = new eui.Label();
		this.yinTextField = t;
		t.height = 40;
		t.size = 36;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 368;
		t.y = 45;
		return t;
	};
	_proto.jinTextField_i = function () {
		var t = new eui.Label();
		this.jinTextField = t;
		t.border = false;
		t.height = 40;
		t.size = 36;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 100;
		t.x = 118;
		t.y = 45;
		return t;
	};
	_proto.timeTextField_i = function () {
		var t = new eui.Label();
		this.timeTextField = t;
		t.height = 40;
		t.size = 36;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.verticalAlign = "middle";
		t.width = 90;
		t.x = 608.224;
		t.y = 43.653;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.text = "s";
		t.x = 680.543;
		t.y = 50.194;
		return t;
	};
	return GameSceneSkin;
})(eui.Skin);