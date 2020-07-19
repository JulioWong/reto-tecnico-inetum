const supertest = require('supertest');
const serviceServer = require('../../services/server.service');
const app = serviceServer.app;
const TIMEOUT = 30 * 60 * 1000;

describe('Testing responses of error', () => {
  const request = supertest(app);

  it(
    '<404> should always return "Path not found"',
    async () => {
      const url = '/unknown';
      const res = await request.get(url)
      const { message } = res.body;

      expect(res.status).toBe(404);
      expect(message).toEqual("Path not found");
     
    },
    TIMEOUT
  );

  it(
    '<411> should always return "Invalid data" and status code 411',
    async () => {
      const url = '/product/AR';
      const res = await request.get(url);
      const { message } = res.body;

      expect(res.status).toBe(411);
      expect(message).toEqual("Invalid data");

    },
    TIMEOUT
  );
});
