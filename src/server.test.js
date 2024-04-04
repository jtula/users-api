const server = require('./index.js');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);
const pool  = require('./db.js');
jest.mock('./db.js');

describe('USER CRUD', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /users/:id', () => {
    it('should return all users', async () => {
      const mockUsers = [
        { name: 'Test User 1', email: 'testuser1@gmail.com' },
        { name: 'Test User 2', email: 'testuser2@gmail.com' }
      ];

      pool.query.mockResolvedValue([mockUsers]);

      const res = await requestWithSupertest.get('/users');

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('users', mockUsers);
    });

    it('should return a 500 error if database query fails', async () => {
      const mockError = new Error('Database error');

      pool.query.mockRejectedValue(mockError);

      const res = await requestWithSupertest.get('/users');

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('success', false);
      expect(res.body).toHaveProperty('message', mockError.message);
    });
  });

  describe('CREATE /users/:id', () => {
    it('should create a user and return a success message', async () => {
      const mockUser = { name: 'Test User', email: 'testuser@gmail.com' };

      pool.query.mockResolvedValue(mockUser);

      const res = await requestWithSupertest
        .post('/users')
        .send(mockUser);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'User created successfully');
      expect(res.body).toHaveProperty('user', mockUser);
    });

    it('should return a 500 error if database query fails', async () => {
      const mockUser = { name: 'Test User', email: 'testuser@gmail.com' };
      const mockError = new Error('Database error');

      pool.query.mockRejectedValue(mockError);

      const res = await requestWithSupertest
        .post('/users')
        .send(mockUser);

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('success', false);
      expect(res.body).toHaveProperty('message', mockError.message);
    });
  });

  describe('UPDATE /users/:id', () => {
    it('should update a user and return a success message', async () => {
      const mockUser = { name: 'Updated User', email: 'updateduser@gmail.com' };
      const userId = 1;

      pool.query.mockResolvedValue(mockUser);

      const res = await requestWithSupertest
        .put(`/users/${userId}`)
        .send(mockUser);

      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'User updated successfully');
    });

    it('should return a 500 error if database query fails', async () => {
      const mockUser = { name: 'Updated User', email: 'updateduser@gmail.com' };
      const mockError = new Error('Database error');
      const userId = 1;

      pool.query.mockRejectedValue(mockError);

      const res = await requestWithSupertest
        .put(`/users/${userId}`)
        .send(mockUser);

      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('success', false);
      expect(res.body).toHaveProperty('message', mockError.message);
    });
  });

  describe('DELETE /users/:id', () => {
    it('should delete a user and return a success message', async () => {
      const userId = 1;

      pool.query.mockResolvedValue({ affectedRows: 1 });
  
      const res = await requestWithSupertest.delete(`/users/${userId}`);
  
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'User deleted successfully');
    });
  
    it('should return a 500 error if database query fails', async () => {
      const userId = 1;
      const mockError = new Error('Database error');
  
      pool.query.mockRejectedValue(mockError);
  
      const res = await requestWithSupertest.delete(`/users/${userId}`);
  
      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('success', false);
      expect(res.body).toHaveProperty('message', mockError.message);
    });
  
    it('should return a 404 error if no user is found to delete', async () => {
      const userId = 1;
  
      pool.query.mockResolvedValue({ affectedRows: 0 });
  
      const res = await requestWithSupertest.delete(`/users/${userId}`);
  
      expect(res.statusCode).toEqual(404);
      expect(res.body).toHaveProperty('message', 'User not found');
    });
  });
});
