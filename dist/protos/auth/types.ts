/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "auth";

export interface User {
  id: string;
  isAuthenticated: boolean;
}

const baseUser: object = { id: "", isAuthenticated: false };

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).string(message.id);
    writer.uint32(16).bool(message.isAuthenticated);
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseUser } as User;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.isAuthenticated = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): User {
    const message = { ...baseUser } as User;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    }
    if (
      object.isAuthenticated !== undefined &&
      object.isAuthenticated !== null
    ) {
      message.isAuthenticated = Boolean(object.isAuthenticated);
    }
    return message;
  },

  fromPartial(object: DeepPartial<User>): User {
    const message = { ...baseUser } as User;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    }
    if (
      object.isAuthenticated !== undefined &&
      object.isAuthenticated !== null
    ) {
      message.isAuthenticated = object.isAuthenticated;
    }
    return message;
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.isAuthenticated !== undefined &&
      (obj.isAuthenticated = message.isAuthenticated);
    return obj;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends { $case: string }
  ? { [K in keyof Omit<T, "$case">]?: DeepPartial<T[K]> } & {
      $case: T["$case"];
    }
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
