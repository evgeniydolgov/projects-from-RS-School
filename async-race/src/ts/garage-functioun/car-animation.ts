export function animation(image: SVGAElement) {
    const start = Date.now();

    const timer = setInterval(function() {
      const timePassed = Date.now() - start;

      image.style.left = timePassed / 5 + 'px';
      
      if (timePassed > 2000) clearInterval(timer);

    }, 24);
  }

