function imageDimensions(width: any, height: any) {
  if (width.indexOf("%") > -1 || height.indexOf("%") > -1) {
    return "700x400";
  }
  if (width && height) {
    return `${width}x${height}`;
  }
  if (width) {
    const multiplier = 900 / 1600;
    const height = parseInt(width) * multiplier;
    return `${width}x${height}`;
  }
}

export function generateUnsplashUrl(imageId: string, width: any, height: any) {
  const id = imageId ? `/${imageId}` : "";

  const url = `https://source.unsplash.com${id}/${imageDimensions(
    width,
    height
  )}`;
  return url;
}
