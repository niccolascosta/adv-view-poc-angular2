import {TestBed, async} from "@angular/core/testing";
import {AppComponent} from "./app.component";
import {LoginGuard} from "./login/login.guard";
import {AutenticacaoService} from "./login/autenticacao.service";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ButtonModule} from "primeng/primeng";
import {LoginModule} from "./login/login.module";
import {AdvModule} from "./adv/adv.module";
import {ArrendatarioCadastroModule} from "./arrendatario-cadastro/arrendatario-cadastro.module";
import {Ng2Webstorage} from "ng2-webstorage";
import {routing} from "./app.routes";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        ButtonModule,
        LoginModule,
        AdvModule,
        ArrendatarioCadastroModule,
        Ng2Webstorage,
        routing
      ],
      providers: [AutenticacaoService, LoginGuard],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
