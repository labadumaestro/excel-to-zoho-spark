/* Spark Appliance Store - ZOHO Template JavaScript */

// Product data from Excel file
const products = [
    {
        id: "7195464000000095045",
        name: "Whirlpool 36\" Under-Cabinet Range Hood, Externally Vented, Stainless Steel (UVL6036JSS)",
        price: "USD 700.00",
        brand: "Whirlpool",
        category: "Range Hoods",
        grade: "Grade A",
        sku: "RH-WP-UVL6036-SS-01"
    },
    {
        id: "7195464000000097039",
        name: "KitchenAid 36\" Telescopic Downdraft System, Stainless Steel (KXD4636YSS)",
        price: "USD 900.00",
        brand: "KitchenAid",
        category: "Range Hoods",
        grade: "Grade A",
        sku: "RH-KA-KXD4636-SS-01"
    },
    {
        id: "7195464000000097087",
        name: "Café 30\" Advantium 120V Wall Oven/Microwave Combo, Stainless (CSB913P2NS1)",
        price: "USD 1,950.00",
        brand: "Café",
        category: "Speed Oven",
        grade: "Grade A",
        sku: "WO-CF-CSB913P2-SS-01"
    },
    {
        id: "7195464000000097209",
        name: "Bertazzoni Professional 30\" Under-Cabinet Range Hood, Stainless (KU30PRO1XV)",
        price: "USD 650.00",
        brand: "Bertazzoni",
        category: "Range Hoods",
        grade: "Grade A",
        sku: "RH-BTZ-KU30PRO1XV-SS-01"
    },
    {
        id: "7195464000000097302",
        name: "GE Profile 27\" Advantium Speed Oven (120V), Stainless (PSB9100SFSS)",
        price: "USD 1,200.00",
        brand: "GE Profile",
        category: "Speed Oven",
        grade: "Grade Ba",
        sku: "WO-GE-PSB9100-SS-01"
    },
    {
        id: "7195464000000097356",
        name: "Bertazzoni Professional 30\" Under-Cabinet Range Hood, Stainless (KU30PRO1XV) (02)",
        price: "USD 650.00",
        brand: "Bertazzoni",
        category: "Range Hoods", 
        grade: "Grade A",
        sku: "RH-BTZ-KU30PRO1XV-SS-02"
    },
    {
        id: "7195464000000103090",
        name: "Monogram 48\" Wall-Mount Range Hood, Externally Vented, Stainless Steel (ZVW1480SPSS)",
        price: "USD 2,450.00",
        brand: "Monogram",
        category: "Range Hoods",
        grade: "Grade A",
        sku: "RH-MON-ZVW1480SP-SS-01"
    },
    {
        id: "7195464000000103249",
        name: "Café 30\" Wall-Mount Glass Canopy Chimney Hood, Matte Black (KXD4630YKM)",
        price: "USD 750.00",
        brand: "Café",
        category: "Range Hoods",
        grade: "Grade A",
        sku: "RH-CF-KXD4630-BK-01"
    }
];

