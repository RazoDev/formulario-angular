import { FormularioPracticaPage } from './app.po';

describe('formulario-practica App', () => {
  let page: FormularioPracticaPage;

  beforeEach(() => {
    page = new FormularioPracticaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
