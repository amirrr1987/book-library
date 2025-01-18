import { Test, TestingModule } from '@nestjs/testing';
import { BooksController } from '../books.controller';
import { BooksService } from '../books.service';
import { UpdateBookDto } from '../dto/update-book.dto';
import { CreateBookDto } from '../dto/create-book.dto';

describe('BooksController', () => {
  let controller: BooksController;
  let service: BooksService;

  const mockBook = {
    id: 1,
    title: 'Test Book',
    price: 19.99,
    description: 'A test book description',
    publishedDate: new Date(),
    available: true,
    author: 'John Doe',
    genre: [{ id: 1, label: 'Fiction', value: 'fiction' }],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockBooksService = {
    findAll: jest.fn().mockResolvedValue([mockBook]),
    findOne: jest.fn().mockResolvedValue(mockBook),
    create: jest.fn().mockResolvedValue(mockBook),
    update: jest.fn().mockResolvedValue({ ...mockBook, title: 'Updated Book' }),
    remove: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],
      providers: [
        {
          provide: BooksService,
          useValue: mockBooksService,
        },
      ],
    }).compile();

    controller = module.get<BooksController>(BooksController);
    service = module.get<BooksService>(BooksService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of books', async () => {
      const result = await controller.findAll();
      expect(result).toEqual([mockBook]);
      expect(service.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single book', async () => {
      const result = await controller.findOne('1');
      expect(result).toEqual(mockBook);
      expect(service.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('create', () => {
    it('should create a new book', async () => {
      const createBookDto: CreateBookDto = {
        title: 'Test Book',
        price: 19.99,
        description: 'A test book description',
        publishedDate: new Date(),
        available: true,
        authors: [1],
        genres: [1],
      };
      const result = await controller.create(createBookDto);
      expect(result).toEqual(mockBook);
      expect(service.create).toHaveBeenCalledWith(createBookDto);
    });
  });

  describe('update', () => {
    it('should update an existing book', async () => {
      const updateBookDto: UpdateBookDto = {
        id: 1,
        title: 'Updated Book',
      };
      const result = await controller.update('1', updateBookDto);
      expect(result).toEqual({ ...mockBook, title: 'Updated Book' });
      expect(service.update).toHaveBeenCalledWith(1, updateBookDto);
    });
  });

  describe('remove', () => {
    it('should remove a book', async () => {
      const result = await controller.remove('1');
      expect(result).toBeUndefined();
      expect(service.remove).toHaveBeenCalledWith(1);
    });
  });
});
