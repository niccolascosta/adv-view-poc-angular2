import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {LoginComponent} from "./login.component";
import {LoginRoutingModule} from "./login-routing.module";
import {FormsModule} from "@angular/forms";
import {AutenticacaoService} from "./autenticacao.service";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ LoginRoutingModule,
        FormsModule],
      providers:[AutenticacaoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
