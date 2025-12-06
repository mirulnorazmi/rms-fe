import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { provideRouter } from '@angular/router';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundComponent],
      providers: [
        provideRouter([
          { path: '', redirectTo: 'login', pathMatch: 'full' },
          { path: 'login', component: NotFoundComponent }
        ])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 404 heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h1');
    expect(heading?.textContent?.trim()).toBe('404');
  });

  it('should display "Page Not Found" title', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h2');
    expect(title?.textContent?.trim()).toBe('Page Not Found');
  });

  it('should display error message', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const message = compiled.querySelector('p');
    expect(message?.textContent).toContain("page you're looking for doesn't exist");
  });

  it('should render "Go to Home" button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('button');
    const homeButton = Array.from(buttons).find(btn => 
      btn.textContent?.includes('Go to Home')
    );
    expect(homeButton).toBeTruthy();
  });

  it('should render "Go Back" button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('button');
    const backButton = Array.from(buttons).find(btn => 
      btn.textContent?.includes('Go Back')
    );
    expect(backButton).toBeTruthy();
  });

  it('should navigate to home when goHome is called', () => {
    spyOn(router, 'navigate');
    component.goHome();
    expect(router.navigate).toHaveBeenCalledWith(['/']);
  });

  it('should call window.history.back when goBack is called', () => {
    spyOn(window.history, 'back');
    component.goBack();
    expect(window.history.back).toHaveBeenCalled();
  });

  it('should have links to login and register', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const links = compiled.querySelectorAll('a[routerLink]');
    const routerLinks = Array.from(links).map(link => 
      link.getAttribute('routerLink')
    );
    expect(routerLinks).toContain('/login');
    expect(routerLinks).toContain('/register');
  });

  it('should call goHome when "Go to Home" button is clicked', () => {
    spyOn(component, 'goHome');
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('button');
    const homeButton = Array.from(buttons).find(btn => 
      btn.textContent?.includes('Go to Home')
    ) as HTMLButtonElement;
    
    homeButton?.click();
    expect(component.goHome).toHaveBeenCalled();
  });

  it('should call goBack when "Go Back" button is clicked', () => {
    spyOn(component, 'goBack');
    const compiled = fixture.nativeElement as HTMLElement;
    const buttons = compiled.querySelectorAll('button');
    const backButton = Array.from(buttons).find(btn => 
      btn.textContent?.includes('Go Back')
    ) as HTMLButtonElement;
    
    backButton?.click();
    expect(component.goBack).toHaveBeenCalled();
  });

  it('should have proper styling classes', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const container = compiled.querySelector('.min-h-screen');
    expect(container).toBeTruthy();
    expect(container?.classList.contains('bg-base-200')).toBeTruthy();
  });
});