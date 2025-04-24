
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Messages
 * 
 */
export type Messages = $Result.DefaultSelection<Prisma.$MessagesPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model GroupMembers
 * 
 */
export type GroupMembers = $Result.DefaultSelection<Prisma.$GroupMembersPayload>
/**
 * Model Contacts
 * 
 */
export type Contacts = $Result.DefaultSelection<Prisma.$ContactsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.messages`: Exposes CRUD operations for the **Messages** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.messages.findMany()
    * ```
    */
  get messages(): Prisma.MessagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.groupMembers`: Exposes CRUD operations for the **GroupMembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GroupMembers
    * const groupMembers = await prisma.groupMembers.findMany()
    * ```
    */
  get groupMembers(): Prisma.GroupMembersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contacts`: Exposes CRUD operations for the **Contacts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contacts.findMany()
    * ```
    */
  get contacts(): Prisma.ContactsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Messages: 'Messages',
    Group: 'Group',
    GroupMembers: 'GroupMembers',
    Contacts: 'Contacts'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "messages" | "group" | "groupMembers" | "contacts"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Messages: {
        payload: Prisma.$MessagesPayload<ExtArgs>
        fields: Prisma.MessagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findFirst: {
            args: Prisma.MessagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          findMany: {
            args: Prisma.MessagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          create: {
            args: Prisma.MessagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          createMany: {
            args: Prisma.MessagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          delete: {
            args: Prisma.MessagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          update: {
            args: Prisma.MessagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          deleteMany: {
            args: Prisma.MessagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>[]
          }
          upsert: {
            args: Prisma.MessagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagesPayload>
          }
          aggregate: {
            args: Prisma.MessagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessages>
          }
          groupBy: {
            args: Prisma.MessagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessagesCountArgs<ExtArgs>
            result: $Utils.Optional<MessagesCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      GroupMembers: {
        payload: Prisma.$GroupMembersPayload<ExtArgs>
        fields: Prisma.GroupMembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupMembersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupMembersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload>
          }
          findFirst: {
            args: Prisma.GroupMembersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupMembersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload>
          }
          findMany: {
            args: Prisma.GroupMembersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload>[]
          }
          create: {
            args: Prisma.GroupMembersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload>
          }
          createMany: {
            args: Prisma.GroupMembersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupMembersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload>[]
          }
          delete: {
            args: Prisma.GroupMembersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload>
          }
          update: {
            args: Prisma.GroupMembersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload>
          }
          deleteMany: {
            args: Prisma.GroupMembersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupMembersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupMembersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload>[]
          }
          upsert: {
            args: Prisma.GroupMembersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupMembersPayload>
          }
          aggregate: {
            args: Prisma.GroupMembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroupMembers>
          }
          groupBy: {
            args: Prisma.GroupMembersGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupMembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupMembersCountArgs<ExtArgs>
            result: $Utils.Optional<GroupMembersCountAggregateOutputType> | number
          }
        }
      }
      Contacts: {
        payload: Prisma.$ContactsPayload<ExtArgs>
        fields: Prisma.ContactsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          findFirst: {
            args: Prisma.ContactsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          findMany: {
            args: Prisma.ContactsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>[]
          }
          create: {
            args: Prisma.ContactsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          createMany: {
            args: Prisma.ContactsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>[]
          }
          delete: {
            args: Prisma.ContactsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          update: {
            args: Prisma.ContactsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          deleteMany: {
            args: Prisma.ContactsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>[]
          }
          upsert: {
            args: Prisma.ContactsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactsPayload>
          }
          aggregate: {
            args: Prisma.ContactsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContacts>
          }
          groupBy: {
            args: Prisma.ContactsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactsCountArgs<ExtArgs>
            result: $Utils.Optional<ContactsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    messages?: MessagesOmit
    group?: GroupOmit
    groupMembers?: GroupMembersOmit
    contacts?: ContactsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    senderMessages: number
    receiverMessages: number
    Members: number
    owner: number
    contacts: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderMessages?: boolean | UsersCountOutputTypeCountSenderMessagesArgs
    receiverMessages?: boolean | UsersCountOutputTypeCountReceiverMessagesArgs
    Members?: boolean | UsersCountOutputTypeCountMembersArgs
    owner?: boolean | UsersCountOutputTypeCountOwnerArgs
    contacts?: boolean | UsersCountOutputTypeCountContactsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSenderMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountReceiverMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMembersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOwnerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountContactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactsWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    Messages: number
    Members: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Messages?: boolean | GroupCountOutputTypeCountMessagesArgs
    Members?: boolean | GroupCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMembersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    username: string | null
    salt: string | null
    hash: string | null
    profile: string | null
    bio: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    username: string | null
    salt: string | null
    hash: string | null
    profile: string | null
    bio: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    salt: number
    hash: number
    profile: number
    bio: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    salt?: true
    hash?: true
    profile?: true
    bio?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    salt?: true
    hash?: true
    profile?: true
    bio?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    salt?: true
    hash?: true
    profile?: true
    bio?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    username: string
    salt: string
    hash: string
    profile: string | null
    bio: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    salt?: boolean
    hash?: boolean
    profile?: boolean
    bio?: boolean
    senderMessages?: boolean | Users$senderMessagesArgs<ExtArgs>
    receiverMessages?: boolean | Users$receiverMessagesArgs<ExtArgs>
    Members?: boolean | Users$MembersArgs<ExtArgs>
    owner?: boolean | Users$ownerArgs<ExtArgs>
    contacts?: boolean | Users$contactsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    salt?: boolean
    hash?: boolean
    profile?: boolean
    bio?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    salt?: boolean
    hash?: boolean
    profile?: boolean
    bio?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    username?: boolean
    salt?: boolean
    hash?: boolean
    profile?: boolean
    bio?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "salt" | "hash" | "profile" | "bio", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    senderMessages?: boolean | Users$senderMessagesArgs<ExtArgs>
    receiverMessages?: boolean | Users$receiverMessagesArgs<ExtArgs>
    Members?: boolean | Users$MembersArgs<ExtArgs>
    owner?: boolean | Users$ownerArgs<ExtArgs>
    contacts?: boolean | Users$contactsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      senderMessages: Prisma.$MessagesPayload<ExtArgs>[]
      receiverMessages: Prisma.$MessagesPayload<ExtArgs>[]
      Members: Prisma.$GroupMembersPayload<ExtArgs>[]
      owner: Prisma.$ContactsPayload<ExtArgs>[]
      contacts: Prisma.$ContactsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      salt: string
      hash: string
      profile: string | null
      bio: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    senderMessages<T extends Users$senderMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Users$senderMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receiverMessages<T extends Users$receiverMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Users$receiverMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Members<T extends Users$MembersArgs<ExtArgs> = {}>(args?: Subset<T, Users$MembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends Users$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Users$ownerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contacts<T extends Users$contactsArgs<ExtArgs> = {}>(args?: Subset<T, Users$contactsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly username: FieldRef<"Users", 'String'>
    readonly salt: FieldRef<"Users", 'String'>
    readonly hash: FieldRef<"Users", 'String'>
    readonly profile: FieldRef<"Users", 'String'>
    readonly bio: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.senderMessages
   */
  export type Users$senderMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Users.receiverMessages
   */
  export type Users$receiverMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Users.Members
   */
  export type Users$MembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembers
     */
    omit?: GroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    where?: GroupMembersWhereInput
    orderBy?: GroupMembersOrderByWithRelationInput | GroupMembersOrderByWithRelationInput[]
    cursor?: GroupMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMembersScalarFieldEnum | GroupMembersScalarFieldEnum[]
  }

  /**
   * Users.owner
   */
  export type Users$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    where?: ContactsWhereInput
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    cursor?: ContactsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Users.contacts
   */
  export type Users$contactsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    where?: ContactsWhereInput
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    cursor?: ContactsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Messages
   */

  export type AggregateMessages = {
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  export type MessagesMinAggregateOutputType = {
    id: string | null
    message: string | null
    imageURL: string | null
    senderId: string | null
    receiverId: string | null
    time: Date | null
    groupId: string | null
  }

  export type MessagesMaxAggregateOutputType = {
    id: string | null
    message: string | null
    imageURL: string | null
    senderId: string | null
    receiverId: string | null
    time: Date | null
    groupId: string | null
  }

  export type MessagesCountAggregateOutputType = {
    id: number
    message: number
    imageURL: number
    senderId: number
    receiverId: number
    time: number
    groupId: number
    _all: number
  }


  export type MessagesMinAggregateInputType = {
    id?: true
    message?: true
    imageURL?: true
    senderId?: true
    receiverId?: true
    time?: true
    groupId?: true
  }

  export type MessagesMaxAggregateInputType = {
    id?: true
    message?: true
    imageURL?: true
    senderId?: true
    receiverId?: true
    time?: true
    groupId?: true
  }

  export type MessagesCountAggregateInputType = {
    id?: true
    message?: true
    imageURL?: true
    senderId?: true
    receiverId?: true
    time?: true
    groupId?: true
    _all?: true
  }

  export type MessagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to aggregate.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessagesMaxAggregateInputType
  }

  export type GetMessagesAggregateType<T extends MessagesAggregateArgs> = {
        [P in keyof T & keyof AggregateMessages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessages[P]>
      : GetScalarType<T[P], AggregateMessages[P]>
  }




  export type MessagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithAggregationInput | MessagesOrderByWithAggregationInput[]
    by: MessagesScalarFieldEnum[] | MessagesScalarFieldEnum
    having?: MessagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessagesCountAggregateInputType | true
    _min?: MessagesMinAggregateInputType
    _max?: MessagesMaxAggregateInputType
  }

  export type MessagesGroupByOutputType = {
    id: string
    message: string | null
    imageURL: string | null
    senderId: string
    receiverId: string | null
    time: Date
    groupId: string | null
    _count: MessagesCountAggregateOutputType | null
    _min: MessagesMinAggregateOutputType | null
    _max: MessagesMaxAggregateOutputType | null
  }

  type GetMessagesGroupByPayload<T extends MessagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessagesGroupByOutputType[P]>
            : GetScalarType<T[P], MessagesGroupByOutputType[P]>
        }
      >
    >


  export type MessagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    imageURL?: boolean
    senderId?: boolean
    receiverId?: boolean
    time?: boolean
    groupId?: boolean
    sender?: boolean | UsersDefaultArgs<ExtArgs>
    receiver?: boolean | Messages$receiverArgs<ExtArgs>
    group?: boolean | Messages$groupArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    imageURL?: boolean
    senderId?: boolean
    receiverId?: boolean
    time?: boolean
    groupId?: boolean
    sender?: boolean | UsersDefaultArgs<ExtArgs>
    receiver?: boolean | Messages$receiverArgs<ExtArgs>
    group?: boolean | Messages$groupArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    imageURL?: boolean
    senderId?: boolean
    receiverId?: boolean
    time?: boolean
    groupId?: boolean
    sender?: boolean | UsersDefaultArgs<ExtArgs>
    receiver?: boolean | Messages$receiverArgs<ExtArgs>
    group?: boolean | Messages$groupArgs<ExtArgs>
  }, ExtArgs["result"]["messages"]>

  export type MessagesSelectScalar = {
    id?: boolean
    message?: boolean
    imageURL?: boolean
    senderId?: boolean
    receiverId?: boolean
    time?: boolean
    groupId?: boolean
  }

  export type MessagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "imageURL" | "senderId" | "receiverId" | "time" | "groupId", ExtArgs["result"]["messages"]>
  export type MessagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UsersDefaultArgs<ExtArgs>
    receiver?: boolean | Messages$receiverArgs<ExtArgs>
    group?: boolean | Messages$groupArgs<ExtArgs>
  }
  export type MessagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UsersDefaultArgs<ExtArgs>
    receiver?: boolean | Messages$receiverArgs<ExtArgs>
    group?: boolean | Messages$groupArgs<ExtArgs>
  }
  export type MessagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UsersDefaultArgs<ExtArgs>
    receiver?: boolean | Messages$receiverArgs<ExtArgs>
    group?: boolean | Messages$groupArgs<ExtArgs>
  }

  export type $MessagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Messages"
    objects: {
      sender: Prisma.$UsersPayload<ExtArgs>
      receiver: Prisma.$UsersPayload<ExtArgs> | null
      group: Prisma.$GroupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string | null
      imageURL: string | null
      senderId: string
      receiverId: string | null
      time: Date
      groupId: string | null
    }, ExtArgs["result"]["messages"]>
    composites: {}
  }

  type MessagesGetPayload<S extends boolean | null | undefined | MessagesDefaultArgs> = $Result.GetResult<Prisma.$MessagesPayload, S>

  type MessagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessagesCountAggregateInputType | true
    }

  export interface MessagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Messages'], meta: { name: 'Messages' } }
    /**
     * Find zero or one Messages that matches the filter.
     * @param {MessagesFindUniqueArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessagesFindUniqueArgs>(args: SelectSubset<T, MessagesFindUniqueArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Messages that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessagesFindUniqueOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessagesFindUniqueOrThrowArgs>(args: SelectSubset<T, MessagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessagesFindFirstArgs>(args?: SelectSubset<T, MessagesFindFirstArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Messages that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindFirstOrThrowArgs} args - Arguments to find a Messages
     * @example
     * // Get one Messages
     * const messages = await prisma.messages.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessagesFindFirstOrThrowArgs>(args?: SelectSubset<T, MessagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.messages.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.messages.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messagesWithIdOnly = await prisma.messages.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessagesFindManyArgs>(args?: SelectSubset<T, MessagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Messages.
     * @param {MessagesCreateArgs} args - Arguments to create a Messages.
     * @example
     * // Create one Messages
     * const Messages = await prisma.messages.create({
     *   data: {
     *     // ... data to create a Messages
     *   }
     * })
     * 
     */
    create<T extends MessagesCreateArgs>(args: SelectSubset<T, MessagesCreateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessagesCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessagesCreateManyArgs>(args?: SelectSubset<T, MessagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessagesCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const messages = await prisma.messages.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessagesCreateManyAndReturnArgs>(args?: SelectSubset<T, MessagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Messages.
     * @param {MessagesDeleteArgs} args - Arguments to delete one Messages.
     * @example
     * // Delete one Messages
     * const Messages = await prisma.messages.delete({
     *   where: {
     *     // ... filter to delete one Messages
     *   }
     * })
     * 
     */
    delete<T extends MessagesDeleteArgs>(args: SelectSubset<T, MessagesDeleteArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Messages.
     * @param {MessagesUpdateArgs} args - Arguments to update one Messages.
     * @example
     * // Update one Messages
     * const messages = await prisma.messages.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessagesUpdateArgs>(args: SelectSubset<T, MessagesUpdateArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessagesDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.messages.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessagesDeleteManyArgs>(args?: SelectSubset<T, MessagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessagesUpdateManyArgs>(args: SelectSubset<T, MessagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessagesUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const messages = await prisma.messages.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messagesWithIdOnly = await prisma.messages.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessagesUpdateManyAndReturnArgs>(args: SelectSubset<T, MessagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Messages.
     * @param {MessagesUpsertArgs} args - Arguments to update or create a Messages.
     * @example
     * // Update or create a Messages
     * const messages = await prisma.messages.upsert({
     *   create: {
     *     // ... data to create a Messages
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Messages we want to update
     *   }
     * })
     */
    upsert<T extends MessagesUpsertArgs>(args: SelectSubset<T, MessagesUpsertArgs<ExtArgs>>): Prisma__MessagesClient<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.messages.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessagesCountArgs>(
      args?: Subset<T, MessagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessagesAggregateArgs>(args: Subset<T, MessagesAggregateArgs>): Prisma.PrismaPromise<GetMessagesAggregateType<T>>

    /**
     * Group by Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessagesGroupByArgs['orderBy'] }
        : { orderBy?: MessagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Messages model
   */
  readonly fields: MessagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Messages.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends Messages$receiverArgs<ExtArgs> = {}>(args?: Subset<T, Messages$receiverArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    group<T extends Messages$groupArgs<ExtArgs> = {}>(args?: Subset<T, Messages$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Messages model
   */
  interface MessagesFieldRefs {
    readonly id: FieldRef<"Messages", 'String'>
    readonly message: FieldRef<"Messages", 'String'>
    readonly imageURL: FieldRef<"Messages", 'String'>
    readonly senderId: FieldRef<"Messages", 'String'>
    readonly receiverId: FieldRef<"Messages", 'String'>
    readonly time: FieldRef<"Messages", 'DateTime'>
    readonly groupId: FieldRef<"Messages", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Messages findUnique
   */
  export type MessagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findUniqueOrThrow
   */
  export type MessagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages findFirst
   */
  export type MessagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findFirstOrThrow
   */
  export type MessagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages findMany
   */
  export type MessagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Messages create
   */
  export type MessagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to create a Messages.
     */
    data: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
  }

  /**
   * Messages createMany
   */
  export type MessagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Messages createManyAndReturn
   */
  export type MessagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessagesCreateManyInput | MessagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages update
   */
  export type MessagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The data needed to update a Messages.
     */
    data: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
    /**
     * Choose, which Messages to update.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages updateMany
   */
  export type MessagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Messages updateManyAndReturn
   */
  export type MessagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Messages upsert
   */
  export type MessagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * The filter to search for the Messages to update in case it exists.
     */
    where: MessagesWhereUniqueInput
    /**
     * In case the Messages found by the `where` argument doesn't exist, create a new Messages with this data.
     */
    create: XOR<MessagesCreateInput, MessagesUncheckedCreateInput>
    /**
     * In case the Messages was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessagesUpdateInput, MessagesUncheckedUpdateInput>
  }

  /**
   * Messages delete
   */
  export type MessagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    /**
     * Filter which Messages to delete.
     */
    where: MessagesWhereUniqueInput
  }

  /**
   * Messages deleteMany
   */
  export type MessagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessagesWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Messages.receiver
   */
  export type Messages$receiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
  }

  /**
   * Messages.group
   */
  export type Messages$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * Messages without action
   */
  export type MessagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    profile: string | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    profile: string | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    profile: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    profile?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    profile?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    profile?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    profile: string | null
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profile?: boolean
    Messages?: boolean | Group$MessagesArgs<ExtArgs>
    Members?: boolean | Group$MembersArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profile?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profile?: boolean
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    profile?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "profile", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Messages?: boolean | Group$MessagesArgs<ExtArgs>
    Members?: boolean | Group$MembersArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      Messages: Prisma.$MessagesPayload<ExtArgs>[]
      Members: Prisma.$GroupMembersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      profile: string | null
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Messages<T extends Group$MessagesArgs<ExtArgs> = {}>(args?: Subset<T, Group$MessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Members<T extends Group$MembersArgs<ExtArgs> = {}>(args?: Subset<T, Group$MembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly profile: FieldRef<"Group", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.Messages
   */
  export type Group$MessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Messages
     */
    select?: MessagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Messages
     */
    omit?: MessagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessagesInclude<ExtArgs> | null
    where?: MessagesWhereInput
    orderBy?: MessagesOrderByWithRelationInput | MessagesOrderByWithRelationInput[]
    cursor?: MessagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessagesScalarFieldEnum | MessagesScalarFieldEnum[]
  }

  /**
   * Group.Members
   */
  export type Group$MembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembers
     */
    omit?: GroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    where?: GroupMembersWhereInput
    orderBy?: GroupMembersOrderByWithRelationInput | GroupMembersOrderByWithRelationInput[]
    cursor?: GroupMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupMembersScalarFieldEnum | GroupMembersScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model GroupMembers
   */

  export type AggregateGroupMembers = {
    _count: GroupMembersCountAggregateOutputType | null
    _min: GroupMembersMinAggregateOutputType | null
    _max: GroupMembersMaxAggregateOutputType | null
  }

  export type GroupMembersMinAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
  }

  export type GroupMembersMaxAggregateOutputType = {
    id: string | null
    groupId: string | null
    userId: string | null
  }

  export type GroupMembersCountAggregateOutputType = {
    id: number
    groupId: number
    userId: number
    _all: number
  }


  export type GroupMembersMinAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
  }

  export type GroupMembersMaxAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
  }

  export type GroupMembersCountAggregateInputType = {
    id?: true
    groupId?: true
    userId?: true
    _all?: true
  }

  export type GroupMembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to aggregate.
     */
    where?: GroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMembersOrderByWithRelationInput | GroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GroupMembers
    **/
    _count?: true | GroupMembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMembersMaxAggregateInputType
  }

  export type GetGroupMembersAggregateType<T extends GroupMembersAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupMembers[P]>
      : GetScalarType<T[P], AggregateGroupMembers[P]>
  }




  export type GroupMembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupMembersWhereInput
    orderBy?: GroupMembersOrderByWithAggregationInput | GroupMembersOrderByWithAggregationInput[]
    by: GroupMembersScalarFieldEnum[] | GroupMembersScalarFieldEnum
    having?: GroupMembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupMembersCountAggregateInputType | true
    _min?: GroupMembersMinAggregateInputType
    _max?: GroupMembersMaxAggregateInputType
  }

  export type GroupMembersGroupByOutputType = {
    id: string
    groupId: string
    userId: string
    _count: GroupMembersCountAggregateOutputType | null
    _min: GroupMembersMinAggregateOutputType | null
    _max: GroupMembersMaxAggregateOutputType | null
  }

  type GetGroupMembersGroupByPayload<T extends GroupMembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupMembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupMembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupMembersGroupByOutputType[P]>
            : GetScalarType<T[P], GroupMembersGroupByOutputType[P]>
        }
      >
    >


  export type GroupMembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMembers"]>

  export type GroupMembersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMembers"]>

  export type GroupMembersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    groupId?: boolean
    userId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupMembers"]>

  export type GroupMembersSelectScalar = {
    id?: boolean
    groupId?: boolean
    userId?: boolean
  }

  export type GroupMembersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "groupId" | "userId", ExtArgs["result"]["groupMembers"]>
  export type GroupMembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type GroupMembersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type GroupMembersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    user?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $GroupMembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GroupMembers"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      user: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      groupId: string
      userId: string
    }, ExtArgs["result"]["groupMembers"]>
    composites: {}
  }

  type GroupMembersGetPayload<S extends boolean | null | undefined | GroupMembersDefaultArgs> = $Result.GetResult<Prisma.$GroupMembersPayload, S>

  type GroupMembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupMembersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupMembersCountAggregateInputType | true
    }

  export interface GroupMembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GroupMembers'], meta: { name: 'GroupMembers' } }
    /**
     * Find zero or one GroupMembers that matches the filter.
     * @param {GroupMembersFindUniqueArgs} args - Arguments to find a GroupMembers
     * @example
     * // Get one GroupMembers
     * const groupMembers = await prisma.groupMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupMembersFindUniqueArgs>(args: SelectSubset<T, GroupMembersFindUniqueArgs<ExtArgs>>): Prisma__GroupMembersClient<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GroupMembers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupMembersFindUniqueOrThrowArgs} args - Arguments to find a GroupMembers
     * @example
     * // Get one GroupMembers
     * const groupMembers = await prisma.groupMembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupMembersFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupMembersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupMembersClient<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersFindFirstArgs} args - Arguments to find a GroupMembers
     * @example
     * // Get one GroupMembers
     * const groupMembers = await prisma.groupMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupMembersFindFirstArgs>(args?: SelectSubset<T, GroupMembersFindFirstArgs<ExtArgs>>): Prisma__GroupMembersClient<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GroupMembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersFindFirstOrThrowArgs} args - Arguments to find a GroupMembers
     * @example
     * // Get one GroupMembers
     * const groupMembers = await prisma.groupMembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupMembersFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupMembersFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupMembersClient<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GroupMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GroupMembers
     * const groupMembers = await prisma.groupMembers.findMany()
     * 
     * // Get first 10 GroupMembers
     * const groupMembers = await prisma.groupMembers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupMembersWithIdOnly = await prisma.groupMembers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupMembersFindManyArgs>(args?: SelectSubset<T, GroupMembersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GroupMembers.
     * @param {GroupMembersCreateArgs} args - Arguments to create a GroupMembers.
     * @example
     * // Create one GroupMembers
     * const GroupMembers = await prisma.groupMembers.create({
     *   data: {
     *     // ... data to create a GroupMembers
     *   }
     * })
     * 
     */
    create<T extends GroupMembersCreateArgs>(args: SelectSubset<T, GroupMembersCreateArgs<ExtArgs>>): Prisma__GroupMembersClient<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GroupMembers.
     * @param {GroupMembersCreateManyArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMembers = await prisma.groupMembers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupMembersCreateManyArgs>(args?: SelectSubset<T, GroupMembersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GroupMembers and returns the data saved in the database.
     * @param {GroupMembersCreateManyAndReturnArgs} args - Arguments to create many GroupMembers.
     * @example
     * // Create many GroupMembers
     * const groupMembers = await prisma.groupMembers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GroupMembers and only return the `id`
     * const groupMembersWithIdOnly = await prisma.groupMembers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupMembersCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupMembersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GroupMembers.
     * @param {GroupMembersDeleteArgs} args - Arguments to delete one GroupMembers.
     * @example
     * // Delete one GroupMembers
     * const GroupMembers = await prisma.groupMembers.delete({
     *   where: {
     *     // ... filter to delete one GroupMembers
     *   }
     * })
     * 
     */
    delete<T extends GroupMembersDeleteArgs>(args: SelectSubset<T, GroupMembersDeleteArgs<ExtArgs>>): Prisma__GroupMembersClient<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GroupMembers.
     * @param {GroupMembersUpdateArgs} args - Arguments to update one GroupMembers.
     * @example
     * // Update one GroupMembers
     * const groupMembers = await prisma.groupMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupMembersUpdateArgs>(args: SelectSubset<T, GroupMembersUpdateArgs<ExtArgs>>): Prisma__GroupMembersClient<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GroupMembers.
     * @param {GroupMembersDeleteManyArgs} args - Arguments to filter GroupMembers to delete.
     * @example
     * // Delete a few GroupMembers
     * const { count } = await prisma.groupMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupMembersDeleteManyArgs>(args?: SelectSubset<T, GroupMembersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GroupMembers
     * const groupMembers = await prisma.groupMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupMembersUpdateManyArgs>(args: SelectSubset<T, GroupMembersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GroupMembers and returns the data updated in the database.
     * @param {GroupMembersUpdateManyAndReturnArgs} args - Arguments to update many GroupMembers.
     * @example
     * // Update many GroupMembers
     * const groupMembers = await prisma.groupMembers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GroupMembers and only return the `id`
     * const groupMembersWithIdOnly = await prisma.groupMembers.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroupMembersUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupMembersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GroupMembers.
     * @param {GroupMembersUpsertArgs} args - Arguments to update or create a GroupMembers.
     * @example
     * // Update or create a GroupMembers
     * const groupMembers = await prisma.groupMembers.upsert({
     *   create: {
     *     // ... data to create a GroupMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GroupMembers we want to update
     *   }
     * })
     */
    upsert<T extends GroupMembersUpsertArgs>(args: SelectSubset<T, GroupMembersUpsertArgs<ExtArgs>>): Prisma__GroupMembersClient<$Result.GetResult<Prisma.$GroupMembersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersCountArgs} args - Arguments to filter GroupMembers to count.
     * @example
     * // Count the number of GroupMembers
     * const count = await prisma.groupMembers.count({
     *   where: {
     *     // ... the filter for the GroupMembers we want to count
     *   }
     * })
    **/
    count<T extends GroupMembersCountArgs>(
      args?: Subset<T, GroupMembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupMembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroupMembersAggregateArgs>(args: Subset<T, GroupMembersAggregateArgs>): Prisma.PrismaPromise<GetGroupMembersAggregateType<T>>

    /**
     * Group by GroupMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupMembersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroupMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupMembersGroupByArgs['orderBy'] }
        : { orderBy?: GroupMembersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroupMembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GroupMembers model
   */
  readonly fields: GroupMembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GroupMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupMembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GroupMembers model
   */
  interface GroupMembersFieldRefs {
    readonly id: FieldRef<"GroupMembers", 'String'>
    readonly groupId: FieldRef<"GroupMembers", 'String'>
    readonly userId: FieldRef<"GroupMembers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * GroupMembers findUnique
   */
  export type GroupMembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembers
     */
    omit?: GroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where: GroupMembersWhereUniqueInput
  }

  /**
   * GroupMembers findUniqueOrThrow
   */
  export type GroupMembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembers
     */
    omit?: GroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where: GroupMembersWhereUniqueInput
  }

  /**
   * GroupMembers findFirst
   */
  export type GroupMembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembers
     */
    omit?: GroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMembersOrderByWithRelationInput | GroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMembersScalarFieldEnum | GroupMembersScalarFieldEnum[]
  }

  /**
   * GroupMembers findFirstOrThrow
   */
  export type GroupMembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembers
     */
    omit?: GroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMembersOrderByWithRelationInput | GroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GroupMembers.
     */
    cursor?: GroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GroupMembers.
     */
    distinct?: GroupMembersScalarFieldEnum | GroupMembersScalarFieldEnum[]
  }

  /**
   * GroupMembers findMany
   */
  export type GroupMembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembers
     */
    omit?: GroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    /**
     * Filter, which GroupMembers to fetch.
     */
    where?: GroupMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GroupMembers to fetch.
     */
    orderBy?: GroupMembersOrderByWithRelationInput | GroupMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GroupMembers.
     */
    cursor?: GroupMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GroupMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GroupMembers.
     */
    skip?: number
    distinct?: GroupMembersScalarFieldEnum | GroupMembersScalarFieldEnum[]
  }

  /**
   * GroupMembers create
   */
  export type GroupMembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembers
     */
    omit?: GroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    /**
     * The data needed to create a GroupMembers.
     */
    data: XOR<GroupMembersCreateInput, GroupMembersUncheckedCreateInput>
  }

  /**
   * GroupMembers createMany
   */
  export type GroupMembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMembersCreateManyInput | GroupMembersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GroupMembers createManyAndReturn
   */
  export type GroupMembersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembers
     */
    omit?: GroupMembersOmit<ExtArgs> | null
    /**
     * The data used to create many GroupMembers.
     */
    data: GroupMembersCreateManyInput | GroupMembersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMembers update
   */
  export type GroupMembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembers
     */
    omit?: GroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    /**
     * The data needed to update a GroupMembers.
     */
    data: XOR<GroupMembersUpdateInput, GroupMembersUncheckedUpdateInput>
    /**
     * Choose, which GroupMembers to update.
     */
    where: GroupMembersWhereUniqueInput
  }

  /**
   * GroupMembers updateMany
   */
  export type GroupMembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMembersUpdateManyMutationInput, GroupMembersUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMembersWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
  }

  /**
   * GroupMembers updateManyAndReturn
   */
  export type GroupMembersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembers
     */
    omit?: GroupMembersOmit<ExtArgs> | null
    /**
     * The data used to update GroupMembers.
     */
    data: XOR<GroupMembersUpdateManyMutationInput, GroupMembersUncheckedUpdateManyInput>
    /**
     * Filter which GroupMembers to update
     */
    where?: GroupMembersWhereInput
    /**
     * Limit how many GroupMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GroupMembers upsert
   */
  export type GroupMembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembers
     */
    omit?: GroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    /**
     * The filter to search for the GroupMembers to update in case it exists.
     */
    where: GroupMembersWhereUniqueInput
    /**
     * In case the GroupMembers found by the `where` argument doesn't exist, create a new GroupMembers with this data.
     */
    create: XOR<GroupMembersCreateInput, GroupMembersUncheckedCreateInput>
    /**
     * In case the GroupMembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupMembersUpdateInput, GroupMembersUncheckedUpdateInput>
  }

  /**
   * GroupMembers delete
   */
  export type GroupMembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembers
     */
    omit?: GroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
    /**
     * Filter which GroupMembers to delete.
     */
    where: GroupMembersWhereUniqueInput
  }

  /**
   * GroupMembers deleteMany
   */
  export type GroupMembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GroupMembers to delete
     */
    where?: GroupMembersWhereInput
    /**
     * Limit how many GroupMembers to delete.
     */
    limit?: number
  }

  /**
   * GroupMembers without action
   */
  export type GroupMembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupMembers
     */
    select?: GroupMembersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GroupMembers
     */
    omit?: GroupMembersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupMembersInclude<ExtArgs> | null
  }


  /**
   * Model Contacts
   */

  export type AggregateContacts = {
    _count: ContactsCountAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  export type ContactsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    contactId: string | null
  }

  export type ContactsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    contactId: string | null
  }

  export type ContactsCountAggregateOutputType = {
    id: number
    userId: number
    contactId: number
    _all: number
  }


  export type ContactsMinAggregateInputType = {
    id?: true
    userId?: true
    contactId?: true
  }

  export type ContactsMaxAggregateInputType = {
    id?: true
    userId?: true
    contactId?: true
  }

  export type ContactsCountAggregateInputType = {
    id?: true
    userId?: true
    contactId?: true
    _all?: true
  }

  export type ContactsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to aggregate.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactsMaxAggregateInputType
  }

  export type GetContactsAggregateType<T extends ContactsAggregateArgs> = {
        [P in keyof T & keyof AggregateContacts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContacts[P]>
      : GetScalarType<T[P], AggregateContacts[P]>
  }




  export type ContactsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactsWhereInput
    orderBy?: ContactsOrderByWithAggregationInput | ContactsOrderByWithAggregationInput[]
    by: ContactsScalarFieldEnum[] | ContactsScalarFieldEnum
    having?: ContactsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactsCountAggregateInputType | true
    _min?: ContactsMinAggregateInputType
    _max?: ContactsMaxAggregateInputType
  }

  export type ContactsGroupByOutputType = {
    id: string
    userId: string
    contactId: string
    _count: ContactsCountAggregateOutputType | null
    _min: ContactsMinAggregateOutputType | null
    _max: ContactsMaxAggregateOutputType | null
  }

  type GetContactsGroupByPayload<T extends ContactsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactsGroupByOutputType[P]>
            : GetScalarType<T[P], ContactsGroupByOutputType[P]>
        }
      >
    >


  export type ContactsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contactId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    contact?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contacts"]>

  export type ContactsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contactId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    contact?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contacts"]>

  export type ContactsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    contactId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    contact?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contacts"]>

  export type ContactsSelectScalar = {
    id?: boolean
    userId?: boolean
    contactId?: boolean
  }

  export type ContactsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "contactId", ExtArgs["result"]["contacts"]>
  export type ContactsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    contact?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ContactsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    contact?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type ContactsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    contact?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $ContactsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contacts"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      contact: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      contactId: string
    }, ExtArgs["result"]["contacts"]>
    composites: {}
  }

  type ContactsGetPayload<S extends boolean | null | undefined | ContactsDefaultArgs> = $Result.GetResult<Prisma.$ContactsPayload, S>

  type ContactsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactsCountAggregateInputType | true
    }

  export interface ContactsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contacts'], meta: { name: 'Contacts' } }
    /**
     * Find zero or one Contacts that matches the filter.
     * @param {ContactsFindUniqueArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactsFindUniqueArgs>(args: SelectSubset<T, ContactsFindUniqueArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contacts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactsFindUniqueOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactsFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindFirstArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactsFindFirstArgs>(args?: SelectSubset<T, ContactsFindFirstArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contacts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindFirstOrThrowArgs} args - Arguments to find a Contacts
     * @example
     * // Get one Contacts
     * const contacts = await prisma.contacts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactsFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contacts.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contacts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactsWithIdOnly = await prisma.contacts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactsFindManyArgs>(args?: SelectSubset<T, ContactsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contacts.
     * @param {ContactsCreateArgs} args - Arguments to create a Contacts.
     * @example
     * // Create one Contacts
     * const Contacts = await prisma.contacts.create({
     *   data: {
     *     // ... data to create a Contacts
     *   }
     * })
     * 
     */
    create<T extends ContactsCreateArgs>(args: SelectSubset<T, ContactsCreateArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactsCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contacts = await prisma.contacts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactsCreateManyArgs>(args?: SelectSubset<T, ContactsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactsCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contacts = await prisma.contacts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactsWithIdOnly = await prisma.contacts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactsCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contacts.
     * @param {ContactsDeleteArgs} args - Arguments to delete one Contacts.
     * @example
     * // Delete one Contacts
     * const Contacts = await prisma.contacts.delete({
     *   where: {
     *     // ... filter to delete one Contacts
     *   }
     * })
     * 
     */
    delete<T extends ContactsDeleteArgs>(args: SelectSubset<T, ContactsDeleteArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contacts.
     * @param {ContactsUpdateArgs} args - Arguments to update one Contacts.
     * @example
     * // Update one Contacts
     * const contacts = await prisma.contacts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactsUpdateArgs>(args: SelectSubset<T, ContactsUpdateArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactsDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contacts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactsDeleteManyArgs>(args?: SelectSubset<T, ContactsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contacts = await prisma.contacts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactsUpdateManyArgs>(args: SelectSubset<T, ContactsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactsUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contacts = await prisma.contacts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactsWithIdOnly = await prisma.contacts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactsUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contacts.
     * @param {ContactsUpsertArgs} args - Arguments to update or create a Contacts.
     * @example
     * // Update or create a Contacts
     * const contacts = await prisma.contacts.upsert({
     *   create: {
     *     // ... data to create a Contacts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contacts we want to update
     *   }
     * })
     */
    upsert<T extends ContactsUpsertArgs>(args: SelectSubset<T, ContactsUpsertArgs<ExtArgs>>): Prisma__ContactsClient<$Result.GetResult<Prisma.$ContactsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contacts.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactsCountArgs>(
      args?: Subset<T, ContactsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactsAggregateArgs>(args: Subset<T, ContactsAggregateArgs>): Prisma.PrismaPromise<GetContactsAggregateType<T>>

    /**
     * Group by Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactsGroupByArgs['orderBy'] }
        : { orderBy?: ContactsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contacts model
   */
  readonly fields: ContactsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contacts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contact<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contacts model
   */
  interface ContactsFieldRefs {
    readonly id: FieldRef<"Contacts", 'String'>
    readonly userId: FieldRef<"Contacts", 'String'>
    readonly contactId: FieldRef<"Contacts", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contacts findUnique
   */
  export type ContactsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts findUniqueOrThrow
   */
  export type ContactsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts findFirst
   */
  export type ContactsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts findFirstOrThrow
   */
  export type ContactsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts findMany
   */
  export type ContactsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactsOrderByWithRelationInput | ContactsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactsScalarFieldEnum | ContactsScalarFieldEnum[]
  }

  /**
   * Contacts create
   */
  export type ContactsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * The data needed to create a Contacts.
     */
    data: XOR<ContactsCreateInput, ContactsUncheckedCreateInput>
  }

  /**
   * Contacts createMany
   */
  export type ContactsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactsCreateManyInput | ContactsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contacts createManyAndReturn
   */
  export type ContactsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactsCreateManyInput | ContactsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contacts update
   */
  export type ContactsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * The data needed to update a Contacts.
     */
    data: XOR<ContactsUpdateInput, ContactsUncheckedUpdateInput>
    /**
     * Choose, which Contacts to update.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts updateMany
   */
  export type ContactsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactsUpdateManyMutationInput, ContactsUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactsWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contacts updateManyAndReturn
   */
  export type ContactsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactsUpdateManyMutationInput, ContactsUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactsWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contacts upsert
   */
  export type ContactsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * The filter to search for the Contacts to update in case it exists.
     */
    where: ContactsWhereUniqueInput
    /**
     * In case the Contacts found by the `where` argument doesn't exist, create a new Contacts with this data.
     */
    create: XOR<ContactsCreateInput, ContactsUncheckedCreateInput>
    /**
     * In case the Contacts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactsUpdateInput, ContactsUncheckedUpdateInput>
  }

  /**
   * Contacts delete
   */
  export type ContactsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
    /**
     * Filter which Contacts to delete.
     */
    where: ContactsWhereUniqueInput
  }

  /**
   * Contacts deleteMany
   */
  export type ContactsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactsWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contacts without action
   */
  export type ContactsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contacts
     */
    select?: ContactsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contacts
     */
    omit?: ContactsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    salt: 'salt',
    hash: 'hash',
    profile: 'profile',
    bio: 'bio'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const MessagesScalarFieldEnum: {
    id: 'id',
    message: 'message',
    imageURL: 'imageURL',
    senderId: 'senderId',
    receiverId: 'receiverId',
    time: 'time',
    groupId: 'groupId'
  };

  export type MessagesScalarFieldEnum = (typeof MessagesScalarFieldEnum)[keyof typeof MessagesScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    profile: 'profile'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const GroupMembersScalarFieldEnum: {
    id: 'id',
    groupId: 'groupId',
    userId: 'userId'
  };

  export type GroupMembersScalarFieldEnum = (typeof GroupMembersScalarFieldEnum)[keyof typeof GroupMembersScalarFieldEnum]


  export const ContactsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    contactId: 'contactId'
  };

  export type ContactsScalarFieldEnum = (typeof ContactsScalarFieldEnum)[keyof typeof ContactsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    username?: StringFilter<"Users"> | string
    salt?: StringFilter<"Users"> | string
    hash?: StringFilter<"Users"> | string
    profile?: StringNullableFilter<"Users"> | string | null
    bio?: StringNullableFilter<"Users"> | string | null
    senderMessages?: MessagesListRelationFilter
    receiverMessages?: MessagesListRelationFilter
    Members?: GroupMembersListRelationFilter
    owner?: ContactsListRelationFilter
    contacts?: ContactsListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    profile?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    senderMessages?: MessagesOrderByRelationAggregateInput
    receiverMessages?: MessagesOrderByRelationAggregateInput
    Members?: GroupMembersOrderByRelationAggregateInput
    owner?: ContactsOrderByRelationAggregateInput
    contacts?: ContactsOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    username?: StringFilter<"Users"> | string
    salt?: StringFilter<"Users"> | string
    hash?: StringFilter<"Users"> | string
    profile?: StringNullableFilter<"Users"> | string | null
    bio?: StringNullableFilter<"Users"> | string | null
    senderMessages?: MessagesListRelationFilter
    receiverMessages?: MessagesListRelationFilter
    Members?: GroupMembersListRelationFilter
    owner?: ContactsListRelationFilter
    contacts?: ContactsListRelationFilter
  }, "id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    profile?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    username?: StringWithAggregatesFilter<"Users"> | string
    salt?: StringWithAggregatesFilter<"Users"> | string
    hash?: StringWithAggregatesFilter<"Users"> | string
    profile?: StringNullableWithAggregatesFilter<"Users"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type MessagesWhereInput = {
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    id?: StringFilter<"Messages"> | string
    message?: StringNullableFilter<"Messages"> | string | null
    imageURL?: StringNullableFilter<"Messages"> | string | null
    senderId?: StringFilter<"Messages"> | string
    receiverId?: StringNullableFilter<"Messages"> | string | null
    time?: DateTimeFilter<"Messages"> | Date | string
    groupId?: StringNullableFilter<"Messages"> | string | null
    sender?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    receiver?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }

  export type MessagesOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrderInput | SortOrder
    imageURL?: SortOrderInput | SortOrder
    senderId?: SortOrder
    receiverId?: SortOrderInput | SortOrder
    time?: SortOrder
    groupId?: SortOrderInput | SortOrder
    sender?: UsersOrderByWithRelationInput
    receiver?: UsersOrderByWithRelationInput
    group?: GroupOrderByWithRelationInput
  }

  export type MessagesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessagesWhereInput | MessagesWhereInput[]
    OR?: MessagesWhereInput[]
    NOT?: MessagesWhereInput | MessagesWhereInput[]
    message?: StringNullableFilter<"Messages"> | string | null
    imageURL?: StringNullableFilter<"Messages"> | string | null
    senderId?: StringFilter<"Messages"> | string
    receiverId?: StringNullableFilter<"Messages"> | string | null
    time?: DateTimeFilter<"Messages"> | Date | string
    groupId?: StringNullableFilter<"Messages"> | string | null
    sender?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    receiver?: XOR<UsersNullableScalarRelationFilter, UsersWhereInput> | null
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
  }, "id">

  export type MessagesOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrderInput | SortOrder
    imageURL?: SortOrderInput | SortOrder
    senderId?: SortOrder
    receiverId?: SortOrderInput | SortOrder
    time?: SortOrder
    groupId?: SortOrderInput | SortOrder
    _count?: MessagesCountOrderByAggregateInput
    _max?: MessagesMaxOrderByAggregateInput
    _min?: MessagesMinOrderByAggregateInput
  }

  export type MessagesScalarWhereWithAggregatesInput = {
    AND?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    OR?: MessagesScalarWhereWithAggregatesInput[]
    NOT?: MessagesScalarWhereWithAggregatesInput | MessagesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Messages"> | string
    message?: StringNullableWithAggregatesFilter<"Messages"> | string | null
    imageURL?: StringNullableWithAggregatesFilter<"Messages"> | string | null
    senderId?: StringWithAggregatesFilter<"Messages"> | string
    receiverId?: StringNullableWithAggregatesFilter<"Messages"> | string | null
    time?: DateTimeWithAggregatesFilter<"Messages"> | Date | string
    groupId?: StringNullableWithAggregatesFilter<"Messages"> | string | null
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    profile?: StringNullableFilter<"Group"> | string | null
    Messages?: MessagesListRelationFilter
    Members?: GroupMembersListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    profile?: SortOrderInput | SortOrder
    Messages?: MessagesOrderByRelationAggregateInput
    Members?: GroupMembersOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    profile?: StringNullableFilter<"Group"> | string | null
    Messages?: MessagesListRelationFilter
    Members?: GroupMembersListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    profile?: SortOrderInput | SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    profile?: StringNullableWithAggregatesFilter<"Group"> | string | null
  }

  export type GroupMembersWhereInput = {
    AND?: GroupMembersWhereInput | GroupMembersWhereInput[]
    OR?: GroupMembersWhereInput[]
    NOT?: GroupMembersWhereInput | GroupMembersWhereInput[]
    id?: StringFilter<"GroupMembers"> | string
    groupId?: StringFilter<"GroupMembers"> | string
    userId?: StringFilter<"GroupMembers"> | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type GroupMembersOrderByWithRelationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    group?: GroupOrderByWithRelationInput
    user?: UsersOrderByWithRelationInput
  }

  export type GroupMembersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupMembersWhereInput | GroupMembersWhereInput[]
    OR?: GroupMembersWhereInput[]
    NOT?: GroupMembersWhereInput | GroupMembersWhereInput[]
    groupId?: StringFilter<"GroupMembers"> | string
    userId?: StringFilter<"GroupMembers"> | string
    group?: XOR<GroupScalarRelationFilter, GroupWhereInput>
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type GroupMembersOrderByWithAggregationInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
    _count?: GroupMembersCountOrderByAggregateInput
    _max?: GroupMembersMaxOrderByAggregateInput
    _min?: GroupMembersMinOrderByAggregateInput
  }

  export type GroupMembersScalarWhereWithAggregatesInput = {
    AND?: GroupMembersScalarWhereWithAggregatesInput | GroupMembersScalarWhereWithAggregatesInput[]
    OR?: GroupMembersScalarWhereWithAggregatesInput[]
    NOT?: GroupMembersScalarWhereWithAggregatesInput | GroupMembersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GroupMembers"> | string
    groupId?: StringWithAggregatesFilter<"GroupMembers"> | string
    userId?: StringWithAggregatesFilter<"GroupMembers"> | string
  }

  export type ContactsWhereInput = {
    AND?: ContactsWhereInput | ContactsWhereInput[]
    OR?: ContactsWhereInput[]
    NOT?: ContactsWhereInput | ContactsWhereInput[]
    id?: StringFilter<"Contacts"> | string
    userId?: StringFilter<"Contacts"> | string
    contactId?: StringFilter<"Contacts"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    contact?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type ContactsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    contactId?: SortOrder
    user?: UsersOrderByWithRelationInput
    contact?: UsersOrderByWithRelationInput
  }

  export type ContactsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactsWhereInput | ContactsWhereInput[]
    OR?: ContactsWhereInput[]
    NOT?: ContactsWhereInput | ContactsWhereInput[]
    userId?: StringFilter<"Contacts"> | string
    contactId?: StringFilter<"Contacts"> | string
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    contact?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type ContactsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    contactId?: SortOrder
    _count?: ContactsCountOrderByAggregateInput
    _max?: ContactsMaxOrderByAggregateInput
    _min?: ContactsMinOrderByAggregateInput
  }

  export type ContactsScalarWhereWithAggregatesInput = {
    AND?: ContactsScalarWhereWithAggregatesInput | ContactsScalarWhereWithAggregatesInput[]
    OR?: ContactsScalarWhereWithAggregatesInput[]
    NOT?: ContactsScalarWhereWithAggregatesInput | ContactsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contacts"> | string
    userId?: StringWithAggregatesFilter<"Contacts"> | string
    contactId?: StringWithAggregatesFilter<"Contacts"> | string
  }

  export type UsersCreateInput = {
    id?: string
    username: string
    salt: string
    hash: string
    profile?: string | null
    bio?: string | null
    senderMessages?: MessagesCreateNestedManyWithoutSenderInput
    receiverMessages?: MessagesCreateNestedManyWithoutReceiverInput
    Members?: GroupMembersCreateNestedManyWithoutUserInput
    owner?: ContactsCreateNestedManyWithoutUserInput
    contacts?: ContactsCreateNestedManyWithoutContactInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    username: string
    salt: string
    hash: string
    profile?: string | null
    bio?: string | null
    senderMessages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    receiverMessages?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    Members?: GroupMembersUncheckedCreateNestedManyWithoutUserInput
    owner?: ContactsUncheckedCreateNestedManyWithoutUserInput
    contacts?: ContactsUncheckedCreateNestedManyWithoutContactInput
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    senderMessages?: MessagesUpdateManyWithoutSenderNestedInput
    receiverMessages?: MessagesUpdateManyWithoutReceiverNestedInput
    Members?: GroupMembersUpdateManyWithoutUserNestedInput
    owner?: ContactsUpdateManyWithoutUserNestedInput
    contacts?: ContactsUpdateManyWithoutContactNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    senderMessages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    receiverMessages?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    Members?: GroupMembersUncheckedUpdateManyWithoutUserNestedInput
    owner?: ContactsUncheckedUpdateManyWithoutUserNestedInput
    contacts?: ContactsUncheckedUpdateManyWithoutContactNestedInput
  }

  export type UsersCreateManyInput = {
    id?: string
    username: string
    salt: string
    hash: string
    profile?: string | null
    bio?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessagesCreateInput = {
    id?: string
    message?: string | null
    imageURL?: string | null
    time?: Date | string
    sender: UsersCreateNestedOneWithoutSenderMessagesInput
    receiver?: UsersCreateNestedOneWithoutReceiverMessagesInput
    group?: GroupCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateInput = {
    id?: string
    message?: string | null
    imageURL?: string | null
    senderId: string
    receiverId?: string | null
    time?: Date | string
    groupId?: string | null
  }

  export type MessagesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UsersUpdateOneRequiredWithoutSenderMessagesNestedInput
    receiver?: UsersUpdateOneWithoutReceiverMessagesNestedInput
    group?: GroupUpdateOneWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessagesCreateManyInput = {
    id?: string
    message?: string | null
    imageURL?: string | null
    senderId: string
    receiverId?: string | null
    time?: Date | string
    groupId?: string | null
  }

  export type MessagesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    profile?: string | null
    Messages?: MessagesCreateNestedManyWithoutGroupInput
    Members?: GroupMembersCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    profile?: string | null
    Messages?: MessagesUncheckedCreateNestedManyWithoutGroupInput
    Members?: GroupMembersUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    Messages?: MessagesUpdateManyWithoutGroupNestedInput
    Members?: GroupMembersUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    Messages?: MessagesUncheckedUpdateManyWithoutGroupNestedInput
    Members?: GroupMembersUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    profile?: string | null
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupMembersCreateInput = {
    id?: string
    group: GroupCreateNestedOneWithoutMembersInput
    user: UsersCreateNestedOneWithoutMembersInput
  }

  export type GroupMembersUncheckedCreateInput = {
    id?: string
    groupId: string
    userId: string
  }

  export type GroupMembersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
    user?: UsersUpdateOneRequiredWithoutMembersNestedInput
  }

  export type GroupMembersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMembersCreateManyInput = {
    id?: string
    groupId: string
    userId: string
  }

  export type GroupMembersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMembersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactsCreateInput = {
    id?: string
    user: UsersCreateNestedOneWithoutOwnerInput
    contact: UsersCreateNestedOneWithoutContactsInput
  }

  export type ContactsUncheckedCreateInput = {
    id?: string
    userId: string
    contactId: string
  }

  export type ContactsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutOwnerNestedInput
    contact?: UsersUpdateOneRequiredWithoutContactsNestedInput
  }

  export type ContactsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactsCreateManyInput = {
    id?: string
    userId: string
    contactId: string
  }

  export type ContactsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ContactsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MessagesListRelationFilter = {
    every?: MessagesWhereInput
    some?: MessagesWhereInput
    none?: MessagesWhereInput
  }

  export type GroupMembersListRelationFilter = {
    every?: GroupMembersWhereInput
    some?: GroupMembersWhereInput
    none?: GroupMembersWhereInput
  }

  export type ContactsListRelationFilter = {
    every?: ContactsWhereInput
    some?: ContactsWhereInput
    none?: ContactsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MessagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupMembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    profile?: SortOrder
    bio?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    profile?: SortOrder
    bio?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    salt?: SortOrder
    hash?: SortOrder
    profile?: SortOrder
    bio?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type UsersNullableScalarRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type GroupNullableScalarRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type MessagesCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    imageURL?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    time?: SortOrder
    groupId?: SortOrder
  }

  export type MessagesMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    imageURL?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    time?: SortOrder
    groupId?: SortOrder
  }

  export type MessagesMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    imageURL?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    time?: SortOrder
    groupId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profile?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profile?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profile?: SortOrder
  }

  export type GroupScalarRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type GroupMembersCountOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
  }

  export type GroupMembersMaxOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
  }

  export type GroupMembersMinOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
    userId?: SortOrder
  }

  export type ContactsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contactId?: SortOrder
  }

  export type ContactsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contactId?: SortOrder
  }

  export type ContactsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    contactId?: SortOrder
  }

  export type MessagesCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type MessagesCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessagesCreateWithoutReceiverInput, MessagesUncheckedCreateWithoutReceiverInput> | MessagesCreateWithoutReceiverInput[] | MessagesUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReceiverInput | MessagesCreateOrConnectWithoutReceiverInput[]
    createMany?: MessagesCreateManyReceiverInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type GroupMembersCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMembersCreateWithoutUserInput, GroupMembersUncheckedCreateWithoutUserInput> | GroupMembersCreateWithoutUserInput[] | GroupMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMembersCreateOrConnectWithoutUserInput | GroupMembersCreateOrConnectWithoutUserInput[]
    createMany?: GroupMembersCreateManyUserInputEnvelope
    connect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
  }

  export type ContactsCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactsCreateWithoutUserInput, ContactsUncheckedCreateWithoutUserInput> | ContactsCreateWithoutUserInput[] | ContactsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactsCreateOrConnectWithoutUserInput | ContactsCreateOrConnectWithoutUserInput[]
    createMany?: ContactsCreateManyUserInputEnvelope
    connect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
  }

  export type ContactsCreateNestedManyWithoutContactInput = {
    create?: XOR<ContactsCreateWithoutContactInput, ContactsUncheckedCreateWithoutContactInput> | ContactsCreateWithoutContactInput[] | ContactsUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ContactsCreateOrConnectWithoutContactInput | ContactsCreateOrConnectWithoutContactInput[]
    createMany?: ContactsCreateManyContactInputEnvelope
    connect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessagesCreateWithoutReceiverInput, MessagesUncheckedCreateWithoutReceiverInput> | MessagesCreateWithoutReceiverInput[] | MessagesUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReceiverInput | MessagesCreateOrConnectWithoutReceiverInput[]
    createMany?: MessagesCreateManyReceiverInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type GroupMembersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GroupMembersCreateWithoutUserInput, GroupMembersUncheckedCreateWithoutUserInput> | GroupMembersCreateWithoutUserInput[] | GroupMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMembersCreateOrConnectWithoutUserInput | GroupMembersCreateOrConnectWithoutUserInput[]
    createMany?: GroupMembersCreateManyUserInputEnvelope
    connect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
  }

  export type ContactsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactsCreateWithoutUserInput, ContactsUncheckedCreateWithoutUserInput> | ContactsCreateWithoutUserInput[] | ContactsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactsCreateOrConnectWithoutUserInput | ContactsCreateOrConnectWithoutUserInput[]
    createMany?: ContactsCreateManyUserInputEnvelope
    connect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
  }

  export type ContactsUncheckedCreateNestedManyWithoutContactInput = {
    create?: XOR<ContactsCreateWithoutContactInput, ContactsUncheckedCreateWithoutContactInput> | ContactsCreateWithoutContactInput[] | ContactsUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ContactsCreateOrConnectWithoutContactInput | ContactsCreateOrConnectWithoutContactInput[]
    createMany?: ContactsCreateManyContactInputEnvelope
    connect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MessagesUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutSenderInput | MessagesUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutSenderInput | MessagesUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutSenderInput | MessagesUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type MessagesUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessagesCreateWithoutReceiverInput, MessagesUncheckedCreateWithoutReceiverInput> | MessagesCreateWithoutReceiverInput[] | MessagesUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReceiverInput | MessagesCreateOrConnectWithoutReceiverInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutReceiverInput | MessagesUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessagesCreateManyReceiverInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutReceiverInput | MessagesUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutReceiverInput | MessagesUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type GroupMembersUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMembersCreateWithoutUserInput, GroupMembersUncheckedCreateWithoutUserInput> | GroupMembersCreateWithoutUserInput[] | GroupMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMembersCreateOrConnectWithoutUserInput | GroupMembersCreateOrConnectWithoutUserInput[]
    upsert?: GroupMembersUpsertWithWhereUniqueWithoutUserInput | GroupMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMembersCreateManyUserInputEnvelope
    set?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    disconnect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    delete?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    connect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    update?: GroupMembersUpdateWithWhereUniqueWithoutUserInput | GroupMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMembersUpdateManyWithWhereWithoutUserInput | GroupMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMembersScalarWhereInput | GroupMembersScalarWhereInput[]
  }

  export type ContactsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactsCreateWithoutUserInput, ContactsUncheckedCreateWithoutUserInput> | ContactsCreateWithoutUserInput[] | ContactsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactsCreateOrConnectWithoutUserInput | ContactsCreateOrConnectWithoutUserInput[]
    upsert?: ContactsUpsertWithWhereUniqueWithoutUserInput | ContactsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactsCreateManyUserInputEnvelope
    set?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    disconnect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    delete?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    connect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    update?: ContactsUpdateWithWhereUniqueWithoutUserInput | ContactsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactsUpdateManyWithWhereWithoutUserInput | ContactsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactsScalarWhereInput | ContactsScalarWhereInput[]
  }

  export type ContactsUpdateManyWithoutContactNestedInput = {
    create?: XOR<ContactsCreateWithoutContactInput, ContactsUncheckedCreateWithoutContactInput> | ContactsCreateWithoutContactInput[] | ContactsUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ContactsCreateOrConnectWithoutContactInput | ContactsCreateOrConnectWithoutContactInput[]
    upsert?: ContactsUpsertWithWhereUniqueWithoutContactInput | ContactsUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: ContactsCreateManyContactInputEnvelope
    set?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    disconnect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    delete?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    connect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    update?: ContactsUpdateWithWhereUniqueWithoutContactInput | ContactsUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: ContactsUpdateManyWithWhereWithoutContactInput | ContactsUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: ContactsScalarWhereInput | ContactsScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput> | MessagesCreateWithoutSenderInput[] | MessagesUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutSenderInput | MessagesCreateOrConnectWithoutSenderInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutSenderInput | MessagesUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessagesCreateManySenderInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutSenderInput | MessagesUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutSenderInput | MessagesUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessagesCreateWithoutReceiverInput, MessagesUncheckedCreateWithoutReceiverInput> | MessagesCreateWithoutReceiverInput[] | MessagesUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutReceiverInput | MessagesCreateOrConnectWithoutReceiverInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutReceiverInput | MessagesUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessagesCreateManyReceiverInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutReceiverInput | MessagesUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutReceiverInput | MessagesUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type GroupMembersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GroupMembersCreateWithoutUserInput, GroupMembersUncheckedCreateWithoutUserInput> | GroupMembersCreateWithoutUserInput[] | GroupMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GroupMembersCreateOrConnectWithoutUserInput | GroupMembersCreateOrConnectWithoutUserInput[]
    upsert?: GroupMembersUpsertWithWhereUniqueWithoutUserInput | GroupMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GroupMembersCreateManyUserInputEnvelope
    set?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    disconnect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    delete?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    connect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    update?: GroupMembersUpdateWithWhereUniqueWithoutUserInput | GroupMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GroupMembersUpdateManyWithWhereWithoutUserInput | GroupMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GroupMembersScalarWhereInput | GroupMembersScalarWhereInput[]
  }

  export type ContactsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactsCreateWithoutUserInput, ContactsUncheckedCreateWithoutUserInput> | ContactsCreateWithoutUserInput[] | ContactsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactsCreateOrConnectWithoutUserInput | ContactsCreateOrConnectWithoutUserInput[]
    upsert?: ContactsUpsertWithWhereUniqueWithoutUserInput | ContactsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactsCreateManyUserInputEnvelope
    set?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    disconnect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    delete?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    connect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    update?: ContactsUpdateWithWhereUniqueWithoutUserInput | ContactsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactsUpdateManyWithWhereWithoutUserInput | ContactsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactsScalarWhereInput | ContactsScalarWhereInput[]
  }

  export type ContactsUncheckedUpdateManyWithoutContactNestedInput = {
    create?: XOR<ContactsCreateWithoutContactInput, ContactsUncheckedCreateWithoutContactInput> | ContactsCreateWithoutContactInput[] | ContactsUncheckedCreateWithoutContactInput[]
    connectOrCreate?: ContactsCreateOrConnectWithoutContactInput | ContactsCreateOrConnectWithoutContactInput[]
    upsert?: ContactsUpsertWithWhereUniqueWithoutContactInput | ContactsUpsertWithWhereUniqueWithoutContactInput[]
    createMany?: ContactsCreateManyContactInputEnvelope
    set?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    disconnect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    delete?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    connect?: ContactsWhereUniqueInput | ContactsWhereUniqueInput[]
    update?: ContactsUpdateWithWhereUniqueWithoutContactInput | ContactsUpdateWithWhereUniqueWithoutContactInput[]
    updateMany?: ContactsUpdateManyWithWhereWithoutContactInput | ContactsUpdateManyWithWhereWithoutContactInput[]
    deleteMany?: ContactsScalarWhereInput | ContactsScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutSenderMessagesInput = {
    create?: XOR<UsersCreateWithoutSenderMessagesInput, UsersUncheckedCreateWithoutSenderMessagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSenderMessagesInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutReceiverMessagesInput = {
    create?: XOR<UsersCreateWithoutReceiverMessagesInput, UsersUncheckedCreateWithoutReceiverMessagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReceiverMessagesInput
    connect?: UsersWhereUniqueInput
  }

  export type GroupCreateNestedOneWithoutMessagesInput = {
    create?: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMessagesInput
    connect?: GroupWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsersUpdateOneRequiredWithoutSenderMessagesNestedInput = {
    create?: XOR<UsersCreateWithoutSenderMessagesInput, UsersUncheckedCreateWithoutSenderMessagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSenderMessagesInput
    upsert?: UsersUpsertWithoutSenderMessagesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutSenderMessagesInput, UsersUpdateWithoutSenderMessagesInput>, UsersUncheckedUpdateWithoutSenderMessagesInput>
  }

  export type UsersUpdateOneWithoutReceiverMessagesNestedInput = {
    create?: XOR<UsersCreateWithoutReceiverMessagesInput, UsersUncheckedCreateWithoutReceiverMessagesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutReceiverMessagesInput
    upsert?: UsersUpsertWithoutReceiverMessagesInput
    disconnect?: UsersWhereInput | boolean
    delete?: UsersWhereInput | boolean
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutReceiverMessagesInput, UsersUpdateWithoutReceiverMessagesInput>, UsersUncheckedUpdateWithoutReceiverMessagesInput>
  }

  export type GroupUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMessagesInput
    upsert?: GroupUpsertWithoutMessagesInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMessagesInput, GroupUpdateWithoutMessagesInput>, GroupUncheckedUpdateWithoutMessagesInput>
  }

  export type MessagesCreateNestedManyWithoutGroupInput = {
    create?: XOR<MessagesCreateWithoutGroupInput, MessagesUncheckedCreateWithoutGroupInput> | MessagesCreateWithoutGroupInput[] | MessagesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutGroupInput | MessagesCreateOrConnectWithoutGroupInput[]
    createMany?: MessagesCreateManyGroupInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type GroupMembersCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMembersCreateWithoutGroupInput, GroupMembersUncheckedCreateWithoutGroupInput> | GroupMembersCreateWithoutGroupInput[] | GroupMembersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMembersCreateOrConnectWithoutGroupInput | GroupMembersCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMembersCreateManyGroupInputEnvelope
    connect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
  }

  export type MessagesUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<MessagesCreateWithoutGroupInput, MessagesUncheckedCreateWithoutGroupInput> | MessagesCreateWithoutGroupInput[] | MessagesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutGroupInput | MessagesCreateOrConnectWithoutGroupInput[]
    createMany?: MessagesCreateManyGroupInputEnvelope
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
  }

  export type GroupMembersUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<GroupMembersCreateWithoutGroupInput, GroupMembersUncheckedCreateWithoutGroupInput> | GroupMembersCreateWithoutGroupInput[] | GroupMembersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMembersCreateOrConnectWithoutGroupInput | GroupMembersCreateOrConnectWithoutGroupInput[]
    createMany?: GroupMembersCreateManyGroupInputEnvelope
    connect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
  }

  export type MessagesUpdateManyWithoutGroupNestedInput = {
    create?: XOR<MessagesCreateWithoutGroupInput, MessagesUncheckedCreateWithoutGroupInput> | MessagesCreateWithoutGroupInput[] | MessagesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutGroupInput | MessagesCreateOrConnectWithoutGroupInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutGroupInput | MessagesUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: MessagesCreateManyGroupInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutGroupInput | MessagesUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutGroupInput | MessagesUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type GroupMembersUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMembersCreateWithoutGroupInput, GroupMembersUncheckedCreateWithoutGroupInput> | GroupMembersCreateWithoutGroupInput[] | GroupMembersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMembersCreateOrConnectWithoutGroupInput | GroupMembersCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMembersUpsertWithWhereUniqueWithoutGroupInput | GroupMembersUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMembersCreateManyGroupInputEnvelope
    set?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    disconnect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    delete?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    connect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    update?: GroupMembersUpdateWithWhereUniqueWithoutGroupInput | GroupMembersUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMembersUpdateManyWithWhereWithoutGroupInput | GroupMembersUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMembersScalarWhereInput | GroupMembersScalarWhereInput[]
  }

  export type MessagesUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<MessagesCreateWithoutGroupInput, MessagesUncheckedCreateWithoutGroupInput> | MessagesCreateWithoutGroupInput[] | MessagesUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: MessagesCreateOrConnectWithoutGroupInput | MessagesCreateOrConnectWithoutGroupInput[]
    upsert?: MessagesUpsertWithWhereUniqueWithoutGroupInput | MessagesUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: MessagesCreateManyGroupInputEnvelope
    set?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    disconnect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    delete?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    connect?: MessagesWhereUniqueInput | MessagesWhereUniqueInput[]
    update?: MessagesUpdateWithWhereUniqueWithoutGroupInput | MessagesUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: MessagesUpdateManyWithWhereWithoutGroupInput | MessagesUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
  }

  export type GroupMembersUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<GroupMembersCreateWithoutGroupInput, GroupMembersUncheckedCreateWithoutGroupInput> | GroupMembersCreateWithoutGroupInput[] | GroupMembersUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: GroupMembersCreateOrConnectWithoutGroupInput | GroupMembersCreateOrConnectWithoutGroupInput[]
    upsert?: GroupMembersUpsertWithWhereUniqueWithoutGroupInput | GroupMembersUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: GroupMembersCreateManyGroupInputEnvelope
    set?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    disconnect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    delete?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    connect?: GroupMembersWhereUniqueInput | GroupMembersWhereUniqueInput[]
    update?: GroupMembersUpdateWithWhereUniqueWithoutGroupInput | GroupMembersUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: GroupMembersUpdateManyWithWhereWithoutGroupInput | GroupMembersUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: GroupMembersScalarWhereInput | GroupMembersScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutMembersInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    connect?: GroupWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutMembersInput = {
    create?: XOR<UsersCreateWithoutMembersInput, UsersUncheckedCreateWithoutMembersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMembersInput
    connect?: UsersWhereUniqueInput
  }

  export type GroupUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    connectOrCreate?: GroupCreateOrConnectWithoutMembersInput
    upsert?: GroupUpsertWithoutMembersInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutMembersInput, GroupUpdateWithoutMembersInput>, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type UsersUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<UsersCreateWithoutMembersInput, UsersUncheckedCreateWithoutMembersInput>
    connectOrCreate?: UsersCreateOrConnectWithoutMembersInput
    upsert?: UsersUpsertWithoutMembersInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutMembersInput, UsersUpdateWithoutMembersInput>, UsersUncheckedUpdateWithoutMembersInput>
  }

  export type UsersCreateNestedOneWithoutOwnerInput = {
    create?: XOR<UsersCreateWithoutOwnerInput, UsersUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOwnerInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutContactsInput = {
    create?: XOR<UsersCreateWithoutContactsInput, UsersUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutContactsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutOwnerNestedInput = {
    create?: XOR<UsersCreateWithoutOwnerInput, UsersUncheckedCreateWithoutOwnerInput>
    connectOrCreate?: UsersCreateOrConnectWithoutOwnerInput
    upsert?: UsersUpsertWithoutOwnerInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutOwnerInput, UsersUpdateWithoutOwnerInput>, UsersUncheckedUpdateWithoutOwnerInput>
  }

  export type UsersUpdateOneRequiredWithoutContactsNestedInput = {
    create?: XOR<UsersCreateWithoutContactsInput, UsersUncheckedCreateWithoutContactsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutContactsInput
    upsert?: UsersUpsertWithoutContactsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutContactsInput, UsersUpdateWithoutContactsInput>, UsersUncheckedUpdateWithoutContactsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type MessagesCreateWithoutSenderInput = {
    id?: string
    message?: string | null
    imageURL?: string | null
    time?: Date | string
    receiver?: UsersCreateNestedOneWithoutReceiverMessagesInput
    group?: GroupCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateWithoutSenderInput = {
    id?: string
    message?: string | null
    imageURL?: string | null
    receiverId?: string | null
    time?: Date | string
    groupId?: string | null
  }

  export type MessagesCreateOrConnectWithoutSenderInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput>
  }

  export type MessagesCreateManySenderInputEnvelope = {
    data: MessagesCreateManySenderInput | MessagesCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessagesCreateWithoutReceiverInput = {
    id?: string
    message?: string | null
    imageURL?: string | null
    time?: Date | string
    sender: UsersCreateNestedOneWithoutSenderMessagesInput
    group?: GroupCreateNestedOneWithoutMessagesInput
  }

  export type MessagesUncheckedCreateWithoutReceiverInput = {
    id?: string
    message?: string | null
    imageURL?: string | null
    senderId: string
    time?: Date | string
    groupId?: string | null
  }

  export type MessagesCreateOrConnectWithoutReceiverInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutReceiverInput, MessagesUncheckedCreateWithoutReceiverInput>
  }

  export type MessagesCreateManyReceiverInputEnvelope = {
    data: MessagesCreateManyReceiverInput | MessagesCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type GroupMembersCreateWithoutUserInput = {
    id?: string
    group: GroupCreateNestedOneWithoutMembersInput
  }

  export type GroupMembersUncheckedCreateWithoutUserInput = {
    id?: string
    groupId: string
  }

  export type GroupMembersCreateOrConnectWithoutUserInput = {
    where: GroupMembersWhereUniqueInput
    create: XOR<GroupMembersCreateWithoutUserInput, GroupMembersUncheckedCreateWithoutUserInput>
  }

  export type GroupMembersCreateManyUserInputEnvelope = {
    data: GroupMembersCreateManyUserInput | GroupMembersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContactsCreateWithoutUserInput = {
    id?: string
    contact: UsersCreateNestedOneWithoutContactsInput
  }

  export type ContactsUncheckedCreateWithoutUserInput = {
    id?: string
    contactId: string
  }

  export type ContactsCreateOrConnectWithoutUserInput = {
    where: ContactsWhereUniqueInput
    create: XOR<ContactsCreateWithoutUserInput, ContactsUncheckedCreateWithoutUserInput>
  }

  export type ContactsCreateManyUserInputEnvelope = {
    data: ContactsCreateManyUserInput | ContactsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContactsCreateWithoutContactInput = {
    id?: string
    user: UsersCreateNestedOneWithoutOwnerInput
  }

  export type ContactsUncheckedCreateWithoutContactInput = {
    id?: string
    userId: string
  }

  export type ContactsCreateOrConnectWithoutContactInput = {
    where: ContactsWhereUniqueInput
    create: XOR<ContactsCreateWithoutContactInput, ContactsUncheckedCreateWithoutContactInput>
  }

  export type ContactsCreateManyContactInputEnvelope = {
    data: ContactsCreateManyContactInput | ContactsCreateManyContactInput[]
    skipDuplicates?: boolean
  }

  export type MessagesUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutSenderInput, MessagesUncheckedUpdateWithoutSenderInput>
    create: XOR<MessagesCreateWithoutSenderInput, MessagesUncheckedCreateWithoutSenderInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutSenderInput, MessagesUncheckedUpdateWithoutSenderInput>
  }

  export type MessagesUpdateManyWithWhereWithoutSenderInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessagesScalarWhereInput = {
    AND?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    OR?: MessagesScalarWhereInput[]
    NOT?: MessagesScalarWhereInput | MessagesScalarWhereInput[]
    id?: StringFilter<"Messages"> | string
    message?: StringNullableFilter<"Messages"> | string | null
    imageURL?: StringNullableFilter<"Messages"> | string | null
    senderId?: StringFilter<"Messages"> | string
    receiverId?: StringNullableFilter<"Messages"> | string | null
    time?: DateTimeFilter<"Messages"> | Date | string
    groupId?: StringNullableFilter<"Messages"> | string | null
  }

  export type MessagesUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutReceiverInput, MessagesUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessagesCreateWithoutReceiverInput, MessagesUncheckedCreateWithoutReceiverInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutReceiverInput, MessagesUncheckedUpdateWithoutReceiverInput>
  }

  export type MessagesUpdateManyWithWhereWithoutReceiverInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutReceiverInput>
  }

  export type GroupMembersUpsertWithWhereUniqueWithoutUserInput = {
    where: GroupMembersWhereUniqueInput
    update: XOR<GroupMembersUpdateWithoutUserInput, GroupMembersUncheckedUpdateWithoutUserInput>
    create: XOR<GroupMembersCreateWithoutUserInput, GroupMembersUncheckedCreateWithoutUserInput>
  }

  export type GroupMembersUpdateWithWhereUniqueWithoutUserInput = {
    where: GroupMembersWhereUniqueInput
    data: XOR<GroupMembersUpdateWithoutUserInput, GroupMembersUncheckedUpdateWithoutUserInput>
  }

  export type GroupMembersUpdateManyWithWhereWithoutUserInput = {
    where: GroupMembersScalarWhereInput
    data: XOR<GroupMembersUpdateManyMutationInput, GroupMembersUncheckedUpdateManyWithoutUserInput>
  }

  export type GroupMembersScalarWhereInput = {
    AND?: GroupMembersScalarWhereInput | GroupMembersScalarWhereInput[]
    OR?: GroupMembersScalarWhereInput[]
    NOT?: GroupMembersScalarWhereInput | GroupMembersScalarWhereInput[]
    id?: StringFilter<"GroupMembers"> | string
    groupId?: StringFilter<"GroupMembers"> | string
    userId?: StringFilter<"GroupMembers"> | string
  }

  export type ContactsUpsertWithWhereUniqueWithoutUserInput = {
    where: ContactsWhereUniqueInput
    update: XOR<ContactsUpdateWithoutUserInput, ContactsUncheckedUpdateWithoutUserInput>
    create: XOR<ContactsCreateWithoutUserInput, ContactsUncheckedCreateWithoutUserInput>
  }

  export type ContactsUpdateWithWhereUniqueWithoutUserInput = {
    where: ContactsWhereUniqueInput
    data: XOR<ContactsUpdateWithoutUserInput, ContactsUncheckedUpdateWithoutUserInput>
  }

  export type ContactsUpdateManyWithWhereWithoutUserInput = {
    where: ContactsScalarWhereInput
    data: XOR<ContactsUpdateManyMutationInput, ContactsUncheckedUpdateManyWithoutUserInput>
  }

  export type ContactsScalarWhereInput = {
    AND?: ContactsScalarWhereInput | ContactsScalarWhereInput[]
    OR?: ContactsScalarWhereInput[]
    NOT?: ContactsScalarWhereInput | ContactsScalarWhereInput[]
    id?: StringFilter<"Contacts"> | string
    userId?: StringFilter<"Contacts"> | string
    contactId?: StringFilter<"Contacts"> | string
  }

  export type ContactsUpsertWithWhereUniqueWithoutContactInput = {
    where: ContactsWhereUniqueInput
    update: XOR<ContactsUpdateWithoutContactInput, ContactsUncheckedUpdateWithoutContactInput>
    create: XOR<ContactsCreateWithoutContactInput, ContactsUncheckedCreateWithoutContactInput>
  }

  export type ContactsUpdateWithWhereUniqueWithoutContactInput = {
    where: ContactsWhereUniqueInput
    data: XOR<ContactsUpdateWithoutContactInput, ContactsUncheckedUpdateWithoutContactInput>
  }

  export type ContactsUpdateManyWithWhereWithoutContactInput = {
    where: ContactsScalarWhereInput
    data: XOR<ContactsUpdateManyMutationInput, ContactsUncheckedUpdateManyWithoutContactInput>
  }

  export type UsersCreateWithoutSenderMessagesInput = {
    id?: string
    username: string
    salt: string
    hash: string
    profile?: string | null
    bio?: string | null
    receiverMessages?: MessagesCreateNestedManyWithoutReceiverInput
    Members?: GroupMembersCreateNestedManyWithoutUserInput
    owner?: ContactsCreateNestedManyWithoutUserInput
    contacts?: ContactsCreateNestedManyWithoutContactInput
  }

  export type UsersUncheckedCreateWithoutSenderMessagesInput = {
    id?: string
    username: string
    salt: string
    hash: string
    profile?: string | null
    bio?: string | null
    receiverMessages?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    Members?: GroupMembersUncheckedCreateNestedManyWithoutUserInput
    owner?: ContactsUncheckedCreateNestedManyWithoutUserInput
    contacts?: ContactsUncheckedCreateNestedManyWithoutContactInput
  }

  export type UsersCreateOrConnectWithoutSenderMessagesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSenderMessagesInput, UsersUncheckedCreateWithoutSenderMessagesInput>
  }

  export type UsersCreateWithoutReceiverMessagesInput = {
    id?: string
    username: string
    salt: string
    hash: string
    profile?: string | null
    bio?: string | null
    senderMessages?: MessagesCreateNestedManyWithoutSenderInput
    Members?: GroupMembersCreateNestedManyWithoutUserInput
    owner?: ContactsCreateNestedManyWithoutUserInput
    contacts?: ContactsCreateNestedManyWithoutContactInput
  }

  export type UsersUncheckedCreateWithoutReceiverMessagesInput = {
    id?: string
    username: string
    salt: string
    hash: string
    profile?: string | null
    bio?: string | null
    senderMessages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    Members?: GroupMembersUncheckedCreateNestedManyWithoutUserInput
    owner?: ContactsUncheckedCreateNestedManyWithoutUserInput
    contacts?: ContactsUncheckedCreateNestedManyWithoutContactInput
  }

  export type UsersCreateOrConnectWithoutReceiverMessagesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutReceiverMessagesInput, UsersUncheckedCreateWithoutReceiverMessagesInput>
  }

  export type GroupCreateWithoutMessagesInput = {
    id?: string
    name: string
    profile?: string | null
    Members?: GroupMembersCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutMessagesInput = {
    id?: string
    name: string
    profile?: string | null
    Members?: GroupMembersUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMessagesInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
  }

  export type UsersUpsertWithoutSenderMessagesInput = {
    update: XOR<UsersUpdateWithoutSenderMessagesInput, UsersUncheckedUpdateWithoutSenderMessagesInput>
    create: XOR<UsersCreateWithoutSenderMessagesInput, UsersUncheckedCreateWithoutSenderMessagesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutSenderMessagesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutSenderMessagesInput, UsersUncheckedUpdateWithoutSenderMessagesInput>
  }

  export type UsersUpdateWithoutSenderMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    receiverMessages?: MessagesUpdateManyWithoutReceiverNestedInput
    Members?: GroupMembersUpdateManyWithoutUserNestedInput
    owner?: ContactsUpdateManyWithoutUserNestedInput
    contacts?: ContactsUpdateManyWithoutContactNestedInput
  }

  export type UsersUncheckedUpdateWithoutSenderMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    receiverMessages?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    Members?: GroupMembersUncheckedUpdateManyWithoutUserNestedInput
    owner?: ContactsUncheckedUpdateManyWithoutUserNestedInput
    contacts?: ContactsUncheckedUpdateManyWithoutContactNestedInput
  }

  export type UsersUpsertWithoutReceiverMessagesInput = {
    update: XOR<UsersUpdateWithoutReceiverMessagesInput, UsersUncheckedUpdateWithoutReceiverMessagesInput>
    create: XOR<UsersCreateWithoutReceiverMessagesInput, UsersUncheckedCreateWithoutReceiverMessagesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutReceiverMessagesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutReceiverMessagesInput, UsersUncheckedUpdateWithoutReceiverMessagesInput>
  }

  export type UsersUpdateWithoutReceiverMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    senderMessages?: MessagesUpdateManyWithoutSenderNestedInput
    Members?: GroupMembersUpdateManyWithoutUserNestedInput
    owner?: ContactsUpdateManyWithoutUserNestedInput
    contacts?: ContactsUpdateManyWithoutContactNestedInput
  }

  export type UsersUncheckedUpdateWithoutReceiverMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    senderMessages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    Members?: GroupMembersUncheckedUpdateManyWithoutUserNestedInput
    owner?: ContactsUncheckedUpdateManyWithoutUserNestedInput
    contacts?: ContactsUncheckedUpdateManyWithoutContactNestedInput
  }

  export type GroupUpsertWithoutMessagesInput = {
    update: XOR<GroupUpdateWithoutMessagesInput, GroupUncheckedUpdateWithoutMessagesInput>
    create: XOR<GroupCreateWithoutMessagesInput, GroupUncheckedCreateWithoutMessagesInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMessagesInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMessagesInput, GroupUncheckedUpdateWithoutMessagesInput>
  }

  export type GroupUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    Members?: GroupMembersUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    Members?: GroupMembersUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type MessagesCreateWithoutGroupInput = {
    id?: string
    message?: string | null
    imageURL?: string | null
    time?: Date | string
    sender: UsersCreateNestedOneWithoutSenderMessagesInput
    receiver?: UsersCreateNestedOneWithoutReceiverMessagesInput
  }

  export type MessagesUncheckedCreateWithoutGroupInput = {
    id?: string
    message?: string | null
    imageURL?: string | null
    senderId: string
    receiverId?: string | null
    time?: Date | string
  }

  export type MessagesCreateOrConnectWithoutGroupInput = {
    where: MessagesWhereUniqueInput
    create: XOR<MessagesCreateWithoutGroupInput, MessagesUncheckedCreateWithoutGroupInput>
  }

  export type MessagesCreateManyGroupInputEnvelope = {
    data: MessagesCreateManyGroupInput | MessagesCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type GroupMembersCreateWithoutGroupInput = {
    id?: string
    user: UsersCreateNestedOneWithoutMembersInput
  }

  export type GroupMembersUncheckedCreateWithoutGroupInput = {
    id?: string
    userId: string
  }

  export type GroupMembersCreateOrConnectWithoutGroupInput = {
    where: GroupMembersWhereUniqueInput
    create: XOR<GroupMembersCreateWithoutGroupInput, GroupMembersUncheckedCreateWithoutGroupInput>
  }

  export type GroupMembersCreateManyGroupInputEnvelope = {
    data: GroupMembersCreateManyGroupInput | GroupMembersCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type MessagesUpsertWithWhereUniqueWithoutGroupInput = {
    where: MessagesWhereUniqueInput
    update: XOR<MessagesUpdateWithoutGroupInput, MessagesUncheckedUpdateWithoutGroupInput>
    create: XOR<MessagesCreateWithoutGroupInput, MessagesUncheckedCreateWithoutGroupInput>
  }

  export type MessagesUpdateWithWhereUniqueWithoutGroupInput = {
    where: MessagesWhereUniqueInput
    data: XOR<MessagesUpdateWithoutGroupInput, MessagesUncheckedUpdateWithoutGroupInput>
  }

  export type MessagesUpdateManyWithWhereWithoutGroupInput = {
    where: MessagesScalarWhereInput
    data: XOR<MessagesUpdateManyMutationInput, MessagesUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupMembersUpsertWithWhereUniqueWithoutGroupInput = {
    where: GroupMembersWhereUniqueInput
    update: XOR<GroupMembersUpdateWithoutGroupInput, GroupMembersUncheckedUpdateWithoutGroupInput>
    create: XOR<GroupMembersCreateWithoutGroupInput, GroupMembersUncheckedCreateWithoutGroupInput>
  }

  export type GroupMembersUpdateWithWhereUniqueWithoutGroupInput = {
    where: GroupMembersWhereUniqueInput
    data: XOR<GroupMembersUpdateWithoutGroupInput, GroupMembersUncheckedUpdateWithoutGroupInput>
  }

  export type GroupMembersUpdateManyWithWhereWithoutGroupInput = {
    where: GroupMembersScalarWhereInput
    data: XOR<GroupMembersUpdateManyMutationInput, GroupMembersUncheckedUpdateManyWithoutGroupInput>
  }

  export type GroupCreateWithoutMembersInput = {
    id?: string
    name: string
    profile?: string | null
    Messages?: MessagesCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    profile?: string | null
    Messages?: MessagesUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutMembersInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
  }

  export type UsersCreateWithoutMembersInput = {
    id?: string
    username: string
    salt: string
    hash: string
    profile?: string | null
    bio?: string | null
    senderMessages?: MessagesCreateNestedManyWithoutSenderInput
    receiverMessages?: MessagesCreateNestedManyWithoutReceiverInput
    owner?: ContactsCreateNestedManyWithoutUserInput
    contacts?: ContactsCreateNestedManyWithoutContactInput
  }

  export type UsersUncheckedCreateWithoutMembersInput = {
    id?: string
    username: string
    salt: string
    hash: string
    profile?: string | null
    bio?: string | null
    senderMessages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    receiverMessages?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    owner?: ContactsUncheckedCreateNestedManyWithoutUserInput
    contacts?: ContactsUncheckedCreateNestedManyWithoutContactInput
  }

  export type UsersCreateOrConnectWithoutMembersInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutMembersInput, UsersUncheckedCreateWithoutMembersInput>
  }

  export type GroupUpsertWithoutMembersInput = {
    update: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
    create: XOR<GroupCreateWithoutMembersInput, GroupUncheckedCreateWithoutMembersInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutMembersInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutMembersInput, GroupUncheckedUpdateWithoutMembersInput>
  }

  export type GroupUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    Messages?: MessagesUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    Messages?: MessagesUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type UsersUpsertWithoutMembersInput = {
    update: XOR<UsersUpdateWithoutMembersInput, UsersUncheckedUpdateWithoutMembersInput>
    create: XOR<UsersCreateWithoutMembersInput, UsersUncheckedCreateWithoutMembersInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutMembersInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutMembersInput, UsersUncheckedUpdateWithoutMembersInput>
  }

  export type UsersUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    senderMessages?: MessagesUpdateManyWithoutSenderNestedInput
    receiverMessages?: MessagesUpdateManyWithoutReceiverNestedInput
    owner?: ContactsUpdateManyWithoutUserNestedInput
    contacts?: ContactsUpdateManyWithoutContactNestedInput
  }

  export type UsersUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    senderMessages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    receiverMessages?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    owner?: ContactsUncheckedUpdateManyWithoutUserNestedInput
    contacts?: ContactsUncheckedUpdateManyWithoutContactNestedInput
  }

  export type UsersCreateWithoutOwnerInput = {
    id?: string
    username: string
    salt: string
    hash: string
    profile?: string | null
    bio?: string | null
    senderMessages?: MessagesCreateNestedManyWithoutSenderInput
    receiverMessages?: MessagesCreateNestedManyWithoutReceiverInput
    Members?: GroupMembersCreateNestedManyWithoutUserInput
    contacts?: ContactsCreateNestedManyWithoutContactInput
  }

  export type UsersUncheckedCreateWithoutOwnerInput = {
    id?: string
    username: string
    salt: string
    hash: string
    profile?: string | null
    bio?: string | null
    senderMessages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    receiverMessages?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    Members?: GroupMembersUncheckedCreateNestedManyWithoutUserInput
    contacts?: ContactsUncheckedCreateNestedManyWithoutContactInput
  }

  export type UsersCreateOrConnectWithoutOwnerInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutOwnerInput, UsersUncheckedCreateWithoutOwnerInput>
  }

  export type UsersCreateWithoutContactsInput = {
    id?: string
    username: string
    salt: string
    hash: string
    profile?: string | null
    bio?: string | null
    senderMessages?: MessagesCreateNestedManyWithoutSenderInput
    receiverMessages?: MessagesCreateNestedManyWithoutReceiverInput
    Members?: GroupMembersCreateNestedManyWithoutUserInput
    owner?: ContactsCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateWithoutContactsInput = {
    id?: string
    username: string
    salt: string
    hash: string
    profile?: string | null
    bio?: string | null
    senderMessages?: MessagesUncheckedCreateNestedManyWithoutSenderInput
    receiverMessages?: MessagesUncheckedCreateNestedManyWithoutReceiverInput
    Members?: GroupMembersUncheckedCreateNestedManyWithoutUserInput
    owner?: ContactsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersCreateOrConnectWithoutContactsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutContactsInput, UsersUncheckedCreateWithoutContactsInput>
  }

  export type UsersUpsertWithoutOwnerInput = {
    update: XOR<UsersUpdateWithoutOwnerInput, UsersUncheckedUpdateWithoutOwnerInput>
    create: XOR<UsersCreateWithoutOwnerInput, UsersUncheckedCreateWithoutOwnerInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutOwnerInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutOwnerInput, UsersUncheckedUpdateWithoutOwnerInput>
  }

  export type UsersUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    senderMessages?: MessagesUpdateManyWithoutSenderNestedInput
    receiverMessages?: MessagesUpdateManyWithoutReceiverNestedInput
    Members?: GroupMembersUpdateManyWithoutUserNestedInput
    contacts?: ContactsUpdateManyWithoutContactNestedInput
  }

  export type UsersUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    senderMessages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    receiverMessages?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    Members?: GroupMembersUncheckedUpdateManyWithoutUserNestedInput
    contacts?: ContactsUncheckedUpdateManyWithoutContactNestedInput
  }

  export type UsersUpsertWithoutContactsInput = {
    update: XOR<UsersUpdateWithoutContactsInput, UsersUncheckedUpdateWithoutContactsInput>
    create: XOR<UsersCreateWithoutContactsInput, UsersUncheckedCreateWithoutContactsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutContactsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutContactsInput, UsersUncheckedUpdateWithoutContactsInput>
  }

  export type UsersUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    senderMessages?: MessagesUpdateManyWithoutSenderNestedInput
    receiverMessages?: MessagesUpdateManyWithoutReceiverNestedInput
    Members?: GroupMembersUpdateManyWithoutUserNestedInput
    owner?: ContactsUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateWithoutContactsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    salt?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    senderMessages?: MessagesUncheckedUpdateManyWithoutSenderNestedInput
    receiverMessages?: MessagesUncheckedUpdateManyWithoutReceiverNestedInput
    Members?: GroupMembersUncheckedUpdateManyWithoutUserNestedInput
    owner?: ContactsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MessagesCreateManySenderInput = {
    id?: string
    message?: string | null
    imageURL?: string | null
    receiverId?: string | null
    time?: Date | string
    groupId?: string | null
  }

  export type MessagesCreateManyReceiverInput = {
    id?: string
    message?: string | null
    imageURL?: string | null
    senderId: string
    time?: Date | string
    groupId?: string | null
  }

  export type GroupMembersCreateManyUserInput = {
    id?: string
    groupId: string
  }

  export type ContactsCreateManyUserInput = {
    id?: string
    contactId: string
  }

  export type ContactsCreateManyContactInput = {
    id?: string
    userId: string
  }

  export type MessagesUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: UsersUpdateOneWithoutReceiverMessagesNestedInput
    group?: GroupUpdateOneWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessagesUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessagesUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UsersUpdateOneRequiredWithoutSenderMessagesNestedInput
    group?: GroupUpdateOneWithoutMessagesNestedInput
  }

  export type MessagesUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MessagesUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupMembersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneRequiredWithoutMembersNestedInput
  }

  export type GroupMembersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMembersUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    groupId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contact?: UsersUpdateOneRequiredWithoutContactsNestedInput
  }

  export type ContactsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    contactId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactsUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutOwnerNestedInput
  }

  export type ContactsUncheckedUpdateWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ContactsUncheckedUpdateManyWithoutContactInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MessagesCreateManyGroupInput = {
    id?: string
    message?: string | null
    imageURL?: string | null
    senderId: string
    receiverId?: string | null
    time?: Date | string
  }

  export type GroupMembersCreateManyGroupInput = {
    id?: string
    userId: string
  }

  export type MessagesUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UsersUpdateOneRequiredWithoutSenderMessagesNestedInput
    receiver?: UsersUpdateOneWithoutReceiverMessagesNestedInput
  }

  export type MessagesUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessagesUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: NullableStringFieldUpdateOperationsInput | string | null
    imageURL?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupMembersUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UsersUpdateOneRequiredWithoutMembersNestedInput
  }

  export type GroupMembersUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type GroupMembersUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}