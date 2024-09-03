export class Result<T> {
  code: number = 0;
  message?: string;
  data?: T;

  constructor(code: number, message?: string, data?: T) {
    this.code = code;
    this.message = message;
    this.data = data;
  }

  static success<T>(data?: T, message?: string): Result<T> {
    return new Result(0, message, data);
  }

  static error<T>(code: number, data?: T, message?: string): Result<T> {
    return new Result(code, message, data);
  }
}
