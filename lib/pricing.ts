// Video type pricing structure - you can update these values
export interface VideoTypePricing {
  basePrice: number
  channelMultiplier: number
  assetMultiplier: number
}

export interface PriceEstimate {
  minPrice: number
  maxPrice: number
  breakdown: {
    videoType: string
    quantity: number
    unitPrice: number
    totalPrice: number
  }[]
}

export const VIDEO_TYPE_PRICING: Record<string, VideoTypePricing> = {
  "Explainer Videos": {
    basePrice: 2500,
    channelMultiplier: 1.2,
    assetMultiplier: 1.1,
  },
  "Product Demo Videos": {
    basePrice: 2500,
    channelMultiplier: 1.15,
    assetMultiplier: 1.05,
  },
  "Brand Videos": {
    basePrice: 3500,
    channelMultiplier: 1.25,
    assetMultiplier: 1.15,
  },
  "Training Videos": {
    basePrice: 2500,
    channelMultiplier: 1.1,
    assetMultiplier: 1.0,
  },
  "Testimonial Videos": {
    basePrice: 2500,
    channelMultiplier: 1.05,
    assetMultiplier: 1.0,
  },
  "Social Media Videos": {
    basePrice: 2000,
    channelMultiplier: 1.3,
    assetMultiplier: 1.2,
  },
  "App Preview Videos": {
    basePrice: 2500,
    channelMultiplier: 1.2,
    assetMultiplier: 1.1,
  },
  "Event Videos": {
    basePrice: 3000,
    channelMultiplier: 1.1,
    assetMultiplier: 1.05,
  },
}

export function calculatePriceEstimate(
  videoTypes: string[],
  channels: string[],
  assetsPerMonth: string,
): PriceEstimate {
  if (videoTypes.length === 0) {
    return { minPrice: 0, maxPrice: 0, breakdown: [] }
  }

  const channelCount = channels.length || 1
  const assetCount = Number.parseInt(assetsPerMonth) || 1

  // Apply bulk discount for multiple video types
  const bulkDiscount = videoTypes.length > 1 ? 0.9 : 1

  const breakdown = videoTypes.map((videoType) => {
    const pricing = VIDEO_TYPE_PRICING[videoType]
    if (!pricing) {
      return {
        videoType,
        quantity: 1,
        unitPrice: 3000,
        totalPrice: 3000,
      }
    }

    let unitPrice = pricing.basePrice

    // Apply channel multiplier
    if (channelCount > 1) {
      unitPrice *= Math.pow(pricing.channelMultiplier, channelCount - 1)
    }

    // Apply asset multiplier
    if (assetCount > 2) {
      unitPrice *= Math.pow(pricing.assetMultiplier, Math.min(assetCount - 2, 3))
    }

    // Apply bulk discount
    unitPrice *= bulkDiscount

    return {
      videoType,
      quantity: 1,
      unitPrice: Math.round(unitPrice),
      totalPrice: Math.round(unitPrice),
    }
  })

  const totalPrice = breakdown.reduce((sum, item) => sum + item.totalPrice, 0)

  // Add 20% variance for min/max range
  const minPrice = Math.round(totalPrice * 0.8)
  const maxPrice = Math.round(totalPrice * 1.2)

  return {
    minPrice,
    maxPrice,
    breakdown,
  }
}
