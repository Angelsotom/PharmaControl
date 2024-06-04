import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  constructor(private router: Router, private toastController: ToastController) {}

  async updateProfile() {
 
    
    const toast = await this.toastController.create({
      message: 'Perfil actualizado',
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }

  goToPage(page: string) {
    this.router.navigate([`/${page}`]);
  }
}
