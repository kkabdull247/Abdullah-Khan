$('.abtn').click(function(){
    $('#branda').toggle(),
    $('#brandb').hide()
    $('#brandc').hide()
    $('#brandd').hide()
    $('#brande').hide()
}),
$('.bbtn').click(function(){
    $('#brandb').toggle(),
    $('#branda').hide()
    $('#brandc').hide()
    $('#brandd').hide()
    $('#brande').hide()
}),
$('.cbtn').click(function(){
    $('#brandc').toggle(),
    $('#branda').hide()
    $('#brandb').hide()
    $('#brandd').hide()
    $('#brande').hide()
}),
$('.dbtn').click(function(){
    $('#brandd').toggle()
    $('#branda').hide()
    $('#brandb').hide()
    $('#brandc').hide()
    $('#brande').hide()
}),
$('.ebtn').click(function(){
    $('#brande').toggle(),
    $('#branda').hide()
    $('#brandb').hide()
    $('#brandc').hide()
    $('#brandd').hide()
})










// $(document).ready(function() {
//     // Sample data (replace with your actual data)
//     const collectionsData = {
//         summer: [
//             { name: 'Summer Dress 1', image: 'summer_dress1.jpg', details: 'Lorem ipsum...' },
//             { name: 'Summer Dress 2', image: 'summer_dress2.jpg', details: 'Lorem ipsum...' },
//         ],
//         winter: [
//             { name: 'Winter Jacket 1', image: 'winter_jacket1.jpg', details: 'Lorem ipsum...' },
//             { name: 'Winter Sweater', image: 'winter_sweater.jpg', details: 'Lorem ipsum...' },
//         ],
//         wedding: [
//             { name: 'Wedding Gown', image: 'wedding_gown.jpg', details: 'Lorem ipsum...' },
//             { name: 'Groom Suit', image: 'groom_suit.jpg', details: 'Lorem ipsum...' },
//         ],
//     };

//     // Function to dynamically show collection items
//     window.showCollection = function(collectionName) {
//         const collectionList = collectionsData[collectionName];
//         const collectionContainer = $('#collection-list');

//         // Clear existing items
//         collectionContainer.empty();

//         // Append new items
//         collectionList.forEach(item => {
//             const itemHtml = `
//                 <div class="collection-item">
//                     <img src="${item.image}" alt="${item.name}">
//                     <h3>${item.name}</h3>
//                     <p>${item.details}</p>
//                 </div>
//             `;
//             collectionContainer.append(itemHtml);
//         });
//     };

//     // Initialize the map (replace the coordinates with your location)
//     const map = new google.maps.Map(document.getElementById('map'), {
//         center: { lat: 37.7749, lng: -122.4194 }, // San Francisco, CA, USA
//         zoom: 13,
//     });

//     // Add a marker for the stylist's address
//     const marker = new google.maps.Marker({
//         position: { lat: 37.7749, lng: -122.4194 }, // Replace with actual coordinates
//         map: map,
//         title: 'Stylish Trends'
//     });
// });



// Designers


