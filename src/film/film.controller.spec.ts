import { Test, TestingModule } from '@nestjs/testing';
import { FilmController } from './film.controller';

describe('Film Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [FilmController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: FilmController = module.get<FilmController>(FilmController);
    expect(controller).toBeDefined();
  });
});
