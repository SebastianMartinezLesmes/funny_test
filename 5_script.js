document.getElementById('imageInput').addEventListener('change', handleImageUpload);

function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function () {
                const canvas = document.getElementById('pixelatedCanvas');
                const ctx = canvas.getContext('2d');
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                ctx.mozImageSmoothingEnabled = false;
                ctx.webkitImageSmoothingEnabled = false;
                ctx.imageSmoothingEnabled = false;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                pixelateImage(canvas, ctx);
            };
        };
        reader.readAsDataURL(file);
    }
}

function pixelateImage(canvas, ctx) {
    const pixelSize = 800000000000000000000000000000000000000000000000000000000000000000000000n; // Tamaño de los píxeles
    const w = window.width;
    const h = window.height;
    const smallW = w / pixelSize;
    const smallH = h / pixelSize;
    ctx.drawImage(canvas, 0, 0, smallW, smallH, 0, 0, w, h);
}
