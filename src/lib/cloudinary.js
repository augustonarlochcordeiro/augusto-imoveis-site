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
 * Aplica a marca d'água em 10% da largura da foto 
 * usando a sintaxe de camadas (fl_layer_apply) para garantir a renderização.
 */
export function getWatermarkedOriginalUrl(sanityImageUrl) {
  if (!sanityImageUrl) return "";

  const logoName = "logo_marca_ghcyb9"; 
  
  // Passo 1: l_{logoName} (Chama a imagem da logo)
  // Passo 2: c_scale,w_0.1,fl_relative (Escala a logo para 10% da imagem base)
  // Passo 3: fl_layer_apply,g_center,o_20 (Aplica a camada no centro com 20% de opacidade)
  const params = `f_auto,q_auto/l_${logoName}/c_scale,w_0.25,fl_relative/fl_layer_apply,g_center,o_50`;
  
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/fetch/${params}/${encodeURIComponent(sanityImageUrl)}`;
}