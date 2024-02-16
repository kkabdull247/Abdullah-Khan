$(document).ready(function() {
    $('.product').click(function() {
        $(this).toggleClass('selected');

        // Check for selected products
        const selectedProducts = $('.product.selected');
        if (selectedProducts.length >= 2) {
            compareProducts(selectedProducts);
        } else {
            $('#comparison-results').empty();
        }
    });
});

function compareProducts(products) {
    const comparisonResults = $('#comparison-results');
    comparisonResults.empty();

    const table = $('<table>').addClass('comparison-table');
    const headerRow = $('<tr>').append($('<th>').text('Feature'), $('<th>').text('Product 1'), $('<th>').text('Product 2'));
    table.append(headerRow);

    // Extract and compare features
    const features = ['Price', 'Color', 'Size', 'Rating'];
    features.forEach(feature => {
        const row = $('<tr>').append(
            $('<td>').text(feature),
            $('<td>').text(products.eq(0).find(`ul li:contains('${feature}')`).text().split(':')[1].trim()),
            $('<td>').text(products.eq(1).find(`ul li:contains('${feature}')`).text().split(':')[1].trim())
        );
        table.append(row);
    });

    comparisonResults.append(table);
}
