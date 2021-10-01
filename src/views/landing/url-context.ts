export function getSku(component: any) {
  const skuEncoded = component.$route.query.sku;
  if (!skuEncoded) {
    return {};
  }

  const skuDecoded = atob(skuEncoded);
  const sku = JSON.parse(skuDecoded);
  return sku;
}

export function getFields(component: any) {
  const skuEncoded = component.$route.query.sku;
  if (!skuEncoded) {
    return {};
  }

  const skuDecoded = atob(skuEncoded);
  const sku = JSON.parse(skuDecoded);
  return sku.fields;
}

