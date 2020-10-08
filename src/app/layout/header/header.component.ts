import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public showMenuMobile = false;

  public routesMenu = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Resumo', link: '/abstract' },
    { name: 'Configurações', link: '/settings' },
  ];

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth > 768 && this.showMenuMobile) {
      this.showMenuMobile = false;
    }
  }

  constructor() { }

  ngOnInit(): void { }

  onCloseSideMenu(event): void {
    this.showMenuMobile = event;
  }

}
