/* eslint-disable */
import { User } from "../protos/auth/types";
import { User } from "../protos/user/types";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "imports";

export interface LoggedInUser {
  user: User | undefined;
}

export interface SomeOtherUser {
  user: User | undefined;
}

const baseLoggedInUser: object = {};

export const LoggedInUser = {
  encode(
    message: LoggedInUser,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== undefined && message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): LoggedInUser {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseLoggedInUser } as LoggedInUser;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): LoggedInUser {
    const message = { ...baseLoggedInUser } as LoggedInUser;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    }
    return message;
  },

  fromPartial(object: DeepPartial<LoggedInUser>): LoggedInUser {
    const message = { ...baseLoggedInUser } as LoggedInUser;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    }
    return message;
  },

  toJSON(message: LoggedInUser): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
    return obj;
  },
};

const baseSomeOtherUser: object = {};

export const SomeOtherUser = {
  encode(
    message: SomeOtherUser,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.user !== undefined && message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): SomeOtherUser {
    const reader = input instanceof Uint8Array ? new _m0.Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseSomeOtherUser } as SomeOtherUser;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.user = User.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): SomeOtherUser {
    const message = { ...baseSomeOtherUser } as SomeOtherUser;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromJSON(object.user);
    }
    return message;
  },

  fromPartial(object: DeepPartial<SomeOtherUser>): SomeOtherUser {
    const message = { ...baseSomeOtherUser } as SomeOtherUser;
    if (object.user !== undefined && object.user !== null) {
      message.user = User.fromPartial(object.user);
    }
    return message;
  },

  toJSON(message: SomeOtherUser): unknown {
    const obj: any = {};
    message.user !== undefined &&
      (obj.user = message.user ? User.toJSON(message.user) : undefined);
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
