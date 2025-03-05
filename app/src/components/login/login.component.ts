import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  roles: string[] = ['user', '', 'manager'];
  constructor(private router: Router) {}

  login() {
    this.reDirectToRole();
  }
  getStoredRoles() {
    let storedRoles = localStorage.getItem('roles');
    if (storedRoles) {
      return JSON.parse(storedRoles);
    }
  }
  getDefaultRoles(roles: string[]) {
    if (roles.includes('user')) return 'user';
    if (roles.includes('manager')) return 'manager';
    return 'admin';
  }
  reDirectToRole() {
    let storedRoles = this.getStoredRoles();
    let defaultRole = this.getDefaultRoles(storedRoles);
    this.router.navigate([`/${defaultRole}/dashboard`]);
  }
  ngOnInit() {
    localStorage.setItem('roles', JSON.stringify(this.roles));
    this.reDirectToRole();
  }
}
