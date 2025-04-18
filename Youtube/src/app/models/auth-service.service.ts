import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser: any = null;

  register(username: string, email: string, password: string) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    this.currentUser = { username, email };
    sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

  login(username: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
      return true;
    }
    return false;
  }

  logout() {
    this.currentUser = null;
    sessionStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {
    if (!this.currentUser) {
      this.currentUser = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
    }
    return !!this.currentUser;
  }
}
