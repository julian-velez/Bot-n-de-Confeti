function crearConfeti() {
    const confeti = document.createElement('div');
    confeti.classList.add('confetti');
    document.body.appendChild(confeti);

    setTimeout(() => {
        confeti.remove();
    }, 1000);
}
