import { deepmerge } from '@fastify/deepmerge';

export const deepMerge = deepmerge() as ReturnType<typeof deepmerge>;
export { deepmerge as deepMergeFn } from '@fastify/deepmerge';
