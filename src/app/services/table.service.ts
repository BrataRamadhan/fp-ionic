import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TableService {
lookup = 'https://www.thesportsdb.com/api/v1/json/1/lookupleague.php';
klasmen = 'https://www.thesportsdb.com/api/v1/json/1/lookuptable.php';
jadwal = 'https://www.thesportsdb.com/api/v1/json/1/eventspastleague.php';
detail_club = 'https://www.thesportsdb.com/api/v1/json/1/lookupteam.php'
teamid = '133460';
ligaid = '4328';
musim = '2019-2020';

idhomeclub = localStorage.getItem('idHome');



constructor(private http: HttpClient) { }

 getDetail(){
    return this.http.get(`${this.lookup}?id=${this.ligaid}`);
  }
  getDaftar(){
    return this.http.get(`${this.klasmen}?l=${this.ligaid}&s=${this.musim}`);
  }
  getPertandingan(){
    return this.http.get(`${this.jadwal}?id=${this.ligaid}`);
  }
  getDetailClubHome(){
    return this.http.get(`${this.detail_club}?id=${this.idhomeclub}`);
  }
 }
