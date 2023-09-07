export default function cdnImageLoader({ src, width, quality }) {
  return `https://content-blog.narumir.io${src}?width=${width}&quality=${quality || 100}`;
}
