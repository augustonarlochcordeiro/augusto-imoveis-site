const CLOUD_NAME = "ds3b5xdat"; 

/**
 * Transforma uma imagem do Sanity em uma URL otimizada do Cloudinary via Fetch
 * com adição de marca d'água automática.
 */
export function getCloudinaryUrl(sanityImageUrl, width = 1200, height = 800) {
  if (!sanityImageUrl) return "";

  const logoName = "logo_marca_ghcyb9"; 

  const watermark = `l_${logoName},o_20,w_400,g_center`;

  const params = `f_auto,q_auto,w_${width},h_${height},c_fill,g_auto/${watermark}`;
  
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/fetch/${params}/${encodeURIComponent(sanityImageUrl)}`;
}

/**
 * NOVA FUNÇÃO: Aplica a marca d'água mantendo as dimensões originais (sem cortes).
 */
export function getWatermarkedOriginalUrl(sanityImageUrl) {
  if (!sanityImageUrl) return "";

  const logoName = "logo_marca_ghcyb9"; 
  const watermark = `l_${logoName},o_20,w_400,g_center`;

  // Parâmetros apenas com otimização (f_auto, q_auto) e marca d'água, sem w, h ou c_fill
  const params = `f_auto,q_auto/${watermark}`;
  
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/fetch/${params}/${encodeURIComponent(sanityImageUrl)}`;
}