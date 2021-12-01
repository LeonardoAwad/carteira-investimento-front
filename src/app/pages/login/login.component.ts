import 'particles.js';

import { AfterViewInit, Component, OnInit } from '@angular/core';

import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { UserModel } from './model/user.model';

declare const particlesJS: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, AfterViewInit {
  user: UserModel = new UserModel();
  options = {
    particles: {
      number: {
        value: 70,
        density: {
          enable: true,
          value_area: 1400,
        },
      },
      color: {
        value: '#10C0C6',
      },
      shape: {
        type: 'polygon',
        stroke: {
          width: 1,
          color: '#10C0C6',
        },
        polygon: {
          nb_sides: 6,
        },
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 0.4,
          opacity_min: 0.25,
          sync: true,
        },
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          speed: 0.4,
          size_min: 1.25,
          sync: true,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#10C0C6',
        opacity: 1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 4,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: true,
        attract: {
          enable: true,
          rotateX: 2000,
          rotateY: 2000,
        },
      },
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'grab',
        },
        onclick: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 200,
          line_linked: {
            opacity: 3,
          },
        },
        repulse: {
          distance: 250,
          duration: 2,
        },
      },
    },
    retina_detect: true,
  };

  constructor(private loginService: LoginService, private router: Router) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    particlesJS('particles-js', this.options);
  }

  entrar() {
    this.loginService.login(this.user).subscribe((result) => {
      this.salvarStorageAuth(result);
      this.router.navigateByUrl('/carteira');
    });
  }

  salvarStorageAuth(result: any): void {
    localStorage.removeItem('carteira-auth');

    if (result) {
      const auth = JSON.stringify({
        token: result.token,
        userId: result.user.id,
      });
      localStorage.setItem('carteira-auth', auth);
    }
  }
}
