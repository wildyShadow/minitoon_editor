window._$b = function() {
    var a = {};
    a.hide = true;
    a._$9I = true;
    a._$2d = -1;
    a.Obj = document.createElement('div');
    a.Obj.id = "sticker";
    a._$59 = function() {
        this.mobile = window._$1C._$8m();
        this.title = document.createElement("div");
        this.text = document.createElement("div");
        this.Obj.className = "sticker";
        this.title.className = "sticker-title";
        this.text.className = "sticker-text";
        window.addEventListener("resize", function() {
            this.hide = true;
            this._$5n();
        }
        .bind(this));
        if (this.mobile == true) {
            window.addEventListener("touchmove", function() {
                this.hide = true;
                this._$5n();
            }
            .bind(this));
        } else {
            window.addEventListener("mouseup", function() {
                this.hide = true;
                this._$5n();
            }
            .bind(this));
        }
        window.addEventListener("mouseover", this._$9K.bind(this));
        this.Obj.appendChild(this.title);
        this.Obj.appendChild(this.text);
        document.body.appendChild(this.Obj);
        this.Obj.style.left = 0;
        this.Obj.style.top = 0;
    }
    ;
    a._$9H = function(a) {
        var b = {
            "title": "",
            "text": ''
        };
        if ("stickerTitle"in a.dataset) {
            b.title = a.dataset.stickerTitle;
        }
        if ("stickerText"in a.dataset) {
            b.text = a.dataset.stickerText;
        }
        if ("stickerEpoch"in a.dataset) {
            b.epoch = parseInt(a.dataset.stickerEpoch);
        }
        if ("stickerEpochType"in a.dataset) {
            b.epochType = parseInt(a.dataset.stickerEpochType);
        }
        return b;
    }
    ;
    a._$76 = function(a) {
        return a.hasAttribute("-sticker") || a.hasAttribute("x-sticker");
    }
    ;
    a._$2z = function() {
        var c = document.querySelectorAll("[-sticker='true']");
        for (var b = 0; b < c.length; b++) {
            var a = c[b];
            a.stickerData = {
                "title": "",
                "text": ''
            };
            if ("stickerTitle"in a.dataset) {
                a.stickerData.title = a.dataset.stickerTitle;
            }
            if ("stickerText"in a.dataset) {
                a.stickerData.text = a.dataset.stickerText;
            }
            if ("stickerEpoch"in a.dataset) {
                a.stickerData.epoch = parseInt(a.dataset.stickerEpoch);
            }
            if ("stickerEpochType"in a.dataset) {
                a.stickerData.epochType = parseInt(a.dataset.stickerEpochType);
            }
        }
    }
    ;
    a._$ag = function(a) {
        this._$9I = true;
        if ("title"in a) {
            this.title.textContent = a.title;
        } else {
            this.title.textContent = "";
        }
        if ("text"in a) {
            this.text.textContent = a.text;
        } else if ("html"in a) {
            this.text.textContent = a.html;
        } else {
            this.text.textContent = "";
        }
        if ("epoch"in a && "epochType"in a && "TM"in window) {
            this.title.textContent = window.TM._$3S(a.epoch, a.epochType);
        }
        if ("title-style"in a) {
            for (var b in a['title-style']) {
                this.title.style[b] = a['title-style'][b];
            }
        }
        if ("text-style"in a) {
            for (var b in a['text-style']) {
                this.text.style[b] = a['text-style'][b];
            }
        }
        if ("style"in a) {
            for (var b in a['style']) {
                this.Obj.style[b] = a['style'][b];
            }
        }
        if ("fixed"in a) {
            this._$2d = a.fixed;
        }
        return 0;
    }
    ;
    a._$5n = function(c) {
        if (this._$9I == true) {
            this.title.removeAttribute('style');
            this.text.removeAttribute('style');
            this.Obj.removeAttribute('style');
            this._$9I = false;
        }
        var b = this.Obj.style.left;
        var a = this.Obj.style.top;
        this.Obj.style.display = 'none';
        this.Obj.style.left = b;
        this.Obj.style.top = a;
        this._$2d = -1;
        return 0;
    }
    ;
    a._$8T = function(f) {
        var a = f.target.getBoundingClientRect();
        var d = this.Obj.offsetHeight;
        var e = this.Obj.offsetWidth;
        if (this._$2d == "right") {
            var c = a.left + a.width + 6;
            var b = a.top + (a.height - d) / 2;
        } else {
            var c = a.left + (a.width - e) / 2;
            var b = a.top - d - 4;
        }
        if (b < 4) {
            if (this._$2d == "right") {
                b = 4;
            } else {
                b += a.height + d + 8;
            }
        }
        if (c < 5) {
            c = 5;
        }
        if (c + e > window.innerWidth - 5) {
            c = window.innerWidth - e - 5;
        }
        if (b + d > window.innerHeight - 5) {
            b = window.innerHeight - d - 5;
        }
        this.Obj.style.left = c;
        this.Obj.style.top = b;
        return 0;
    }
    ;
    a._$8u = function() {
        this.hide = true;
        this._$5n();
    }
    ;
    a._$81 = function(b, a) {
        var c = b.target;
        if ("hide"in a) {
            this._$8u();
            return -1;
        }
        if ("mobile"in a) {
            if (this.mobile == true) {
                this._$8u();
                return -1;
            }
        }
        this._$5n();
        this.hide = false;
        this._$ag(a);
        this.Obj.style.display = "unset";
        this._$8T(b);
    }
    ;
    a._$9K = function(c) {
        if (this.mobile == true) {}
        var a = c.target;
        var d = this._$76(a);
        if (typeof a === "undefined") {
            return 0;
        }
        if (!d && this.hide == true) {
            return 0;
        }
        var b = true;
        if ("stickerDisplayFn"in a) {
            b = a.stickerDisplayFn();
        } else if (d == false) {
            b = false;
        }
        var e = this._$9H(a);
        if (b == true) {
            this._$81(c, e);
        } else {
            this._$8u();
        }
        return 0;
    }
    ;
    a._$59();
    return a;
}
;
window._$9x = function(b) {
    var a = {};
    a.Obj = document.createElement('div');
    a.Obj.id = "etiquette";
    a._$7z = b;
    a._$89 = 0;
    a.time = 0.2;
    a._$7v = false;
    a._$59 = function(a) {
        if (typeof a === "undefined") {
            this._$7v = a;
        }
        this.mobile = window._$1C._$8m();
        this.title = document.createElement("div");
        this.text = document.createElement("div");
        this.Obj.className = "etiquette";
        this.title.className = "etiquette-title";
        this.text.className = "etiquette-text";
        this.etiquette = 0;
        this.title.etiquette = 0;
        this.text.etiquette = 0;
        this._$7z.addEventListener("mousemove", this._$9K.bind(this));
        this._$7z.addEventListener("mouseout", function(a) {
            if (this._$89 != 0) {
                this._$89 = 0;
                this._$5n();
            }
        }
        .bind(this));
        this.Obj.appendChild(this.title);
        this.Obj.appendChild(this.text);
        this._$7z.appendChild(this.Obj);
        this.Obj.style.left = 0;
        this.Obj.style.top = 0;
        return 0;
    }
    ;
    a._$ag = function(a) {
        if ("title"in a) {
            this.title.textContent = a.title;
        } else {
            this.title.textContent = "";
        }
        if ("text"in a) {
            this.text.textContent = a.text;
        } else if ("html"in a) {
            this.text.textContent = a.html;
        } else {
            this.text.textContent = "";
        }
        if ("title-style"in a) {
            for (var b in a['title-style']) {
                this.title.style[b] = a['title-style'][b];
            }
        }
        if ("text-style"in a) {
            for (var b in a['text-style']) {
                this.text.style[b] = a['text-style'][b];
            }
        }
        if ("style"in a) {
            for (var b in a['style']) {
                this.Obj.style[b] = a['style'][b];
            }
        }
        return 0;
    }
    ;
    a._$5n = function(c) {
        var b = this.Obj.style.left;
        var a = this.Obj.style.top;
        this.title.removeAttribute('style');
        this.text.removeAttribute('style');
        this.Obj.removeAttribute('style');
        this.Obj.style.display = 'none';
        this.Obj.style.left = b;
        this.Obj.style.top = a;
        return 0;
    }
    ;
    a._$8T = function(e, j) {
        var b = e.clientX;
        var a = e.clientY;
        var c = this.Obj.offsetWidth;
        var d = this.Obj.offsetHeight;
        var h = window.innerWidth;
        var i = window.innerHeight;
        var f = b + 7
          , g = a + 2;
        if (b + c > h) {
            f = b - c - 1;
        }
        if (a + d > i) {
            g = a - d - 1;
        }
        this.Obj.style.left = f;
        this.Obj.style.top = g;
        return 0;
    }
    ;
    a._$9K = function(b) {
        if (this.mobile == true) {
            return 0;
        }
        var a = b.target;
        if (typeof a === "undefined") {
            return 0;
        }
        var c = true;
        if ("stickerData"in a && "displayFn"in a.stickerData) {
            c = a.stickerData.displayFn();
        }
        if ("stickerData"in a && c == true && (!("hide"in a.stickerData))) {
            var d = this._$7v;
            if (a != this._$89) {
                this._$89 = a;
                this._$5n();
                this.Obj.style.display = "unset";
                this._$ag(a.stickerData);
                var d = true;
            }
            this._$8T(b, d);
        } else {
            try {
                if ("etiquette"in a) {
                    this._$8T(b);
                }
            } catch (e) {
                this._$8T(b);
            }
            if (this._$89 != 0) {
                this._$89 = 0;
                this._$5n();
            }
        }
        return 0;
    }
    ;
    return a;
}
;
window._$M = function() {
    var a = {};
    a.hide = true;
    a._$9I = true;
    a._$59 = function() {
        this.mobile = window._$1C._$8m();
        this._$2z();
    }
    ;
    a._$3S = function(c, b) {
        var a = "";
        if (b == 1) {
            a = window._$1C._$3G(c);
        }
        if (b == 2) {
            a = window._$1C._$3G(c);
        }
        return a;
        if (b == 2) {
            a = window._$1z._$5D(c);
        }
        if (b == 3) {
            a = window._$1z._$6e(c);
        }
        if (b == 4) {
            a = "At " + window._$1z._$8W(c);
        }
        if (b == 5) {
            a = window._$1z._$93(c);
        }
        if (b == 6) {
            a = window._$1z._$4k(c);
        }
        return a;
    }
    ;
    a._$2T = function(a) {
        var b = {
            "epoch": 0,
            "type": 1
        };
        if ("epochTime"in a.dataset) {
            b.epoch = parseInt(a.dataset.epochTime);
        }
        if ("epoch"in a.dataset) {
            b.type = parseInt(a.dataset.epoch);
        }
        a.textContent = this._$3S(b.epoch, b.type);
    }
    ;
    a._$2z = function() {
        var b = document.querySelectorAll("[data-epoch]");
        for (var a = 0; a < b.length; a++) {
            var c = b[a];
            this._$2T(c);
        }
    }
    ;
    a._$3Y = function(d) {
        var b = d.querySelectorAll("[data-epoch]");
        for (var a = 0; a < b.length; a++) {
            var c = b[a];
            this._$2T(c);
        }
    }
    ;
    a._$6M = function(a, d, b) {
        if (typeof b == "undefined") {
            b = "";
        }
        if (typeof d == "undefined") {
            d = true;
        }
        var f = "";
        if (d == true) {
            f = "dddd, ";
        }
        var c = new Date();
        var g = new Date();
        g.setDate(c.getDate() - 1);
        var a = parseInt(a);
        var e = new Date(a);
        if (e.toDateString() == c.toDateString()) {
            return "Today at " + _$17(a).format("HH:mm");
        } else if (e.toDateString() == g.toDateString()) {
            return "Yesterday";
        } else if (e.getFullYear() == c.getFullYear()) {
            return b + _$17(a).format(f + "MMMM Do");
        }
        return b + _$17(a).format(f + "MMMM Do YYYY");
    }
    ;
    a._$1Z = function(a) {
        var b = new Date();
        var d = new Date();
        d.setDate(b.getDate() - 1);
        var a = parseInt(a);
        var c = new Date(a);
        if (c.toDateString() == b.toDateString()) {
            return "Today";
        } else if (c.toDateString() == d.toDateString()) {
            return "Yesterday";
        } else if (c.getFullYear() == b.getFullYear()) {
            return _$17(a).format("MMM D");
        }
        return _$17(a).format("MMM D, YYYY");
    }
    ;
    a._$59();
    return a;
}
;
if (!Function.prototype.bind) {
    Function.prototype.bind = function(e) {
        if (typeof this !== 'function') {
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }
        var d = Array.prototype.slice.call(arguments, 1)
          , c = this
          , a = function() {}
          , b = function() {
            return c.apply(this instanceof a ? this : e, d.concat(Array.prototype.slice.call(arguments)));
        };
        if (this.prototype) {
            a.prototype = this.prototype;
        }
        b.prototype = new a();
        return b;
    }
    ;
}
Array.prototype._$I = function() {
    return this[Math.floor(Math.random() * this.length)];
}
;
Array.prototype.contains = function(b) {
    var a = this.length;
    while (a--) {
        if (this[a] === b) {
            return true;
        }
    }
    return false;
}
;
Array.prototype.move = function(b, a) {
    this.splice(a, 0, this.splice(b, 1)[0]);
}
;
Array.prototype.remove = function() {
    var c, b = arguments, d = b.length, a;
    while (d && this.length) {
        c = b[--d];
        while ((a = this.indexOf(c)) !== -1) {
            this.splice(a, 1);
        }
    }
    return this;
}
;
Array.prototype._$2I = function(a, b) {
    this.splice(b, 0, a);
}
;
Array.prototype._$5L = function(b) {
    for (var a = 0; a < this.length; a++) {
        if (this[a] == b) {
            this.splice(a, 1);
            a--;
        }
    }
    return this;
}
;
Array.prototype._$33 = function() {
    return this[Math.floor(Math.random() * this.length)];
}
;
Array.prototype.max = function() {
    return Math.max.apply(null, this);
}
;
Array.prototype.min = function() {
    return Math.min.apply(null, this);
}
;
Array.prototype.avg = function() {
    return this.sum() / this.length;
}
;
Array.prototype._$8M = function() {
    return this.reduce(function(b, a) {
        return b + Math.pow(a, 2);
    }, 0);
}
;
Array.prototype.sum = function() {
    return this.reduce(function(b, a) {
        return b + a;
    }, 0);
}
;
Array.prototype._$47 = function(a) {
    if (this.length > a) {
        return this.slice(this.length - a);
    }
    return this;
}
;
Array.prototype._$6n = function(a) {
    if (this.length > a) {
        return this.slice(0, a);
    }
    return this;
}
;
String.prototype.isEmpty = function() {
    return this.trim() == "";
}
;
String.prototype.endsWith = function(a) {
    return this.indexOf(a, this.length - a.length) !== -1;
}
;
String.prototype.startsWith = function(a) {
    return this.indexOf(a) === 0;
}
;
String.prototype.contains = function(a) {
    return this.indexOf(a) != -1;
}
;
String.prototype._$5T = function(b, c) {
    var a = this;
    return a.replace(new RegExp(b,'g'), c);
}
;
String.prototype._$av = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
;
String.prototype._$4P = function() {
    return this.replace(/\w\S*/g, function(a) {
        return a.charAt(0).toUpperCase() + a.substr(1).toLowerCase();
    });
}
;
Element.prototype._$p = function() {
    return window["pageYOffset"] + this["getBoundingClientRect"]()["top"];
}
;
Element.prototype._$19 = function(d) {
    var c = this;
    var a = c.getBoundingClientRect();
    var b = {
        "top": 0,
        "left": 0,
        "bottom": window.innerHeight,
        "right": window.innerWidth
    };
    if (a.width == 0 && a.height == 0) {
        return false;
    }
    return !(b.left > a.right || b.right < a.left || b.top > a.bottom || b.bottom < a.top);
}
;
Element.prototype._$5x = function(b) {
    var a = this;
    while ((a = a.parentElement) && !a.classList.contains(b))
        ;
    return a;
}
;
Element.prototype.remove = function() {
    if (this.parentElement != null && this.parentElement.contains(this)) {
        this.parentElement.removeChild(this);
    }
}
;
Element.prototype._$7N = function() {
    this.parentElement.appendChild(this);
}
;
Element.prototype.appendBefore = function(a) {
    a.parentNode.insertBefore(this, a);
}
;
Element.prototype.appendAfter = function(a) {
    a.parentNode.insertBefore(this, a.nextSibling);
}
;
Element.prototype.empty = function() {
    var a = 1;
    while (a = this.lastChild) {
        this.removeChild(a);
    }
}
;
Element.prototype._$5J = function() {
    while (this.lastChild) {
        try {
            this.lastChild._$5J();
        } catch (a) {}
        this.removeChild(this.lastChild);
    }
    this.innerHTML = "";
    return 0;
}
;
Element.prototype._$ak = function(a) {
    if (this.firstChild)
        this.insertBefore(a, this.firstChild);
    else
        this.appendChild(a);
}
;
Element.prototype._$k = function(b, a) {
    if (!a)
        a = 0;
    if (a >= this.children.length) {
        this.appendChild(b);
    } else {
        this.insertBefore(b, this.children[a]);
    }
}
;
Element.prototype._$4b = function(a) {
    if ("innerText"in this) {
        this.innerText = a;
    } else {
        this.textContent = a;
    }
}
;
Element.prototype._$96 = function() {
    if ("innerText"in this) {
        return this.innerText;
    }
    return this.textContent;
}
;
Element.prototype._$3W = function() {
    var a = this.firstChild;
    while (a != null && a.nodeType == 3) {
        a = a.nextSibling;
    }
    return a;
}
;
Number.prototype.mod = function(a) {
    return ((this % a) + a) % a;
}
;
NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
    for (var a = this.length - 1; a >= 0; a--) {
        if (this[a] && this[a].parentElement) {
            this[a].parentElement.removeChild(this[a]);
        }
    }
}
;
document._$L = function(a) {
    return document.querySelector('.' + a);
}
;
document._$8J = document.getElementById;
document.cE = document.createElement;
window._$1C = {};
window._$1C.efn = function() {}
;
window._$1C._$83 = function(a) {
    try {
        var b = JSON.parse(a);
        return b;
    } catch (c) {}
    return {
        "s": 0
    };
}
;
window._$1C._$99 = function(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
;
window._$1C._$1U = function() {
    if (document["fullscreenEnabled"] == true) {
        if (!document["fullscreenElement"]) {
            return 0;
        } else {
            return 1;
        }
    }
    return -1;
}
;
window._$1C._$63 = function(c) {
    try {
        var b = window[c]
          , a = '__storage_test__';
        b["setItem"](a, a);
        b["removeItem"](a);
        return true;
    } catch (d) {
        return false;
    }
}
;
window._$1C._$35 = function(b, a) {
    if (_$1C._$4D()) {
        localStorage.setItem(b, a);
    }
}
;
window._$1C._$4D = function() {
    try {
        var b = window["localStorage"]
          , a = '__storage_test__';
        b["setItem"](a, a);
        b["removeItem"](a);
        return true;
    } catch (c) {
        return false;
    }
}
;
window._$1C._$28 = function(a, b) {
    if (_$1C._$4D() && a in localStorage) {
        return localStorage.getItem(a);
    }
    return b;
}
;
window._$1C._$9g = function(d, b) {
    var a = b || '/';
    var c = new RegExp(a + '{1,}','g');
    return d.join(a).replace(c, a);
}
;
window._$1C.epoch = function() {
    return (new Date).getTime();
}
;
window._$1C._$R = function() {
    return performance.now();
}
;
window._$1C._$5i = function(a) {
    if (window["history"]["replaceState"]) {
        window["history"]["replaceState"]({}, document["title"], a);
    }
}
;
window._$1C._$8Q = function() {
    return window.self !== window.top;
}
;
window._$1C._$3 = function(a, e) {
    var c = e ? 1000 : 1024;
    if (Math.abs(a) < c) {
        return a + ' B';
    }
    var d = e ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
    var b = -1;
    do {
        a /= c;
        ++b;
    } while (Math.abs(a) >= c && b < d.length - 1);
    return a.toFixed(1) + ' ' + d[b];
}
;
window._$1C._$2E = function(a) {
    var b = Date.now();
    var c = window._$1C._$7M(a._$aa, a._$1R, b);
    var d = Math.round(a._$1x + (a.distance * c));
    a._$89.scrollTop = d;
    if (b >= a._$1R) {
        return 1;
    }
    window.requestAnimationFrame(window._$1C._$2E.bind(null, a));
}
;
window._$1C._$7M = function(b, d, c) {
    if (c <= b) {
        return 0;
    }
    if (c >= d) {
        return 1;
    }
    var a = (c - b) / (d - b);
    return a * a * (3 - 2 * a);
}
;
window._$1C._$4m = function(f, e, a, b) {
    if (typeof (b) == "undefined") {
        b = 400;
    }
    if (typeof (a) == "undefined") {
        a = 0;
    }
    var c = f.querySelector(".ss-content");
    if (c == null) {
        return -1;
    }
    var d = e["offsetTop"] + a;
    window._$1C._$6a(c, d, b);
}
;
window._$1C._$6a = function(b, c, d) {
    var a = {};
    a.target = Math.round(c);
    a.duration = Math.round(d);
    if (a.duration < 0) {
        return -1;
    }
    if (a.duration === 0) {
        b.scrollTop = a.target;
        return -1;
    }
    a._$aa = Date.now();
    a._$1R = a._$aa + a.duration;
    a._$89 = b;
    a._$1x = a._$89.scrollTop;
    a.distance = a.target - a._$1x;
    window.requestAnimationFrame(window._$1C._$2E.bind(null, a));
}
;
window._$1C._$8m = function() {
    var a = false;
    (function(b) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4)))
            a = true;
    }
    )(navigator.userAgent || navigator.vendor || window.opera);
    return a;
}
;
window._$1C._$2h = function(b, a) {
    b.style["filter"] = "hue-rotate(" + a + "deg)";
}
;
window._$1C._$3G = function(c) {
    c = parseInt(c);
    var i = _$1C.epoch();
    var e = 60 * 1000;
    var f = e * 60;
    var b = f * 24;
    var k = b * 7;
    var h = b * 31;
    var j = b * 365;
    var a = i - c;
    if (a < e) {
        return 'Just now';
        return Math.max(1, Math.floor(a / 1000)) + 's ago';
    } else if (a < f) {
        return Math.floor(a / e) + 'm ago';
    } else if (a < b) {
        return Math.floor(a / f) + 'h ago';
    } else if (a < h) {
        return Math.floor(a / b) + 'd ago';
    } else if (a < h * 12) {
        var d = Math.floor(a / k);
        var g = " week";
        if (d > 1) {
            g += "s";
        }
        return d + 'w ago';
        return d + g + ' ago';
    } else {
        return Math.floor(a / j) + 'y ago';
    }
}
;
window._$1C._$70 = function(a) {
    a = a.toLowerCase();
    if (a.length < 4) {
        return false;
    }
    if (a.length > 32) {
        return false;
    }
    if (window._$1C._$Y(a) != a) {
        return false;
    }
    return true;
}
;
window._$1C._$Y = function(a, b) {
    if (typeof b == "undefined") {
        b = true;
    }
    var a = window._$1C.unescape(a);
    a = a.replace(/[^a-zA-Z0-9_\-]/g, "").substring(0, 32);
    if (b == true && a == "") {
        a = _$1C._$9S();
    }
    return a;
}
;
window._$1C.unescape = function(b) {
    var a = "";
    try {
        a = decodeURIComponent(b);
    } catch (c) {
        a = b;
    }
    return a;
}
;
window._$1C._$9S = function() {
    return "anon" + window._$1C._$3v(5);
}
;
window._$1C._$3v = function(f) {
    var c = '0123456789';
    var g = c.length;
    var d = "";
    var a = 0;
    var e = g - 1;
    for (var b = 0; b < f; b++) {
        d += c[Math.floor(Math.random() * (e - a + 1) + a)];
    }
    return d;
}
;
window._$1C._$1V = function(b) {
    var a = /[^\s@]+@[^\s@]+\.[^\s@]+/.test(b);
    return a;
}
;
window._$1C._$e = function(a) {
    if (typeof a != "string")
        return false;
    return !isNaN(a) && !isNaN(parseFloat(a));
}
;
window._$1C._$ai = function(c, a) {
    var b = c.trim().split(/\s+/);
    if (a < b.length) {
        return b[a];
    }
    return "$@$";
}
;
window._$1C._$aw = function(f) {
    var c = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var g = c.length;
    var d = (new Date).getTime().toString();
    var a = 0;
    var e = g - 1;
    for (var b = 0; b < f; b++) {
        d += c[Math.floor(Math.random() * (e - a + 1) + a)];
    }
    return d;
}
;
window._$1C._$29 = function(f) {
    var c = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var g = c.length;
    var d = "";
    var a = 0;
    var e = g - 1;
    for (var b = 0; b < f; b++) {
        d += c[Math.floor(Math.random() * (e - a + 1) + a)];
    }
    return d;
}
;
window._$1C.round = function(b, a) {
    return +(Math.round(b + "e+" + a) + "e-" + a);
}
;
window._$1C._$9E = function(f, g, a) {
    if (typeof a == "undefined") {
        a = 0;
    }
    var b = [];
    for (var e = 0; e < g; e++) {
        var c = [];
        for (var d = 0; d < f; d++) {
            c.push(a);
        }
        b.push(c);
    }
    return b;
}
;
window._$1C._$1i = function(a) {
    if (a.length == 4) {
        return "rgba(" + parseInt(a[0]) + "," + parseInt(a[1]) + "," + parseInt(a[2]) + "," + window._$1C.round(a[3], 4) + ")";
    }
    if (a.length == 3) {
        return "rgb(" + parseInt(a[0]) + "," + parseInt(a[1]) + "," + parseInt(a[2]) + ")";
    }
}
;
window._$1C._$a = function(a) {
    if (a.length == 4) {
        return "rgba(" + parseInt(a[0]) + "," + parseInt(a[1]) + "," + parseInt(a[2]) + "," + window._$1C.round(a[3] / 255, 4) + ")";
    }
    if (a.length == 3) {
        return "rgb(" + parseInt(a[0]) + "," + parseInt(a[1]) + "," + parseInt(a[2]) + ")";
    }
}
;
window._$1C._$aH = function(a) {
    return "rgb(" + parseInt(a[0]) + "," + parseInt(a[1]) + "," + parseInt(a[2]) + ")";
}
;
window._$1C._$ap = function(a) {
    if (a[0] === '#') {
        if (a.length < 7) {
            a = '#' + a[1] + a[1] + a[2] + a[2] + a[3] + a[3] + (a.length > 4 ? a[4] + a[4] : '');
        }
        return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16), a.length > 7 ? parseInt(a.substr(7, 2), 16) / 255 : 1];
    }
    if (a.indexOf('rgb') === 0) {
        if (a.indexOf('rgba') === -1)
            a += ',1';
        return a.match(/[\.\d]+/g).map(function(a) {
            return +a;
        });
    }
}
;
window._$1C._$7I = function(a, b) {
    if (a.length > b) {
        a = a.slice(a.length - b);
    }
    return a;
}
;
window._$1C._$6X = function(c, e) {
    var b = [];
    var d = function(c, a, d) {
        a[c] = 1;
        for (var b = 0; b < a.length; b++) {
            if (a[b] == 0) {
                return 0;
            }
        }
        d();
    };
    for (var a = 0; a < c.length; a++) {
        b.push(0);
        window._$1C._$aV(c[a], d.bind(null, a, b, e));
    }
}
;
window._$1C._$aV = function(c, b) {
    var d = document.head;
    var a = document.createElement('script');
    a.type = 'text/javascript';
    a.src = c;
    a.onreadystatechange = b;
    a.onload = b;
    d.appendChild(a);
}
;
window._$1C._$7b = function(a) {
    if (Math.abs(a) < 1e-2) {
        return 0;
    }
    return +(Math.round(a + "e+1") + "e-1");
}
;
window._$1C._$6w = function(a) {
    if (Math.abs(a) < 1e-3) {
        return 0;
    }
    return +(Math.round(a + "e+2") + "e-2");
}
;
window._$1C._$82 = function(a) {
    if (Math.abs(a) < 1e-4) {
        return 0;
    }
    return +(Math.round(a + "e+3") + "e-3");
}
;
window._$1C._$3D = function(a) {
    if (Math.abs(a) < 1e-5) {
        return 0;
    }
    return +(Math.round(a + "e+4") + "e-4");
}
;
window._$1C._$5o = function(a) {
    if (Math.abs(a) < 1e-6) {
        return 0;
    }
    return +(Math.round(a + "e+5") + "e-5");
}
;
window._$1C._$7g = function(a) {
    return parseInt(Math.round(16 * a * (180 / Math.PI)));
}
;
window._$1C._$aO = function(a) {
    return _$1C.radians(a / 16);
}
;
window._$1C.radians = function(a) {
    return a * Math.PI / 180;
}
;
window._$1C._$5G = function(a) {
    return JSON.parse(JSON.stringify(a));
}
;
window._$1C.distance = function(b, a) {
    return Math.pow(Math.pow(b, 2) + Math.pow(a, 2), 0.5);
}
;
window._$1C._$7Y = function(b, a) {
    return Math.pow(b, 2) + Math.pow(a, 2);
}
;
window._$1C._$8j = function(b) {
    if (!b) {
        return b;
    }
    var c = {};
    if (Array.isArray(b)) {
        c = [];
    }
    var a;
    for (var d in b) {
        a = b[d];
        if (typeof a === "null") {
            c[d] = null;
        } else if (typeof a === "object") {
            c[d] = _$1C._$8j(a);
        } else {
            c[d] = a;
        }
    }
    return c;
}
;
window._$1C._$5G = function(a) {
    return JSON.parse(JSON.stringify(a));
}
;
window._$1C._$2P = function(a) {
    return JSON.parse(JSON.stringify(a));
}
;
window._$1C._$5d = function(a) {
    var c = {};
    for (var b in a) {
        c[b] = a[b];
    }
    return c;
}
;
window._$1C._$7t = function(b) {
    var a = Object.assign({}, b);
    return a;
}
;
window._$1C._$1H = function(a) {
    c = navigator.userAgent.search(a);
    if (c > -1) {
        return true;
    }
    return false;
}
;
window._$1C._$1L = function() {
    return _$1C._$1H("Firefox");
}
;
window._$1C._$K = function(a, b) {
    a = a.replace(/^\s*#|\s*$/g, '');
    if (a.length == 3) {
        a = a.replace(/(.)/g, '$1$1');
    }
    var c = parseInt(a.substr(0, 2), 16)
      , d = parseInt(a.substr(2, 2), 16)
      , e = parseInt(a.substr(4, 2), 16);
    return '#' + ((0 | (1 << 8) + c + (256 - c) * b / 100).toString(16)).substr(1) + ((0 | (1 << 8) + d + (256 - d) * b / 100).toString(16)).substr(1) + ((0 | (1 << 8) + e + (256 - e) * b / 100).toString(16)).substr(1);
}
;
window._$1C._$2r = function(d, c, b, e, f, a, j, g) {
    if (typeof g === 'undefined') {
        g = true;
    }
    if (typeof a === 'undefined') {
        a = 5;
    }
    if (typeof a === 'number') {
        a = {
            tl: a,
            tr: a,
            br: a,
            bl: a
        };
    } else {
        var i = {
            tl: 0,
            tr: 0,
            br: 0,
            bl: 0
        };
        for (var h in i) {
            a[h] = a[h] || i[h];
        }
    }
    d.beginPath();
    d.moveTo(c + a.tl, b);
    d.lineTo(c + e - a.tr, b);
    d.quadraticCurveTo(c + e, b, c + e, b + a.tr);
    d.lineTo(c + e, b + f - a.br);
    d.quadraticCurveTo(c + e, b + f, c + e - a.br, b + f);
    d.lineTo(c + a.bl, b + f);
    d.quadraticCurveTo(c, b + f, c, b + f - a.bl);
    d.lineTo(c, b + a.tl);
    d.quadraticCurveTo(c, b, c + a.tl, b);
    d.closePath();
    if (j) {
        d.fill();
    }
    if (g) {
        d.stroke();
    }
}
;
window._$1C._$7x = function() {
    var a = new Date()["getTimezoneOffset"]();
    var b = (a / 60) * 360 / 24;
    return b;
}
;
window._$1C._$1w = function(b, e) {
    var d = [{
        value: 1,
        _$2g: ""
    }, {
        value: 1e3,
        _$2g: "k"
    }, {
        value: 1e6,
        _$2g: "M"
    }, {
        value: 1e9,
        _$2g: "G"
    }, {
        value: 1e12,
        _$2g: "T"
    }, {
        value: 1e15,
        _$2g: "P"
    }, {
        value: 1e18,
        _$2g: "E"
    }];
    var c = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var a = d.slice().reverse().find(function(a) {
        return b >= a.value;
    });
    return a ? (b / a.value).toFixed(e).replace(c, "$1") + a._$2g : "0";
}
;
window._$1C._$7j = function(a) {
    if (/^[\u0000-\u007f]*$/.test(a) == false) {
        var b = /([^\u0000-\u007f]+)/g;
        a = a._$5T(b, '<y>$1</y>');
    }
    return a;
}
;
window._$1C._$1y = function(b, a) {
    var e = b.r + a.r;
    var d = b.x - a.x;
    var c = b.y - a.y;
    return (e * e > d * d + c * c);
}
;
window._$1C._$3q = function(b, a) {
    return !(a.x > b.x + b.w || a.x + a.w < b.x || a.y > b.y + b.h || a.y + a.h < b.y);
}
;
window._$1C._$u = function(b, a) {
    return !(a.x >= b.x + b.w || a.x + a.w <= b.x || a.y >= b.y + b.h || a.y + a.h <= b.y);
}
;
window._$1C._$7q = function(b, a, d, c) {
    return !(d + a.x >= b.x + b.w || d + a.x + a.w <= b.x || c + a.y >= b.y + b.h || c + a.y + a.h <= b.y);
}
;
window._$1C._$58 = function(b, a) {
    return !(a.x > b.x + b.width || a.x + a.width < b.x || a.y > b.y + b.height || a.y + a.height < b.y);
}
;
window._$1C._$8w = function(b, a) {
    return a.x <= b.x && b.x <= a.x + a.w && a.y <= b.y && b.y <= a.y + a.h;
}
;
window._$1C._$aI = function(b, a) {
    var d = Math.abs(b.x - a.x - a.w / 2);
    var c = Math.abs(b.y - a.y - a.h / 2);
    if (d > (a.w / 2 + b.r)) {
        return false;
    }
    if (c > (a.h / 2 + b.r)) {
        return false;
    }
    if (d <= (a.w / 2)) {
        return true;
    }
    if (c <= (a.h / 2)) {
        return true;
    }
    var f = d - a.w / 2;
    var e = c - a.h / 2;
    return (f * f + e * e <= (b.r * b.r));
}
;
window._$1C._$21 = function(c, a) {
    var d = a.y + a.h;
    var b = {
        "x1": a.x,
        "x2": a.x + a.w,
        "y1": d,
        "y2": d
    };
    return _$1C._$9w(c.x1, c.y1, c.x2, c.y2, b.x1, b.y1, b.x2, b.y2);
}
;
window._$1C._$9w = function(b, a, f, e, d, c, i, h) {
    if ((b === f && a === e) || (d === i && c === h)) {
        return -1;
    }
    var j = ((h - c) * (f - b) - (i - d) * (e - a));
    if (j === 0) {
        return -1;
    }
    var g = ((i - d) * (a - c) - (h - c) * (b - d)) / j;
    var k = ((f - b) * (a - c) - (e - a) * (b - d)) / j;
    if (g < 0 || g > 1 || k < 0 || k > 1) {
        return -1;
    }
    var m = b + g * (f - b);
    var l = a + g * (e - a);
    return {
        "x": m,
        "y": l
    };
}
;
window._$1C._$6q = function(b, a) {
    return window._$1C._$9w(b.x1, b.y1, b.x2, b.y2, a.x1, a.y1, a.x2, a.y2);
}
;
window._$1C._$af = function(d, a) {
    var b = {
        "c": false
    };
    var k = -1;
    var m = -1;
    var i = -1;
    var e = ["u", "d"];
    if (d.y2 > d.y1) {
        e = ["d", "u"];
    }
    for (var f = 0; f < e.length; f++) {
        if (e[f] == "u") {
            var g = {
                "x1": a.x,
                "x2": a.x + a.w,
                "y1": a.y + a.h,
                "y2": a.y + a.h
            };
            var c = window._$1C._$6q(d, g);
            if (c != -1) {
                i = window._$1C.distance(c.x - d.x1, c.y - d.y1);
                m = "u";
                k = c;
                break;
            }
        } else if (e[f] == "d") {
            var g = {
                "x1": a.x,
                "x2": a.x + a.w,
                "y1": a.y,
                "y2": a.y
            };
            var c = window._$1C._$6q(d, g);
            if (c != -1) {
                i = window._$1C.distance(c.x - d.x1, c.y - d.y1);
                m = "d";
                k = c;
                break;
            }
        }
    }
    var j = -1;
    var l = -1;
    var h = -1;
    var e = ["r", "l"];
    if (d.x2 < d.x1) {
        e = ["r", "l"];
    }
    for (var f = 0; f < e.length; f++) {
        if (e[f] == "l") {
            var g = {
                "x1": a.x,
                "x2": a.x,
                "y1": a.y,
                "y2": a.y + a.h
            };
            var c = window._$1C._$6q(d, g);
            if (c != -1) {
                h = window._$1C.distance(c.x - d.x1, c.y - d.y1);
                l = "l";
                j = c;
                break;
            }
        }
        if (e[f] == "r") {
            var g = {
                "x1": a.x + a.w,
                "x2": a.x + a.w,
                "y1": a.y,
                "y2": a.y + a.h
            };
            var c = window._$1C._$6q(d, g);
            if (c != -1) {
                h = window._$1C.distance(c.x - d.x1, c.y - d.y1);
                l = "r";
                j = c;
                break;
            }
        }
    }
    if (i != -1 && h != -1) {
        b.c = true;
        if (i < h) {
            b.cd = m;
            b._$8e = i;
            b.cx = k.x;
            b.cy = k.y;
        } else {
            b.cd = l;
            b._$8e = h;
            b.cx = j.x;
            b.cy = j.y;
        }
    } else if (i != -1) {
        b.c = true;
        b.cd = m;
        b._$8e = i;
        b.cx = k.x;
        b.cy = k.y;
    } else if (h != -1) {
        b.c = true;
        b.cd = l;
        b._$8e = h;
        b.cx = j.x;
        b.cy = j.y;
    }
    return b;
}
;
window._$1C._$8Z = function(b, a) {
    return a.x <= b.x && b.x <= a.x + a["width"] && a.y <= b.y && b.y <= a.y + a["height"];
}
;
window._$1C._$9b = function() {
    if (window.getSelection) {
        window["getSelection"]()["removeAllRanges"]();
    } else if (document.selection) {
        document["selection"]["empty"]();
    }
}
;
window._$1C._$4M = function(a) {
    var b = Object.keys(a).sort();
    var c = b.map(function(b) {
        return a[b];
    });
    return JSON.stringify(b.concat(c));
}
;
window._$1C._$9 = function(a) {
    a.addEventListener('keydown', function(a) {
        a.stopPropagation();
        return false;
    }, false);
    a.addEventListener('keypress', function(a) {
        a.stopPropagation();
        return false;
    }, false);
    a.addEventListener('keyup', function(a) {
        a.stopPropagation();
        return false;
    }, false);
    a.addEventListener('input', function(a) {
        a.stopPropagation();
        return false;
    }, false);
}
;
window._$1C._$4i = function(a) {
    a._$56 = function() {
        this.style.height = "auto";
        var a = this.scrollHeight;
        var b = this.clientHeight;
        if (b != a) {
            this.style.height = a + 7;
            return 1;
        }
        return 0;
    }
    ;
    a.addEventListener("input", function(b) {
        var a = this.value;
        this._$56();
    }
    .bind(a));
}
;
window._$1C._$7K = function(a, b) {
    a._$1k = b;
    a._$56 = function() {
        this.style.height = "auto";
        var a = this.scrollHeight;
        var b = this.clientHeight;
        if (b != a) {
            this.style.height = a + 7;
            return 1;
        }
        return 0;
    }
    ;
    a.addEventListener("input", function(b) {
        var a = this.value;
        if (a.length > this._$1k) {
            this.value = a.substring(0, this._$1k);
        }
        this._$56();
    }
    .bind(a));
    return 0;
}
;
window._$1C._$7R = function(c, b) {
    var a = (b - c + Math.PI) % (2 * Math.PI) - Math.PI;
    if (a < -Math.PI) {
        a += 2 * Math.PI;
    }
    return Math.abs(a);
}
;
window._$1C._$4g = function(c, b) {
    var a = (b - c + Math.PI) % (2 * Math.PI) - Math.PI;
    if (a < -Math.PI) {
        a += 2 * Math.PI;
    }
    return a;
}
;
window._$1C.direction = function(a) {
    return Math.sign(Math.cos(a));
}
;
window._$1C._$1N = function(a) {
    return Math.sign(Math.sin(a));
}
;
window._$1C._$72 = function(a) {
    if (a == -1) {
        return "l";
    }
    return "r";
}
;
window._$1C._$6z = function(b) {
    var a = _$1C.direction(b);
    return _$1C._$72(a);
}
;
window._$1C._$5y = function(c, a) {
    for (var b in a.prototype) {
        if (a.prototype.hasOwnProperty(b)) {
            c.prototype[b] = a.prototype[b];
        }
    }
    return c;
}
;
window._$1C._$85 = function(c) {
    if (typeof c != "number") {
        return "--:--";
    }
    var b = Math.floor(c / 60);
    var a = parseInt((c).mod(60));
    if (b < 10) {
        b = "0" + b;
    }
    if (a < 10) {
        a = "0" + a;
    }
    return b + ":" + a;
}
;
window._$1C._$2l = function(b, c) {
    for (var a in c) {
        if (a in b) {
            if (typeof (b[a]) == "object" && typeof (c[a]) == "object") {
                window._$1C._$2l(b[a], c[a]);
                continue;
            }
        }
        b[a] = c[a];
    }
    return b;
}
;
window._$1C._$6Z = function(b) {
    var a = document.createElement('canvas');
    var c = a.getContext('2d');
    a.width = b.width;
    a.height = b.height;
    c.drawImage(b, 0, 0);
    return a;
}
;
window._$1C._$8G = function(d, c, e, f, b) {
    if (window._$1o == true) {
        return -1;
    }
    if (b == true) {
        console.log(c);
    }
    window._$1o = true;
    var a = new XMLHttpRequest();
    a.onreadystatechange = function() {
        if (this.xhr.readyState == 4 && this.xhr.status == 200) {
            if (typeof (this.log) != "undefined" && this.log == true) {
                console.log(this.xhr.responseText);
            }
            window._$1o = false;
            var b = true;
            try {
                var a = JSON.parse(this.xhr.responseText);
                b = a.success;
            } catch (c) {
                b = false;
            }
            if (b == true) {
                this.sfn(a);
            } else if (typeof a == "object" && "error"in a) {
                this.efn(a);
            } else {
                this.efn({});
            }
        }
    }
    .bind({
        "xhr": a,
        "efn": f,
        "sfn": e,
        "log": b
    });
    a.open("POST", d, true);
    a.setRequestHeader("Content-type", "application/json");
    a.send(JSON.stringify(c));
    return a;
}
;
window._$1C._$2D = function(c, d, e, f, b) {
    if (window._$1o == true) {
        return -1;
    }
    window._$1o = true;
    var a = new XMLHttpRequest();
    a.onreadystatechange = function() {
        if (this.xhr.readyState == 4 && this.xhr.status == 200) {
            if (typeof (this.log) != "undefined" && this.log == true) {
                console.log(this.xhr.responseText);
            }
            window._$1o = false;
            var b = true;
            try {
                var a = JSON.parse(this.xhr.responseText);
                b = a.success;
            } catch (c) {
                b = false;
            }
            if (b == true) {
                this.sfn(a);
            } else if (typeof a == "object" && "error"in a) {
                this.efn(a);
            } else {
                this.efn({});
            }
        }
    }
    .bind({
        "xhr": a,
        "efn": f,
        "sfn": e,
        "log": b
    });
    a.open("POST", c, true);
    a.send(d);
    return a;
}
;
window._$1C._$n = function(a) {
    return a["toLocaleString"]('en-US', {
        "maximumFractionDigits": 2
    });
}
;
window._$1C._$1Q = function(e, c, d) {
    var b = Math.max(0, e - c);
    var a = d - c;
    if (b < a / 2) {
        return b / (a / 2);
    }
    return Math.max(0, 1 - (b - a / 2) / (a / 2));
}
;
document.cE2 = function(b, c) {
    var a = document.createElement(b);
    a.className = c;
    return a;
}
;
window._$1C._$5Y = function(a) {
    return Array.prototype.indexOf.call(a.parentNode.children, a);
}
;
window._$1C.print = function(a) {
    console.log(JSON.stringify(a));
}
;
window._$1C._$1g = function(d) {
    var a = 0xffffffff;
    var c = (123456789 + d) & a;
    var b = (987654321 - d) & a;
    return function() {
        b = (36969 * (b & 65535) + (b >>> 16)) & a;
        c = (18000 * (c & 65535) + (c >>> 16)) & a;
        var d = ((b << 16) + (c & 65535)) >>> 0;
        d /= 4294967296;
        return d;
    }
    ;
}
;
window._$1C.https = function(a) {
    if ("SERVERDATA"in window && "https"in window["SERVERDATA"] && window["SERVERDATA"]["https"] == true) {
        return "https://" + a;
    }
    return "http://" + a;
}
;
window._$aM = {};
window._$aM._$1 = function() {
    var a = "Unknown";
    if ("username"in window.localStorage) {
        a = window.localStorage.username;
    }
    if ("username"in window["SERVERDATA"]) {
        a = window["SERVERDATA"]["username"];
    }
    return a;
}
;
window._$aM._$2o = function() {
    var a = 1;
    if ("level"in window["SERVERDATA"]) {
        a = window["SERVERDATA"]["level"];
    }
    return a;
}
;
window._$1C._$7i = 2 * Math.PI;
window._$1C._$4e = function(a) {
    return Math.round(Math.cos(a) * 127 + 128);
}
;
window._$1C._$4e = function(a) {
    return Math.round(Math.cos(a) * 75 + 180);
}
;
window._$1C._$9u = function(a) {
    var b = window._$1C._$4e(a)
      , c = window._$1C._$4e(a + window._$1C._$7i / 3)
      , d = window._$1C._$4e(a + window._$1C._$7i / 3 * 2);
    return 'rgb( ' + b + ',' + c + ',' + d + ' )';
}
;
window.debug = {};
window.debug.debug = true;
window.debug.print = function() {
    if (window.debug.debug != true) {
        return 0;
    }
    console.log.apply(this, arguments);
}
;
window._$5l = {};
window._$5l._$3d = function(d, c, b) {
    var a = _$5l._$4W(d, c, b);
    return "rgb(" + (a[0]) + ',' + (a[1]) + ',' + (a[2]) + ')';
}
;
window._$5l._$4W = function(d, c, a) {
    d = (d / 360) * 6;
    c /= 100;
    a /= 100;
    var h = Math.floor(d);
    var i = d - h;
    var b = a * (1 - c);
    var f = a * (1 - i * c);
    var e = a * (1 - (1 - i) * c);
    var g = h % 6;
    var j = [a, f, b, b, e, a][g];
    var k = [e, a, a, f, b, b][g];
    var l = [b, b, e, a, a, f][g];
    return [j * 255, k * 255, l * 255];
}
;
window._$5l._$3n = function(a) {
    var b = a.getContext("2d");
    b.clearRect(0, 0, a.width, a.height);
}
;
window._$5l._$14 = function(a, c) {
    var b = a.getContext("2d");
    b["fillStyle"] = c;
    b.fillRect(0, 0, a.width, a.height);
}
;
window._$5l._$2C = function(b, c, d) {
    var a = c.getContext("2d");
    a["save"]();
    a.globalAlpha = 1;
    a.globalCompositeOperation = "source-over";
    if (d == true) {
        a.clearRect(0, 0, b.width, c.height);
    }
    a["drawImage"](b, 0, 0);
    a["restore"]();
}
;
window._$5l._$5Q = function(c, b, d) {
    var a = b.getContext("2d");
    a["save"]();
    a.globalAlpha = 1;
    a.globalCompositeOperation = "source-over";
    if (d == true) {
        a.clearRect(0, 0, b.width, b.height);
    }
    a["drawImage"](c, 0, 0, c.width, c.height, 0, 0, b.width, b.height);
    a["restore"]();
}
;
window._$5l._$5P = function(e, b, d, c) {
    var a = b.getContext("2d");
    a["save"]();
    if (typeof (c) == "undefined") {
        a.globalAlpha = 1;
    } else {
        a.globalAlpha = c;
    }
    a.globalCompositeOperation = "source-over";
    if (d == true) {
        a.clearRect(0, 0, b.width, b.height);
    }
    a["drawImage"](e, 0, 0);
    a["restore"]();
}
;
window._$5l._$4I = function(e, b, d, c) {
    var a = b.getContext("2d");
    a["save"]();
    if (typeof (c) == "undefined") {
        a.globalAlpha = 1;
    } else {
        a.globalAlpha = c;
    }
    a["globalCompositeOperation"] = "destination-over";
    if (d == true) {
        a.clearRect(0, 0, b.width, b.height);
    }
    a["drawImage"](e, 0, 0);
    a["restore"]();
}
;
window._$5l._$8P = function(a) {
    var g = a.getContext('2d');
    var e = a.width;
    var b = a.height;
    var f = g.getImageData(0, 0, e, b)["data"];
    var d = _$5l._$aF(true, e, b, f);
    var k = _$5l._$aF(false, e, b, f);
    var c = _$5l._$7h(true, e, b, f);
    var j = _$5l._$7h(false, e, b, f);
    var i = (j - c) + 1;
    var h = (k - d) + 1;
    var l = g["getImageData"](c, d, i, h);
    a.width = i;
    a.height = h;
    g["putImageData"](l, 0, 0);
    if (c == null) {
        c = 0;
    }
    if (d == null) {
        d = 0;
    }
    return {
        "w": i,
        "h": h,
        "x": c,
        "y": d
    };
}
;
window._$5l._$1t = function(b, a, c, d) {
    return {
        red: d[(c * a + b) * 4],
        green: d[(c * a + b) * 4 + 1],
        blue: d[(c * a + b) * 4 + 2],
        alpha: d[(c * a + b) * 4 + 3]
    };
}
;
window._$5l._$2y = function(b, a, c, d) {
    return _$5l._$1t(b, a, c, d)["alpha"];
}
;
window._$5l._$aF = function(c, e, d, g) {
    var f = c ? 1 : -1;
    var h = c ? 0 : d - 1;
    for (var a = h; c ? (a < d) : (a > -1); a += f) {
        for (var b = 0; b < e; b++) {
            if (_$5l._$2y(b, a, e, g)) {
                return a;
            }
        }
    }
    return null;
}
;
window._$5l._$7h = function(c, d, g, h) {
    var e = c ? 1 : -1;
    var f = c ? 0 : d - 1;
    for (var a = f; c ? (a < d) : (a > -1); a += e) {
        for (var b = 0; b < g; b++) {
            if (_$5l._$2y(a, b, d, h)) {
                return a;
            }
        }
    }
    return null;
}
;
window["DefaultReload"] = function() {
    if (window.name != "") {
        var a = window["name"];
        window.name = "";
        if (a.startsWith("/")) {
            window["stop"]();
            window["location"]["pathname"] = a;
            return 1;
        }
    }
    return 0;
}
;
window["SetupDefaultPostPage"] = function() {
    if (("_setupdefaultpostpage"in window)) {
        return -1;
    }
    window._setupdefaultpostpage = 1;
    window.SM = window._$b();
    window.EM = window._$M();
    window._$2p = new window._$7n();
    var b = document._$L("mtviewer-c");
    window._$2p._$6W(b);
    if ("ourl"in window["SERVERDATA"]) {
        window._$2p._$4a(window["SERVERDATA"]["ourl"]);
    }
    var a = document.querySelector(".postpage-focuspost-c .mt-post-c");
    if (a != null) {
        window._$2p._$5B();
        window._$2p._$1J(a);
    }
    window._$2p._$4o();
    window._$8v = new window._$3O();
    var b = document._$L("seviewer-c");
    window._$8v._$6W(b);
    if ("ourl"in window["SERVERDATA"]) {
        window._$8v._$4a(window["SERVERDATA"]["ourl"]);
    }
    var a = document.querySelector(".mt-serie-focus");
    if (a != null) {
        window._$8v._$5B();
        window._$8v._$5a(a);
    }
    window._$8v._$4o();
}
;
window["SetupProfilePage"] = function() {
    window.SetupDefaultPostPage();
    if (window["SERVERDATA"]["loggedin"] == true) {
        var b = window["SERVERDATA"]["username"];
        var c = window["SERVERDATA"]["followed"];
        var a = document._$L("profilepage-follow");
        window._$1Y = new window._$1G(a,b);
        window._$1Y._$9s(c);
    }
    if (window["SERVERDATA"]["self"] == 1) {
        var a = document._$L("profilepage-newseries");
        if (a != null) {
            window._$6J = new window._$52();
            a.addEventListener("click", window._$6J._$2w.bind(window._$6J));
            var d = document._$L("seedit-c");
            window._$6J._$6W(d);
        }
    }
}
;
window._$52 = function(a) {}
;
window._$52.prototype._$6W = function(a) {
    this.c = a;
    this.title = this.c.querySelector("#seedit-title-i");
    this.desc = this.c.querySelector("#seedit-desc-i");
    _$1C._$7K(this.title, 100);
    _$1C._$7K(this.desc, 3000);
    var c = a.querySelector(".seedit-close-c");
    c.addEventListener("click", this._$8u.bind(this));
    var b = a.querySelector(".seedit-button");
    b.addEventListener("click", function(a) {
        this._$i();
    }
    .bind(this));
}
;
window._$52.prototype._$5v = true;
window._$52.prototype._$5I = function(a) {
    this.title.value = a;
    this.title._$56();
}
;
window._$52.prototype._$8g = function(a) {
    this.desc.value = a;
    this.desc._$56();
}
;
window._$52.prototype._$i = function() {
    if (this.mode == "c") {
        var a = {};
        a["t"] = this.title.value.trim();
        a["d"] = this.desc.value.trim();
        window._$57("Creating new Series...", 4000);
        window._$1C._$8G("/ajax/seriesnew.php", a, function(b) {
            window._$57("Successfully created!", 4000);
            this._$ab = false;
            var a = document._$8J("download");
            a.href = "/series/" + b["sid"];
            a.click();
        }
        .bind(this), function(a) {
            if ("error"in a) {
                window._$57(a.error, 5000);
            } else {
                window._$57("Unexpected error occurred... Please download a copy just in case!", 5000);
            }
        }, 1);
    }
    if (this.mode == "e") {
        var a = {};
        a["sid"] = this._$6O;
        a["d"] = this.desc.value.trim();
        window._$57("Saving changes...", 4000);
        window._$1C._$8G("/ajax/seriesedit.php", a, function(b) {
            window._$57("Successfully saved!", 4000);
            this._$ab = false;
            var a = document._$8J("download");
            a.href = "/series/" + b["sid"];
            a.click();
        }
        .bind(this), function(a) {
            if ("error"in a) {
                window._$57(a.error, 5000);
            } else {
                window._$57("Unexpected error occurred... Please download a copy just in case!", 5000);
            }
        }, 0);
    }
}
;
window._$52.prototype._$4n = function(a) {
    this._$81();
    this._$6O = a._$6O;
    this.mode = "e";
    this.c.classList.remove("seedit-c-c");
    this.c.classList.add("seedit-c-e");
    this._$5I(a.title.innerText);
    this._$8g(a.desc.innerText);
    this.title.setAttribute("readonly", true);
}
;
window._$52.prototype._$2w = function() {
    this._$81();
    if (this.mode != "c") {
        this._$5I("");
        this._$8g("");
    }
    this.mode = "c";
    this.c.classList.remove("seedit-c-e");
    this.c.classList.add("seedit-c-c");
    this.title.removeAttribute("readonly");
}
;
window._$52.prototype._$81 = function() {
    if (this._$5v == false) {
        return -1;
    }
    this._$5v = false;
    this.c.style["display"] = "block";
    this.c.scrollHeight;
    this.c.classList.add("seedit-c-show");
}
;
window._$52.prototype._$8u = function() {
    if (this._$5v == true) {
        return -1;
    }
    this._$5v = true;
    this.c.classList.remove("seedit-c-show");
    setTimeout(function() {
        this.c.style["display"] = "none";
    }
    .bind(this), 400);
}
;
window["SetupDefaultPage"] = function() {
    window.SM = window._$b();
    window.EM = window._$M();
}
;
window._$aE = {
    "setup": false
};
window._$4w = function(i, j, k, m, o, n, l) {
    var a = window._$aE;
    if (a["setup"] == false) {
        a["setup"] = true;
        var c = document.cE2("div", "mtconfirm-c");
        var f = document.cE2("div", "mtconfirm-bg");
        var b = document.cE2("div", "mtconfirm-c2");
        var g = document.cE2("div", "mtconfirm-title");
        var h = document.cE2("div", "mtconfirm-text");
        var d = document.cE2("div", "mtconfirm-button-yes");
        var e = document.cE2("div", "mtconfirm-button-no");
        b.appendChild(g);
        b.appendChild(h);
        b.appendChild(d);
        b.appendChild(e);
        c.appendChild(f);
        c.appendChild(b);
        document.body.appendChild(c);
        f.addEventListener("click", function(a) {
            this._$5M();
            this.c.classList.remove("mtconfirm-c-show");
            setTimeout(function() {
                this.c.style["display"] = "";
            }
            .bind(this), 210);
        }
        .bind(a));
        e.addEventListener("click", function(a) {
            this._$5M();
            this.c.classList.remove("mtconfirm-c-show");
            setTimeout(function() {
                this.c.style["display"] = "";
            }
            .bind(this), 210);
        }
        .bind(a));
        d.addEventListener("click", function(a) {
            this._$8V();
            this.c.classList.remove("mtconfirm-c-show");
            setTimeout(function() {
                this.c.style["display"] = "";
            }
            .bind(this), 210);
        }
        .bind(a));
        a.c = c;
        a.c2 = b;
        a.title = g;
        a.text = h;
        a.yes = d;
        a.no = e;
    }
    a.c2.className = "mtconfirm-c2";
    a.c2.classList.add(l);
    a.title.textContent = i;
    a.text.textContent = j;
    a.yes.textContent = k;
    a.no.textContent = o;
    a._$8V = m;
    a._$5M = n;
    a.c.style["display"] = "block";
    setTimeout(function() {
        this.c.classList.add("mtconfirm-c-show");
    }
    .bind(a), 10);
}
;
window._$3a = [];
window._$4Y = function(a) {
    setTimeout(window._$9h.bind(window), a);
}
;
window._$8K = function(a, b) {
    setTimeout(window._$57.bind(window, a), b);
}
;
window._$57 = function(e, c, d) {
    var a = document.cE2("div", "br-error");
    if (typeof d != "undefined") {
        a.classList.add(d);
    }
    a.textContent = e;
    var f = document._$L("br-error-c2");
    f.appendChild(a);
    var b = 5000;
    if (typeof c != "undefined") {
        b = c;
    }
    a._$3N = setTimeout(function() {
        this.classList.add("br-error-hide");
    }
    .bind(a), b);
    window._$3a.push(a);
    while (window._$3a.length > 6) {
        var g = window._$3a.shift();
        g.remove();
    }
}
;
window._$9h = function(d) {
    var a = document._$L("br-error-links");
    a.style["display"] = "block";
    var b = document._$L("br-error-c2");
    b.appendChild(a);
    window._$3a.push(a);
    while (window._$3a.length > 5) {
        var c = window._$3a.shift();
        c.remove();
    }
}
;
window["SetupDrawPage"] = function() {
    window.SM = window._$b();
    window.editor = new window._$V();
    if ("draftkey"in window["SERVERDATA"]) {
        var b = window["SERVERDATA"]["draftkey"];
        var a = window["SERVERDATA"]["draftzip"];
        window.editor._$3h(b, a, function() {
            var a = window["SERVERDATA"]["drafttitle"];
            var b = window["SERVERDATA"]["draftdesc"];
            window.editor._$5I(a);
            window.editor._$8g(b);
            window.editor._$6U(0.8);
        });
    } else {
        window.editor._$am("default");
    }
    var c = document._$L("minidraw-submit");
    c.addEventListener("click", function(a) {});
}
;
window._$3i = function() {
    window._$2k = new window._$6t(document.body);
    window._$2k._$5Z();
}
;
window._$6t = function(a) {
    this._$6W(a);
    this._$4F = 500;
    this._$5S = 500;
    this._$aG = 10;
    this._$4T = 10;
    this.width = this._$4F;
    this.height = this._$5S;
    this._$3j(this.width, this.height);
    this.download = document.createElement('a');
    this.download["style"]["display"] = "none";
    document.body.appendChild(this.download);
}
;
window._$6t.prototype._$6W = function(a) {
    this._$1S = a;
    this._$3b = a.querySelector(".minidraw-canvas1");
    this._$aA = this._$3b.getContext("2d");
    var b = a.querySelector(".minidraw-download");
    b.addEventListener("click", this._$y.bind(this));
}
;
window._$6t.prototype._$3j = function(a, b) {
    this._$3b.width = a;
    this._$3b.height = b;
}
;
window._$6t.prototype._$x = function() {
    var a = {};
    a["img"] = this._$3b["toDataURL"]();
    return a;
}
;
window._$6t.prototype._$6D = function() {
    var a = this._$3b["toDataURL"]();
    return a;
}
;
window._$6t.prototype._$y = function() {
    var b = this._$6D();
    this.download.href = b;
    var a = new Date();
    var c = a["getDate"]() + "-" + (a["getMonth"]() + 1) + "-" + a["getFullYear"]() + "_" + a["getHours"]() + "-" + a["getMinutes"]();
    this.download["download"] = "mini-" + c + ".png";
    this.download.click();
}
;
window._$6t.prototype._$5Z = function() {
    this._$aA.fillStyle = "#FF0000";
    this._$aA.fillRect(0, 0, 80, 80);
}
;
window._$V = function() {
    this._$59();
}
;
window._$V.prototype._$7J = true;
window._$V.prototype._$7J = false;
window._$V.prototype._$59 = function() {
    this._$4F = 500;
    this._$5S = 1800;
    this._$5S = 900;
    this._$5S = 500;
    this._$4V = 500;
    this._$97 = 500;
    this._$42 = 700;
    this._$2O = 0;
    this.title = "Untitled";
    this._$8k = "";
    this.draftkey = -1;
    var a = document.body;
    this._$6W(a);
    this._$6V();
    this._$ab = false;
    this._$9i();
    this._$9r();
    this._$9B();
    this._$ae();
    this._$25();
    window.addEventListener("resize", this._$aj.bind(this));
    if (this._$7J == true) {
        document._$L("test").style.display = "block";
    }
}
;
window._$V.prototype._$6W = function(a) {
    this.c = a.querySelector(".minidraw-editor-c");
    if (this._$7J == true) {
        this.c.classList.add("mteditor-test");
    }
    this._$9N(a);
    this._$20 = [];
    this._$4l = 0;
    this._$4z = a.querySelector(".mteditor-pages-c2");
    this._$a0 = a.querySelector(".mteditor-pages-c5");
    this._$4v = a.querySelector(".mteditor-pages-c");
    var e = a.querySelector(".mteditor-pages-c2");
    this._$3k = new window["SimpleBar"](e,{
        "autoHide": false
    });
    this._$aS = this._$3k["getScrollElement"]();
    this._$2x = [];
    this._$12 = a.querySelector(".mteditor-previews-c");
    this._$6L = a.querySelector(".mteditor-previews-newpage");
    this._$4O = a.querySelector(".mteditor-preview-newpage-can");
    this._$6L.addEventListener("click", function() {
        if (this._$20.length >= 10) {
            window._$57("The max number of pages is 10!", 3000);
            return -1;
        }
        var a = this._$8C();
        a._$8O();
        this._$1X(this._$20.length - 1);
    }
    .bind(this));
    var c = a.querySelector(".mteditor-pageoption-moveup");
    c.addEventListener("click", this._$8H.bind(this));
    var c = a.querySelector(".mteditor-pageoption-movedown");
    c.addEventListener("click", this._$3C.bind(this));
    var c = a.querySelector(".mteditor-pageoption-deletepage");
    c.addEventListener("click", function(a) {
        if (this._$20.length == 1) {
            window._$57("You can't delete your only page!", 3000);
            return -1;
        }
        window._$4w("Delete Page", "Are you sure you want to delete this page? This action cannot be undone.", "Delete", function() {
            this._$3u();
        }
        .bind(this), "Cancel", function() {}, "mtconfirm-template-delete");
    }
    .bind(this));
    this._$3P = "freedraw";
    this._$30 = a.querySelector(".mteditor-pubbox-c");
    var c = a.querySelector(".mteditor-pubbox-option-publish");
    c.addEventListener("click", this._$98.bind(this, "publish"));
    var c = a.querySelector(".mteditor-pubbox-option-download");
    c.addEventListener("click", this._$98.bind(this, "download"));
    var c = a.querySelector(".mteditor-pubbox-option-loadfile");
    c.addEventListener("click", this._$98.bind(this, "loadfile"));
    var c = a.querySelector(".mt-pubbox-close");
    c.addEventListener("click", this._$9o.bind(this));
    var b = a.querySelector(".mteditor-pubbox-loadfile-i");
    this._$8D = b;
    b.addEventListener("change", this._$as.bind(this));
    var b = a.querySelector(".mt-pubbox-download");
    b.addEventListener("click", this._$10.bind(this));
    var b = a.querySelector(".mt-pubbox-publishsave");
    b.addEventListener("click", this._$Q.bind(this));
    var b = a.querySelector(".mt-pubbox-publish");
    b.addEventListener("click", function(a) {
        window._$4w("Ready to Publish!", "Are you sure your work is ready to be published?", "Publish!", function() {
            this._$4f();
        }
        .bind(this), "Cancel", function() {}, "mtconfirm-template-publish");
    }
    .bind(this));
    var b = a.querySelector(".mteditor-pubbox-option-newdoc");
    b.addEventListener("click", function(a) {
        this._$9o();
        this._$8o();
    }
    .bind(this));
    this._$3K = a.querySelectorAll(".mt-pubbox-category");
    for (var d = 0; d < this._$3K.length; d++) {
        this._$3K[d].addEventListener("click", this._$8s.bind(this, this._$3K[d]));
    }
    this._$1a = a.querySelector("#mt-pubbox-title-i");
    this._$9Z = a.querySelector("#mt-pubbox-desc-i");
    _$1C._$7K(this._$1a, 100);
    _$1C._$7K(this._$9Z, 3000);
    this._$6k = {};
    this._$6k.pencil = a.querySelector("#mteditor-tool-pencil");
    this._$6k.eraser = a.querySelector("#mteditor-tool-eraser");
    this._$6k.bucket = a.querySelector("#mteditor-tool-bucket");
    this._$6k.eyedrop = a.querySelector("#mteditor-tool-eyedrop");
    this._$6k.select = a.querySelector("#mteditor-tool-select");
    this._$6k.text = a.querySelector("#mteditor-tool-text");
    this._$6k.shapes = a.querySelector("#mteditor-tool-shapes");
    this._$6k._$5K = a.querySelector("#mteditor-tool-undo");
    this._$6k.redo = a.querySelector("#mteditor-tool-redo");
    this._$6k.image = a.querySelector("#mteditor-tool-image");
    this._$6k.pencil.addEventListener("click", this._$9A.bind(this, "pencil"));
    this._$6k.eraser.addEventListener("click", this._$9A.bind(this, "eraser"));
    this._$6k.bucket.addEventListener("click", this._$9A.bind(this, "bucket"));
    this._$6k.eyedrop.addEventListener("click", this._$9A.bind(this, "eyedrop"));
    this._$6k.select.addEventListener("click", this._$9A.bind(this, "select"));
    this._$6k.text.addEventListener("click", this._$9A.bind(this, "text"));
    this._$6k.shapes.addEventListener("click", this._$9A.bind(this, "shapes"));
    this._$6k._$5K.addEventListener("click", this._$4S.bind(this));
    this._$6k.redo.addEventListener("click", this._$aB.bind(this));
    this._$6k.image.addEventListener("click", this._$3A.bind(this));
    this._$1r = a.querySelector(".mteditor-pages-new-option-newpage");
    this._$1r.addEventListener("click", function() {
        var a = this._$8C();
        a._$8O();
        this._$1X(this._$20.length - 1);
    }
    .bind(this));
    var b = a.querySelector(".minidraw-download");
    b.addEventListener("click", this._$98.bind(this, "download"));
    var b = a.querySelector(".minidraw-draft");
    b.addEventListener("click", this._$5u.bind(this));
    var b = a.querySelector(".minidraw-submit");
    b.addEventListener("click", this._$98.bind(this, "publish"));
    this._$2X = a.querySelector(".mteditor-pages-zoom-plus");
    this._$7o = a.querySelector(".mteditor-pages-zoom-minus");
    this._$50 = a.querySelector(".mteditor-pages-zoom-text");
    this._$2X.addEventListener("click", function() {
        this._$6U(this.zoom + 0.2);
    }
    .bind(this));
    this._$7o.addEventListener("click", function() {
        this._$6U(this.zoom - 0.2);
    }
    .bind(this));
    this._$1F = {};
    this._$8r = a.querySelector(".mteditor-sblayers-c3");
    this._$s = a.querySelector(".mteditor-sblayers-title-p");
    var f = a.querySelector(".mteditor-sblayers-c");
    this._$2j = a.querySelector(".minidraw-top-title");
    this._$2j.addEventListener("click", this._$98.bind(this, "publish"));
    this._$5I(this.title);
    window["onbeforeunload"] = function() {
        if (this._$ab == false) {
            return undefined;
        }
        return 'Are you sure you want to close the editor? Be sure to download your work or save a draft!';
    }
    .bind(this);
}
;
window._$V.prototype._$25 = function() {
    this._$4A();
    this._$20 = [];
    this._$9T = {};
    this._$3t = -1;
}
;
window._$V.prototype._$5Z = function() {
    this._$aA.fillStyle = "#FF0000";
    this._$aA.fillRect(0, 0, 80, 80);
}
;
window._$V.prototype._$3A = function(a) {
    this._$6i();
}
;
window._$V.prototype._$a6 = function() {
    var a = this._$44();
    if (a == -1) {
        window._$57("No page is currently selected.", 2000);
        return -1;
    }
    var b = a._$5E();
    if (b == -1 || b.type != "draw") {
        window._$57("You can only select all in a Drawing layer! Please select a Drawing layer!", 2000);
        return -1;
    }
    this._$9A("select");
    var c = a._$4X();
    c._$5p(0, 0, a.width, a.height);
}
;
window._$V.prototype._$a1 = function() {}
;
window._$V.prototype._$9t = function() {}
;
window._$V.prototype._$6i = function() {
    var a = this._$44();
    if (a == -1) {
        window._$57("No page is currently selected.", 2000);
        return -1;
    }
    var b = a._$5E();
    if (b == -1 || b.type != "draw") {
        window._$57("You can only copy an image to a Drawing layer! Please select a Drawing layer!", 2000);
        return -1;
    }
    this._$9A("select");
    var c = a._$4X();
}
;
window._$V.prototype._$7r = function(a) {
    this._$ab = a;
    this._$1q = false;
}
;
window._$V.prototype._$am = function(b) {
    this._$4F = 500;
    this._$5S = 1800;
    this._$5S = 900;
    this._$5S = 500;
    var a = this._$8C();
    a._$8O();
    this._$1X(this._$20.length - 1);
    this._$6U(0.8);
    if (this._$7J) {
        this._$6U(1);
    }
    this._$8o();
    return 0;
}
;
window._$V.prototype._$Z = function(e, b) {
    for (var c = 0; c < this._$48[b].length; c++) {
        var a = this._$48[b][c];
        if (a == e) {
            a.classList.add("mt-newdoc-cat-size-selected");
            if ("img"in a["dataset"]) {
                var d = this._$al[b].querySelector(".mt-newdoc-cat-preview");
                d["src"] = "/assets/icons/" + a["dataset"]["img"] + ".png";
            }
        } else {
            a.classList.remove("mt-newdoc-cat-size-selected");
        }
    }
}
;
window._$V.prototype._$4N = function() {
    var b = window.innerWidth + 350;
    var b = 400;
    var a = b / this._$4F;
    a = _$1C._$7b(a);
    a = Math.max(Math.min(1, a), 0.4);
    this._$6U(a);
}
;
window._$V.prototype._$8F = function(a) {
    this._$4H = a;
    for (var b in this._$al) {
        var c = this._$al[b];
        if (b == a) {
            c.classList.add("mt-newdoc-cat-selected");
        } else {
            c.classList.remove("mt-newdoc-cat-selected");
        }
    }
}
;
window._$V.prototype._$ao = function() {
    var b = 500;
    var a = 1800;
    var a = 900;
    var e = 500;
    var f = 700;
    if (this._$4H == "freedraw") {
        b = parseInt(this._$9X.value);
        a = parseInt(this._$6v.value);
    } else {
        var d = this._$al[this._$4H];
        var c = d.querySelector(".mt-newdoc-cat-size-selected");
        b = parseInt(c["dataset"]["w"]);
        a = parseInt(c["dataset"]["h"]);
    }
    this._$6c(b, a);
}
;
window._$V.prototype._$6c = function(c, a) {
    var d = Math.max(Math.min(c, 500), 300);
    var b = Math.max(Math.min(d / 500 * 700, 700), 300);
    if (c >= a) {
        b = d + 100;
        b = d;
    } else if (b > a) {
        b = a;
    }
    this._$4F = c;
    this._$5S = a;
    this._$4V = c;
    this._$97 = d;
    this._$42 = b;
    var f = b * (this._$4V / d);
    if (f > a) {
        var g = a / f;
        this._$4V *= g;
        this._$4V = Math.ceil(this._$4V);
    }
    for (var e = 0; e < this._$20.length; e++) {
        this._$20[e]._$4t(c, a);
        this._$aq(e);
    }
}
;
window._$V.prototype._$22 = function() {
    if (this._$1q == true) {
        this._$ao();
        this._$4N();
        this._$1s();
    } else {}
}
;
window._$V.prototype._$9N = function(e) {
    this._$9q = true;
    this._$1q = true;
    this._$9v = e.querySelector(".mteditor-newdoc-c");
    var b = e.querySelector(".mt-newdoc-select");
    b.addEventListener("click", this._$22.bind(this));
    var b = e.querySelector(".mt-newdoc-close");
    b.addEventListener("click", this._$1s.bind(this));
    var g = function(a) {
        this.e._$Z(this.b, this.t);
    };
    var h = function(a) {
        this.e._$Z(this.b, this.t);
        if ("w"in this.b["dataset"]) {
            this.e._$9X.value = this.b["dataset"]["w"];
            this.e._$6v.value = this.b["dataset"]["h"];
        }
    };
    this._$al = {};
    this._$48 = {};
    this._$4H = -1;
    this._$7c = {
        "w": 500,
        "h": 1800
    };
    this._$7c = {
        "w": 500,
        "h": 900
    };
    this._$9X = e.querySelector("#mt-newdoc-cat-custom-w");
    this._$6v = e.querySelector("#mt-newdoc-cat-custom-h");
    this._$2V = e.querySelector(".mt-newdoc-cat-size-custom");
    this._$9X.addEventListener("input", function(a) {
        this._$Z(this._$2V, "freedraw");
    }
    .bind(this));
    this._$9X.addEventListener("change", function(d) {
        var a = this._$9X.value;
        var c = parseInt(this._$9X["getAttribute"]("max"));
        var b = parseInt(this._$9X["getAttribute"]("min"));
        this._$9X.value = Math.max(b, Math.min(c, a));
        this._$Z(this._$2V, "freedraw");
    }
    .bind(this));
    this._$6v.addEventListener("change", function(d) {
        var a = this._$6v.value;
        var c = parseInt(this._$6v["getAttribute"]("max"));
        var b = parseInt(this._$6v["getAttribute"]("min"));
        this._$6v.value = Math.max(b, Math.min(c, a));
        this._$Z(this._$2V, "freedraw");
    }
    .bind(this));
    this._$6v.addEventListener("input", function(a) {
        this._$Z(this._$2V, "freedraw");
    }
    .bind(this));
    var b = e.querySelector("#newdoc-option-square");
    this._$al["square"] = b;
    b.addEventListener("click", function() {
        this._$8F("square");
    }
    .bind(this));
    var a = b.querySelectorAll(".mt-newdoc-cat-size");
    for (var c = 0; c < a.length; c++) {
        var d = a[c];
        var f = {
            "e": this,
            "b": d,
            "t": "square"
        };
        d.addEventListener("click", g.bind(f));
    }
    this._$48["square"] = a;
    this._$Z(a[0], "square");
    var b = e.querySelector("#newdoc-option-vertical");
    this._$al["vertical"] = b;
    b.addEventListener("click", function() {
        this._$8F("vertical");
    }
    .bind(this));
    var a = b.querySelectorAll(".mt-newdoc-cat-size");
    for (var c = 0; c < a.length; c++) {
        var d = a[c];
        var f = {
            "e": this,
            "b": d,
            "t": "vertical"
        };
        d.addEventListener("click", g.bind(f));
    }
    this._$48["vertical"] = a;
    this._$Z(a[0], "vertical");
    var b = e.querySelector("#newdoc-option-manga");
    this._$al["manga"] = b;
    b.addEventListener("click", function() {
        this._$8F("manga");
    }
    .bind(this));
    var a = b.querySelectorAll(".mt-newdoc-cat-size");
    for (var c = 0; c < a.length; c++) {
        var d = a[c];
        var f = {
            "e": this,
            "b": d,
            "t": "manga"
        };
        d.addEventListener("click", g.bind(f));
    }
    this._$48["manga"] = a;
    this._$Z(a[0], "manga");
    var b = e.querySelector("#newdoc-option-freedraw");
    this._$al["freedraw"] = b;
    b.addEventListener("click", function() {
        this._$8F("freedraw");
    }
    .bind(this));
    var a = b.querySelectorAll(".mt-newdoc-cat-size");
    for (var c = 0; c < a.length; c++) {
        var d = a[c];
        var f = {
            "e": this,
            "b": d,
            "t": "freedraw"
        };
        d.addEventListener("click", h.bind(f));
    }
    this._$48["freedraw"] = a;
    this._$Z(a[0], "freedraw");
    this._$8F("square");
}
;
window._$V.prototype._$8o = function() {
    if (this._$9q == false) {
        return -1;
    }
    this._$3X = false;
    this._$9q = false;
    this._$9v.style["display"] = "block";
    this._$9v.scrollHeight;
    this._$9v.classList.add("mteditor-newdoc-show");
}
;
window._$V.prototype._$1s = function() {
    if (this._$9q == true) {
        return -1;
    }
    this._$3X = true;
    this._$9q = true;
    this._$9v.classList.remove("mteditor-newdoc-show");
    setTimeout(function() {
        this._$9v.style["display"] = "none";
    }
    .bind(this), 400);
}
;
window._$V.prototype._$aj = function(c, b) {
    var a = this._$44();
    if (a != -1) {
        this._$5z(a);
    }
}
;
window._$V.prototype._$8H = function() {
    if (this._$4l <= 0) {
        window._$57("This page is already the first page!", 3000);
        return -1;
    }
    var a = this._$4l - 1;
    this._$5V(this._$4l, a);
    this._$1X(a);
    this._$3z();
}
;
window._$V.prototype._$3C = function() {
    if (this._$4l >= this._$20.length - 1) {
        window._$57("This page is already the last page!", 3000);
        return -1;
    }
    var a = this._$4l + 1;
    this._$5V(this._$4l, a);
    this._$1X(a);
    this._$3z();
}
;
window._$V.prototype._$3u = function() {
    if (this._$20.length == 1) {
        window._$57("You can't delete your only page!", 3000);
        return -1;
    }
    var a = this._$4l;
    this._$8l(a);
    var b = this._$20[a];
    this._$20.remove(b);
    b._$5s();
    var c = Math.min(this._$20.length - 1, Math.max(0, a));
    this._$1X(c);
    this._$3z();
}
;
window._$V.prototype._$O = function(b, a) {
    if (a.name != b.a1.textContent) {
        b.a1.textContent = a.name;
    }
    if (a._$5g != b.a2.textContent) {
        b.a2.textContent = a._$5g;
    }
    if (a._$49._$2Z == a.key) {
        b.c.classList.add("mteditor-sblayer-c-selected");
    } else {
        b.c.classList.remove("mteditor-sblayer-c-selected");
    }
}
;
window._$V.prototype._$F = function(a) {
    for (var b in this._$1F[a]) {
        this._$1F[a][b]._$5J();
        this._$1F[a][b].remove();
    }
    delete this._$1F[a];
}
;
window._$V.prototype._$5w = function() {
    for (var a in this._$1F) {
        for (var b in this._$1F[a]) {
            this._$1F[a][b]._$5J();
            this._$1F[a][b].remove();
        }
    }
    this._$1F = {};
}
;
window._$V.prototype._$55 = function() {
    var d = this._$44();
    if (d == -1) {
        this._$5w();
        return 0;
    }
    this._$s.textContent = this._$4l + 1;
    var h = {};
    for (var b in this._$1F) {
        if (!(b in d.layers)) {
            h[b] = 1;
        }
    }
    for (var b in h) {
        this._$F(b);
    }
    var f = this._$8r;
    var g = [].concat(d._$86)["reverse"]();
    for (var c = 0; c < g.length; c++) {
        var e = d.layers[g[c]];
        var b = e.key;
        if (!(b in this._$1F)) {
            var a = {};
            a.c = document.cE2("div", "mteditor-sblayer-c");
            a.a1 = document.cE2("div", "mteditor-sblayer-title");
            a.a2 = document.cE2("div", "mteditor-sblayer-info");
            this._$O(a, e);
            a.c.appendChild(a.a1);
            a.c.appendChild(a.a2);
            a.c.addEventListener("click", d._$4L.bind(d, e.key));
            f._$k(a.c, c);
            this._$1F[b] = a;
        } else {
            var a = this._$1F[b];
            this._$O(a, e);
            if (f["children"].length > c && f["children"][c] == a.c) {} else {
                f._$k(a.c, c);
            }
        }
    }
}
;
window._$V.prototype._$4A = function() {
    this._$4v._$5J();
    for (var a = this._$20.length - 1; a >= 0; a--) {
        this._$20[a]._$5s();
        this._$8l(a);
    }
    this._$20 = [];
}
;
window._$V.prototype._$44 = function() {
    if (this._$4l <= this._$20.length - 1) {
        return this._$20[this._$4l];
    }
    return -1;
}
;
window._$V.prototype._$1X = function(a) {
    this._$4l = a;
    var b = this._$20[a];
    this._$4C(a);
    for (var a = 0; a < this._$20.length; a++) {
        this._$20[a]._$ar();
    }
    b._$2U();
    this._$5z(b);
    this._$9A(this._$7a);
    this._$55();
}
;
window._$V.prototype._$8C = function() {
    var a = new window._$6F(this);
    a._$4t(this._$4F, this._$5S);
    this._$20.push(a);
    this._$4v.appendChild(a.c);
    this._$2O = Object.keys(this._$20).length;
    this._$55();
    var b = this._$5U(a);
    a._$7p = function(a) {
        this.editor._$8b(this);
    }
    .bind(a);
    a._$8X = function(a) {
        this.editor._$8b(this);
    }
    .bind(a);
    this._$3z();
    this._$4O.width = this._$4F;
    this._$4O.height = this._$5S;
    return a;
}
;
window._$V.prototype._$5V = function(b, a) {
    this._$20.move(b, a);
    this._$2x.move(b, a);
    this._$2x[a].c.remove();
    this._$12._$k(this._$2x[a].c, a);
}
;
window._$V.prototype._$8l = function(b) {
    var a = this._$2x[b];
    a.c._$5J();
    a.c.remove();
    delete a.text;
    delete a.can;
    delete a.c;
    delete a._$49;
    this._$2x.remove(a);
}
;
window._$V.prototype._$4C = function(b) {
    for (var a = 0; a < this._$2x.length; a++) {
        if (a == b) {
            this._$2x[a].c.classList.add("mteditor-preview-selected");
        } else {
            this._$2x[a].c.classList.remove("mteditor-preview-selected");
        }
    }
}
;
window._$V.prototype._$3z = function() {
    for (var a = 0; a < this._$2x.length; a++) {
        this._$2x[a].text.textContent = a + 1;
    }
}
;
window._$V.prototype._$8b = function(b) {
    var a = this._$20.indexOf(b);
    this._$aq(a);
}
;
window._$V.prototype._$aq = function(b) {
    if (b < 0 || b >= this._$20.length) {
        return -1;
    }
    var a = this._$2x[b];
    a._$49._$15(a.can, 0.2);
    if (b == this._$20.length - 1) {
        if (a.can.width != this._$4O.width || a.can.height != this._$4O.height) {
            this._$4O.width = a.can.width;
            this._$4O.height = a.can.height;
        }
    }
}
;
window._$V.prototype._$5U = function(c) {
    var a = {};
    a._$49 = c;
    a.c = document.cE2("div", "mteditor-preview");
    a.can = document.cE2("canvas", "mteditor-preview-can");
    a.text = document.cE2("div", "mteditor-preview-text");
    a.c.appendChild(a.can);
    a.c.appendChild(a.text);
    var b = {
        "editor": this,
        "pr": a
    };
    a.c.addEventListener("click", this._$7X.bind(b));
    this._$12.appendChild(a.c);
    this._$2x.push(a);
    this._$12.appendChild(this._$6L);
    return a;
}
;
window._$V.prototype._$40 = function(a) {
    return this._$2x.indexOf(a);
}
;
window._$V.prototype._$7X = function() {
    var a = this.editor._$40(this.pr);
    if (a == this.editor._$4l) {} else {
        this.editor._$1X(a);
    }
}
;
window._$V.prototype._$3R = function() {
    var b = this._$20[0]._$94();
    var c = document.cE("canvas");
    c.height = this._$42;
    c.width = this._$97;
    var g = this._$4V;
    var h = Math.round(g * this._$42 / this._$97);
    var d = this._$97 / this._$4V;
    var f = parseInt(d * b.width);
    var e = parseInt(d * b.height);
    var a = c.getContext("2d");
    a["save"]();
    a.globalAlpha = 1;
    a.globalCompositeOperation = "source-over";
    a["drawImage"](b, 0, 0, b.width, b.height, 0, 0, f, e);
    a["restore"]();
    return c["toDataURL"]('image/jpeg', 0.6);
}
;
window._$V.prototype._$l = function(e, f, d) {
    var a = {};
    var g = document.cE2("div", "mtslide-c");
    var b = document.cE2("input", "mtslide-c-slide");
    var c = document.cE2("input", "mtslide-c-input");
    b["setAttribute"]("type", "range");
    b["setAttribute"]("min", e);
    b["setAttribute"]("max", f);
    b["value"] = d;
    c["setAttribute"]("type", "number");
    c["setAttribute"]("min", e);
    c["setAttribute"]("max", f);
    c["value"] = d;
    g.appendChild(c);
    g.appendChild(b);
    a.c = g;
    a.s = b;
    a.i = c;
    a.v = d;
    a.min = e;
    a.max = f;
    a._$5X = function(a) {
        console.log(a);
    }
    ;
    a._$13 = function(a) {
        this._$5q(a.target.value, false);
    }
    .bind(a);
    a._$5q = function(a, b) {
        if (b == 1) {
            this.v = a;
        }
        if (a != this.s.value) {
            this.s.value = a;
        }
        if (a != this.i.value) {
            this.i.value = a;
        }
        if (a != this.v) {
            this.v = parseFloat(a);
            this._$5X(parseFloat(a));
        }
    }
    .bind(a);
    b.addEventListener("input", a._$13);
    c.addEventListener("input", a._$13);
    return a;
}
;
window._$V.prototype._$ae = function() {
    this._$7Q = {};
    var c = this._$a3["select"];
    var a = {};
    a.c = this.c.querySelector(".mteditor-tooloption-select");
    a.b1 = this.c.querySelector(".mteditor-tooloption-select-all");
    a.b2 = this.c.querySelector(".mteditor-tooloption-select-cancel");
    this._$7Q["select"] = a;
    c._$38(a);
    var c = this._$a3["shapes"];
    var a = {
        "options": {}
    };
    a.c = this.c.querySelector(".mteditor-tooloption-shapes");
    a.c2 = this.c.querySelector(".mteditor-tooloption-shapes-c");
    a._$4y = this.c.querySelector(".mteditor-tooloption-shapes-temp");
    this._$7Q["shapes"] = a;
    c._$38(a);
    c._$j(a);
    this._$h(c, a.options);
    var c = this._$a3["pencil"];
    var a = {
        "options": {}
    };
    a.c = this.c.querySelector(".mteditor-tooloption-brush");
    this._$7Q["pencil"] = a;
    for (var k = 0; k < c._$9n.length; k++) {
        var d = {};
        var j = c._$9n[k];
        var e = c._$0[j];
        var b = document.cE2("div", "mteditor-tooloption");
        var f = this._$l(e.range[0], 30, e.weight);
        var i = document.cE2("div", "mteditor-tooloption-title");
        i.textContent = e.name;
        var h = document.cE2("div", "mteditor-tooloption-text");
        h.textContent = "Brush Thickness";
        var l = {
            "editor": this,
            "o": d
        };
        f._$5X = function(c) {
            var b = this.editor._$a3["pencil"];
            var a = this.o.key;
            b._$0[a].weight = parseInt(c);
            b._$5h(a);
        }
        .bind(l);
        b.addEventListener("click", function(c) {
            if (this.editor._$7a != "pencil") {
                return -1;
            }
            var a = this.editor._$a3["pencil"];
            var b = this.editor._$7Q["pencil"];
            if (a._$24 == this.o.key) {
                return -1;
            }
            a._$5h(this.o.key);
            this.editor._$h(a, b.options);
        }
        .bind(l));
        d.c = b;
        d.key = j;
        d._$5C = f;
        d.title = i;
        b.appendChild(i);
        b.appendChild(h);
        b.appendChild(f.c);
        a.c.appendChild(b);
        a.options[j] = d;
        if ("info"in e) {
            var g = document.cE2("div", "mteditor-tooloption-info");
            g.setAttribute("x-sticker", 1);
            g.setAttribute("data-sticker-title", "");
            g.setAttribute("data-sticker-text", e["info"]);
            b._$ak(g);
        }
    }
    this._$h(c, a.options);
    var c = this._$a3["eraser"];
    var a = {
        "options": {}
    };
    a.c = this.c.querySelector(".mteditor-tooloption-eraser");
    this._$7Q["eraser"] = a;
    for (var k = 0; k < c._$9n.length; k++) {
        var d = {};
        var j = c._$9n[k];
        var e = c._$0[j];
        var b = document.cE2("div", "mteditor-tooloption");
        var f = this._$l(e.range[0], e.range[1], e.weight);
        var i = document.cE2("div", "mteditor-tooloption-title");
        i.textContent = e.name;
        var h = document.cE2("div", "mteditor-tooloption-text");
        h.textContent = "Brush Thickness";
        var l = {
            "editor": this,
            "o": d
        };
        f._$5X = function(c) {
            var a = this.editor._$a3["eraser"];
            var b = this.o.key;
            a._$0[b].weight = parseInt(c);
            console.log(a._$aL);
            a._$5h(b);
        }
        .bind(l);
        b.addEventListener("click", function(c) {
            if (this.editor._$7a != "eraser") {
                return -1;
            }
            var a = this.editor._$a3["eraser"];
            var b = this.editor._$7Q["eraser"];
            if (a._$24 == this.o.key) {
                return -1;
            }
            a._$5h(this.o.key);
            this.editor._$h(a, b.options);
        }
        .bind(l));
        d.c = b;
        d.key = j;
        d._$5C = f;
        d.title = i;
        b.appendChild(i);
        b.appendChild(h);
        b.appendChild(f.c);
        a.c.appendChild(b);
        a.options[j] = d;
        if ("info"in e) {
            var g = document.cE2("div", "mteditor-tooloption-info");
            g.setAttribute("x-sticker", 1);
            g.setAttribute("data-sticker-title", "");
            g.setAttribute("data-sticker-text", e["info"]);
            b._$ak(g);
        }
    }
    this._$h(c, a.options);
    var c = this._$a3["bucket"];
    var a = {
        "options": {}
    };
    a.c = this.c.querySelector(".mteditor-tooloption-bucket");
    this._$7Q["bucket"] = a;
    for (var k = 0; k < c._$9n.length; k++) {
        var d = {};
        var j = c._$9n[k];
        var e = c._$0[j];
        var b = document.cE2("div", "mteditor-tooloption");
        var f = this._$l(e.range[0], e.range[1], e.extend);
        var i = document.cE2("div", "mteditor-tooloption-title");
        i.textContent = e.name;
        var h = document.cE2("div", "mteditor-tooloption-text");
        h.textContent = "Overflow";
        var l = {
            "editor": this,
            "o": d
        };
        f._$5X = function(c) {
            var a = this.editor._$a3["bucket"];
            var b = this.o.key;
            a._$0[b].extend = parseInt(c);
            console.log(a._$aL);
            a._$5h(b);
        }
        .bind(l);
        b.addEventListener("click", function(c) {
            if (this.editor._$7a != "bucket") {
                return -1;
            }
            var a = this.editor._$a3["bucket"];
            var b = this.editor._$7Q["bucket"];
            if (a._$24 == this.o.key) {
                return -1;
            }
            a._$5h(this.o.key);
            this.editor._$h(a, b.options);
        }
        .bind(l));
        d.c = b;
        d.key = j;
        d._$5C = f;
        d.title = i;
        b.appendChild(i);
        b.appendChild(h);
        b.appendChild(f.c);
        a.c.appendChild(b);
        a.options[j] = d;
        if ("info"in e) {
            var g = document.cE2("div", "mteditor-tooloption-info");
            g.setAttribute("x-sticker", 1);
            g.setAttribute("data-sticker-title", "");
            g.setAttribute("data-sticker-text", e["info"]);
            b._$ak(g);
        }
    }
    this._$h(c, a.options);
    var c = this._$a3["text"];
    var a = {
        "options": {}
    };
    a.c = this.c.querySelector(".mteditor-tooloption-texttool");
    a.ec = this.c.querySelector(".mteditor-tooloption-texttool-c");
    this._$7Q["text"] = a;
    this._$4Q = [];
    var m = document.cE2("div", "mteditor-tooloption-texttool-edit-c");
    var h = document.cE2("div", "mteditor-tooloption-text");
    h.textContent = "Font Size";
    var f = this._$l(20, 60, 35);
    f._$5X = function(c) {
        var b = this._$44();
        if (b == -1) {
            return -1;
        }
        var a = b._$5E();
        if (a == -1 || a.type != "text") {
            return -1;
        }
        var d = this._$7Q["text"]["clientkey"];
        a._$9O(d, "fontSize", c);
    }
    .bind(this);
    m.appendChild(h);
    m.appendChild(f.c);
    a.fontsize = f;
    var n = document.cE2("div", "mteditor-tooloption-text");
    n.textContent = "Rotation";
    var f = this._$l(0, 360, 0);
    f._$5X = function(e) {
        var b = this._$44();
        if (b == -1) {
            return -1;
        }
        var a = b._$5E();
        if (a == -1 || a.type != "text") {
            return -1;
        }
        var c = this._$7Q["text"]["clientkey"];
        var d = a._$8Y(c);
        if (d != -1) {
            d["exitEditing"]();
            a._$9O(c, "angle", e);
        }
    }
    .bind(this);
    m.appendChild(n);
    m.appendChild(f.c);
    a.rotation = f;
    a._$3s = m;
    a.clientkey = -1;
    a.ec.appendChild(a._$3s);
}
;
window._$V.prototype._$2H = function() {
    var a = this._$7Q["text"];
    a._$3s.style.display = "";
}
;
window._$V.prototype._$B = function(b, c) {
    var a = this._$7Q["text"];
    a.fontsize._$5q(b["fontSize"], true);
    a.rotation._$5q(b["angle"], true);
    a.clientkey = b._$2e;
    a._$3s.style.display = "block";
    a._$3s.appendAfter(c);
}
;
window._$V.prototype._$ac = function(f) {
    var b = -1;
    var g = f.fab["getActiveObjects"]();
    var e = 0;
    var d = f.fab["getObjects"]('textbox');
    var c = this._$4Q;
    for (var a = 0; a < d.length; a++) {
        c[a].classList.remove("mteditor-tooloption-texttool-e-selected");
        if (g.contains(d[a])) {
            c[a].classList.add("mteditor-tooloption-texttool-e-selected");
            e += 1;
            if (e == 1) {
                b = a;
            } else {
                b = -1;
            }
        }
    }
    if (b >= 0) {
        this._$B(d[b], c[b]);
    } else {
        this._$2H();
    }
}
;
window._$V.prototype._$7Z = function(g) {
    var d = [];
    if (g.type == "text") {
        d = g.fab["getObjects"]('textbox');
    }
    while (d.length > this._$4Q.length) {
        var a = document.cE2("div", "mteditor-tooloption-texttool-e");
        var e = document.cE2("div", "mteditor-tooloption-texttool-e-title");
        var i = document.cE2("div", "mteditor-tooloption-texttool-e-delete");
        var k = document.cE2("div", "mteditor-tooloption-texttool-e-color");
        a._$N = e;
        a._$f = "#000";
        a._$7F = i;
        a._$7d = k;
        a._$8B = -1;
        a.appendChild(a._$7F);
        a.appendChild(a._$7d);
        a.appendChild(a._$N);
        var j = {
            "e": a,
            "editor": this
        };
        a.addEventListener("click", function() {
            var b = this.editor._$44();
            if (b == -1) {
                return -1;
            }
            var a = b._$5E();
            if (a == -1 || a.type != "text") {
                return -1;
            }
            a._$6T(this.e._$8B);
        }
        .bind(j));
        i.addEventListener("click", function(c) {
            var b = this.editor._$44();
            if (b == -1) {
                return -1;
            }
            var a = b._$5E();
            if (a == -1 || a.type != "text") {
                return -1;
            }
            a._$3M(this.e._$8B);
            c.stopPropagation();
            return 0;
        }
        .bind(j), true);
        this._$7Q["text"].ec._$ak(a);
        this._$4Q.push(a);
    }
    var h = this._$4Q;
    for (var c = 0; c < h.length; c++) {
        var b = h[c];
        if (c >= d.length) {
            b.style.display = "none";
            continue;
        }
        b.style.display = "";
        var f = d[c];
        var e = f["text"].trim().substring(0, 30);
        if (e != b._$N.textContent) {
            b._$N.textContent = e;
        }
        var a = f["fill"];
        if (a != b._$f) {
            b._$7d.style["color"] = a;
        }
        b._$8B = f._$2e;
    }
    this._$ac(g);
}
;
window._$V.prototype._$h = function(d, a) {
    var b = d._$24;
    for (var c in a) {
        a[c].c.classList.remove("mteditor-tooloption-selected");
    }
    if (b in a) {
        a[b].c.classList.add("mteditor-tooloption-selected");
    }
}
;
window._$V.prototype._$5t = function(a, b) {
    for (var c in a) {
        a[c].c.classList.remove("mteditor-tooloption-selected");
    }
    if (b in a) {
        a[b].c.classList.add("mteditor-tooloption-selected");
    }
}
;
window._$V.prototype._$69 = function(a) {
    for (var b in this._$7Q) {
        this._$7Q[b].c.style["display"] = "none";
    }
    if (a in this._$7Q) {
        this._$7Q[a].c.style["display"] = "block";
    }
}
;
window._$V.prototype._$W = function() {
    this._$4J("pencil");
    this._$8h["setColor"]("#000000");
}
;
window._$V.prototype._$9B = function() {
    this._$a3 = {};
    this._$7Q = {};
    this._$7a = -1;
    for (var a in window._$6Y) {
        var b = new window._$6Y[a]();
        b._$59(this);
        this._$a3[a] = b;
    }
    this._$4J("pencil");
    this._$8h["setColor"]("#000000");
}
;
window._$V.prototype._$9A = function(a) {
    if (!(a in this._$a3)) {
        return -1;
    }
    this._$4J(a);
    this._$a3[a]._$aT();
}
;
window._$V.prototype._$6o = function() {
    if (this._$7a == -1) {
        return -1;
    }
    this._$4J(this._$7a);
}
;
window._$V.prototype._$4J = function(a) {
    if (!(a in this._$a3)) {
        return -1;
    }
    if (this._$7a in this._$6k) {
        var c = this._$6k[this._$7a];
        c.classList.remove("mteditor-tool-selected");
    }
    this._$6k[a].classList.add("mteditor-tool-selected");
    this._$4h = -1;
    this._$7a = a;
    var b = this._$44();
    if (b != -1 && typeof (b) != "undefined") {
        this._$a3[a]._$3L(b);
    }
    this._$69(a);
}
;
window._$V.prototype._$6l = function(a) {}
;
window._$V.prototype._$5z = function(a) {
    a.c["scrollIntoView"]({
        "behavior": 'auto',
        "block": 'start',
        "inline": 'center'
    });
    this._$aS.scrollTop -= 45;
}
;
window._$V.prototype._$4S = function() {
    var a = this._$44();
    if (a == -1) {
        window._$57("No page is currently selected.", 2000);
        return -1;
    }
    a._$4q();
}
;
window._$V.prototype._$aB = function() {
    var a = this._$44();
    if (a == -1) {
        window._$57("No page is currently selected.", 2000);
        return -1;
    }
    a._$c();
}
;
window._$V.prototype._$ay = function() {}
;
window._$V.prototype._$7k = function() {}
;
window._$V.prototype._$1e = function(a) {
    this._$7m = a["toRGBA"]()["toString"]();
    this._$95 = a;
    this._$3T = _$5l._$3d(a["h"], a["s"], a["v"]);
    for (var c in this._$a3) {
        this._$a3[c]._$au(a);
    }
    var b = this._$44();
    if (b != -1) {
        b._$2v();
    }
}
;
window._$V.prototype._$9i = function() {
    this._$8h = window["Pickr"]["create"]({
        "el": '#mteditor-picker',
        "container": '.mteditor-picker-c',
        "theme": 'nano',
        "default": '#4FFF5C',
        "default": '#000000',
        "showAlways": true,
        "defaultRepresentation": 'HEX',
        "swatches": ['rgba(244, 67, 54, 1)', 'rgba(233, 30, 99, 1)', 'rgba(103, 58, 183, 1)', 'rgba(63, 81, 181, 1)', 'rgba(33, 150, 243, 1)', 'rgba(0, 188, 212, 1)', 'rgba(139, 195, 74, 1)', 'rgba(255, 235, 59, 1)', 'rgba(255, 193, 7, 1)'],
        "swatches": null,
        "components": {
            "preview": true,
            "opacity": true,
            "hue": true,
            "interaction": {
                "input": true
            }
        }
    });
    this._$7m = "#4FFF5C";
    this._$7m = "rgba(79, 255, 92, 1)";
    this._$7m = "rgba(0, 0, 0, 1)";
    this._$7m = "rgba(0, 0, 0, 1)";
    this._$8h.on('change', function(b) {
        var c = this._$8h;
        var a = b["toRGBA"]().toString();
        if (a != this._$7m) {
            this._$7m = a;
            c["setColor"](a);
        }
    }
    .bind(this));
    this._$8h.on('save', function(a) {
        this._$1e(a);
    }
    .bind(this));
    this._$1e(this._$8h["_color"]);
}
;
window._$V.prototype._$65 = function(a) {
    if (a == true) {
        this._$3X = false;
    } else {
        this._$3X = true;
    }
}
;
window._$V.prototype._$6V = function() {
    window.addEventListener("keydown", this._$6y.bind(this));
    window.addEventListener("keyup", this._$9Y.bind(this));
    this._$7T = {
        "e": "e",
        "g": "g",
        "b": "b",
        "i": "i",
        "z": "z",
        "t": "t",
        "m": "m",
        "redo": "y",
        "shapes": "u",
        "all": "a",
        "copy": "c",
        "paste": "v"
    };
    window.addEventListener("keypress", this._$8i.bind(this));
    this._$3X = true;
    this._$4h = -1;
}
;
window._$V.prototype._$8i = function(a) {
    if (this._$3X == false) {
        return -1;
    }
    var b = a["key"].toLowerCase();
    if (b == this._$7T["e"]) {
        this._$4J("eraser");
        a.preventDefault();
        return 0;
    } else if (b == this._$7T["b"]) {
        this._$4J("pencil");
        a.preventDefault();
        return 0;
    } else if (b == this._$7T["g"]) {
        this._$4J("bucket");
        a.preventDefault();
        return 0;
    } else if (b == this._$7T["i"]) {
        this._$4J("eyedrop");
        a.preventDefault();
        return 0;
    } else if (b == this._$7T["m"]) {
        this._$4J("select");
        a.preventDefault();
        return 0;
    } else if (b == this._$7T["t"]) {
        this._$4J("text");
        a.preventDefault();
        return 0;
    } else if (b == this._$7T["shapes"]) {
        this._$4J("shapes");
        a.preventDefault();
        return 0;
    }
}
;
window._$V.prototype._$6y = function(a) {
    if (this._$3X == false) {
        return -1;
    }
    var b = a.key.toLowerCase();
    if (b == "alt") {
        if (this._$7a == "pencil" || this._$7a == "bucket") {
            var c = this._$7a;
            this._$4J("eyedrop");
            this._$4h = c;
            a.preventDefault();
            return 0;
        }
    } else if (b == this._$7T["all"]) {
        if (a["ctrlKey"] == true) {
            this._$a6();
            a.preventDefault();
            return 0;
        }
    } else if (b == this._$7T["copy"]) {
        if (a["ctrlKey"] == true) {
            this._$ay();
            a.preventDefault();
            return 0;
        }
    } else if (b == this._$7T["paste"]) {
        if (a["ctrlKey"] == true) {
            this._$7k();
            a.preventDefault();
            return 0;
        }
    } else if (b == this._$7T["redo"]) {
        if (a["ctrlKey"] == true) {
            this._$aB();
            a.preventDefault();
            return 0;
        }
    } else if (b == this._$7T["z"]) {
        if (a["shiftKey"] && a["ctrlKey"]) {
            this._$aB();
            a.preventDefault();
            return 0;
        } else if (a["ctrlKey"] == true) {
            this._$4S();
            a.preventDefault();
            return 0;
        }
    }
}
;
window._$V.prototype._$9Y = function(b) {
    if (this._$3X == false) {
        return -1;
    }
    var a = b.key.toLowerCase();
    if (a == "alt") {
        if (this._$4h != -1) {
            this._$4J(this._$4h);
            this._$4h = -1;
        }
    }
}
;
window._$V.prototype._$9r = function() {
    this.zoom = 1;
    this._$4z.addEventListener("wheel", function(a) {
        if (a["ctrlKey"] == true) {
            a["preventDefault"]();
            if (a["deltaY"] < 0) {
                this._$6U(this.zoom + 0.2);
            } else if (a["deltaY"] > 0) {
                this._$6U(this.zoom - 0.1);
            }
            return 0;
        }
    }
    .bind(this), {
        _$8N: false
    });
}
;
window._$V.prototype._$6U = function(a) {
    this.zoom = Math.min(3, Math.max(0.1, a));
    var b = "scale(" + this.zoom + ")";
    this._$a0["style"]["transform"] = b;
    this._$50.textContent = _$1C._$7b(this.zoom) + "x";
    this._$3k["recalculate"]();
}
;
window._$V.prototype._$1b = "";
window._$V.prototype._$1d = true;
window._$V.prototype._$5I = function(a) {
    this._$2j.textContent = a;
    this._$1a.value = a;
    this._$1a._$56();
    this.title = a;
}
;
window._$V.prototype._$8g = function(a) {
    this._$9Z.value = a;
    this._$9Z._$56();
    this._$8k = a;
}
;
window._$V.prototype._$98 = function(a) {
    this._$30.classList.remove("mteditor-pubbox-tab-" + this._$1b);
    this._$30.classList.add("mteditor-pubbox-tab-" + a);
    this._$1b = a;
    this._$2c();
}
;
window._$V.prototype._$Q = function() {
    this._$5I(this._$1a.value);
    this._$8g(this._$9Z.value);
    this._$9o();
    this._$7r(true);
}
;
window._$V.prototype._$8s = function(b) {
    this._$3P = b["dataset"]["cat"];
    for (var a = 0; a < this._$3K.length; a++) {
        if (this._$3K[a]["dataset"]["cat"] == this._$3P) {
            this._$3K[a].classList.add("mt-pubbox-category-selected");
        } else {
            this._$3K[a].classList.remove("mt-pubbox-category-selected");
        }
    }
}
;
window._$V.prototype._$2c = function() {
    if (this._$1d == false) {
        return -1;
    }
    this._$3X = false;
    this._$1d = false;
    this._$30.style["display"] = "block";
    this._$30.scrollHeight;
    this._$30.classList.add("mteditor-pubbox-show");
    this._$5I(this.title);
    this._$8g(this._$8k);
}
;
window._$V.prototype._$6P = function() {}
;
window._$V.prototype._$9o = function() {
    if (this._$1d == true) {
        return -1;
    }
    this._$3X = true;
    this._$1d = true;
    this._$30.classList.remove("mteditor-pubbox-show");
    setTimeout(function() {
        this._$30.style["display"] = "none";
    }
    .bind(this), 400);
    this._$6P();
}
;
window._$V.prototype._$3h = function(a, b, c) {
    this._$1q = false;
    this._$3t = c;
    this.draftkey = a;
    window._$57("Loading draft...", 6000);
    window["JSZipUtils"]["getBinaryContent"](b, function(a, b) {
        if (a) {
            window._$57("Error fetching the draft data! Please contact the website moderators!", 6000);
            return -1;
        }
        window["JSZip"]["loadAsync"](b)["then"](function(a) {
            this._$3U(a, function() {});
        }
        .bind(this), function(a) {
            window._$57("Failed to load the draft: Corrupt draft files!", 6000);
        });
    }
    .bind(this));
}
;
window._$V.prototype._$as = function(b) {
    var a = b["target"]["files"][0];
    try {
        window["JSZip"]["loadAsync"](a)["then"](function(a) {
            this._$3U(a, function() {
                this._$7r(true);
                this._$9o();
                this._$8D.value = "";
                this.draftkey = -1;
                window["history"]["replaceState"]({}, "", "/draw");
            }
            .bind(this));
        }
        .bind(this), function(a) {
            window._$57("Failed to load the draft: Corrupt draft files!", 6000);
        });
    } catch (c) {
        window._$57("Failed to load the draft: Invalid Draft File!", 6000);
    }
}
;
window._$V.prototype._$3U = function(a, b) {
    this._$7E = b;
    try {
        a["file"]('settings.dat')["async"]("string")["then"](function(f) {
            try {
                var b = window["JSON"]["parse"](f);
            } catch (h) {
                window._$57("Failed to load the draft: Corrupt draft files!", 6000);
                return -1;
            }
            this._$4A();
            if ("w"in b && "h"in b) {
                this._$6c(parseInt(b["w"]), parseInt(b["h"]));
            }
            var d = 1000;
            if ("pn"in b) {
                d = parseInt(b["pn"]);
            }
            var c = 0;
            while (c < d) {
                if ("ps"in b && c in b["ps"]) {
                    var e = b["ps"][c];
                    var g = this._$8C();
                    this._$8y(g, c, a, e);
                } else {
                    break;
                }
                c += 1;
            }
            this._$7E();
        }
        .bind(this), function(a) {
            window._$57("Failed to load the draft: Corrupt draft files!", 6000);
        }
        .bind(this));
    } catch (c) {
        window._$57("Failed to load the draft: Corrupt draft files! Did you modify the zip file? Make sure the files are in the right structure!", 6000);
    }
}
;
window._$V.prototype._$8y = function(b, a, c, d) {
    this._$9T[a] = 0;
    b._$2L = function(a) {
        this._$9T[a] = 1;
        this._$4K();
    }
    .bind(this, a);
    b._$8U(c, a, d);
}
;
window._$V.prototype._$4K = function() {
    for (var b in this._$9T) {
        if (this._$9T[b] == 0) {
            return -1;
        }
    }
    if (this._$20.length > 0) {
        this._$1X(0);
        this._$20[0]._$3p("draw");
    }
    var a = "Draft loaded successfully!";
    window._$57(a, 6000);
    if (this._$3t != -1) {
        this._$3t();
    }
}
;
window._$V.prototype._$7W = function() {
    this._$7r(true);
}
;
window._$V.prototype._$5u = function() {
    if (window["SERVERDATA"]["loggedin"] == false) {
        window._$57("You must have an account to save drafts! You can download your work locally as well.", 7000);
        return 0;
    }
    window._$57("Saving draft...", 6000);
    this._$U = setTimeout(function() {}, 1000);
    var a = this._$1T();
    a["generateAsync"]({
        type: "blob"
    })["then"](function(c) {
        var a = new window["FormData"]();
        a["append"]('desc', this._$8k);
        a["append"]('t', this.title);
        a["append"]('b', c);
        var b = this._$3R();
        a["append"]('th', b);
        a["append"]('thw', this._$97);
        a["append"]('thh', this._$42);
        if (this.draftkey != -1) {
            a["append"]('dk', this.draftkey);
        }
        window._$1C._$2D("/ajax/savedraft.php", a, function(a) {
            if ("dk"in a) {
                this.draftkey = a["dk"];
            }
            window._$57("Draft saved successfully!", 3000);
            this._$ab = false;
            window["history"]["replaceState"]({}, "", "/draw?draft=" + this.draftkey);
        }
        .bind(this), function(a) {
            clearTimeout(this._$U);
            if ("toobig"in a) {
                window._$57("This draft couldn't be saved properly, as it is too large. You can download it to your device and load it from your device instead!", 8000);
            } else if ("error"in a) {
                window._$57(a.error, 6000);
            } else {
                window._$57("A draft couldn't be saved successfully. Download your work for the moment!", 6000);
            }
        }
        .bind(this), 0);
    }
    .bind(this), function(a) {
        window._$57("Cannot generate source files.", 3000);
    });
}
;
window._$V.prototype._$10 = function() {
    var a = this._$1T();
    a["generateAsync"]({
        type: "blob"
    })["then"](function(c) {
        var a = new Date();
        var d = a["getDate"]() + "-" + (a["getMonth"]() + 1) + "-" + a["getFullYear"]() + "_" + a["getHours"]() + "-" + a["getMinutes"]();
        var e = this.title._$4P().replace(/\s/g, '');
        var b = e + "-" + d + ".zip";
        window["saveAs"](c, b);
    }
    .bind(this), function(a) {
        window._$57("Cannot generate source files.", 3000);
    });
    return 0;
}
;
window._$V.prototype._$1T = function() {
    var d = new window["JSZip"]();
    var e = {
        "ps": {},
        "w": this._$4F,
        "h": this._$5S,
        "pn": Object.keys(this._$20).length
    };
    for (var a = 0; a < this._$20.length; a++) {
        var g = this._$20[a];
        var c = g._$2Q(a);
        e["ps"][a] = c["data"];
        for (var b = 0; b < c["files"].length; b++) {
            var f = a + "-" + c["files"][b][0];
            var h = c["files"][b][1].split('base64,')[1];
            d["file"](f, h, {
                "base64": true
            });
        }
    }
    d["file"]("settings.dat", window["JSON"]["stringify"](e));
    return d;
}
;
window._$V.prototype._$x = function() {
    var a = {};
    a["w"] = this._$4F;
    a["h"] = this._$5S;
    a["t"] = this.title;
    a["desc"] = this._$8k;
    a["pn"] = this._$20.length;
    a["ps"] = {};
    var d = [];
    if (this.draftkey != -1) {
        a["dk"] = this.draftkey;
    }
    a["th"] = this._$3R();
    a['thw'] = this._$97;
    a['thh'] = this._$42;
    a['cat'] = this._$3P;
    for (var b = 0; b < this._$20.length; b++) {
        var c = this._$20[b]._$94();
        a["ps"]["img" + b] = c["toDataURL"]();
    }
    return a;
}
;
window._$V.prototype._$4f = function() {
    if (this._$3B == true) {
        window._$57("Please wait! It is uploading!", 3000);
        return -1;
    }
    this._$5I(this._$1a.value);
    this._$8g(this._$9Z.value);
    this._$7r(true);
    this._$3B = true;
    var a = this._$x();
    window._$57("Uploading minitoon...", 30000);
    window._$1C._$8G("/ajax/publish.php", a, function(a) {
        window._$57("Successfully published!", 4000);
        this._$3B = false;
        this._$ab = false;
        var b = document._$8J("download");
        if (a["u"] == -1) {
            b.href = "/p/" + a["pid"];
        } else {
            b.href = "/@" + a["u"];
        }
        b.click();
    }
    .bind(this), function(a) {
        this._$3B = false;
        if ("error"in a) {
            window._$57(a.error, 10000);
        } else {
            window._$57("Unexpected error occurred... Please download a copy just in case!", 5000);
        }
    }
    .bind(this), 0);
}
;
window._$6F = function(a) {
    this.editor = a;
    this._$59();
}
;
window._$6F.prototype._$59 = function() {
    this.height = 1;
    this.width = 1;
    this._$1M = -1;
    this._$25();
    this._$9P = {};
    this.layers = {};
    this._$86 = [];
    this._$8A = {};
    this.c = document.cE2("div", "mteditor-page");
    this.bg = document.cE2("div", "mteditor-page-bg");
    this.c.appendChild(this.bg);
    this.bg.addEventListener("click", this._$9f.bind(this));
    this._$2Z = -1;
    this._$9d = -1;
    this._$5H = -1;
    this._$77();
    return 0;
}
;
window._$6F.prototype._$9f = function() {
    var a = this._$5E();
    if (a != -1) {
        a._$80();
    }
}
;
window._$6F.prototype._$ar = function() {
    this.c.classList.remove("mteditor-page-selected");
    this.c.classList.add("mteditor-page-unselected");
}
;
window._$6F.prototype._$2U = function() {
    this.c.classList.add("mteditor-page-selected");
    this.c.classList.remove("mteditor-page-unselected");
}
;
window._$6F.prototype._$8O = function() {
    this._$T("bg", "Background");
    this._$T("draw", "Color Layer");
    var b = this._$T("draw", "Main Layer");
    var a = this._$T("text", "Text Layer");
    this._$5H = a.key;
    this._$4L(b.key);
}
;
window._$6F.prototype._$36 = function() {
    for (var a = 0; a < this._$86.length; a++) {
        var b = this._$86[a];
        if (b in this.layers) {
            var c = this.layers[b];
            c._$8L(a);
        }
    }
}
;
window._$6F.prototype._$T = function(d, f, b, e) {
    if (!(d in window._$7)) {
        return -1;
    }
    if (typeof (b) == "undefined") {
        b = this._$86.length;
    }
    var a = _$1C._$29(6);
    while (a in this.layers) {
        a = _$1C._$aw(6);
    }
    if (typeof (e) != "undefined") {
        a = e;
    }
    var c = new window._$7[d]();
    c._$59(this, f, b, a, this.width, this.height);
    this.c.appendChild(c.c);
    this.layers[a] = c;
    this._$86._$2I(a, b);
    this._$36();
    this._$8X("n");
    return c;
}
;
window._$6F.prototype._$78 = function(c) {
    for (var b in this.layers) {
        var a = this.layers[b];
        if (a._$8f == c) {
            return a;
        }
    }
    return -1;
}
;
window._$6F.prototype._$5E = function() {
    if (this._$2Z in this.layers) {
        return this.layers[this._$2Z];
    }
    return -1;
}
;
window._$6F.prototype._$aQ = function(a) {
    if (a in this.layers) {
        return this.layers[a];
    }
    return -1;
}
;
window._$6F.prototype._$3p = function(c, d) {
    var e = -1;
    for (var a = this._$86.length - 1; a >= 0; a--) {
        var b = this._$86[a];
        if (this.layers[b].type == c) {
            this._$4L(b);
            return 0;
        }
    }
    if (d == 1) {
        this._$7D();
    }
}
;
window._$6F.prototype._$7D = function() {
    if (this._$86.length <= 0) {
        return -1;
    }
    this._$4L(this._$86[this._$86.length - 1]);
}
;
window._$6F.prototype._$4L = function(a) {
    if (a == this._$2Z) {
        return -1;
    }
    if (!(a in this.layers)) {
        return -1;
    }
    if (this._$2Z in this.layers) {
        this.layers[this._$2Z]._$26();
    }
    this._$2Z = a;
    this.editor._$4J(this.editor._$7a);
    this.layers[a]._$2u();
    this.editor._$55();
    return 0;
    if (this._$2Z in this.layers) {
        this._$2b(this._$9d);
    }
    if (this._$9d in this._$aR) {
        var c = this._$9P[this._$2Z];
        this._$3Z(this._$9d);
        var b = this._$aR[this._$9d];
        b.style["display"] = "";
        b.style["z-index"] = parseInt(c["z"]) + 1;
    }
}
;
window._$6F.prototype._$77 = function() {
    this._$6E = {};
}
;
window._$6F.prototype._$6g = function() {
    for (var a in this._$6E) {
        this._$6E[a].c.style["display"] = "none";
    }
    if (this._$9d in this._$6E) {
        this._$6E[this._$9d]._$61();
    }
    for (var a in this.layers) {
        var b = this.layers[a];
        if (b != -1) {
            b.c.style["display"] = "block";
        }
    }
    this._$9d = -1;
}
;
window._$6F.prototype._$6 = function(b, d) {
    if (!(b in this._$6E)) {
        if (!(b in window._$aX)) {
            return -1;
        }
        var a = new window._$aX[b]();
        a._$59(this);
        this.c.appendChild(a.c);
        this._$6E[b] = a;
    }
    var a = this._$6E[b];
    if (b == this._$9d && a._$9C == this._$2Z && a._$5r() == false) {
        return a;
    }
    var c = this._$5E();
    this._$6g();
    a._$5k(d);
    a.c.style["display"] = "";
    a.c.style["z-index"] = c.zIndex + 1;
    a._$3V();
    this._$9d = b;
    this._$2v();
    return a;
}
;
window._$6F.prototype._$6R = function() {
    if (this._$9d in this._$6E) {
        return this._$9d;
    }
    return -1;
}
;
window._$6F.prototype._$4X = function() {
    if (this._$9d in this._$6E) {
        return this._$6E[this._$9d];
    }
    return -1;
}
;
window._$6F.prototype._$2v = function() {
    var e = this.editor._$7m;
    var d = this.editor._$95;
    var c = this.editor._$3T;
    var b = this._$4X();
    if (b != -1) {
        b._$2m(e, d, c);
    }
    var a = this._$5E();
    if (a != -1) {
        a._$2m(e, d, c);
    }
}
;
window._$6F.prototype._$25 = function() {
    this._$9G();
}
;
window._$6F.prototype._$5s = function() {
    this.c._$5J();
    this.c.remove();
    this._$25();
}
;
window._$6F.prototype._$8U = function(g, m, a) {
    this._$2F = {};
    var e = [];
    if ("w"in a && "h"in a) {
        var l = parseInt(a["w"]);
        var n = parseInt(a["h"]);
        this._$4t(l, n);
    }
    if ("layers"in a && Array.isArray(a["layers"])) {
        e = a["layers"];
    }
    for (var c = 0; c < e.length; c++) {
        var b = e[c];
        var j = b["k"];
        var h = "draw";
        if ("t"in b) {
            h = b["t"];
        }
        var i = "Untitled Layer";
        if ("n"in b) {
            i = b["n"];
        }
        var f = this._$T(h, i, c, j);
        if (f == -1) {
            continue;
        }
        f._$5N(b);
        var d = m + "-" + j + ".png";
        if (d in g["files"]) {
            var k = {
                "p": this,
                "l": f,
                "n": d,
                "set": b
            };
            this._$2F[d] = 0;
            g["file"](d).async("base64").then(function(b) {
                var a = document.cE("img");
                this.img = a;
                a["onload"] = function() {
                    this.l._$1B(this.img, this.set);
                    this.p._$2F[this.n] = 1;
                    this.p._$3l();
                }
                .bind(this);
                a.src = "data:image/png;base64," + b;
            }
            .bind(k), function(b) {
                var a = "Error reading " + this.n + ": " + b.message;
                window._$57(a, 6000);
                this.p._$2F[this.n] = 1;
                this.p._$3l();
            }
            .bind(k));
        }
    }
}
;
window._$6F.prototype._$2L = function() {}
;
window._$6F.prototype._$3l = function() {
    for (var a in this._$2F) {
        if (this._$2F[a] == 0) {
            return -1;
        }
    }
    this._$87();
    this._$3p("draw", 1);
    this._$2L();
}
;
window._$6F.prototype._$2Q = function() {
    var b = {
        "data": {
            "w": this.width,
            "h": this.height,
            "layers": []
        },
        "files": []
    };
    var f = this._$9d;
    this._$6g();
    for (var a = 0; a < this._$86.length; a++) {
        var e = this._$86[a];
        var d = this.layers[e];
        var c = d._$o();
        b["data"]["layers"].push(c[0]);
        if (c[1] != -1) {
            b["files"].push(c[1]);
        }
    }
    this.editor._$6o();
    return b;
}
;
window._$6F.prototype._$15 = function(b, c) {
    var d = parseInt(this.width * c);
    var e = parseInt(this.height * c);
    b.width = d;
    b.height = e;
    var h = this._$9d;
    this._$6g();
    for (var a = 0; a < this._$86.length; a++) {
        var g = this._$86[a];
        var f = this.layers[g];
        f._$60(b);
    }
    this.editor._$6o();
}
;
window._$6F.prototype._$94 = function() {
    if (this._$1M == -1) {
        this._$1M = document.cE("canvas");
    }
    this._$1M.width = this.width;
    this._$1M.height = this.height;
    var d = this._$9d;
    this._$6g();
    var e = this._$1M.getContext("2d");
    for (var a = 0; a < this._$86.length; a++) {
        var c = this._$86[a];
        var b = this.layers[c];
        b._$7u(this._$1M);
    }
    this.editor._$6o();
    return this._$1M;
}
;
window._$6F.prototype._$4t = function(a, b) {
    this.c.style.width = a + "px";
    this.c.style.height = b + "px";
    this.height = b;
    this.width = a;
    this.h = b;
    this.w = a;
    var d = document.cE('canvas');
    var e = d.getContext('2d');
    for (var c in this.layers) {
        this.layers[c]._$aj(a, b);
    }
    for (var c in this._$6E) {
        this._$6E[c]._$aj(a, b);
    }
}
;
window._$6F.prototype._$9G = function() {
    if (typeof (this._$6u) == "object") {
        for (var a = 0; a < this._$6u.length; a++) {
            this._$6u[a].remove();
        }
    }
    this._$6u = [];
    this.actions = {};
    this._$8q = 0;
    this._$6G = 0;
    this._$3f = 0;
    this._$9R = 0;
    this._$74 = {};
    this._$1c = 25;
    this._$7G = -1;
}
;
window._$6F.prototype._$1W = function(b, e) {
    if (this._$8q < this._$6G) {
        for (var a = this._$8q + 1; a <= this._$6G; a++) {
            if (a in this.actions) {
                this._$9U(a);
            }
        }
        this._$6G = this._$8q;
    }
    var g = {
        "l": b,
        "d": e
    };
    this._$8q = this._$8q + 1;
    this._$6G = this._$8q;
    this.actions[this._$8q] = g;
    var f = Math.max(this._$9R, this._$6G - this._$1c);
    this._$9R = f;
    if (b in this.layers) {
        if (!(b in this._$74)) {
            this._$74[b] = 1;
        }
    }
    if (this._$3f < 0) {
        this._$3f = 0;
    }
    var c = this._$6G - this._$3f + 1;
    if (c > this._$1c) {
        var d = c - this._$1c;
        for (var a = this._$3f; a < this._$3f + d; a++) {
            if (a in this.actions) {
                this._$91(this.actions[a]);
                this._$9U(a, false);
            }
        }
        this._$3f += d;
    }
    this.editor._$7W(this);
}
;
window._$6F.prototype._$5e = function(d, e) {
    if (!(d in this.layers)) {
        return -1;
    }
    var c = this.layers[d];
    var b = c._$23();
    var a = this._$4X();
    if (d == this._$2Z) {
        if (a != -1) {
            b = a._$3r(b, "load");
        }
    }
    c._$2a(e, b);
    if (a != -1) {
        a._$3m(c, e, b);
    }
    this._$7p("l");
    this.editor._$6o();
    return 1;
}
;
window._$6F.prototype._$S = function(d) {
    var b = this.layers[d];
    this._$6g();
    var a = b._$23();
    if (d == this._$2Z) {
        var c = this._$4X();
        if (c != -1) {
            a = c._$3r(a, "save");
        }
    }
    var e = b._$8c(a);
    this._$7p("t");
    return e;
}
;
window._$6F.prototype._$7p = function(a) {}
;
window._$6F.prototype._$8X = function(a) {}
;
window._$6F.prototype._$87 = function() {
    for (var a in this.layers) {
        this._$74[a] = this._$S(a);
    }
}
;
window._$6F.prototype._$91 = function(c) {
    var a = c["l"];
    var b = c["d"];
    if ("ss"in b) {
        if (a in this._$74) {
            var e = this.layers[a];
            var d = this._$74[a];
            e._$q(d);
        }
        this._$74[a] = b.ss;
    }
}
;
window._$6F.prototype._$9U = function(c, b) {
    var a = this.actions[c];
    var e = a["l"];
    var d = a["d"];
    if (b != false) {
        b = true;
    }
    if (b && "ss"in d) {
        if (e in this.layers) {
            this.layers[e]._$q(d["ss"]);
        }
    }
    delete a["l"];
    delete a["d"];
    delete this.actions[c];
}
;
window._$6F.prototype._$3c = function() {
    for (var a = 0; a < this._$6u.length; a++) {
        var c = this._$6u[a];
        if (c._$2J == false) {
            c._$2J = true;
            return c;
        }
    }
    var b = document.cE("canvas");
    b._$2J = true;
    this._$6u.push(b);
    return b;
}
;
window._$6F.prototype._$4q = function() {
    var g = this._$5E();
    if (g != -1) {
        g._$5R();
    }
    var h = this._$4X();
    if (h != -1) {
        var i = h._$2t();
        if (i != -1) {
            return -1;
        }
    }
    var e = this._$8q - 1;
    if (e < this._$9R) {
        window._$57("Undo limit reached.", 2000);
        return -1;
    }
    var b = this.actions[this._$8q];
    if ("l"in b && b["l"]in this.layers) {
        var d = b["l"];
        var f = this._$74[d];
        for (var a = e; a >= this._$8q - this._$1c; a--) {
            if (a in this.actions) {
                var c = this.actions[a];
                if (c["l"] == d && "ss"in c["d"]) {
                    f = c["d"]["ss"];
                    break;
                }
            }
        }
        this._$5e(d, f);
    } else {
        console.log(b);
    }
    this._$8q = e;
}
;
window._$6F.prototype._$c = function() {
    var b = this._$8q + 1;
    if (b > this._$6G) {
        window._$57("No more actions to redo!", 2000);
        return -1;
    }
    var a = this.actions[b];
    if ("l"in a && a["l"]in this.layers) {
        var d = a["l"];
        var c = a["d"]["ss"];
        this._$5e(d, c);
    } else {
        console.log(a);
    }
    this._$8q = b;
}
;
window._$5y = function(c, a) {
    for (var b in a.prototype) {
        if (a.prototype.hasOwnProperty(b)) {
            c.prototype[b] = a.prototype[b];
        }
    }
    return c;
}
;
window._$aX = {};
window._$9m = function() {}
;
window._$9m.prototype._$59 = function(a) {
    this._$49 = a;
    this.c = document.cE2("div", "mteditor-input-c");
    this._$9C = -1;
    this._$2R();
    this._$aj(this._$49.width, this._$49.height);
}
;
window._$9m.prototype._$3r = function(a) {
    return this.canvas;
}
;
window._$9m.prototype._$2R = function() {}
;
window._$9m.prototype._$2m = function() {}
;
window._$9m.prototype._$3V = function() {}
;
window._$9m.prototype._$5r = function() {
    return true;
    return false;
}
;
window._$9m.prototype._$3m = function() {
    return 1;
}
;
window._$9m.prototype._$2t = function() {
    return -1;
}
;
var a = function() {};
window._$aX["select"] = a;
window._$5y(a, window._$9m);
a.prototype.type = "select";
a.prototype._$2R = function() {
    this.canvas = document.cE2("canvas", "mteditor-page-input");
    this.canvas["oncontextmenu"] = function() {
        return false;
    }
    ;
    this.c.appendChild(this.canvas);
    this.mode = -1;
    this.fab = new window["fabric"]["Canvas"](this.canvas,{});
    this._$an = new window["fabric"]["Rect"]({
        "width": 200,
        "height": 100,
        "top": 0,
        "left": 100,
        "absolutePositioned": true,
        "inverted": true
    });
    this._$8p = document.cE("canvas");
    this._$2N = -1;
    this._$1p = -1;
    this._$3o = false;
    this.fab["on"]("object:modified", function(b) {
        this._$3o = true;
        var a = b["target"];
        a["set"]("top", Math.round(a["top"]));
        a["set"]("left", Math.round(a["left"]));
        a["setCoords"]();
        this.fab["renderAll"]();
    }
    .bind(this));
    this.fab["on"]("selection:cleared", function(c) {
        if (this.mode == "rect") {
            if (this._$3o == true) {
                this._$6d();
                if (!(this._$9C in this._$49.layers)) {
                    return -1;
                }
                var a = this._$9C;
                var b = this._$49._$S(a);
                this._$49._$1W(a, {
                    "ss": b
                });
            } else {
                if (this._$1p != -1) {
                    this._$2N["clipPath"] = null;
                    this.fab.remove(this._$1p);
                    this._$1p = -1;
                    this.fab["renderAll"]();
                }
            }
        }
    }
    .bind(this));
    this.fab["on"]("mouse:up:before", function(k) {
        if (this.mode == "rect") {
            if (this.fab["getActiveObjects"]().length > 0) {
                return -1;
            }
            if (this.fab["_groupSelector"] == null) {
                return -1;
            }
            var b = this.fab["_groupSelector"]["ex"];
            var a = this.fab["_groupSelector"]["ey"];
            var d = b + this.fab["_groupSelector"]["left"];
            var c = a + this.fab["_groupSelector"]["top"];
            if (d < b) {
                var j = d;
                d = b;
                b = j;
            }
            if (c < a) {
                var i = c;
                c = a;
                a = i;
            }
            if (d - b < 1 || c - a < 1) {
                return -1;
            }
            var f = parseInt(b);
            var e = parseInt(a);
            var g = parseInt(d - b);
            var h = parseInt(c - a);
            this._$5p(f, e, g, h);
        }
    }
    .bind(this));
    var a = function() {
        if (this._$92 == true) {
            window._$5l._$5P(this.canvas, this._$9L, false, this.alpha);
            window._$5l._$3n(this.canvas);
        }
        if (!(this._$9C in this._$49.layers)) {
            return -1;
        }
        var a = this._$49._$S(this._$9C);
        this._$49._$1W(this._$9C, {
            "ss": a
        });
    }
    .bind(this);
    return 0;
}
;
a.prototype._$7B = function() {
    this._$49.editor._$9A("select");
    this._$5p(0, 0, this._$49.width, this._$49.height);
}
;
a.prototype._$3w = function() {
    if (this._$1p != -1) {
        this._$3o = false;
        this._$2N["clipPath"] = null;
        this.fab.remove(this._$1p);
        this._$1p = -1;
        this.fab["renderAll"]();
        return 1;
    }
}
;
a.prototype._$2t = function() {
    if (this._$1p != -1) {
        this._$3o = false;
        this._$2N["clipPath"] = null;
        this.fab.remove(this._$1p);
        this._$1p = -1;
        this.fab["renderAll"]();
        return 1;
    }
    return -1;
}
;
a.prototype._$5p = function(d, c, a, b) {
    this._$an["set"]("top", c);
    this._$an["set"]("left", d);
    this._$an["set"]("width", a);
    this._$an["set"]("height", b);
    this._$an["setCoords"]();
    this._$3o = false;
    this._$2N["clipPath"] = this._$an;
    var f = this._$2N["getElement"]();
    this._$8p.width = a;
    this._$8p.height = b;
    var e = this._$8p.getContext("2d");
    e["drawImage"](f, d, c, a, b, 0, 0, a, b);
    if (this._$1p == -1) {
        this._$1p = new window["fabric"]["Image"](this._$8p,{
            "left": 0,
            "top": 0,
            "borderWidth": 3,
            "transparentCorners": false,
            "borderScaleFactor": 2,
            "borderColor": 'rgba(50, 50, 50, 0.9)',
            "cornerColor": 'rgba(50, 50, 50)',
            "cornerStyle": 'circle',
            "borderOpacityWhenMoving": 1,
            "borderDashArray": [5, 5]
        });
        this.fab["add"](this._$1p);
        this._$1p["set"]("top", c);
        this._$1p["set"]("left", d);
        this.fab["setActiveObject"](this._$1p);
    } else {}
    this.fab["renderAll"]();
}
;
a.prototype._$6d = function() {
    var b = this.fab["toCanvasElement"]();
    this.fab["clear"]();
    var a = new window["fabric"]["Image"](b,{
        "left": 0,
        "top": 0,
        "selectable": false,
        "evented": false
    });
    this.fab["add"](a);
    this._$2N = a;
    this._$1p = -1;
    this.fab["renderAll"]();
}
;
a.prototype._$3V = function() {}
;
a.prototype._$aD = function(a) {
    this.mode = a;
    if (a == "rect") {
        this.fab["selectionColor"] = 'rgba(255,255,255,0)';
        this.fab["selectionBorderColor"] = 'rgba(255,255,255,0.8)';
        this.fab["selectionBorderColor"] = 'rgba(50,50,50,0.9)';
        this.fab["selectionLineWidth"] = 3;
    }
}
;
a.prototype._$aj = function(a, b) {
    this.fab["setWidth"](a);
    this.fab["setHeight"](b);
    this.fab["calcOffset"]();
}
;
a.prototype._$3r = function(b, a) {
    if (a == "save") {
        return this.fab["toCanvasElement"]();
    }
    return b;
}
;
a.prototype._$3m = function(a, b, c) {
    this._$4p(a);
    return 1;
}
;
a.prototype._$61 = function() {
    if (this.mode == "rect") {
        if (this.fab["getActiveObjects"]().length > 0) {
            this.fab["discardActiveObject"]();
        }
    }
    var a = this._$49._$aQ(this._$9C);
    if (a != -1) {
        var b = this.fab["toCanvasElement"]();
        window._$5l._$2C(b, a.canvas, true);
        this._$9C = -1;
    }
}
;
a.prototype._$5k = function(b) {
    if (typeof (b) != "undefined") {
        var c = b["mode"];
        this._$aD(c);
    }
    var a = this._$49._$5E();
    this._$4p(a);
    a.c.style.display = "none";
    this._$3V();
}
;
a.prototype._$4p = function(a) {
    this.fab["clear"]();
    var b = new window["fabric"]["Image"](a.canvas,{
        "left": 0,
        "top": 0,
        "selectable": false,
        "evented": false
    });
    this.fab["add"](b);
    this._$2N = b;
    this._$1p = -1;
    this.fab["renderAll"]();
    this._$9C = a.key;
}
;
var a = function() {};
window._$aX["shapes"] = a;
window._$5y(a, window._$9m);
a.prototype.type = "shapes";
a.prototype._$2R = function() {
    this.canvas = document.cE2("canvas", "mteditor-page-input");
    this.canvas["oncontextmenu"] = function() {
        return false;
    }
    ;
    this.c.appendChild(this.canvas);
    this.mode = -1;
    this.color = "#000";
    this.settings = {
        "type": "rect"
    };
    this.fab = new window["fabric"]["Canvas"](this.canvas,{
        "selection": false
    });
    this._$9D = -1;
    this._$54 = -1;
    this._$5A = {};
    this._$aL = -1;
    this._$5f = {};
    this.fab.on('mouse:down:before', function(c) {
        if (c.e["button"] != 0) {
            return -1;
        }
        if (this.fab["getActiveObjects"]().length > 0) {
            return -1;
        }
        if (this._$9D != -1) {
            return -1;
        }
        if (this.mode == "rect") {
            this._$9D = "rect";
            var a = this.fab["getPointer"](c.e);
            var b = new window["fabric"]["Rect"]({
                "left": a.x,
                "top": a.y,
                "originX": 'left',
                "originY": 'top',
                "width": 1,
                "height": 1,
                "angle": 0,
                "selectable": false,
                "fill": 'rgba(0,0,0,0)',
                "stroke": this.color,
                "strokeWidth": this.settings["width"],
                "transparentCorners": false,
                "strokeUniform": true,
                "centeredRotation": true,
                "borderColor": 'rgba(255, 163, 74, 1)',
                "cornerColor": 'rgba(255, 163, 74, 1)',
                "cornerStyle": 'circle',
                "borderOpacityWhenMoving": 0.7
            });
            this._$5A = {
                "t": "rect",
                "ox": a.x,
                "oy": a.y,
                "ex": a.x,
                "ey": a.y,
                "sw": this.settings["width"],
                "w": 1,
                "h": 1,
                "e": b
            };
            this.fab.add(b);
        }
        if (this.mode == "line") {
            this._$9D = "line";
            var a = this.fab["getPointer"](c.e);
            var d = [a.x, a.y, a.x, a.y];
            var b = new window["fabric"]["Line"](d,{
                "originX": 'center',
                "originY": 'center',
                "angle": 0,
                "selectable": false,
                "stroke": this.color,
                "strokeWidth": this.settings["width"],
                "transparentCorners": false,
                "strokeUniform": true,
                "centeredRotation": true,
                "borderColor": 'rgba(255, 163, 74, 1)',
                "cornerColor": 'rgba(255, 163, 74, 1)',
                "cornerStyle": 'circle',
                "borderOpacityWhenMoving": 0.7
            });
            this._$5A = {
                "t": "line",
                "ox": a.x,
                "oy": a.y,
                "ex": a.x,
                "ey": a.y,
                "sw": this.settings["width"],
                "e": b
            };
            this.fab.add(b);
        }
    }
    .bind(this));
    this.fab.on('mouse:move', function(d) {
        if (this._$9D == "rect") {
            var a = this.fab["getPointer"](d.e);
            var b = this._$5A;
            var c = b.e;
            if (b.ox > a.x) {
                c["set"]({
                    "left": a.x
                });
            } else {
                c["set"]({
                    "left": b.ox
                });
            }
            if (b.oy > a.y) {
                c["set"]({
                    "top": a.y
                });
            } else {
                c["set"]({
                    "top": b.oy
                });
            }
            var e = Math.max(0, Math.abs(b.ox - a.x) - b.sw);
            var f = Math.max(0, Math.abs(b.oy - a.y) - b.sw);
            c.set({
                "width": e,
                "height": f
            });
            this._$5A["ex"] = a.x;
            this._$5A["ey"] = a.y;
            this.fab.renderAll();
        }
        if (this._$9D == "line") {
            var a = this.fab["getPointer"](d.e);
            var b = this._$5A;
            var c = b.e;
            c.set({
                "x2": a.x,
                "y2": a.y
            });
            this._$5A["ex"] = a.x;
            this._$5A["ey"] = a.y;
            this.fab.renderAll();
        }
    }
    .bind(this));
    this.fab.on('mouse:up', function(b) {
        if (this._$9D != -1) {
            var a = this._$5A["e"];
            this._$5f = this._$5A;
            this._$aL = a;
            this.fab["setActiveObject"](a);
            this.fab.renderAll();
            this._$9D = -1;
            this._$5A = {};
        }
    }
    .bind(this));
    this.fab.on('selection:created', function(a) {
        this._$C();
    }
    .bind(this));
    this.fab.on("object:modified", function(a) {
        this._$C();
    }
    .bind(this));
    this.fab.on("object:rotating", function(a) {
        this._$C();
    }
    .bind(this));
    this.fab["on"]("selection:cleared", function(b) {
        if ("deselected"in b) {
            for (var a = 0; a < b["deselected"].length; a++) {
                var e = b["deselected"][a];
                e["set"]("hoverCursor", "default");
            }
        }
        this.fab.renderAll();
        if (this._$aL != -1) {
            if (!(this._$9C in this._$49.layers)) {
                return -1;
            }
            var c = this._$9C;
            var d = this._$49._$S(c);
            this._$49._$1W(c, {
                "ss": d
            });
        }
        this._$aL = -1;
        this._$5f = {};
        this._$C();
    }
    .bind(this));
    return 0;
}
;
a.prototype._$C = function() {
    this._$49.editor._$a3["shapes"]._$ah(this);
}
;
a.prototype._$1m = function(f, a) {
    if (this._$aL == -1) {
        return -1;
    }
    var c = this._$5f;
    if (c.t == "rect") {
        if (f == "strokeWidth") {
            a = Math.max(0.1, a);
            var b = this._$aL;
            var e = b["scaleX"];
            var d = b["scaleY"];
            var g = b["width"] * e;
            var h = b["height"] * d;
            var g = Math.abs(c.ox - c.ex) * e;
            var h = Math.abs(c.oy - c.ey) * d;
            var g = b["getScaledWidth"]();
            var h = b["getScaledHeight"]();
            var i = Math.max(0, (g - a) / e);
            var j = Math.max(0, (h - a) / d);
            this._$aL.set({
                "width": i,
                "height": j
            });
        }
    }
    if (f == "angle") {
        this._$aL["rotate"](a);
    } else {
        this._$aL["set"](f, a);
    }
    this.fab["renderAll"]();
}
;
a.prototype._$7s = function(b) {
    if (this._$aL == -1) {
        return -1;
    }
    var a = this._$aL;
    this._$aL = -1;
    this._$5f = {};
    this.fab["remove"](a);
    this.fab["renderAll"]();
    this._$C();
}
;
a.prototype.ApplySettings = function(a) {
    this.settings = a;
    this.mode = a.type;
}
;
a.prototype._$2m = function(a, e, d) {
    this.color = a;
    if (this._$aL == -1) {
        return -1;
    }
    var b = this._$5f;
    var c = this._$aL;
    if (b.t == "rect") {
        c["set"]("stroke", a);
        this.fab["renderAll"]();
    } else if (b.t == "line") {
        c["set"]("stroke", a);
        this.fab["renderAll"]();
    }
}
;
a.prototype._$2t = function() {
    if (this._$aL != -1) {
        this._$7s();
        return 1;
    }
    return -1;
}
;
a.prototype._$61 = function() {
    if (1) {
        if (this.fab["getActiveObjects"]().length > 0) {
            this.fab["discardActiveObject"]();
        }
    }
    var a = this._$49._$aQ(this._$9C);
    if (a != -1) {
        var b = this.fab["toCanvasElement"]();
        window._$5l._$2C(b, a.canvas, true);
        this._$9C = -1;
    }
}
;
a.prototype._$3r = function(b, a) {
    if (a == "save") {
        return this.fab["toCanvasElement"]();
    }
    return b;
}
;
a.prototype._$3m = function(a, b, c) {
    if (this._$aL != -1) {
        this._$7s();
    }
    this._$4p(a);
    return 1;
}
;
a.prototype._$3V = function() {}
;
a.prototype._$aj = function(a, b) {
    this.fab["setWidth"](a);
    this.fab["setHeight"](b);
    this.fab["calcOffset"]();
}
;
a.prototype._$6d = function() {
    var b = this.fab["toCanvasElement"]();
    this.fab["clear"]();
    var a = new window["fabric"]["Image"](b,{
        "left": 0,
        "top": 0,
        "selectable": false,
        "evented": false
    });
    this.fab["add"](a);
    this.fab["renderAll"]();
}
;
a.prototype._$5k = function(b) {
    var a = this._$49._$5E();
    this._$4p(a);
    a.c.style.display = "none";
    this._$3V();
}
;
a.prototype._$4p = function(a) {
    this.fab["clear"]();
    var b = new window["fabric"]["Image"](a.canvas,{
        "left": 0,
        "top": 0,
        "selectable": false,
        "evented": false
    });
    this.fab["add"](b);
    this.fab["renderAll"]();
    this._$9C = a.key;
}
;
var a = function() {};
window._$aX["attra"] = a;
window._$5y(a, window._$9m);
a.prototype.type = "attra";
a.prototype._$2R = function() {
    this.canvas = document.cE2("canvas", "mteditor-page-input");
    this._$9L = document.cE2("canvas", "mteditor-page-input");
    this.canvas["oncontextmenu"] = function() {
        return false;
    }
    ;
    this._$9L["oncontextmenu"] = function() {
        return false;
    }
    ;
    this.ctx = this.canvas.getContext("2d");
    this._$2W = this.canvas.getContext("2d");
    this._$9L.style.display = "none";
    this._$92 = false;
    this.c.appendChild(this._$9L);
    this.c.appendChild(this.canvas);
    this.attra = new window["Atrament"](this.canvas);
    this.attra["_fillreference"] = this._$9L;
    this.attra["smoothing"] = 0.7;
    this.attra["recordStrokes"] = true;
    this.attra["listenToEvents"](false);
    this.attra._$9J = false;
    this._$73 = -1;
    this.alpha = 1;
    this._$2n = 0;
    this._$6A = document.cE("canvas");
    this._$3I = document.cE("canvas");
    var a = function() {
        if (this._$92 == true) {
            if (this.attra["mode"] == "fill") {
                this._$v();
            } else {
                window._$5l._$5P(this.canvas, this._$9L, false, this.alpha);
            }
            window._$5l._$3n(this.canvas);
        }
        if (!(this._$9C in this._$49.layers)) {
            return -1;
        }
        var a = this._$49._$S(this._$9C);
        this._$49._$1W(this._$9C, {
            "ss": a
        });
    }
    .bind(this);
    this.attra.addEventListener('strokerecorded', a);
    this.attra.addEventListener('fillend', a);
    this.attra.addEventListener('fillstart', function(a) {
        this._$73 = {
            "x": a.x,
            "y": a.y
        };
    }
    .bind(this));
    return 0;
    this.attra.addEventListener('strokerecorded', function(a) {
        if (this.attra._$9J == false) {
            this._$49._$7e();
            return 1;
            var b = false;
            if (a["stroke"]["points"].length > 350) {
                b = true;
            }
            this._$49._$a4({
                "data": a.stroke,
                "c": this.attra.color,
                "t": 0
            }, b);
            this._$49.editor._$7W();
        }
    }
    .bind(this));
    this.attra.addEventListener('fillstart', function(a) {
        this._$73 = {
            "x": a.x,
            "y": a.y
        };
    }
    .bind(this));
    this.attra.addEventListener('fillend', function() {
        this._$49._$7e();
        return 1;
        var b = this._$6m["attra"]["fill"];
        var a = this._$73;
        a.type = "fill";
        a.fillColor = this.attra.color;
        a.x = b.x;
        a.y = b.y;
        var c = false;
        this._$a4({
            "input": "attra",
            "l": this._$2Z,
            "data": a,
            "t": 1
        }, c);
    }
    .bind(this));
}
;
a.prototype._$3V = function() {
    this.attra["smoothing"] = 0.7;
    this.ctx.globalAlpha = 1;
    this.ctx.globalCompositeOperation = "source-over";
    this.canvas.style["opacity"] = 1;
    this.alpha = 1;
}
;
a.prototype._$aD = function(a) {
    if (a == "draw" || a == "fill") {
        this._$9L.style.display = "";
        if (this._$92 != true) {
            this._$92 = true;
            if (this._$9C != -1) {
                window._$5l._$2C(this.canvas, this._$9L, true);
                window._$5l._$3n(this.canvas);
            }
        }
    } else {
        this._$9L.style.display = "none";
        if (this._$92 != false) {
            this._$92 = false;
            if (this._$9C != -1) {
                window._$5l._$2C(this._$9L, this.canvas, true);
            }
        }
    }
    this.attra["mode"] = a;
}
;
a.prototype._$v = function() {
    var e = this._$9L["getContext"]("2d");
    var d = e["getImageData"](this._$73.x, this._$73.y, 1, 1)["data"];
    if (this._$2n > 0 && d[3] == 0) {
        var c = this._$2n;
        this._$6A.width = this.canvas.width;
        this._$6A.height = this.canvas.height;
        var f = this._$6A["getContext"]("2d");
        var b = [-1, -1, 0, -1, 1, -1, -1, 0, 1, 0, -1, 1, 0, 1, 1, 1];
        for (var a = 0; a < b.length; a += 2) {
            f.drawImage(this.canvas, b[a] * c, b[a + 1] * c);
        }
        if (1) {
            this._$3I.width = this.canvas.width;
            this._$3I.height = this.canvas.height;
            window._$5l._$5P(this._$6A, this._$3I, false, this.alpha);
            window._$5l._$5P(this._$9L, this._$3I, false, 1);
            window._$5l._$5P(this._$3I, this._$9L, true, 1);
        } else {
            window._$5l._$4I(this._$6A, this._$9L, false, this.alpha);
        }
    }
    window._$5l._$5P(this.canvas, this._$9L, false, this.alpha);
}
;
a.prototype._$4s = function() {
    if (this._$2n > 0) {
        var e = function(b, a) {
            var c = d[(a * this + b) * 4 + 3];
            return (c > 0);
        }
        .bind(this.canvas.width);
        var a = this.canvas["getContext"]("2d");
        var f = a["getImageData"](0, 0, this.canvas.width, this.canvas.height);
        var d = f["data"];
        var b = window["geom"]["contour"](e);
        console.log(b);
        if (0 && b.length >= 2) {
            a["save"]();
            a["strokeStyle"] = this.attra["color"];
            a["lineWidth"] = parseInt(this._$2n);
            a["beginPath"]();
            a["moveTo"](b[0][0], b[0][4]);
            for (var c = 1; c < b.length; c++) {
                a["lineTo"](b[c][0], b[c][1]);
            }
            a["closePath"]();
            a["stroke"]();
            a["restore"]();
        }
    }
    window._$5l._$5P(this.canvas, this._$9L, false, this.alpha);
}
;
a.prototype._$7P = function(f) {
    if (f.t == 0) {
        var a = f["data"];
        var c = this.attra._$8c();
        this.attra["mode"] = a.mode;
        this.attra["weight"] = a.weight;
        this.attra["smoothing"] = a.smoothing;
        this.attra["color"] = a.color;
        this.attra["adaptiveStroke"] = a.adaptiveStroke;
        if (a["points"].length == 0) {
            return -1;
        }
        var d = a["points"];
        var g = d[0]["point"];
        this.attra["beginStroke"](g.x, g.y);
        var b = g;
        for (var e = 1; e < d.length - 1; e++) {
            var h = d[e];
            b = this.attra["draw"](h.point.x, h.point.y, b.x, b.y);
        }
        this.attra["endStroke"](b.x, b.y);
        this.attra._$E(c);
    } else {
        var a = f["data"];
        var c = this.attra._$8c();
        this.attra["color"] = a["fillColor"];
        var i = Array.from(this.attra["context"]["getImageData"](a.x, a.y, 1, 1)["data"]);
        this.attra["_floodFill"](a.x, a.y, i);
        this.attra._$E(c);
    }
}
;
a.prototype._$aj = function(a, b) {
    this.attra["resize"](a, b);
    this._$9L.width = a;
    this._$9L.height = b;
}
;
a.prototype._$2m = function(c, b, a) {
    this.attra["color"] = a;
    if (this._$92 == true) {
        this.alpha = b["a"];
    } else {
        this.alpha = 1;
    }
    this.canvas.style["opacity"] = this.alpha;
}
;
a.prototype._$61 = function() {
    var a = this._$49._$aQ(this._$9C);
    if (a != -1) {
        if (this._$92 == true) {
            window._$5l._$2C(this._$9L, a.canvas, true);
        } else {
            window._$5l._$2C(this.canvas, a.canvas, true);
        }
        this._$9C = -1;
    }
}
;
a.prototype._$5k = function(b) {
    if (typeof (b) != "undefined") {
        this._$aD(b);
    }
    var a = this._$49._$5E();
    if (this._$92 == true) {
        window._$5l._$2C(a.canvas, this._$9L, true);
        window._$5l._$3n(this.canvas);
    } else {
        window._$5l._$2C(a.canvas, this.canvas, true);
    }
    a.c.style.display = "none";
    this._$9C = a.key;
    this._$3V();
}
;
a.prototype._$3r = function(a) {
    if (this._$92 == true) {
        return this._$9L;
    }
    return this.canvas;
}
;
var a = function() {};
window._$aX["concat"] = a;
window._$5y(a, window._$9m);
a.prototype.type = "concat";
a.prototype._$2R = function() {
    this.canvas = document.cE2("canvas", "mteditor-page-input");
    this.canvas["oncontextmenu"] = function() {
        return false;
    }
    ;
    this._$9L = document.cE2("canvas", "mteditor-page-input");
    this._$2W = this._$9L.getContext("2d");
    this.c.appendChild(this.canvas);
    if (this._$49.editor._$7J == true) {
        this.c.appendChild(this._$9L);
    }
    this._$a5 = this.canvas["className"];
    this._$88("eyedrop", {});
    this.includebg = false;
    this.concat = false;
    this.mousedown = false;
    this.canvas.addEventListener("mousedown", this._$8d.bind(this));
    document.addEventListener("mouseup", this._$8R.bind(this));
    this.canvas.addEventListener("mousemove", this._$t.bind(this));
}
;
a.prototype._$aj = function(a, b) {
    this.canvas.width = a;
    this.canvas.height = b;
    this._$9L.width = a;
    this._$9L.height = b;
}
;
a.prototype._$8 = function(e) {
    var h = this.canvas["getBoundingClientRect"]();
    var c = (e["changedTouches"] && e["changedTouches"][0]) || e;
    var b = c["clientX"];
    var a = c["clientY"];
    var d = this.canvas.getBoundingClientRect();
    var g = (d.width / this.canvas.width);
    var f = (d.height / this.canvas.height);
    var b = (c["clientX"] - d["left"]) / g;
    var a = (c["clientY"] - d["top"]) / f;
    b = Math.max(0, Math.min(b, this.canvas.width));
    a = Math.max(0, Math.min(a, this.canvas.height));
    return {
        "x": b,
        "y": a
    };
}
;
a.prototype._$8d = function(a) {
    if (this.cached == false) {
        this._$64();
    }
    this.mousedown = true;
    var b = this._$8(a);
    this._$2K(b);
}
;
a.prototype._$8R = function(a) {
    this.mousedown = false;
}
;
a.prototype._$t = function(a) {
    if (this.mousedown == true) {
        if (this.cached == false) {
            this._$64();
        }
        var b = this._$8(a);
        this._$2K(b);
    }
}
;
a.prototype._$2K = function(a) {
    if (this.mode == "eyedrop") {
        var c = Array.from(this._$2W["getImageData"](a.x, a.y, 1, 1)["data"]);
        var b = _$1C._$a(c);
        this._$49.editor._$8h["setColor"](b);
    }
}
;
a.prototype._$64 = function() {
    var a = this._$49;
    this._$9L.width = a.width;
    this._$9L.height = a.height;
    for (var b = 0; b < a._$86.length; b++) {
        var c = a.layers[a._$86[b]];
        if (this.includebg == false && c.type == "bg") {
            continue;
        }
        c._$7u(this._$9L);
    }
    this.cached = true;
}
;
a.prototype._$9F = function() {
    this.cached = false;
}
;
a.prototype._$88 = function(b, a) {
    this.mode = b;
    this.canvas.className = this._$a5;
    this.canvas.classList.add("mtep-concat-" + b);
    if ("includebg"in a) {
        this.includebg = a["includebg"];
    }
}
;
a.prototype._$61 = function() {}
;
a.prototype._$5k = function() {
    this.cached = false;
}
;
a.prototype._$3m = function() {
    this.cached = false;
    return 1;
}
;
a.prototype._$3r = function(a) {
    return a;
}
;
window._$5y = function(c, a) {
    for (var b in a.prototype) {
        if (a.prototype.hasOwnProperty(b)) {
            c.prototype[b] = a.prototype[b];
        }
    }
    return c;
}
;
window._$7 = {};
window._$7C = function() {}
;
window._$7C.prototype._$59 = function(f, d, b, e, a, c) {
    this._$8f = _$1C._$aw(14);
    this._$49 = f;
    this.key = e;
    this.name = d;
    this.type = -1;
    this.width = a;
    this.height = c;
    this.order = b;
    this._$X = {
        "text": "The Text tool cannot be used on this layer. Please make a Text layer to add text!"
    };
    this.c = document.cE2("div", "mteditor-layer-c");
    this.canvas = document.cE2("canvas", "mteditor-page-layer");
    this.ctx = this.canvas.getContext("2d");
    this.canvas["oncontextmenu"] = function() {
        return false;
    }
    ;
    this.c["oncontextmenu"] = function() {
        return false;
    }
    ;
    this.c.appendChild(this.canvas);
    this._$2R();
    this._$aj(a, c);
    this._$8L(b);
}
;
window._$7C.prototype._$8L = function(a) {
    this.order = parseInt(a);
    this.zIndex = this.order * 10;
    this.c["style"]["zIndex"] = this.zIndex;
}
;
window._$7C.prototype._$aj = function(b, c) {
    this.width = parseInt(b);
    this.height = parseInt(c);
    var a = document.cE('canvas');
    var d = a.getContext('2d');
    a.width = this.canvas.width;
    a.height = this.canvas.height;
    d.drawImage(this.canvas, 0, 0);
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx.drawImage(a, 0, 0);
}
;
window._$7C.prototype._$r = function(a) {
    if (this._$X != -1) {
        if (a in this._$X) {
            return false;
        }
    }
    return true;
}
;
window._$7C.prototype._$5N = function(a) {
    if ("w"in a && "h"in a) {}
}
;
window._$7C.prototype._$1B = function(d, a) {
    this.ctx["clearRect"](0, 0, this.width, this.height);
    var c = 0;
    var b = 0;
    if ("f"in a) {
        c = a["f"]["x"];
        b = a["f"]["y"];
    }
    this.ctx["drawImage"](d, c, b);
}
;
window._$7C.prototype._$o = function() {
    var b = {
        "t": this.type,
        "k": this.key,
        "n": this.name
    };
    var a = [];
    var d = this.key + ".png";
    var c = _$1C._$6Z(this.canvas);
    b["f"] = _$5l._$8P(c);
    var e = c["toDataURL"]();
    a = [d, e];
    return [b, a];
}
;
window._$7C.prototype._$q = function(a) {
    if (a == 1) {
        return 1;
    }
    a._$2J = false;
}
;
window._$7C.prototype._$23 = function() {
    return this.canvas;
}
;
window._$7C.prototype._$2a = function(a, b) {
    if (a == 1) {
        window._$5l._$3n(b);
        return 0;
    }
    window._$5l._$2C(a, b, true);
}
;
window._$7C.prototype._$8c = function(b) {
    var a = this._$49._$3c();
    a.height = this.height;
    a.width = this.width;
    window._$5l._$2C(b, a, false);
    if (this._$49.editor._$7J == true) {
        document._$L("test")._$ak(a);
    }
    return a;
}
;
window._$7C.prototype._$7u = function(a) {
    window._$5l._$2C(this.canvas, a, false);
}
;
window._$7C.prototype._$60 = function(a, b, c) {
    window._$5l._$5Q(this.canvas, a, false);
}
;
window._$7C.prototype._$2R = function() {}
;
window._$7C.prototype._$2u = function() {}
;
window._$7C.prototype._$26 = function() {}
;
window._$7C.prototype._$3e = function() {}
;
window._$7C.prototype._$80 = function() {
    var a = this._$49.editor._$7a;
    if (this._$X != -1) {
        if (a in this._$X) {
            var b = this._$X[a];
            window._$57(b, 3000);
            return false;
        }
    }
}
;
window._$7C.prototype._$2m = function() {}
;
window._$7C.prototype._$5R = function() {}
;
window._$7C.prototype._$8n = function() {}
;
var b = function() {};
window._$7["text"] = b;
window._$5y(b, window._$7C);
b.prototype._$4j = function() {
    this.fab._$18 = false;
    this.fab._$7w = false;
}
;
b.prototype._$2R = function() {
    this._$5g = "Text Layer";
    this.type = "text";
    this.fab = new window["fabric"]["Canvas"](this.canvas,{});
    this.fab._$7L = function() {
        if (this["__fire"] === undefined) {
            this["__fire"] = this["fire"];
            this["fire"] = function() {}
            ;
        }
    }
    ;
    this.fab._$a2 = function() {
        if (this["__fire"] !== undefined) {
            this["fire"] = this["__fire"];
            this["__fire"] = undefined;
        }
    }
    ;
    this._$4j();
    this.fab.on("text:editing:entered", function(a) {
        this._$49.editor._$65(true);
    }
    .bind(this));
    this.fab.on("object:added", function(a) {
        this.fab._$7w = true;
    }
    .bind(this));
    this.fab.on("object:modified", function(a) {
        this.fab._$7w = true;
    }
    .bind(this));
    this.fab.on("object:rotating", function(a) {
        this._$9M();
    }
    .bind(this));
    this.fab.on("text:changed", function(a) {
        this.fab._$7w = true;
    }
    .bind(this));
    this.fab.on("text:editing:exited", function(a) {
        this._$49.editor._$65(false);
    }
    .bind(this));
    this.fab.on('selection:updated', function(a) {
        if (this.fab._$7w == true) {
            this._$aK();
            this.fab._$7w = false;
        }
        this._$9M();
    }
    .bind(this));
    this.fab.on('selection:created', function(a) {
        this.fab._$7w = false;
        this._$9M();
    }
    .bind(this));
    this.fab.on('selection:cleared', function(a) {
        this.fab._$18 = true;
        if (this.fab._$7w == true) {
            this._$aK();
            this.fab._$7w = false;
        }
        this._$9M();
    }
    .bind(this));
    this.fab.on('mouse:up', function(b) {
        if (b["isClick"] == true && b["target"] == null) {
            if (this.fab._$18 == false) {
                var a = this._$90(b["pointer"]["x"], b["pointer"]["y"]);
                this.fab["setActiveObject"](a);
                a["enterEditing"]();
                a["setSelectionStart"](a["text"].length);
                a["setSelectionEnd"](a["text"].length);
                this.fab["renderAll"]();
                this.fab._$7w = true;
            }
            this.fab._$18 = false;
        }
    }
    .bind(this));
}
;
b.prototype._$5R = function() {
    if (this.fab["getActiveObjects"]().length > 0) {
        this.fab["discardActiveObject"]();
        this.fab["renderAll"]();
    }
}
;
b.prototype._$2m = function(e, g, f) {
    var b = this.fab["getActiveObjects"]();
    var d = false;
    for (var a = 0; a < b.length; a++) {
        var c = b[a];
        if (c["type"] == "textbox") {
            c["set"]("fill", e);
            d = true;
        }
    }
    if (d == true) {
        this.fab._$7w = true;
        this.fab["renderAll"]();
    }
}
;
b.prototype._$aK = function() {
    var a = this._$49._$S(this.key);
    this._$49._$1W(this.key, {
        "ss": a
    });
    this._$5b();
}
;
b.prototype._$9M = function() {
    this._$49.editor._$ac(this);
}
;
b.prototype._$5b = function() {
    this._$49.editor._$7Z(this);
}
;
b.prototype._$5F = function(a) {
    if ("_onetimemodified"in a) {
        return -1;
    }
    a._$2e = _$1C._$29(14);
    a._onetimemodified = 1;
    a["setControlsVisibility"]({
        "tl": false,
        "ml": true,
        "bl": false,
        "mb": false,
        "br": false,
        "mr": true,
        "tr": false,
        "mt": false
    });
    a["set"]({
        "borderColor": 'rgba(255, 163, 74, 1)',
        "cornerColor": 'rgba(255, 163, 74, 1)',
        "editingBorderColor": 'rgba(255, 163, 74, 1)',
        "cornerStyle": 'circle',
        "borderOpacityWhenMoving": 0.7
    });
    return -1;
    var b = {
        "l": this,
        "text": a
    };
    a.on('mousedown', function(a) {
        this.text._tempcoords = this.l.fab["getPointer"](a["e"]);
    }
    .bind(b));
    a.on('mouseup', function(c) {
        var a = this.l.fab["getPointer"](c.e);
        if ("_tempcoords"in this.text) {
            var b = this.text._tempcoords;
            if (a.x == b.x && a.y == b.y) {
                this.text["enterEditing"]();
                this.text["setCursorByClick"](a);
            }
        }
    }
    .bind(b));
}
;
b.prototype._$8Y = function(c) {
    var b = this.fab["getObjects"]("textbox");
    for (var a = 0; a < b.length; a++) {
        if (b[a]._$2e == c) {
            return b[a];
        }
    }
    return -1;
}
;
b.prototype._$9O = function(c, d, b) {
    var a = this._$8Y(c);
    if (a == -1) {
        return -1;
    }
    a["set"](d, b);
    this.fab._$7w = true;
    this.fab["renderAll"]();
}
;
b.prototype._$6T = function(b) {
    var a = this._$8Y(b);
    if (a == -1) {
        return -1;
    }
    this.fab["setActiveObject"](a);
    a["enterEditing"]();
    a["setSelectionStart"](a["text"].length);
    a["setSelectionEnd"](a["text"].length);
    this.fab["renderAll"]();
}
;
b.prototype._$3M = function(b) {
    var a = this._$8Y(b);
    if (a == -1) {
        return -1;
    }
    this.fab._$7w = false;
    this.fab["remove"](a);
    this.fab["renderAll"]();
    this._$aK();
    this._$5b();
}
;
b.prototype._$90 = function(c, b) {
    var a = new window["fabric"]["Textbox"]('New text',{
        "fontFamily": 'dinomouse',
        "left": c,
        "top": b,
        "width": 350,
        "fontSize": 45,
        "lineHeight": 0.95,
        "centeredRotation": true,
        "fill": this._$49.editor._$7m
    });
    this._$5F(a);
    this.fab.add(a);
    this.fab["renderAll"]();
    this._$5b();
    return a;
}
;
b.prototype._$aj = function(a, b) {
    this.fab["setWidth"](a);
    this.fab["setHeight"](b);
    this.fab["calcOffset"]();
}
;
b.prototype._$7u = function(a) {
    this._$3y = this.fab["toCanvasElement"]();
    window._$5l._$2C(this._$3y, a, false);
    delete this._$3y;
}
;
b.prototype._$60 = function(a, b, c) {
    this._$3y = this.fab["toCanvasElement"]();
    window._$5l._$5Q(this._$3y, a, false);
    delete this._$3y;
}
;
b.prototype._$q = function(a) {}
;
b.prototype._$23 = function() {}
;
b.prototype._$2a = function(a, b) {
    this.fab["clear"]();
    if (a != 1) {
        this.fab["loadFromJSON"](a, function() {
            ts = this.fab["getObjects"]('textbox');
            for (var a = 0; a < ts.length; a++) {
                this._$5F(ts[a]);
            }
            this._$4j();
            this.fab["renderAll"]();
            this._$5b();
        }
        .bind(this));
    } else {
        this._$4j();
        this.fab["renderAll"]();
        this._$5b();
    }
}
;
b.prototype._$8c = function(a) {
    return window["JSON"]["stringify"](this.fab);
}
;
b.prototype._$5N = function(a) {
    if ("fab"in a) {
        this._$2a(a["fab"]);
    }
}
;
b.prototype._$o = function() {
    var a = {
        "t": "text",
        "k": this.key,
        "n": this.name
    };
    a["fab"] = window["JSON"]["stringify"](this.fab);
    return [a, -1];
}
;
b.prototype._$r = function(a) {
    if (a == "text" || a == "eyedrop") {
        return true;
    }
    return false;
}
;
b.prototype._$3e = function(a) {
    if (a == "text") {
        this.c.classList.add("mteditor-layer-allowclick");
    } else {
        this.c.classList.remove("mteditor-layer-allowclick");
        this.fab["discardActiveObject"]();
        this.fab["renderAll"]();
    }
}
;
b.prototype._$2u = function() {
    if (this._$49.editor._$7a != "text") {
        this._$49.editor._$4J("text");
    }
    this._$5b();
}
;
b.prototype._$26 = function() {
    this.c.classList.remove("mteditor-layer-allowclick");
    this.fab["discardActiveObject"]();
    this.fab["renderAll"]();
}
;
b.prototype._$80 = function() {
    var b = this._$49.editor._$7a;
    if (b != "text") {
        var a = "Only the text tool can be used on a text layer! Switch to another layer to draw!";
        window._$57(a, 3000);
    }
}
;
var b = function() {};
window._$7["draw"] = b;
window._$5y(b, window._$7C);
b.prototype._$2R = function() {
    this._$5g = "Drawing Layer";
    this.type = "draw";
    return 0;
    this.ctx["fillStyle"] = "#990";
    this.ctx.fillRect(60 + Math.random() * 140, 30, 40, 20);
}
;
var b = function() {};
window._$7["bg"] = b;
window._$5y(b, window._$7C);
b.prototype._$2R = function() {
    this._$5g = "One-Color Layer";
    this.type = "bg";
    this._$6H = "#ffffff";
    this.ctx["fillStyle"] = this._$6H;
    this.ctx.fillRect(0, 0, this.width, this.height);
}
;
b.prototype._$r = function(a) {
    if (a in {
        "bucket": 0,
        "eyedrop": 0
    }) {
        return true;
    }
    return false;
}
;
b.prototype._$80 = function() {
    var b = this._$49.editor._$7a;
    if (b != "bucket") {
        var a = "Only the Bucket tool can be used on a background layer!";
        window._$57(a, 3000);
    }
}
;
b.prototype._$aj = function(a, b) {
    this.width = a;
    this.height = b;
    var c = this._$5c();
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx["fillStyle"] = c;
    this.ctx.fillRect(0, 0, a, b);
}
;
b.prototype._$5N = function(a) {
    if ("c"in a) {
        this._$6H = a.c;
        this.ctx["fillStyle"] = this._$6H;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
}
;
b.prototype._$o = function() {
    var a = {
        "t": "bg",
        "k": this.key,
        "n": this.name
    };
    a["c"] = this._$5c();
    return [a, -1];
}
;
b.prototype._$q = function(a) {}
;
b.prototype._$23 = function() {
    return this.canvas;
}
;
b.prototype._$2a = function(a, c) {
    if (a == 1) {
        this._$6H = "#ffffff";
        var b = this._$6H;
    } else {
        var b = a;
    }
    window._$5l._$14(c, b);
}
;
b.prototype._$8c = function(b) {
    var a = this._$6x(b);
    if (this._$49.editor._$7J == true) {
        console.log('snapshot bg', a);
    }
    return a;
}
;
b.prototype._$6x = function(d) {
    var b = d.getContext("2d");
    var a = b["getImageData"](0, 0, 1, 1)["data"];
    var c = "rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + _$1C._$6w(a[3] / 255) + ")";
    return c;
}
;
b.prototype._$5c = function() {
    var a = this.ctx["getImageData"](0, 0, 1, 1)["data"];
    var b = "rgba(" + a[0] + "," + a[1] + "," + a[2] + "," + _$1C._$6w(a[3] / 255) + ")";
    return b;
}
;
b.prototype._$2u = function() {
    if (this._$49.editor._$7a != "bucket") {
        this._$49.editor._$4J("bucket");
    }
}
;
window._$5y = function(c, a) {
    for (var b in a.prototype) {
        if (a.prototype.hasOwnProperty(b)) {
            c.prototype[b] = a.prototype[b];
        }
    }
    return c;
}
;
window._$6Y = {};
window._$9p = function() {}
;
window._$9p.prototype._$59 = function(a) {
    this.editor = a;
    this._$1l = {};
    this._$2R();
}
;
window._$9p.prototype._$31 = function() {
    return _$1C._$2P(this._$aL);
}
;
window._$9p.prototype._$75 = function(c, a) {
    var b = a['type'];
    this._$1l[b].ApplySettings(c, a);
}
;
window._$9p.prototype._$3L = function(b) {
    var a = b._$5E();
    if (a == -1) {
        return -1;
    }
    a._$3e(this.type);
    if (a._$r(this.type) == false) {
        b._$6g();
        return 0;
    }
    this._$75(b, this._$aL);
}
;
window._$9p.prototype._$5h = function(a) {
    if (!(a in this._$0)) {
        return -1;
    }
    this._$24 = a;
    this._$aL = this._$0[a];
    var b = this.editor._$44();
    if (b != -1) {
        this._$3L(b);
    }
}
;
window._$9p.prototype._$6h = function(b, c) {
    if (b in this._$1l) {
        var d = this._$1l[b];
        this._$aL = c;
        var a = this.editor._$44();
        if (a != -1) {
            a._$3L(a, c);
        }
    }
}
;
window._$9p.prototype._$7A = function(a) {}
;
window._$9p.prototype._$aT = function(a) {}
;
window._$9p.prototype._$au = function(a) {}
;
window._$9p.prototype._$2R = function() {}
;
window._$9p.prototype._$9k = function() {}
;
var d = function() {};
window._$6Y["pencil"] = d;
window._$5y(d, window._$9p);
d.prototype._$2R = function(a) {
    this.type = "pencil";
    this._$1l = {
        "attra": {
            "ApplySettings": function(c, b) {
                var a = c._$6("attra", "draw");
                a.attra["adaptiveStroke"] = true;
                a.attra["weight"] = b["weight"];
                a._$aD("draw");
            }
            .bind(this),
            "DefaultSettings": function() {
                return {
                    "type": "attra",
                    "weight": 6,
                    "name": "Magic Pen",
                    "info": "This pen's thickness changes depending on how fast you draw!",
                    "range": [1, 80]
                };
            }
            .bind(this)
        },
        "default": {
            "ApplySettings": function(c, b) {
                var a = c._$6("attra", "draw");
                a.attra["adaptiveStroke"] = false;
                a.attra["weight"] = b["weight"];
                a.attra["smoothing"] = 0.5;
                a._$aD("draw");
            }
            .bind(this),
            "DefaultSettings": function() {
                return {
                    "type": "default",
                    "weight": 10,
                    "name": "Normal Pen",
                    "range": [1, 80]
                };
            }
            .bind(this)
        }
    };
    this._$9n = ["t0", "t1"];
    this._$0 = {
        "t0": this._$1l["attra"].DefaultSettings(),
        "t1": this._$1l["default"].DefaultSettings()
    };
    this._$24 = "t0";
    this._$aL = this._$0["t0"];
}
;
var d = function() {};
window._$6Y["eraser"] = d;
window._$5y(d, window._$9p);
d.prototype._$2R = function(a) {
    this.type = "eraser";
    this._$1l = {
        "attra": {
            "ApplySettings": function(c, b) {
                var a = c._$6("attra", "erase");
                a.attra["adaptiveStroke"] = false;
                a.attra["weight"] = b["weight"];
                a.attra["smoothing"] = 0.5;
                a._$aD("erase");
            }
            .bind(this),
            "DefaultSettings": function() {
                return {
                    "type": "attra",
                    "weight": 12,
                    "name": "Eraser",
                    "range": [1, 80]
                };
            }
            .bind(this)
        }
    };
    this._$9n = ["t0"];
    this._$0 = {
        "t0": this._$1l["attra"].DefaultSettings()
    };
    this._$24 = "t0";
    this._$aL = this._$0["t0"];
}
;
var d = function() {};
window._$6Y["bucket"] = d;
window._$5y(d, window._$9p);
d.prototype._$2R = function(a) {
    this.type = "bucket";
    this._$1l = {
        "attra": {
            "ApplySettings": function(c, b) {
                var a = c._$6("attra", "fill");
                a._$2n = b["extend"];
                a._$aD("fill");
            }
            .bind(this),
            "DefaultSettings": function() {
                return {
                    "type": "attra",
                    "extend": 3,
                    "info": "Overflow makes the bucket work better on the edges! It won't affect if the bucket is used on a color.",
                    "name": "Bucket",
                    "range": [0, 10]
                };
            }
            .bind(this)
        }
    };
    this._$9n = ["t0"];
    this._$0 = {
        "t0": this._$1l["attra"].DefaultSettings()
    };
    this._$24 = "t0";
    this._$aL = this._$0["t0"];
}
;
var d = function() {};
window._$6Y["eyedrop"] = d;
window._$5y(d, window._$9p);
d.prototype._$2R = function(a) {
    this.type = "eyedrop";
    this._$1l = {
        "default": {
            "ApplySettings": function(b, a) {
                var c = b._$6("concat");
                c._$88("eyedrop", a);
            }
            .bind(this),
            "DefaultSettings": function() {
                return {
                    "type": "default",
                    "includebg": false
                };
            }
            .bind(this)
        }
    };
    this._$9n = ["t0"];
    this._$0 = {
        "t0": this._$1l["default"].DefaultSettings()
    };
    this._$aL = this._$0["t0"];
}
;
var d = function() {};
window._$6Y["text"] = d;
window._$5y(d, window._$9p);
d.prototype._$2R = function(a) {
    this.type = "text";
    this.tip = false;
    this._$1l = {
        "default": {
            "ApplySettings": function(a, b) {
                var c = a._$6g();
            }
            .bind(this),
            "DefaultSettings": function() {
                return {
                    "type": "default"
                };
            }
            .bind(this)
        }
    };
    this._$9n = ["t0"];
    this._$0 = {
        "t0": this._$1l["default"].DefaultSettings()
    };
    this._$aL = this._$0["t0"];
}
;
d.prototype._$aT = function() {
    if (this.tip == false) {
        this.tip = true;
    }
    var b = this.editor._$44();
    if (b == -1) {
        return -1;
    }
    var a = b._$5E();
    if (a != -1 && a.type != "text") {
        b._$3p("text");
    } else if (a.type == "text") {
        a._$5b();
    }
}
;
var d = function() {};
window._$6Y["select"] = d;
window._$5y(d, window._$9p);
d.prototype._$2R = function(a) {
    this.type = "select";
    this._$1l = {
        "default": {
            "ApplySettings": function(b, a) {
                var c = b._$6("select", a);
            }
            .bind(this),
            "DefaultSettings": function() {
                return {
                    "type": "default",
                    "mode": "rect",
                    "name": "Rectangle Selection"
                };
            }
            .bind(this)
        }
    };
    this._$9n = ["t0"];
    this._$0 = {
        "t0": this._$1l["default"].DefaultSettings()
    };
    this._$24 = "t0";
    this._$aL = this._$0["t0"];
}
;
d.prototype._$38 = function(a) {
    a.b1.addEventListener("click", function(d) {
        var a = this.editor._$44();
        if (a == -1) {
            window._$57("No page is currently selected.", 2000);
            return -1;
        }
        var b = a._$5E();
        if (b == -1 || b.type != "draw") {
            window._$57("You can only use the Select tool in a drawing layer!", 2000);
            return -1;
        }
        var c = a._$4X();
        if (c.type == "select") {
            c._$7B();
        }
        d.preventDefault();
        return 0;
    }
    .bind(this));
    a.b2.addEventListener("click", function(d) {
        var a = this.editor._$44();
        if (a == -1) {
            window._$57("No page is currently selected.", 2000);
            return -1;
        }
        var b = a._$5E();
        if (b == -1 || b.type != "draw") {
            window._$57("You can only use the Select tool in a drawing layer!", 2000);
            return -1;
        }
        var c = a._$4X();
        if (c.type == "select") {
            c._$3w();
        }
        d.preventDefault();
        return 0;
    }
    .bind(this));
}
;
var d = function() {};
window._$6Y["shapes"] = d;
window._$5y(d, window._$9p);
d.prototype._$2R = function(a) {
    this.type = "shapes";
    this._$1l = {
        "rect": {
            "ApplySettings": function(b, a) {
                var c = b._$6("shapes", a);
                c.ApplySettings(a);
            }
            .bind(this),
            "DefaultSettings": function() {
                return {
                    "type": "rect",
                    "name": "Rectangle",
                    "width": 10,
                    "range": [1, 30]
                };
            }
            .bind(this)
        },
        "line": {
            "ApplySettings": function(b, a) {
                var c = b._$6("shapes", a);
                c.ApplySettings(a);
            }
            .bind(this),
            "DefaultSettings": function() {
                return {
                    "type": "line",
                    "name": "Line",
                    "width": 10,
                    "range": [1, 30]
                };
            }
            .bind(this)
        }
    };
    this._$9n = ["t0", "t1"];
    this._$0 = {
        "t0": this._$1l["rect"].DefaultSettings(),
        "t1": this._$1l["line"].DefaultSettings()
    };
    this._$24 = "t0";
    this._$aL = this._$0["t0"];
}
;
d.prototype._$ah = function(a) {
    for (var d in this._$67) {
        if (a._$aL != -1 && d == a._$5f.t) {
            this._$67[d].cc.classList.add("mteditor-tooloption-shapes-edit-c-show");
        } else {
            this._$67[d].cc.classList.remove("mteditor-tooloption-shapes-edit-c-show");
        }
    }
    if (a._$aL == -1) {
        this._$66.classList.remove("mteditor-tooloption-shapes-temp-editing");
        return -1;
    }
    this._$66.classList.add("mteditor-tooloption-shapes-temp-editing");
    var e = a._$5f;
    var c = this._$67[e.t];
    if (e.t == "rect") {
        var b = a._$aL;
        c.stroke._$5q(b["strokeWidth"], true);
        c.rotation._$5q(b["angle"], true);
    }
    if (e.t == "line") {
        var b = a._$aL;
        c.stroke._$5q(b["strokeWidth"], true);
        c.rotation._$5q(b["angle"], true);
    }
}
;
d.prototype._$j = function(j) {
    for (var h = 0; h < this._$9n.length; h++) {
        var c = {};
        var g = this._$9n[h];
        var a = this._$0[g];
        var b = document.cE2("div", "mteditor-tooloption");
        var f = document.cE2("div", "mteditor-tooloption-title");
        f.textContent = a.name;
        var i = {
            "editor": this.editor,
            "o": c
        };
        b.addEventListener("click", function(c) {
            if (this.editor._$7a != "shapes") {
                return -1;
            }
            var a = this.editor._$a3["shapes"];
            var b = this.editor._$7Q["shapes"];
            if (a._$24 == this.o.key) {
                return -1;
            }
            a._$5h(this.o.key);
            this.editor._$h(a, b.options);
        }
        .bind(i));
        c.c = b;
        c.key = g;
        c.title = f;
        b.appendChild(f);
        if (a.type == "rect") {
            var d = this.editor._$l(a.range[0], a.range[1], a.width);
            var e = document.cE2("div", "mteditor-tooloption-text");
            e.textContent = "Border Thickness";
            c._$5C = d;
            d._$5X = function(c) {
                var b = this.editor._$a3["shapes"];
                var a = this.o.key;
                b._$0[a].width = parseInt(c);
                b._$5h(a);
            }
            .bind(i);
            b.appendChild(e);
            b.appendChild(d.c);
        } else if (a.type == "line") {
            var d = this.editor._$l(a.range[0], a.range[1], a.width);
            var e = document.cE2("div", "mteditor-tooloption-text");
            e.textContent = "Line Thickness";
            c._$5C = d;
            d._$5X = function(c) {
                var b = this.editor._$a3["shapes"];
                var a = this.o.key;
                b._$0[a].width = parseInt(c);
                b._$5h(a);
            }
            .bind(i);
            b.appendChild(e);
            b.appendChild(d.c);
        }
        j.c.appendChild(b);
        j.options[g] = c;
    }
}
;
d.prototype._$38 = function(i) {
    var h = i._$4y;
    this._$67 = {};
    this._$66 = h;
    var b = {};
    this._$67["rect"] = b;
    var a = document.cE2("div", "mteditor-tooloption-shapes-edit-c");
    h.appendChild(a);
    b.cc = a;
    var e = document.cE2("div", "mteditor-tooloption-shapes-e-title");
    var g = document.cE2("div", "mteditor-tooloption-shapes-e-delete");
    b.title = e;
    b.del = g;
    e.textContent = "Rectangle";
    a.appendChild(b.del);
    a.appendChild(b.title);
    g.addEventListener("click", function(c) {
        var b = this.editor._$44();
        if (b == -1) {
            return -1;
        }
        var a = b._$4X();
        if (a == -1 || a.type != "shapes") {
            return -1;
        }
        a._$7s();
        c.stopPropagation();
        return 0;
    }
    .bind(this), true);
    var d = document.cE2("div", "mteditor-tooloption-text");
    d.textContent = "Border Thickness";
    var c = this.editor._$l(1, 30, 5);
    c._$5X = function(c) {
        var b = this.editor._$44();
        if (b == -1) {
            return -1;
        }
        var a = b._$4X();
        if (a == -1 || a.type != "shapes") {
            return -1;
        }
        a._$1m("strokeWidth", c);
    }
    .bind(this);
    a.appendChild(d);
    a.appendChild(c.c);
    b.stroke = c;
    var f = document.cE2("div", "mteditor-tooloption-text");
    f.textContent = "Rotation";
    var c = this.editor._$l(0, 360, 0);
    c._$5X = function(c) {
        var b = this.editor._$44();
        if (b == -1) {
            return -1;
        }
        var a = b._$4X();
        if (a == -1 || a.type != "shapes") {
            return -1;
        }
        a._$1m("angle", c);
    }
    .bind(this);
    a.appendChild(f);
    a.appendChild(c.c);
    b.rotation = c;
    var b = {};
    this._$67["line"] = b;
    var a = document.cE2("div", "mteditor-tooloption-shapes-edit-c");
    h.appendChild(a);
    b.cc = a;
    var e = document.cE2("div", "mteditor-tooloption-shapes-e-title");
    var g = document.cE2("div", "mteditor-tooloption-shapes-e-delete");
    b.title = e;
    b.del = g;
    e.textContent = "Line";
    a.appendChild(b.del);
    a.appendChild(b.title);
    g.addEventListener("click", function(c) {
        var b = this.editor._$44();
        if (b == -1) {
            return -1;
        }
        var a = b._$4X();
        if (a == -1 || a.type != "shapes") {
            return -1;
        }
        a._$7s();
        c.stopPropagation();
        return 0;
    }
    .bind(this), true);
    var d = document.cE2("div", "mteditor-tooloption-text");
    d.textContent = "Line Thickness";
    var c = this.editor._$l(1, 30, 5);
    c._$5X = function(c) {
        var b = this.editor._$44();
        if (b == -1) {
            return -1;
        }
        var a = b._$4X();
        if (a == -1 || a.type != "shapes") {
            return -1;
        }
        a._$1m("strokeWidth", c);
    }
    .bind(this);
    a.appendChild(d);
    a.appendChild(c.c);
    b.stroke = c;
    var f = document.cE2("div", "mteditor-tooloption-text");
    f.textContent = "Rotation";
    var c = this.editor._$l(0, 360, 0);
    c._$5X = function(c) {
        var b = this.editor._$44();
        if (b == -1) {
            return -1;
        }
        var a = b._$4X();
        if (a == -1 || a.type != "shapes") {
            return -1;
        }
        a._$1m("angle", c);
    }
    .bind(this);
    a.appendChild(f);
    a.appendChild(c.c);
    b.rotation = c;
}
;
window._$4d = false;
if (window._$4d == false) {
    console.log2 = console.log;
    console.log = function() {}
    ;
    console._$8t = function() {}
    ;
    console._$84 = function() {}
    ;
} else {
    console.log2 = console.log;
    console._$8t = function() {
        if (window._$4d != true) {
            return 0;
        }
        console.log2.apply(this, arguments);
    }
    ;
    console._$84 = function(a) {
        if (window._$4d != true) {
            return 0;
        }
        console.log2.apply(this, a);
    }
    ;
}
