export const propertySlugsQuery = `
  *[_type == "property"] {
    "slug": slug.current
  }
`

// Query para a Página Inicial (Alimenta os ImovelCards)
export const allPropertiesQuery = `
  *[_type == "property"] {
    _id,
    title,
    "slug": slug.current,
    price,
    city,
    neighborhood,
    bedrooms,
    bathrooms,
    priceVenda,
    priceAluguel,
    suites,
    area,
    amenities,
    parkingSlots,
    propertyType,
    status,
    featured,
    mainImage
  }
`;

// Query para a Página Individual do Imóvel ([slug].astro)
export const propertyBySlugQuery = `
  *[_type == "property" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    price,
    city,
    neighborhood,
    bedrooms,
    bathrooms,
    suites,
    parkingSlots,
    description,
    mainImage {
      ...,
      asset->
    },
    gallery[] {
      ...,
      asset->
    },
    status,
    area,
    amenities,
    propertyType
  }
`;