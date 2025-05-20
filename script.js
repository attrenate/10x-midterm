 document.addEventListener('DOMContentLoaded', function() {
            const sidebarButton = document.getElementById('sidebar-btn');
            const catalogElement = document.getElementById('catalog');
            const bodyElement = document.body; 

            if (sidebarButton && catalogElement) {
                sidebarButton.addEventListener('click', function() {
                    
                    catalogElement.classList.toggle('catalog-sidebar-active');

                    
                    if (catalogElement.classList.contains('catalog-sidebar-active')) {
                        bodyElement.classList.add('sidebar-open-no-scroll');
                        
                    } else {
                        bodyElement.classList.remove('sidebar-open-no-scroll');
                    }
                });

                
            } else {
                console.error('Sidebar button or catalog element not found!');
            }
        });
        const searchButton = document.getElementById('search-btn');
            const navSearchInput = document.getElementById('nav-search');

            if (searchButton && navSearchInput) {
                searchButton.addEventListener('click', function() {
                    
                    navSearchInput.classList.add('search-active');

                    
                    navSearchInput.focus();
                });
            } else {
                if (!searchButton) console.error('Search button (#search-btn) not found!');
                if (!navSearchInput) console.error('Nav search input (#nav-search) not found!');
            }
        