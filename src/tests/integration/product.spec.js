const supertest = require('supertest');
const serviceServer = require('../../services/server.service');
const serviceDatabase = require('../../services/database.service');
const app = serviceServer.app;
const TIMEOUT = 30 * 60 * 1000;

beforeAll(async () => {
  await serviceDatabase.initialize();
});

afterAll(() => {
  serviceDatabase.closeConnection();
});

describe('Testing route of products', () => {
  const request = supertest(app);

  it(
    '<200> should always return results and status code 200',
    async () => {
      const url = '/product/PE';
      const res = await request.get(url);
      const { results } = res.body;

      expect(res.status).toBe(200);
      expect(results).toBeDefined();
    },
    TIMEOUT
  );
});