// Function to create product card HTML
function createProductCard(product) {
    const categoryIcon = getCategoryIcon(product.category);
    
    return `
        <div class="product-card" data-product-id="${product.id}">
            <div class="product-image">
                <div class="product-badge">${product.grade}</div>
                ${categoryIcon}
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-price">${product.price}</div>
                <div class="product-actions">
                    <button class="btn btn-details" style="flex: 1;" onclick="viewProductDetails('${product.id}')">
                        VIEW DETAILS
                    </button>
                    <button class="btn btn-ghost" onclick="toggleFavorite('${product.id}')">
                        ♡
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Function to get category icon
function getCategoryIcon(category) {
    const icons = {
        'Range Hoods': '🏠',
        'Speed Oven': '🔥',
        'Wall Ovens': '📦',
        'Microwaves': '⚡'
    };
    return icons[category] || '🏠';
}

// Function to render products
function renderProducts() {
    const latestProductsGrid = document.getElementById('products-grid');
    const allProductsGrid = document.getElementById('all-products-grid');

    if (latestProductsGrid) {
        // Show first 4 products in "Latest Products"
        const latestProducts = products.slice(0, 4);
        latestProductsGrid.innerHTML = latestProducts.map(createProductCard).join('');
    }

    if (allProductsGrid) {
        // Show remaining products in "All Products"
        const allProducts = products.slice(4);
        allProductsGrid.innerHTML = allProducts.map(createProductCard).join('');
    }
}

// Function to handle product details view
function viewProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // In a real application, this would navigate to a product detail page
        alert(`Product Details:\n\nName: ${product.name}\nBrand: ${product.brand}\nPrice: ${product.price}\nCategory: ${product.category}\nSKU: ${product.sku}`);
    }
}

// Function to toggle favorite
function toggleFavorite(productId) {
    const heartButton = document.querySelector(`[data-product-id="${productId}"] .btn-ghost`);
    if (heartButton) {
        const isFavorited = heartButton.textContent.includes('♥');
        heartButton.textContent = isFavorited ? '♡' : '♥';
        heartButton.style.color = isFavorited ? '' : '#10B981';
        
        // Show feedback
        const message = isFavorited ? 'Removed from favorites' : 'Added to favorites';
        showToast(message);
    }
}

// Function to show toast notification
function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--brand-green);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 3000);
}

// Function to handle search
function handleSearch() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        const query = searchInput.value.toLowerCase().trim();
        
        if (query === '') {
            renderProducts();
            return;
        }
        
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query) ||
            product.brand.toLowerCase().includes(query) ||
            product.category.toLowerCase().includes(query)
        );
        
        // Render filtered products
        const latestProductsGrid = document.getElementById('products-grid');
        const allProductsGrid = document.getElementById('all-products-grid');
        
        if (latestProductsGrid) {
            latestProductsGrid.innerHTML = filteredProducts.slice(0, 4).map(createProductCard).join('');
        }
        
        if (allProductsGrid) {
            allProductsGrid.innerHTML = filteredProducts.slice(4).map(createProductCard).join('');
        }
        
        // Show results count
        showToast(`Found ${filteredProducts.length} products`);
    }
}

// Function to handle newsletter subscription
function handleNewsletterSubscription(event) {
    event.preventDefault();
    const email = event.target.querySelector('.newsletter-input').value;
    
    if (email && isValidEmail(email)) {
        showToast('Thank you for subscribing to our newsletter!');
        event.target.querySelector('.newsletter-input').value = '';
    } else {
        showToast('Please enter a valid email address');
    }
}

// Function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to handle category filtering
function filterByCategory(category) {
    const filteredProducts = products.filter(product => 
        product.category === category
    );
    
    const latestProductsGrid = document.getElementById('products-grid');
    const allProductsGrid = document.getElementById('all-products-grid');
    
    if (latestProductsGrid) {
        latestProductsGrid.innerHTML = filteredProducts.slice(0, 4).map(createProductCard).join('');
    }
    
    if (allProductsGrid) {
        allProductsGrid.innerHTML = filteredProducts.slice(4).map(createProductCard).join('');
    }
    
    showToast(`Showing ${filteredProducts.length} products in ${category}`);
}

// Initialize the application
function initApp() {
    // Render products
    renderProducts();
    
    // Add search functionality
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
    
    // Add newsletter form handlers
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', handleNewsletterSubscription);
    });
    
    // Add category link handlers
    const categoryLinks = document.querySelectorAll('.category-link');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const category = this.textContent.trim();
            if (category !== 'Home' && category !== 'More ▼') {
                filterByCategory(category);
            } else if (category === 'Home') {
                renderProducts();
            }
        });
    });
    
    // Add shop button handlers
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-shop')) {
            showToast('Redirecting to shop...');
        }
    });
}

// Utility function for debouncing
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        products,
        renderProducts,
        viewProductDetails,
        toggleFavorite,
        handleSearch,
        filterByCategory
    };
}