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
 * Aplica a marca d'água proporcional (10% da largura) 
 * mantendo as dimensões originais da foto sem cortes.
 */
export function getWatermarkedOriginalUrl(sanityImageUrl) {
  if (!sanityImageUrl) return "";

  const logoName = "logo_marca_ghcyb9"; 
  
  // w_0.1 = 10% da largura da foto original
  // fl_relative = diz ao Cloudinary para usar a foto base como referência de tamanho
  // g_center = centraliza a marca
  const watermark = `l_${logoName},o_20,w_0.1,fl_relative,g_center`;

  // Usamos c_limit com um valor alto para garantir que o Cloudinary processe a imagem 
  // e aplique a camada da logo sem redimensionar ou cortar a foto original.
  const params = `f_auto,q_auto,c_limit,w_5000,h_5000/${watermark}`;
  
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/fetch/${params}/${encodeURIComponent(sanityImageUrl)}`;
}