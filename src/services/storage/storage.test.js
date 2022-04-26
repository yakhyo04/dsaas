import storage from './storage';

describe('Storage', () => {
  describe('LocalStorage', () => {
    describe('Set', () => {
      it('should set to storage and return null if new', () => {
        expect(storage.local.set('set_test', 'value')).toEqual(null);
      });
      it('should set to storage and return old value if not new', () => {
        expect(storage.local.set('set_test', 'value1')).toEqual('value');
      });
      it('should set to storage', () => {
        storage.local.set('set_test', 'value');
        expect(JSON.parse(window.localStorage.getItem('set_test') || '')).toEqual('value');
      });
    });
    describe('Get', () => {
      it('should get from storage if not exists must be null', () => {
        expect(storage.local.get('get_test')).toEqual(null);
      });
      it('should get from storage if exists must be value', () => {
        storage.local.set('get_test', 'value');
        expect(storage.local.get('get_test')).toEqual('value');
      });
      it('should work correctly with object', () => {
        const value = { data: 'data_value', key: 'key_value' };

        storage.local.set('get_test', value);
        expect(storage.local.get('get_test')).toEqual(value);
      });
      it('should work correctly with array', () => {
        const value = [{ data: 'data_value' }, { key: 'key_value' }];

        storage.local.set('get_test', value);
        expect(storage.local.get('get_test')).toEqual(value);
      });
    });
    describe('Remove', () => {
      it('should remove from storage', () => {
        storage.local.remove('set_test');
        expect(storage.local.get('set_test')).toEqual(null);
      });
    });
  });
  describe('SessionStorage', () => {
    describe('Set', () => {
      it('should set to storage and return null if new', () => {
        expect(storage.session.set('set_test', 'value')).toEqual(null);
      });
      it('should set to storage and return old value if not new', () => {
        expect(storage.session.set('set_test', 'value1')).toEqual('value');
      });
      it('should set to storage', () => {
        storage.session.set('set_test', 'value');
        expect(JSON.parse(window.sessionStorage.getItem('set_test') || '')).toEqual('value');
      });
    });
    describe('Get', () => {
      it('should get from storage if not exists must be null', () => {
        expect(storage.session.get('get_test')).toEqual(null);
      });
      it('should get from storage if exists must be value', () => {
        storage.session.set('get_test', 'value');
        expect(storage.session.get('get_test')).toEqual('value');
      });
      it('should work correctly with object', () => {
        const value = { data: 'data_value', key: 'key_value' };

        storage.session.set('get_test', value);
        expect(storage.session.get('get_test')).toEqual(value);
      });
      it('should work correctly with array', () => {
        const value = [{ data: 'data_value' }, { key: 'key_value' }];

        storage.session.set('get_test', value);
        expect(storage.session.get('get_test')).toEqual(value);
      });
    });
    describe('Remove', () => {
      it('should remove from storage', () => {
        storage.session.remove('set_test');
        expect(storage.session.get('set_test')).toEqual(null);
      });
    });
  });
});
