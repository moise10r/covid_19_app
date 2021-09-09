import reducer, { getAllCases } from '../../store/features/casesSlice';

describe('state', () => {
  it('should set loading true while action is pending', () => {
    const action = { type: getAllCases.pending };
    const initialState = reducer(
      {
        cases: [],
        status: null,
        current: {},
      }, action,
    );
    expect(initialState).toEqual({
      cases: [],
      status: 'loading',
      current: {},
    });
  });

  it('should set cases when action is fulfilled', () => {
    const action = {
      type: getAllCases.fulfilled,
      payload: { confirmed: 29292, country: 'Bruxel' },
    };
    const initialState = reducer(
      {
        cases: [],
        status: null,
        current: {},
      }, action,
    );
    expect(initialState).toEqual({
      cases: { confirmed: 29292, country: 'Bruxel' },
      status: 'success',
      current: {},
    });
  });

  it('should set error true when action is rejected', () => {
    const action = { type: getAllCases.rejected };
    const initialState = reducer(
      {
        cases: [],
        status: null,
        current: {},
      }, action,
    );
    expect(initialState).toEqual({
      cases: [], status: 'failed', current: {},
    });
  });
});
