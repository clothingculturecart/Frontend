document.querySelectorAll('[data-swipe-gallery]').forEach(function (gallery) {
  var stage = gallery.querySelector('[data-swipe-stage]');
  var thumbs = Array.from(gallery.querySelectorAll('[data-swipe-thumb]'));
  var index = 0;

function setActive(i) {
  index = (i + thumbs.length) % thumbs.length;
  stage.style.backgroundImage = "url('" + thumbs[index].dataset.bg + "')";
  var link = stage.querySelector('[data-swipe-link]');
  if (link) link.href = thumbs[index].dataset.url;
  thumbs.forEach(function (t) { t.classList.remove('is-active'); });
  thumbs[index].classList.add('is-active');
}

  thumbs.forEach(function (thumb, i) {
    thumb.addEventListener('click', function () { setActive(i); });
  });

  // Arrow keys
  gallery.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') setActive(index + 1);
    if (e.key === 'ArrowLeft') setActive(index - 1);
  });

  // Swipe (touch)
  var startX = 0;
  gallery.addEventListener('touchstart', function (e) {
    startX = e.touches[0].clientX;
  });
  gallery.addEventListener('touchend', function (e) {
    var diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) < 40) return;
    diff < 0 ? setActive(index + 1) : setActive(index - 1);
  });
});

document.querySelectorAll('[data-menu-toggle]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.querySelector('[data-mobile-menu]').classList.toggle('is-open');
  });
});