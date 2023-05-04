document.addEventListener('DOMContentLoaded', function() {
    const areas = document.querySelectorAll('area');
    const tooltip = document.querySelector('.tooltip');
    const tooltipImage = document.querySelector('.tooltip-image');
    const mapContainer = document.querySelector('.map-container');
    const customCursor = document.querySelector('.custom-cursor');

    areas.forEach(area => {
        area.addEventListener('mouseover', function(event) {
            const imgSrc = event.target.getAttribute('data-tooltip-img');
            tooltipImage.src = imgSrc;
            tooltip.style.display = 'block';
            customCursor.style.display = 'block';
        });

        area.addEventListener('mouseout', function() {
            tooltip.style.display = 'none';
            customCursor.style.display = 'none';
        });

        area.addEventListener('mousemove', function(event) {
            tooltip.style.top = (event.pageY + 10) + 'px';
            tooltip.style.left = (event.pageX + 10) + 'px';
            customCursor.style.top = (event.pageY - 32) + 'px';
            customCursor.style.left = (event.pageX - 32) + 'px';
        });
    });
});