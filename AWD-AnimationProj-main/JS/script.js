const mouseEvent = document.documentElement.style;

mouseEvent.addEventListener('mousemove', (e) => {
    mouseEvent.setProperty('--x', e.clientX + 'px');
    mouseEvent.setProperty('--y', e.clientY + 'px');
});
