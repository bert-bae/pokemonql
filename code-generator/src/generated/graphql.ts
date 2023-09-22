import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Void: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  create?: Maybe<Pokemon>;
  destroy?: Maybe<Scalars['Void']['output']>;
  update?: Maybe<Pokemon>;
};


export type MutationCreateArgs = {
  pokemon?: InputMaybe<PokemonCreateInput>;
};


export type MutationDestroyArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateArgs = {
  id: Scalars['Int']['input'];
  pokemon: PokemonUpdateInput;
};

export type Pokemon = {
  __typename?: 'Pokemon';
  base: PokemonBase;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: Array<Maybe<Types>>;
};

export type PokemonBase = {
  __typename?: 'PokemonBase';
  Attack: Scalars['Int']['output'];
  Defense: Scalars['Int']['output'];
  HP: Scalars['Int']['output'];
  SpAttack: Scalars['Int']['output'];
  SpDefense: Scalars['Int']['output'];
  Speed: Scalars['Int']['output'];
};

export type PokemonBaseInput = {
  Attack: Scalars['Int']['input'];
  Defense: Scalars['Int']['input'];
  HP: Scalars['Int']['input'];
  SpAttack: Scalars['Int']['input'];
  SpDefense: Scalars['Int']['input'];
  Speed: Scalars['Int']['input'];
};

export type PokemonCreateInput = {
  base: PokemonBaseInput;
  name: Scalars['String']['input'];
  type: Array<InputMaybe<Types>>;
};

export type PokemonUpdateInput = {
  base?: InputMaybe<PokemonBaseInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Array<InputMaybe<Types>>>;
};

export type Query = {
  __typename?: 'Query';
  getAll?: Maybe<Array<Maybe<Pokemon>>>;
  getOne?: Maybe<Pokemon>;
};


export type QueryGetAllArgs = {
  type?: InputMaybe<Types>;
};


export type QueryGetOneArgs = {
  id: Scalars['Int']['input'];
};

export enum Types {
  Bug = 'Bug',
  Dark = 'Dark',
  Dragon = 'Dragon',
  Electric = 'Electric',
  Fairy = 'Fairy',
  Fighting = 'Fighting',
  Fire = 'Fire',
  Flying = 'Flying',
  Ghost = 'Ghost',
  Grass = 'Grass',
  Ground = 'Ground',
  Ice = 'Ice',
  Normal = 'Normal',
  Poison = 'Poison',
  Psychic = 'Psychic',
  Rock = 'Rock',
  Steel = 'Steel',
  Water = 'Water'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Pokemon: ResolverTypeWrapper<Pokemon>;
  PokemonBase: ResolverTypeWrapper<PokemonBase>;
  PokemonBaseInput: PokemonBaseInput;
  PokemonCreateInput: PokemonCreateInput;
  PokemonUpdateInput: PokemonUpdateInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Types: Types;
  Void: ResolverTypeWrapper<Scalars['Void']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Pokemon: Pokemon;
  PokemonBase: PokemonBase;
  PokemonBaseInput: PokemonBaseInput;
  PokemonCreateInput: PokemonCreateInput;
  PokemonUpdateInput: PokemonUpdateInput;
  Query: {};
  String: Scalars['String']['output'];
  Void: Scalars['Void']['output'];
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  create?: Resolver<Maybe<ResolversTypes['Pokemon']>, ParentType, ContextType, Partial<MutationCreateArgs>>;
  destroy?: Resolver<Maybe<ResolversTypes['Void']>, ParentType, ContextType, RequireFields<MutationDestroyArgs, 'id'>>;
  update?: Resolver<Maybe<ResolversTypes['Pokemon']>, ParentType, ContextType, RequireFields<MutationUpdateArgs, 'id' | 'pokemon'>>;
};

export type PokemonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pokemon'] = ResolversParentTypes['Pokemon']> = {
  base?: Resolver<ResolversTypes['PokemonBase'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<Array<Maybe<ResolversTypes['Types']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PokemonBaseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PokemonBase'] = ResolversParentTypes['PokemonBase']> = {
  Attack?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Defense?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  HP?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  SpAttack?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  SpDefense?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  Speed?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAll?: Resolver<Maybe<Array<Maybe<ResolversTypes['Pokemon']>>>, ParentType, ContextType, Partial<QueryGetAllArgs>>;
  getOne?: Resolver<Maybe<ResolversTypes['Pokemon']>, ParentType, ContextType, RequireFields<QueryGetOneArgs, 'id'>>;
};

export interface VoidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Void'], any> {
  name: 'Void';
}

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>;
  Pokemon?: PokemonResolvers<ContextType>;
  PokemonBase?: PokemonBaseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Void?: GraphQLScalarType;
};

