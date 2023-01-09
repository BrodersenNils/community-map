import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { User } from 'src/models/user.class';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  private map!: L.Map;
  private centroid: L.LatLngExpression = [51.23, 14.83];
  allUsers: User[] = [];
  coordinates: any[] = [];
  shownUser!: User;
  detailCardIsShown = false;
  tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 100,
    minZoom: 0,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  });

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.initMap();
    this.userService.getUsers().subscribe((users) => {
      this.allUsers = users;
    });
    setTimeout(() => {
      this.setMarker();
    }, 500);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 5,
    });
    this.tiles.addTo(this.map);
  }

  private setMarker() {
    for (let i = 0; i < this.allUsers.length; i++) {
      L.marker([+this.allUsers[i].langitude, +this.allUsers[i].longitude])
        .addTo(this.map)
        .bindTooltip(
          "Hallo, ich bin's, " +
            this.allUsers[i].firstName +
            ' ' +
            this.allUsers[i].lastName
        )
        .on('click', (ev) => {         
          this.shownUser = this.allUsers[i];
          this.detailCardIsShown = true;
        });
    }
  }

  public closeDetailCard() {
    this.detailCardIsShown = false;
  }
}
