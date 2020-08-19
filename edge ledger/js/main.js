let map;

function initMap() {

    const loc = { lat: 20.990766, lng: 105.783888 };

    const map = new google.maps.Map(document.querySelector(".map"), {
        center: loc,
        zoom: 14
    });

  const marker = new google.maps.Marker({ position: loc, map: map });
}

$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top - 100
    }, 
    500
    );
  }
});