var TxtRotate = function (t, e, i) {
  (this.toRotate = e),
    (this.el = t),
    (this.loopNum = 0),
    (this.period = parseInt(i, 10) || 2e3),
    (this.txt = ""),
    this.tick(),
    (this.isDeleting = !1);
};
(TxtRotate.prototype.tick = function () {
  var t = this.loopNum % this.toRotate.length,
    e = this.toRotate[t];
  this.isDeleting
    ? (this.txt = e.substring(0, this.txt.length - 1))
    : (this.txt = e.substring(0, this.txt.length + 1)),
    (this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>");
  var i = this,
    s = 300 - 100 * Math.random();
  this.isDeleting && (s /= 2),
    this.isDeleting || this.txt !== e
      ? this.isDeleting &&
        "" === this.txt &&
        ((this.isDeleting = !1), this.loopNum++, (s = 500))
      : ((s = this.period), (this.isDeleting = !0)),
    setTimeout(function () {
      i.tick();
    }, s);
}),
  (window.onload = function () {
    for (
      var t = document.getElementsByClassName("txt-rotate"), e = 0;
      e < t.length;
      e++
    ) {
      var i = t[e].getAttribute("data-rotate"),
        s = t[e].getAttribute("data-period");
      i && new TxtRotate(t[e], JSON.parse(i), s);
    }
    var o = document.createElement("style");
    (o.type = "text/css"),
      (o.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }"),
      document.body.appendChild(o);
  });
