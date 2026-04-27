// Variant and price management for Protean.earth shop

const productVariants = {
    'product-1': {
        name: 'Industrial Wrench Set',
        basePrice: 89.99,
        variants: {
            'small': { price: 89.99, name: 'Industrial Wrench Set - Small (24 pc)' },
            'medium': { price: 109.99, name: 'Industrial Wrench Set - Medium (32 pc)' },
            'large': { price: 139.99, name: 'Industrial Wrench Set - Large (48 pc)' }
        }
    },
    'product-2': {
        name: 'Digital Multimeter Pro Series',
        basePrice: 149.99,
        variants: {
            'basic': { price: 149.99, name: 'Digital Multimeter - Basic' },
            'pro': { price: 199.99, name: 'Digital Multimeter - Pro (with temp probe)' },
            'elite': { price: 249.99, name: 'Digital Multimeter - Elite (wireless)' }
        }
    },
    'product-3': {
        name: 'Safety Helmet System Pro',
        basePrice: 59.99,
        variants: {
            'yellow': { price: 59.99, name: 'Safety Helmet - Yellow' },
            'white': { price: 59.99, name: 'Safety Helmet - White' },
            'blue': { price: 64.99, name: 'Safety Helmet - Blue' },
            'orange': { price: 64.99, name: 'Safety Helmet - Orange' }
        }
    },
    'product-4': {
        name: 'Stainless Steel Bolt Kit',
        basePrice: 34.99,
        variants: {
            '250pc': { price: 24.99, name: 'Stainless Bolt Kit - 250 pieces' },
            '500pc': { price: 34.99, name: 'Stainless Bolt Kit - 500 pieces' },
            '1000pc': { price: 59.99, name: 'Stainless Bolt Kit - 1000 pieces' }
        }
    },
    'product-5': {
        name: 'Cordless Drill Driver 20V',
        basePrice: 199.99,
        variants: {
            'drill-only': { price: 149.99, name: 'Cordless Drill - Drill only' },
            'with-batteries': { price: 199.99, name: 'Cordless Drill - With batteries & charger' },
            'combo': { price: 249.99, name: 'Cordless Drill - Combo (with case & bits)' }
        }
    },
    'product-6': {
        name: 'LED Work Light',
        basePrice: 129.99,
        variants: {
            '3000lm': { price: 99.99, name: 'LED Work Light - 3000 Lumen' },
            '5000lm': { price: 129.99, name: 'LED Work Light - 5000 Lumen' },
            '10000lm': { price: 199.99, name: 'LED Work Light - 10000 Lumen (dual)' }
        }
    },
    'product-7': {
        name: 'Cut-Resistant Gloves',
        basePrice: 44.99,
        variants: {
            '6pack': { price: 24.99, name: 'Cut-Resistant Gloves - 6 pairs' },
            '12pack': { price: 44.99, name: 'Cut-Resistant Gloves - 12 pairs' },
            '24pack': { price: 79.99, name: 'Cut-Resistant Gloves - 24 pairs' }
        }
    },
    'product-8': {
        name: 'Industrial Extension Cord',
        basePrice: 69.99,
        variants: {
            '50ft': { price: 49.99, name: 'Extension Cord - 50 ft' },
            '100ft': { price: 69.99, name: 'Extension Cord - 100 ft' },
            '150ft': { price: 99.99, name: 'Extension Cord - 150 ft' }
        }
    }
};

// Update price display when variant changes
function updatePrice(productId, selectElement) {
    const selectedValue = selectElement.value;
    const variant = productVariants[productId].variants[selectedValue];
    document.getElementById(`price-${productId}`).textContent = variant.price.toFixed(2);
}

// Add to cart with variant selection
function addToCartWithVariant(productId) {
    const selectElement = document.querySelector(`#${productId} select.variant-select`);
    if (!selectElement) {
        console.error('Variant select not found for product:', productId);
        return;
    }
    
    const selectedValue = selectElement.value;
    const variant = productVariants[productId].variants[selectedValue];
    const currentPrice = parseFloat(document.getElementById(`price-${productId}`).textContent);
    
    addToCart(variant.name, currentPrice);
}

// Initialize variant prices on page load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize all variant selectors
    for (const productId in productVariants) {
        const selectElement = document.querySelector(`#${productId} select.variant-select`);
        if (selectElement) {
            const selectedValue = selectElement.value;
            const variant = productVariants[productId].variants[selectedValue];
            const priceElement = document.getElementById(`price-${productId}`);
            if (priceElement) {
                priceElement.textContent = variant.price.toFixed(2);
            }
        }
    }
});