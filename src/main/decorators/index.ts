import kafka from './kafka';

type Func = (...args) => Promise<any>;

export const sendEventDecorator =
  (func: Func, callback: Func) =>
  async (...args): Promise<any> => {
    const result = await func(...args);
    return await callback(args, result);
  };
