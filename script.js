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
// Hovered boxes
const styles = {
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center',
  color: '#0B3954',
  fontWeight: 'bold'
};

document.querySelectorAll('.catalog-child').forEach(item => {
  item.addEventListener('mouseover', () => {
    const box = document.createElement('div');
    box.classList.add('card-box');

    const heading = document.createElement('p');
    heading.classList.add('box-header');
    Object.assign(heading.style, styles); // ✅ apply styles correctly
    heading.textContent = 'WE RECOMMEND';

    box.appendChild(heading);
    item.appendChild(box);
  });

  item.addEventListener('mouseout', () => {
    const box = item.querySelector('.card-box');
    if (box) {
      box.remove();
    }
  });
});


