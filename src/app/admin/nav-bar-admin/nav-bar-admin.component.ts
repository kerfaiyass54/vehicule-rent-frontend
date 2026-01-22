import { Component } from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import { NgClass } from "@angular/common";
import {FormsModule} from "@angular/forms";



interface NavItem {
  name: string;
  href: string;
}

interface Language {
  code: string;
  name: string;
  flag: string;
}
@Component({
    selector: 'app-nav-bar-admin',
    imports: [
    LucideAngularModule,
    NgClass,
    FormsModule
],
    templateUrl: './nav-bar-admin.component.html',
    styleUrl: './nav-bar-admin.component.css'
})
export class NavBarAdminComponent {
  activeItem = 'Home';
  mobileMenuOpen = false;

  navItems: NavItem[] = [
    { name: 'Home', href: '#home' },
    { name: 'Vehicles', href: '#vehicles' },
    { name: 'Favorites', href: '#favorites' },
    { name: 'Cart', href: '#cart' },
    { name: 'Profile', href: '#profile' },
  ];

  languages: Language[] = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  ];

  selectedLanguage: Language = this.languages[0];

  setActive(item: string) {
    this.activeItem = item;
    this.mobileMenuOpen = false;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  selectLanguage(lang: Language) {
    this.selectedLanguage = lang;
  }

  handleLogout() {
    console.log('Logging out...');
    // Add logout logic here
  }
}
