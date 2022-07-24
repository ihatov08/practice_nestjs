export class UserWithoutPassword {
  id: number;
  username: string;
  createDate: Date;
  updatedDate: Date;
}

export class UserModel extends UserWithoutPassword {
  password: string;
}
