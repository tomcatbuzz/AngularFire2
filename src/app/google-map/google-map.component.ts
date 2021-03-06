import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeoService } from '../geo.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit, OnDestroy {

  lat: number;
  lng: number;
  markers: any;
  subscription: any;

  constructor(private geo: GeoService) { }

  ngOnInit() {
    this.getUserLocation();
    this.subscription = this.geo.hits
      .subscribe(hits => this.markers = hits);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private seedDatabase() {
    const dummyPoints = [
      [36.7, -76.0],
      [36.9, -76.1],
      [37.1, -76.2],
      [36.3, -76.3],
      [36.1, -76.2]
    ];

    dummyPoints.forEach((val, idx) => {
      const name = `dummy-location-${idx}`;
      console.log(idx);
      this.geo.setLocation(name, val);
    });
  }

  private getUserLocation() {
    /// locate user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

        this.geo.getLocations(100, [this.lat, this.lng]);
      });
    }
  }

}
