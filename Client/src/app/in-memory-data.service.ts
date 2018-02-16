import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const redirects = [
      { id: 11, originalUrl: '/foo', desinationUrl: '/foop' },
      { id: 12, originalUrl: '/Narco', desinationUrl: '/foop' },
      { id: 13, originalUrl: '/Bombasto', desinationUrl: '/foop' },
      { id: 14, originalUrl: '/Celeritas', desinationUrl: '/foop' },
      { id: 15, originalUrl: '/Magneta', desinationUrl: '/foop' },
      { id: 16, originalUrl: '/RubberMan', desinationUrl: '/foop' },
      { id: 17, originalUrl: '/Dynama', desinationUrl: '/foop' },
      { id: 18, originalUrl: '/DrIQ', desinationUrl: '/foop' },
      { id: 19, originalUrl: '/Magma', desinationUrl: '/foop' },
      { id: 20, originalUrl: '/Tornado', desinationUrl: '/foop' }
    ];
    return {redirects};
  }
}