export function sineWave(time, period, amplitude, midpoint) {
    return Math.sin(time * 2 * Math.PI / period) * amplitude + midpoint
}

export function sineBetween(time, period, minimum, maximum) {
    var midpoint = (minimum + maximum) / 2
    var amplitude = maximum - midpoint
    return sineWave(time, period, amplitude, midpoint)
}

// Restrains a value between the min and max
export function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}

// Returns the magnitude of a given coordinate
export function magnitude(x, y) {
    return Math.sqrt(x * x + y * y);
}

// Linear interpolation
export function lerp(start, end, coefficient) {
    return start + (end - start) * coefficient;
}

// Distance between two points
export function distance(x1, y1, x2, y2) {
    return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
}

// Gets the position(s) of an element. Abs returns the "absolute" position (without scrolling).
export function getPos(element, abs) {
    if (isElement(element)) {
        var rec = element.getBoundingClientRect();
        var scroll = abs ? 1 : 0
        return {
            left: rec.left + window.scrollX * scroll,
            right: rec.right + window.scrollX * scroll,
            top: rec.top + window.scrollY * scroll,
            bottom: rec.bottom + window.scrollY * scroll
        }
    } else {
        return null
    }
}

export function isElement(obj) {
    return obj instanceof HTMLElement;
}

/* Thanks, Josh.
/* https://stackoverflow.com/questions/52163817/is-there-an-event-to-detect-when-user-interacted-with-a-page */
export function playSound(audio) {
    const tryToPlay = setInterval(() => {
        audio.play()
            .then(() => {
                clearInterval(tryToPlay);
            })
            .catch(error => {
                console.info('User has not interacted with document yet.');
            });
    }, 500);
}

export function randRange(min, max, int) {
    return int ? Math.floor(Math.random() * (max - min + 1) + min) : Math.random() * (max - min + 1) + min;
}