"use strict";
(function () {
    var main = function () {
        var canvas = document.getElementsByTagName("canvas")[0];
        var ctx = canvas.getContext("2d");
        var font = "EnvyCodeR";
        var font_height = 20;
        ctx.font = String(font_height) + "px " + font;
        var font_width = ctx.measureText("a").width;
        var grid_width = 0;
        var grid_height = 0;
        var resize = function () {
            grid_width = Math.ceil(innerWidth / font_width);
            grid_height = Math.ceil(innerHeight / font_height);
            canvas.width = innerWidth;
            canvas.height = innerHeight;
        };
        resize();
        addEventListener("resize", resize);
        var FireParticle = /** @class */ (function () {
            function FireParticle() {
                var _this = this;
                this.x = 0;
                this.y = 0;
                this.health = 30;
                this.alive = true;
                this.draw = function () {
                    ctx.fillStyle = "white";
                    ctx.fillText("a", 0, 0);
                };
                this.update = function () {
                    if (!_this.alive)
                        return;
                    _this.y--;
                    _this.health--;
                    if (_this.health < 0)
                        _this.alive = false;
                };
                this.reset = function () {
                    _this.x = Math.round(Math.random() * grid_width);
                    _this.y = canvas.height;
                    _this.health = 30;
                    _this.alive = true;
                };
                this.reset();
            }
            return FireParticle;
        }());
        var particles = [];
        var ticks = 0;
        var add_new_particle = function () {
            for (var i = 0; i < particles.length; i++) {
                if (!particles[i].alive) {
                    particles[i].reset();
                    return;
                }
            }
            particles.push(new FireParticle());
        };
        var loop = function () {
            ctx.fillStyle = "white";
            ctx.fillText("asdkfj", 0, 0);
            ////ctx.clearRect(0, 0, canvas.width, canvas.height);
            //
            //if(ticks === 30) {
            //  add_new_particle();
            //  ticks = 0;
            //}
            //
            //for(let i = 0; i < particles.length; i ++) {
            //  particles[i].update();
            //  particles[i].draw();
            //}
            //
            //ticks ++;
            requestAnimationFrame(loop);
        };
        requestAnimationFrame(loop);
    };
    addEventListener("load", main);
})();
