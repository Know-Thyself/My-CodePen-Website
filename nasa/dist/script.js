var shiftWindow = function() { scrollBy(0, -155) };
    window.addEventListener("hashchange", shiftWindow);
    function load() { if (window.location.hash) shiftWindow(); }