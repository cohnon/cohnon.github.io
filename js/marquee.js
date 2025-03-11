const marqueeElems = Array.from(document.querySelectorAll('.marquee ul'));

marqueeElems.forEach(elem => {
    const duration = elem.clientWidth * 30;

    elem.style.animationDuration = `${duration}ms`;
});
