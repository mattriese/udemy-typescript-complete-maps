//Instructions to every other class on how they can satisfy the requirements to
// be an argument to addMarker
export interface Mappable {
  infoWindowContent?: string;
  location: {
    lat: number;
    lng: number;
  };
}

export class CustomMap {
  // googleMap is an instance of the Map class from google (imported via
  // script tag in index.html)
  // private modifier makes it so googleMap property can't be accessed outside
  // this class (on an instance), so only the bare minimum/necessary code is accessible
  // this decreases complexity of index.ts.
  googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 0, lng: 0 },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: mappable.location,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: `${mappable.infoWindowContent}`,
    });
    marker.addListener('click', function () {
      infoWindow.open(this.googleMap, marker);
    });
  }
}
