const track = document.querySelector('.carousel-track');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0;
const visible = 3; // show 3 at a time
const autoplayDelay = 3000; // 3 seconds between auto-advances
let autoplayInterval;
let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;

// Get all real images (no clones)
const items = Array.from(track.children);
const totalItems = items.length;
const maxIndex = totalItems - visible; // last valid index

// Start at index 0
index = 0;

function update() {
    const itemWidth = items[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${index * itemWidth}px)`;
}

function startAutoplay() {
    autoplayInterval = setInterval(() => {
        if (!isDragging && index < maxIndex) {
            index++;
            update();
        } else if (!isDragging) {
            // Stop at end, reset to beginning
            index = 0;
            update();
        }
    }, autoplayDelay);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Next button - stops at last image
nextBtn.addEventListener('click', () => {
    if (index < maxIndex) {
        index++;
        update();
    }
    // Don't go past the last image
});

// Previous button - stops at first image
prevBtn.addEventListener('click', () => {
    if (index > 0) {
        index--;
        update();
    }
    // Don't go before the first image
});

// Touch/Swipe support
track.addEventListener('touchstart', touchStart, { passive: true });
track.addEventListener('touchmove', touchMove, { passive: true });
track.addEventListener('touchend', touchEnd);
track.addEventListener('touchcancel', touchEnd);

// Mouse drag support
track.addEventListener('mousedown', touchStart);
track.addEventListener('mousemove', touchMove);
track.addEventListener('mouseup', touchEnd);
track.addEventListener('mouseleave', touchEnd);

function touchStart(event) {
    isDragging = true;
    startX = getPositionX(event);
    stopAutoplay();
    track.style.transition = 'none';
}

function touchMove(event) {
    if (!isDragging) return;
    
    const currentPosition = getPositionX(event);
    const diff = currentPosition - startX;
    
    currentTranslate = prevTranslate + diff;
    track.style.transform = `translateX(${currentTranslate}px)`;
}

function touchEnd() {
    isDragging = false;
    const movedBy = currentTranslate - prevTranslate;
    
    // Swipe threshold (50px)
    if (movedBy < -50 && index < maxIndex) {
        index++;
        update();
    } else if (movedBy > 50 && index > 0) {
        index--;
        update();
    } else {
        update();
    }
    
    prevTranslate = currentTranslate;
    currentTranslate = 0;
    startAutoplay();
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

// Pause autoplay on hover
track.addEventListener('mouseenter', stopAutoplay);
track.addEventListener('mouseleave', startAutoplay);
prevBtn.addEventListener('mouseenter', stopAutoplay);
nextBtn.addEventListener('mouseenter', stopAutoplay);
prevBtn.addEventListener('mouseleave', startAutoplay);
nextBtn.addEventListener('mouseleave', startAutoplay);

// Initialize
window.addEventListener('load', () => {
    update();
    startAutoplay();
});
window.addEventListener('resize', () => {
    prevTranslate = 0;
    currentTranslate = 0;
    update();
});