import { Injectable } from '@angular/core';

@Injectable()
export class ResizeService {

  resize(file, complete) {
    const reader = new FileReader();
    const that = this;
    reader.onload = function(e) {
      const img = new Image();
      img.onload = function() {
        complete(that.resizeInCanvas(img));
      }
      img.src = (<any>e.target).result;
    }
    reader.readAsDataURL(file);
  }

  resizeInCanvas(img) {
  /////////  3-3 manipulate image
  const perferedWidth = 2700;
  const ratio = perferedWidth / img.width;
  const canvas = this.createHiddenCanvas(1920, 1080);
  canvas.width = img.width * ratio;
  canvas.height = img.height * ratio;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  //////////4. export as dataUrl
  return canvas.toDataURL();
}

  createHiddenCanvas(width: number, height: number): HTMLCanvasElement {
    const canvas = document.createElement('canvas');
    canvas.id = 'hiddenCanvas';
    canvas.width = width;
    canvas.height = height;

    return canvas;
  }
}
