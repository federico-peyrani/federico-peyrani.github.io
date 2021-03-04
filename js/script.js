let updateLabels = function (lines) {
    lines.forEach(it => {
        let positionInfo = it.getBoundingClientRect();

        let dimension = it.classList.contains('horizontal') ? positionInfo.width : positionInfo.height
        dimension = Math.round(dimension)

        let label = it.querySelector('.label')
        label.innerHTML = dimension.toString()
    })
}

window.onload = function () {
    const lines = document.querySelectorAll('.line')
    updateLabels(lines)
    window.onresize = function () {
        updateLabels(lines)
    }

    /** */
    let debugInput = document.querySelector("input");

    function updateDebugState() {
        document.body.classList.toggle('debug-on', debugInput.checked);
    }

    debugInput.addEventListener("click", updateDebugState);
    updateDebugState();
}
