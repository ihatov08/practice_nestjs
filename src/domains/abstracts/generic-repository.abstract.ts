// 各リポジトリに共通の基本的なCRUDをサポートする
// 共通がなければ不要

export abstract class IGenericRepository<T> {
  abstract getAll(): Promise<T[]>;
  abstract get(id: string): Promise<T>;
  abstract create(item: T): Promise<T>;
  abstract update(id: string, item: T);
}
