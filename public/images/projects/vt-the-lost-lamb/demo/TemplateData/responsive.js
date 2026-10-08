(function(){
    console.log('Responsive WebGL Template by SIMMER.io v2019.02.08');
    console.log('Available at: https://assetstore.unity.com/packages/tools/gui/responsive-webgl-template-117308 for free!');
    console.log('Host your WebGL Game at SIMMER.io for free!');
    console.log('Modified by Kevin on 2021.02.25');

    const q = (selector) => document.querySelector(selector);

    const webglContent = q('#webgl-content');
    const gameContainer = q('#gameContainer');

    const initialDimensions = {width: parseInt(gameContainer.style.width, 10), height: parseInt(gameContainer.style.height, 10)};
    webglContent.style.width = '100%';
    webglContent.style.height = '100%';
    webglContent.style.position = 'absolute';

    let gCanvasElement = null;

    const setDimensions = () => {
        var winW = parseInt(window.getComputedStyle(webglContent).width, 10);
        var winH = parseInt(window.getComputedStyle(webglContent).height, 10);
        var scale = Math.min(winW / initialDimensions.width, winH / initialDimensions.height);

        var fitW = Math.round(initialDimensions.width * scale * 100) / 100;
        var fitH = Math.round(initialDimensions.height * scale * 100) / 100;

        gameContainer.style.width = fitW + 'px';
        gameContainer.style.height = fitH + 'px';
        gameContainer.setAttribute('width', fitW);
        gameContainer.setAttribute('height', fitH);

        if (gCanvasElement == null) {
            gCanvasElement = document.getElementById('#canvas');
        }

        if (gCanvasElement != null) {
            gCanvasElement.setAttribute('width', fitW);
            gCanvasElement.setAttribute('height', fitH);
        }
    }

    window.setDimensions = setDimensions;

    const registerWindowResizeWatcher = () => {
        let debounceTimeout = null;
        const debouncedSetDimensions = () => {
            if (debounceTimeout !== null) {
                clearTimeout(debounceTimeout);
            }
            debounceTimeout = setTimeout(setDimensions, 200);
        }
        window.addEventListener('resize', debouncedSetDimensions, false);
        setDimensions();
    }
    registerWindowResizeWatcher();

    window.UnityLoader.Error.handler = function () { }

})();