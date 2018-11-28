var glide = new Glide('.glide', {
    type: 'slider',
    startAt: 0,
    perView: 3,
    focusAt: 'center',
    animationDuration: 300,
    gap: 0,
    breakpoints: {
        3000: {
            perView: 2
        },
        1200: {
            perView: 2
        },
        600: {
            perView: 1
        }
    }
})

glide.mount()