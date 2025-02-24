import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTitleComponent } from './pokemon-title.component';

describe('PokemonTitleComponent', () => {
  let component: PokemonTitleComponent;
  let fixture: ComponentFixture<PokemonTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
