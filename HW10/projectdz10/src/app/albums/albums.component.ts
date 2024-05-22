import { Component, OnInit } from '@angular/core';
import {HttpserviceService } from "../httpservice.service";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Album } from '../Album';


@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  providers:[HttpserviceService],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent {
  albums: Album[] = [];

  constructor(private httpService: HttpserviceService) { }

  ngOnInit(): void {
    this.httpService.getAllAlbums().subscribe(res => {
      this.albums = res;
      console.log('After transformation:', res);
    });
  }







}
